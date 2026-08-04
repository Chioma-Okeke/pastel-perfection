'use client'

import { Image as ImageIcon } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"
import PaddingContainer from "../shared/padding-container"
import { brandsData } from "@/lib/data"

const BrandLogos = () => {
    return (
        <section className="border-y border-border bg-background py-8 lg:py-10">
            <PaddingContainer>
                <div className="mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        slidesPerView="auto"
                        spaceBetween={64}
                        loop
                        freeMode={{ enabled: true, momentum: false }}
                        speed={4000}
                        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        allowTouchMove={false}
                        className="w-full"
                    >
                        {[...brandsData, ...brandsData].map((brand, index) => (
                            <SwiperSlide key={index} className="w-auto!">
                                <div className="flex h-14 w-36 items-center justify-center gap-2 opacity-40 grayscale transition-opacity hover:opacity-70" title={brand.name}>
                                    <ImageIcon className="size-6 shrink-0 text-foreground/60" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </PaddingContainer>
        </section>
    )
}

export default BrandLogos
