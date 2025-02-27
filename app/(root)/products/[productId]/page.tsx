import Gallery from "@/components/Gallery"
import ProductCard from "@/components/ProductCard"
import ProductInfo from "@/components/ProductInfo"
import { getProductDetails, getRelatedProducts } from "@/lib/actions/action"

const ProductDetails = async ({ params }: { params: { productId: string }}) => {
  const { productId } = await params; // Ensure you destructure correctly.

  // Fetch data
  const productDetails = await getProductDetails(productId);
  const relatedProducts = await getRelatedProducts(productId);

  // const productDetails = await getProductDetails(params.productId)
  // const relatedProducts = await getRelatedProducts(params.productId)

  return (
    <>
    <div className="flex justify-center items-start gap-16 py-10 px-5">
      <Gallery productMedia={productDetails.media} />
      <ProductInfo productInfo={productDetails} />
    </div>

    <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
      <p className="text-heading3-bold">Related Products</p>
      <div className="flex flex-wrap gap-16 mx-auto mt-8">
        {relatedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </>
  )
}

export const dynamic = "force-dynamic";

export default ProductDetails