"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

import { cn } from "@/lib/utils";

import { Separator } from "../ui/separator";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";
import useRentModal from "@/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleSigninClick = () => {
    registerModal.onOpen(); // Open the RegisterModal
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    loginModal.onOpen();
    setIsOpen(false);
  };

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    //open rentModal
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  const handleMyTrips = () => {
    router.push("/trips");
    setIsOpen(false);
  };

  const handleMyReservations = () => {
    router.push("/reservations");
    setIsOpen(false);
  };

  const handleMyFavourites = () => {
    router.push("/favorites");
    setIsOpen(false);
  };

  const handleMyProperties = () => {
    router.push("/properties");
    setIsOpen(false);
  };

  const handleAirbnbHomeClick = () => {
    onRent();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className={cn(
            "hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          )}
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-300 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className={cn("flex flex-col cursor-pointer")}>
            {currentUser ? (
              <>
                <MenuItem onClick={handleMyTrips} label="My trips" />
                <MenuItem onClick={handleMyFavourites} label="My favorites" />
                <MenuItem
                  onClick={handleMyReservations}
                  label="My reservattions"
                />
                <MenuItem onClick={handleMyProperties} label="My properties" />
                <MenuItem
                  onClick={handleAirbnbHomeClick}
                  label="Airbnb my home"
                />
                <Separator />
                <MenuItem onClick={() => signOut()} label="logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={handleSigninClick} label="Sign Up" />
                <MenuItem onClick={handleLoginClick} label="Log In" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
