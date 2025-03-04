"use client";

import { useAuth } from "@/lib/context/AuthContext";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface HeartFavoriteProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const HeartFavorite = ({ product, updateSignedInUser }: HeartFavoriteProps) => {
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(false);

  const authContext = useAuth();
  const user = authContext ? authContext.user : null;

  useEffect(() => {
    if (user?.wishlist && Array.isArray(user.wishlist)) {
      setIsLiked(user.wishlist.includes(product._id));
    }
  }, [user, product._id]);

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!user) {
      router.push("/login");
      return;
    }

    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product._id, userId: user.id }),
      });

      if (!res.ok) throw new Error("Failed to update wishlist");

      const updatedUser = await res.json();
      setIsLiked(updatedUser.wishlist.includes(product._id));

      if (updateSignedInUser) {
        updateSignedInUser(updatedUser);
      }
    } catch (err) {
      console.error("[wishlist_POST]", err);
    }
  };

  return (
    <button onClick={handleLike}>
      <Heart fill={isLiked ? "red" : "white"} />
    </button>
  );
};

export default HeartFavorite;