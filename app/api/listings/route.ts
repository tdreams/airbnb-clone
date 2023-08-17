import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(req: Request) {
  try {
    const requestBody = await req.json();
    const {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      location,
      price,
    } = requestBody;
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }
    /* Object.keys(requestBody).forEach((value: any) => {
      if (!requestBody[value]) {
        NextResponse.error();
      }
    }) */

    const listing = await prismadb.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue: location.value,
        price: parseInt(price, 10),
        userId: currentUser.id,
      },
    });

    return NextResponse.json(listing);
  } catch (e) {
    console.error("[ADD_LISTING]", e);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}
