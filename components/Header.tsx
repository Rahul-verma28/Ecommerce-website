// "use client";

// import { Fragment, useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
// } from "@headlessui/react";
// import {
//   Bars3Icon,
//   MagnifyingGlassIcon,
//   ShoppingBagIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import Banner from "./Banner";
// import { Cart } from "./Cart";

// const navigation = {
//   categories: [
//     {
//       id: "women",
//       name: "Women",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "Basic Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
//         },
//       ],
//       sections: [
//         {
//           id: "clothing",
//           name: "Clothing",
//           items: [
//             { name: "Tops", href: "#" },
//             { name: "Dresses", href: "#" },
//             { name: "Pants", href: "#" },
//             { name: "Denim", href: "#" },
//             { name: "Sweaters", href: "#" },
//             { name: "T-Shirts", href: "#" },
//             { name: "Jackets", href: "#" },
//             { name: "Activewear", href: "#" },
//             { name: "Browse All", href: "#" },
//           ],
//         },
//         {
//           id: "accessories",
//           name: "Accessories",
//           items: [
//             { name: "Watches", href: "#" },
//             { name: "Wallets", href: "#" },
//             { name: "Bags", href: "#" },
//             { name: "Sunglasses", href: "#" },
//             { name: "Hats", href: "#" },
//             { name: "Belts", href: "#" },
//           ],
//         },
//         {
//           id: "brands",
//           name: "Brands",
//           items: [
//             { name: "Full Nelson", href: "#" },
//             { name: "My Way", href: "#" },
//             { name: "Re-Arranged", href: "#" },
//             { name: "Counterfeit", href: "#" },
//             { name: "Significant Other", href: "#" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "men",
//       name: "Men",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Drawstring top with elastic loop closure and textured interior padding.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "clothing",
//           name: "Clothing",
//           items: [
//             { name: "Tops", href: "#" },
//             { name: "Pants", href: "#" },
//             { name: "Sweaters", href: "#" },
//             { name: "T-Shirts", href: "#" },
//             { name: "Jackets", href: "#" },
//             { name: "Activewear", href: "#" },
//             { name: "Browse All", href: "#" },
//           ],
//         },
//         {
//           id: "accessories",
//           name: "Accessories",
//           items: [
//             { name: "Watches", href: "#" },
//             { name: "Wallets", href: "#" },
//             { name: "Bags", href: "#" },
//             { name: "Sunglasses", href: "#" },
//             { name: "Hats", href: "#" },
//             { name: "Belts", href: "#" },
//           ],
//         },
//         {
//           id: "brands",
//           name: "Brands",
//           items: [
//             { name: "Re-Arranged", href: "#" },
//             { name: "Counterfeit", href: "#" },
//             { name: "Full Nelson", href: "#" },
//             { name: "My Way", href: "#" },
//           ],
//         },
//       ],
//     },
//   ],
//   pages: [
//     { name: "Company", href: "#" },
//     { name: "Stores", href: "#" },
//   ],
// };

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Banner />
//       <div className="sticky top-0 z-40">
//         {/* Mobile menu */}
//         <Dialog
//           open={open}
//           onClose={setOpen}
//           className="relative z-40 lg:hidden"
//         >
//           <DialogBackdrop
//             transition
//             className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
//           />

//           <div className="fixed inset-0 z-40 flex">
//             <DialogPanel
//               transition
//               className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
//             >
//               <div className="flex px-4 pt-5 pb-2">
//                 <button
//                   type="button"
//                   onClick={() => setOpen(false)}
//                   className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                 >
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Close menu</span>
//                   <XMarkIcon aria-hidden="true" className="size-6" />
//                 </button>
//               </div>

//               {/* Links */}
//               <TabGroup className="mt-2">
//                 <div className="border-b border-gray-200">
//                   <TabList className="-mb-px flex space-x-8 px-4">
//                     {navigation.categories.map((category) => (
//                       <Tab
//                         key={category.name}
//                         className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
//                       >
//                         {category.name}
//                       </Tab>
//                     ))}
//                   </TabList>
//                 </div>
//                 <TabPanels as={Fragment}>
//                   {navigation.categories.map((category) => (
//                     <TabPanel
//                       key={category.name}
//                       className="space-y-10 px-4 pt-10 pb-8"
//                     >
//                       <div className="grid grid-cols-2 gap-x-4">
//                         {category.featured.map((item) => (
//                           <div
//                             key={item.name}
//                             className="group relative text-sm"
//                           >
//                             <img
//                               alt={item.imageAlt}
//                               src={item.imageSrc}
//                               className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
//                             />
//                             <a
//                               href={item.href}
//                               className="mt-6 block font-medium text-gray-900"
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="absolute inset-0 z-10"
//                               />
//                               {item.name}
//                             </a>
//                             <p aria-hidden="true" className="mt-1">
//                               Shop now
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                       {category.sections.map((section) => (
//                         <div key={section.name}>
//                           <p
//                             id={`${category.id}-${section.id}-heading-mobile`}
//                             className="font-medium text-gray-900"
//                           >
//                             {section.name}
//                           </p>
//                           <ul
//                             role="list"
//                             aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                             className="mt-6 flex flex-col space-y-6"
//                           >
//                             {section.items.map((item) => (
//                               <li key={item.name} className="flow-root">
//                                 <a
//                                   href={item.href}
//                                   className="-m-2 block p-2 text-gray-500"
//                                 >
//                                   {item.name}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </TabPanel>
//                   ))}
//                 </TabPanels>
//               </TabGroup>

//               <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                 {navigation.pages.map((page) => (
//                   <div key={page.name} className="flow-root">
//                     <a
//                       href={page.href}
//                       className="-m-2 block p-2 font-medium text-gray-900"
//                     >
//                       {page.name}
//                     </a>
//                   </div>
//                 ))}
//               </div>

//               <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                 <div className="flow-root">
//                   <a
//                     href="#"
//                     className="-m-2 block p-2 font-medium text-gray-900"
//                   >
//                     Sign in
//                   </a>
//                 </div>
//                 <div className="flow-root">
//                   <a
//                     href="#"
//                     className="-m-2 block p-2 font-medium text-gray-900"
//                   >
//                     Create account
//                   </a>
//                 </div>
//               </div>

//               <div className="border-t border-gray-200 px-4 py-6">
//                 <a href="#" className="-m-2 flex items-center p-2">
//                   <img
//                     alt=""
//                     src="https://tailwindui.com/plus-assets/img/flags/flag-canada.svg"
//                     className="block h-auto w-5 shrink-0"
//                   />
//                   <span className="ml-3 block text-base font-medium text-gray-900">
//                     CAD
//                   </span>
//                   <span className="sr-only">, change currency</span>
//                 </a>
//               </div>
//             </DialogPanel>
//           </div>
//         </Dialog>

//         <header className="relative bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//           <nav aria-label="Top" className="mx-auto w-full px-4 sm:px-6 lg:px-8">
//             <div className="border-b border-gray-200">
//               <div className="flex h-16 items-center">
//                 <button
//                   type="button"
//                   onClick={() => setOpen(true)}
//                   className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                 >
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open menu</span>
//                   <Bars3Icon aria-hidden="true" className="size-6" />
//                 </button>

//                 {/* Logo */}
//                 <div className="ml-4 flex lg:ml-0">
//                   <a href="#">
//                     <span className="sr-only">Your Company</span>
//                     <img
//                       alt=""
//                       src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                       className="h-8 w-auto"
//                     />
//                   </a>
//                 </div>

//                 {/* Flyout menus */}
//                 <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
//                   <div className="flex h-full space-x-8">
//                     {navigation.categories.map((category) => (
//                       <Popover key={category.name} className="flex">
//                         <div className="relative flex">
//                           <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600">
//                             {category.name}
//                           </PopoverButton>
//                         </div>

//                         <PopoverPanel
//                           transition
//                           className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
//                         >
//                           {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
//                           <div
//                             aria-hidden="true"
//                             className="absolute inset-0 top-1/2 bg-white shadow-sm"
//                           />

//                           <div className="relative bg-white">
//                             <div className="mx-auto max-w-7xl px-8">
//                               <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
//                                 <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                   {category.featured.map((item) => (
//                                     <div
//                                       key={item.name}
//                                       className="group relative text-base sm:text-sm"
//                                     >
//                                       <img
//                                         alt={item.imageAlt}
//                                         src={item.imageSrc}
//                                         className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
//                                       />
//                                       <a
//                                         href={item.href}
//                                         className="mt-6 block font-medium text-gray-900"
//                                       >
//                                         <span
//                                           aria-hidden="true"
//                                           className="absolute inset-0 z-10"
//                                         />
//                                         {item.name}
//                                       </a>
//                                       <p aria-hidden="true" className="mt-1">
//                                         Shop now
//                                       </p>
//                                     </div>
//                                   ))}
//                                 </div>
//                                 <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
//                                   {category.sections.map((section) => (
//                                     <div key={section.name}>
//                                       <p
//                                         id={`${section.name}-heading`}
//                                         className="font-medium text-gray-900"
//                                       >
//                                         {section.name}
//                                       </p>
//                                       <ul
//                                         role="list"
//                                         aria-labelledby={`${section.name}-heading`}
//                                         className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                       >
//                                         {section.items.map((item) => (
//                                           <li key={item.name} className="flex">
//                                             <a
//                                               href={item.href}
//                                               className="hover:text-gray-800"
//                                             >
//                                               {item.name}
//                                             </a>
//                                           </li>
//                                         ))}
//                                       </ul>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </PopoverPanel>
//                       </Popover>
//                     ))}

//                     {navigation.pages.map((page) => (
//                       <a
//                         key={page.name}
//                         href={page.href}
//                         className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
//                       >
//                         {page.name}
//                       </a>
//                     ))}
//                   </div>
//                 </PopoverGroup>

//                 <div className="ml-auto flex items-center">
//                   <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                     <a
//                       href="#"
//                       className="text-sm font-medium text-gray-700 hover:text-gray-800"
//                     >
//                       Sign in
//                     </a>
//                     <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
//                     <a
//                       href="#"
//                       className="text-sm font-medium text-gray-700 hover:text-gray-800"
//                     >
//                       Create account
//                     </a>
//                   </div>

//                   <div className="hidden lg:ml-8 lg:flex">
//                     <a
//                       href="#"
//                       className="flex items-center text-gray-700 hover:text-gray-800"
//                     >
//                       <img
//                         alt=""
//                         src="https://tailwindui.com/plus-assets/img/flags/flag-canada.svg"
//                         className="block h-auto w-5 shrink-0"
//                       />
//                       <span className="ml-3 block text-sm font-medium">
//                         CAD
//                       </span>
//                       <span className="sr-only">, change currency</span>
//                     </a>
//                   </div>

//                   {/* Search */}
//                   <div className="flex lg:ml-6">
//                     <a
//                       href="#"
//                       className="p-2 text-gray-400 hover:text-gray-500"
//                     >
//                       <span className="sr-only">Search</span>
//                       <MagnifyingGlassIcon
//                         aria-hidden="true"
//                         className="size-6"
//                       />
//                     </a>
//                   </div>

//                   {/* Cart */}
//                   <div className="ml-4 flow-root lg:ml-6">
                    
//                   <Cart/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }


"use client";

import type React from "react";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Banner from "./Banner";
import { Cart } from "./Cart";
import Link from "next/link";
import { useAuth } from "@/lib/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import Image from "next/image";

const navigation = {
  categories: [
    {
      id: "shop",
      name: "Shop",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "/header-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Featured Collection",
          href: "#",
          imageSrc:
            "/header-02.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "T-Shirts", href: "/search/t-shirts" },
            { name: "Jeans", href: "/search/jeans" },
            { name: "Sweaters", href: "/search/sweaters" },
            { name: "Jackets", href: "/search/jackets" },
            { name: "Dresses", href: "/search/dresses" },
            { name: "Activewear", href: "/search/activewear" },
            { name: "Browse All", href: "/search/clothing" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "/search/watches" },
            { name: "Wallets", href: "/search/wallets" },
            { name: "Bags", href: "/search/bags" },
            { name: "Sunglasses", href: "/search/sunglasses" },
            { name: "Hats", href: "/search/hats" },
            { name: "Belts", href: "/search/belts" },
            { name: "Ties", href: "/search/ties" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "/search/full-nelson" },
            { name: "My Way", href: "/search/my-way" },
            { name: "Re-Arranged", href: "/search/re-arranged" },
            { name: "Counterfeit", href: "/search/counterfeit" },
            { name: "Significant Other", href: "/search/significant-other" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Wishlist", href: "/wishlist" },
    { name: "Cart", href: "/cart" },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  // const [isSearchActive, setIsSearchActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");

  const authContext = useAuth();
  const user = authContext ? authContext.user : null;

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search/${encodeURIComponent(
        searchQuery.trim()
      )}`;
      // setIsSearchActive(false)
      setSearchQuery("");
    }
  };

  return (
    <>
      <Banner />
      <div className="sticky top-0 z-40">
        {/* Mobile menu */}
        <Dialog
          open={open}
          onClose={setOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Links */}
              <TabGroup className="mt-2">
                <div className="border-b border-gray-200">
                  <TabList className="-mb-px flex space-x-8 px-4">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </TabList>
                </div>
                <TabPanels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <TabPanel
                      key={category.name}
                      className="space-y-10 px-4 pt-10 pb-8"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <Image
                              alt={item.imageAlt}
                              src={item.imageSrc || "/placeholder.svg"}
                              width={500}
                              height={500}
                              className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                            />
                            <Link
                              href={item.href}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 z-10"
                              />
                              {item.name}
                            </Link>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium text-gray-900"
                          >
                            {section.name}
                          </p>
                          <ul
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <Link
                                  href={item.href}
                                  className="-m-2 block p-2 text-gray-500"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      href={page.href}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <header className="relative bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav aria-label="Top" className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <span className="sr-only">Your Company</span>
                    <Image
                      alt=""
                      src="/logo.png"
                      width={64}
                      height={64}
                      className="h-20 w-auto"
                    />
                  </Link>
                </div>

                {/* Flyout menus */}
                <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        <div className="relative flex">
                          <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600">
                            {category.name}
                          </PopoverButton>
                        </div>

                        <PopoverPanel
                          transition
                          className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                          {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 top-1/2 bg-white shadow-sm"
                          />

                          <div className="relative bg-white">
                            <div className="mx-auto max-w-7xl px-8 ">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                  {category.featured.map((item) => (
                                    <div
                                      key={item.name}
                                      className="group relative text-base sm:text-sm"
                                    >
                                      <Image
                                        alt={item.imageAlt}
                                        src={
                                          item.imageSrc || "/placeholder.svg"
                                        }
                                        width={48}
                                        height={48}
                                        className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                      />
                                      <Link
                                        href={item.href}
                                        className="mt-6 block font-medium text-gray-900"
                                      >
                                        <span
                                          aria-hidden="true"
                                          className="absolute inset-0 z-10"
                                        />
                                        {item.name}
                                      </Link>
                                      <p aria-hidden="true" className="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  ))}
                                </div>
                                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                  {category.sections.map((section) => (
                                    <div key={section.name}>
                                      <p
                                        id={`${section.name}-heading`}
                                        className="font-medium text-gray-900"
                                      >
                                        {section.name}
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`${section.name}-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {section.items.map((item) => (
                                          <li key={item.name} className="flex">
                                            <Link
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverPanel>
                      </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </PopoverGroup>

                <div className="ml-auto flex items-center gap-5">
                  

                  {/* Search */}
                  <div className="flex">
                    <form
                      onSubmit={handleSearchSubmit}
                      className="flex items-center"
                    >
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="border-gray-300 rounded-md py-1 px-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                        autoFocus
                        // onBlur={() => {
                        // }}
                      />
                      {/* <button type="submit" className="sr-only">
                        Search
                      </button> */}
                    <button type="submit" className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="size-6"
                      />
                    </button>
                    </form>
                  </div>

                  {!user && (
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
                      <Link
                        href="/login"
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
                      >
                        Sign in
                      </Link>
                      <span
                        aria-hidden="true"
                        className="h-6 w-px bg-gray-200"
                      />
                      <Link
                        href="/signup"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50 px-3 py-2 rounded-md"
                      >
                        Create account
                      </Link>
                    </div>
                  )}

                  {user && (
                    <Link href="/profile">
                      {user.image ? (
                        <Avatar>
                          <AvatarImage src={user.image} />
                          <AvatarFallback>RV</AvatarFallback>
                        </Avatar>
                      ) : (
                        <User
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-700 p-1 rounded-full"
                        />
                      )}
                    </Link>
                  )}

                  {/* Cart */}
                  <div className=" flow-root">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}