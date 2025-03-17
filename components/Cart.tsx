import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Cart() {
  //   const [cart, setcart] = useState<ProductType[]>([]);
  const cart = useCart();
  const cartItems = cart.cartItems;
  const router = useRouter();

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));
  return (
    <Sheet>
      <Tooltip>
        <SheetTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-8 shrink-0 flex items-center p-2 w-auto"
            >
              <ShoppingBagIcon
                aria-hidden="true"
                className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
              />
              <span className=" text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {cartItems.length}
              </span>
            </Button>
          </TooltipTrigger>
        </SheetTrigger>
        <TooltipContent align="end">Cart</TooltipContent>
        <SheetContent
          side="right"
          className="flex w-full flex-col justify-between px-4 pt-12 md:w-3/4"
        >
          <SheetTitle className="absolute left-4 top-3 text-xl ">
            Shopping Cart
          </SheetTitle>
          {cartItems?.length === 0 && (
            <div className="flex flex-col gap-3">
              <p className="text-muted-foreground text-sm">
                No items in your cart.
              </p>
            </div>
          )}
          {cartItems?.length > 0 && (
            <div className="mt-8 overflow-y-scroll">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200 ">
                  {cartItems.map((product) => (
                    <li key={product.item._id} className="flex py-6">
                      <div className="size-24 shrink-0 overflow-hidden  rounded-md border border-gray-200">
                        <Image
                          width={96}
                          height={96}
                          alt={product.item.media[0]}
                          src={product.item.media[0]}
                          className="size-full object-cover"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900 ">
                            <h3 onClick={()=> router.push(`/products/${product.item._id}`)}
                              className="cursor-pointer">
                                {product.item.title}
                            </h3>
                            <p className="ml-4">{product.item.price}💲</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Qty {product.quantity}
                          </p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                              onClick={() => cart.removeItem(product.item._id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <SheetFooter>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>💲{totalRounded}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <Link
                  href="/cart"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Tooltip>
    </Sheet>
  );
}
