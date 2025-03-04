import { getCollections } from "@/lib/actions/action";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col p-10">
      <p className="text-2xl font-semibold">Collections</p>
      <div className="p-6 md:p-10">
        {collections && (
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {collections.map((collection: CollectionType) => (
                <CarouselItem
                  key={collection._id}
                  className="mx-auto md:basis-1/2 lg:basis-1/3"
                >
                  <Link
                    href={`/collections/${collection._id}`}
                    key={collection._id}
                  >
                    <Image
                      key={collection._id}
                      src={collection.image}
                      alt={collection.title}
                      width={450}
                      height={300}
                      className="rounded-lg cursor-pointer mx-auto"
                    />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Collections;
