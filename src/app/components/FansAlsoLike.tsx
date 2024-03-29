
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
const FansAlsoLike = () => {
  return (
    <div className="flex.col justify-center w-full">
      <div className='flex flex-row pt-12 w-full justify-between'>
        <p className='text-white font-medium text-base'>Fans also like</p>
        <Link href={'/'} className='font-medium text-base text-mytheme-highlight'>See all</Link>
      </div>

      <Carousel className=" object-cover">
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/assets/images/sam.png"
              className="w-full object-center"
              width={200}
              height={200}
              alt="Sam"
            />
            <div className="w-full h-8 bg-slate-700/30">
              <p className="text-mytheme-greyText font-medium text-sm text-center leading-none">Samuel Medas</p>
              <p className="text-mytheme-greyText font-medium text-xs text-center leading-none opacity-50">Gospel Singer</p>

            </div>

          </CarouselItem>
          <CarouselItem>

            <Image
              src="/assets/images/ruth1.jpeg"
              className="w-full object-center"
              width={200}
              height={200}
              alt="ruth"
            />
            <div className="w-full h-8 bg-slate-700/30">
              <p className="text-mytheme-greyText font-medium text-sm text-center leading-none">Ruth B</p>
              <p className="text-mytheme-greyText font-medium text-xs text-center leading-none opacity-50">RnB Singer</p>
            </div>

          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

export default FansAlsoLike
