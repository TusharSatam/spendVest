import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomeSection2() {
  return (
    <section className="w-full px-2 flex justify-centerm items-center relative">
        <div className="h-8 w-[60%] absolute bg-slate-800 z-[1] top-1 left-1/2 -translate-x-1/2 rounded-b-2xl flex justify-center items-center text-center">
            <p>Invest Daily</p>
        </div>
    <Carousel opts={{loop:true}} className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
    </section>
  )
}
