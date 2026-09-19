'use client'

import { Image as ImageIcon } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"
import PaddingContainer from "../shared/padding-container"
import { brandsData } from "@/lib/data"
import Image from "next/image"
import MaxContainer from "../shared/max-container"
import { AnimatedSection } from "../shared/animated-section"

const BrandLogos = () => {
    return (
        <section className="border-y border-border bg-background py-4">
            <PaddingContainer>
                <MaxContainer>
                    <AnimatedSection className="mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            slidesPerView="auto"
                            spaceBetween={15}
                            loop
                            freeMode={{ enabled: true, momentum: false }}
                            speed={15000}
                            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            allowTouchMove={false}
                            className="w-full"
                        >
                            {[...brandsData, ...brandsData].map((brand, index) => (
                                <SwiperSlide key={index} className="w-auto!">
                                    <div className="flex h-auto w-36 items-center justify-center gap-2 opacity-40 grayscale transition-opacity hover:opacity-70" title={brand.name}>
                                        <div className="relative overflow-hidden w-full aspect-square">
                                            <Image src={brand.imgUrl} fill className="object-cover object-center" alt={brand.name} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </AnimatedSection>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default BrandLogos
