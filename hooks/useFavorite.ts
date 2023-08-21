import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

import { SafeUser } from "@/types";
import useLoginModal from "./useLoginModal";
import { toast } from "@/components/ui/use-toast";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;
        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
          toast({
            variant: "destructive",
            description: "Removed from favorites",
          });
        } else {
          request = () => axios.post(`api/favorites/${listingId}`);
          toast({
            variant: "destructive",
            description: "Added to favorites",
          });
        }
        await request();
        router.refresh();
      } catch (e) {
        toast({
          variant: "destructive",
          description: "Something went wrong.",
        });
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );
  return { hasFavorited, toggleFavorite };
};

export default useFavorite;
