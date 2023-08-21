import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";
import prismadb from "@/lib/prismadb";

interface IParams {
  listingId?: string;
}

export async function POST(req: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Missing current user in query parameters", {
        status: 400,
      });
    }

    const { listingId } = params;
    if (!listingId || typeof listingId !== "string") {
      return new NextResponse("Invalid movieId format", {
        status: 400,
      });
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])];

    favoriteIds.push(listingId);
    const user = await prismadb.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds: favoriteIds,
      },
    });

    return NextResponse.json(user);
  } catch (e) {
    console.error("[ADD_FAVORITES]", e);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}

export async function DELETE(req: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Missing current user in query parameters", {
        status: 400,
      });
    }
    const { listingId } = params;
    if (!listingId || typeof listingId !== "string") {
      return new NextResponse("Invalid movieId format", {
        status: 400,
      });
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])];

    favoriteIds = favoriteIds.filter((id) => id !== listingId);
    const user = await prismadb.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds: favoriteIds,
      },
    });

    return NextResponse.json(user);
  } catch (e) {
    console.error("[DELETE_FAVORITES]", e);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}
