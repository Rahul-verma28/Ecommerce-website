import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/action";

import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <p className="text-3xl font-bold text-grey-2">{collectionDetails.title}</p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">{collectionDetails.description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
        {collectionDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";


// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "@/components/ProductCard";
// import { getCollectionDetails } from "@/lib/actions/action";
// import Image from "next/image";

// interface ProductType {
//   _id: string;
//   title: string;
//   description: string;
//   media: [string];
//   category: string;
//   collections: [string];
//   tags: [string];
//   price: number;
//   cost: number;
//   sizes: [string];
//   colors: [string];
//   createdAt: string;
//   updatedAt: string;
// }

// interface CollectionType {
//   image: string;
//   title: string;
//   description: string;
//   products: ProductType[];
// }

// interface CollectionDetailsProps {
//   params: { collectionId: string };
// }

// const CollectionDetails = ({ params }: CollectionDetailsProps) => {
//   const [collectionDetails, setCollectionDetails] = useState<CollectionType | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCollectionDetails = async () => {
//       try {
//         const data = await getCollectionDetails(params.collectionId);
//         setCollectionDetails(data);
//       } catch (err) {
//         setError("Failed to load collection details.");
//         console.error("Error fetching collection details:", (err as Error).message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCollectionDetails();
//   }, [params.collectionId]);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="px-10 py-5 flex flex-col items-center gap-8">
//       {collectionDetails && (
//         <>
//           <Image
//             src={collectionDetails.image}
//             width={1500}
//             height={1000}
//             alt="collection"
//             className="w-full h-[400px] object-cover rounded-xl"
//           />
//           <p className="text-3xl font-bold text-grey-2">{collectionDetails.title}</p>
//           <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
//             {collectionDetails.description}
//           </p>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
//             {collectionDetails.products.map((product: ProductType) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CollectionDetails;

// export const dynamic = "force-dynamic";


// import ProductCard from "@/components/ProductCard";
// import { getCollectionDetails } from "@/lib/actions/action";
// import Image from "next/image";
// import React from "react";

// interface CollectionDetailsProps {
//   params: { collectionId: string };
// }

// const CollectionDetails = async ({ params }: CollectionDetailsProps) => {
//   const collectionDetails = await getCollectionDetails(params.collectionId);

//   return (
//     <div className="px-10 py-5 flex flex-col items-center gap-8">
//       <Image
//         src={collectionDetails.image}
//         width={1500}
//         height={1000}
//         alt="collection"
//         className="w-full h-[400px] object-cover rounded-xl"
//       />
//       <p className="text-3xl font-bold text-grey-2">{collectionDetails.title}</p>
//       <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
//         {collectionDetails.description}
//       </p>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
//         {collectionDetails.products.map((product: ProductType) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CollectionDetails;

// export const dynamic = "force-dynamic";
