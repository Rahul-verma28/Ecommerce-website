import { getProductDetails } from "@/lib/actions/action";
import User from "@/lib/models/users";
import { connectToDB } from "@/lib/mongoDB";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = await auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    await connectToDB()

    const user = await User.findOne({ clerkId: userId })

    if (!user) {
      return new NextResponse("User not found", { status: 404 })
    }

    const { productId } = await req.json()

    if (!productId) {
      return new NextResponse("Product Id required", { status: 400 })
    }

    const isLiked = user.wishlist.includes(productId)

    if (isLiked) {
      user.wishlist = user.wishlist.filter((id: string) => id !== productId)
    } else {
      user.wishlist.push(productId)
    }

    await user.save()
    
    return NextResponse.json(user, { status: 200 })
  } catch (err) {
    console.log("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}


export const GET = async (req: NextRequest) => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectToDB();

    // Find the user
    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Fetch all products in the wishlist using `getProductDetails`
    const products = await Promise.all(
      user.wishlist.map(async (productId: string) => {
        try {
          const product = await getProductDetails(productId);
          return product || null;
        } catch (error) {
          console.error(`Error fetching product ${productId}:`, error);
          return null; // Skip broken products
        }
      })
    );

    // Filter out null products (in case of fetch errors or missing products)
    const validProducts = products.filter(Boolean);

    return NextResponse.json(validProducts, { status: 200 });
  } catch (err) {
    console.error("[wishlist_GET]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};