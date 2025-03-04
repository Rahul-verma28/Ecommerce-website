"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/lib/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();

  const authContext = useAuth();
  const user = authContext ? authContext.user : null;

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      if (!user) {
        console.log("User not found2");
        router.push("/login");
        return;
      } else {
        const res = await fetch("/api/wishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: product._id, userId: user.id }),
        });
        const updatedUser = await res.json();

        setIsLiked(updatedUser.wishlist.includes(product._id));
        if (typeof updateSignedInUser === "function") {
          updateSignedInUser(updatedUser);
        }
      }
    } catch (err) {
      console.log("[wishlist_POST]", err);
    }
  };

  return (
    <Link
      href={`/products/${product._id}`}
      className="max-w-[300px] flex flex-col gap-2 mx-auto group mt-5"
    >
      <Image
        src={product.media[0] || "/01.jpg"}
        alt="product"
        width={300}
        height={350}
        className=" aspect-square rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto h-60 md:h-70 lg:h-80 xl:h-100 border"
      />
      <div className="flex flex-col gap-1 px-2">
        <p className="text-sm font-medium text-gray-900 group:hover:text-2xl">{product.title}</p>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
          <button onClick={handleLike}>
            <Heart fill={`${isLiked ? "red" : "white"}`} />
          </button>
          {/* <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} /> */}
          {/* <Heart product={product} updateSignedInUser={updateSignedInUser}/> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
