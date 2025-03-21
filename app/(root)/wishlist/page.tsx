// "use client";

// import { useEffect, useState } from "react";
// import Loader from "@/components/Loader";
// import ProductCard from "@/components/ProductCard";
// import { useAuth } from "@/lib/context/AuthContext";

// const Wishlist = () => {
//   const authContext = useAuth();
//   const user = authContext ? authContext.user : null;
//   const [isLoading, setIsLoading] = useState(true);
//   const [wishlistProducts, setWishlistProducts] = useState([]);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch wishlist from the API
//   const fetchWishlist = async () => {
//     if (!user) return;

//     try {
//       setIsLoading(true);
//       setError(null);

//       // Fetch wishlist data
//       const response = await fetch("/api/wishlist");
//       if (!response.ok) throw new Error("Failed to fetch wishlist data");

//       const data = await response.json();
//       setWishlistProducts(data);
//     } catch (err: any) {
//       console.error("Error fetching wishlist:", err.message);
//       setError("Unable to load wishlist. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchWishlist();
//   }, [user]);

//   // Render loader, error, or wishlist
//   if (isLoading) {
//     return <Loader />;
//   }

//   if (error) {
//     return (
//       <div className="px-10 py-5">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="px-10 py-5">
//       <h1 className="text-2xl font-semibold my-10">Your Wishlist</h1>
//       {wishlistProducts.length === 0 ? (
//         <p>No items in your wishlist.</p>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
//           {wishlistProducts.map((product: any) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export const dynamic = "force-dynamic";

// export default Wishlist;


"use client";

import { useEffect, useState, useCallback } from "react";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/lib/context/AuthContext";

interface ProductType {
  _id: string;
  title: string;
  description: string;
  media: [string];
  category: string;
  collections: [string];
  tags: [string];
  price: number;
  cost: number;
  sizes: [string];
  colors: [string];
  createdAt: string;
  updatedAt: string;
}

const Wishlist = () => {
  const authContext = useAuth();
  const user = authContext ? authContext.user : null;
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistProducts, setWishlistProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch wishlist from the API
  const fetchWishlist = useCallback(async () => {
    if (!user) return;

    try {
      setIsLoading(true);
      setError(null);

      // Fetch wishlist data
      const response = await fetch("/api/wishlist");
      if (!response.ok) throw new Error("Failed to fetch wishlist data");

      const data = await response.json();
      setWishlistProducts(data);
    } catch (err) {
      console.error("Error fetching wishlist:", (err as Error).message);
      setError("Unable to load wishlist. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  // Render loader, error, or wishlist
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="px-10 py-5">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-10 py-5">
      <h1 className="text-2xl font-semibold my-10">Your Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistProducts.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Wishlist;