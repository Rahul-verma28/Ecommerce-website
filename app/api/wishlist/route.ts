import { getProductDetails } from "@/lib/actions/action";
import { connectToDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import User from "@/lib/models/users";

export const POST = async (req: NextRequest) => {
  try {
    const { productId, userId } = await req.json();

    if (!productId) {
      return new NextResponse("Product Id required", { status: 400 });
    }

    await connectToDB();
    const user = await User.findOne({ "_id": userId });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const isLiked = user.wishlist.includes(productId);
    if (isLiked) {
      user.wishlist = user.wishlist.filter((id: string) => id !== productId);
    } else {
      user.wishlist.push(productId);
    }

    await user.save();
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.log("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const GET = async () => {
  try {
    const session = await getServerSession();
    if (!session || !session.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    
    const email = session.user.email;
    await connectToDB();
    const user = await User.findOne({ email });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const products = await Promise.all(
      user.wishlist.map(async (productId: string) => {
        try {
          const product = await getProductDetails(productId);
          return product || null;
        } catch (error) {
          console.error(`Error fetching product ${productId}:`, error);
          return null;
        }
      })
    );

    const validProducts = products.filter(Boolean);
    return NextResponse.json(validProducts, { status: 200 });
  } catch (err) {
    console.error("[wishlist_GET]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};