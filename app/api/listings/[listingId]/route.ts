import { NextResponse } from "next/server";

import getCurrentUser from "@/actions/getCurrentUser";
import prismadb from "@/lib/prismadb";

interface Iparams {
  listingId?: string;
}

export async function DELETE(req: Request, { params }: { params: Iparams }) {
  try {
    const currentUser = await getCurrentUser();
  } catch (e) {}
}
