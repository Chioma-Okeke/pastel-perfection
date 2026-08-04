'use client'

import PaddingContainer from "../shared/padding-container";
import MaxContainer from "../shared/max-container";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { upcomingLaunchesData } from "@/lib/data";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";
import { Autoplay, EffectCube, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import { Circle } from "lucide-react";
import { Button } from "../ui/button";

const LaunchingSoon = () => {
    const swiperRef = useRef<SwiperClass | null>(null)
    return (
        <section id="our-line" className="bg-primary text-primary-foreground">
            <PaddingContainer>
                <MaxContainer className="py-16 lg:py-28">
                    <div className="flex max-lg:flex-col items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-6 max-lg:text-center">
                            <p className="flex items-center gap-2 max-lg:justify-center text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                                <Circle size={8} fill="currentColor" stroke="none" />
                                <span>Launching Soon</span>
                            </p>
                            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-xl">
                                Introducing Pastel Perfection — body lotion & shower gel
                            </h1>
                            <p className="text-primary-foreground/70 text-base lg:text-lg max-w-md max-lg:mx-auto">
                                Silky, featherlight, gentle — our own house line is coming. Be first to stock it or be first to try it.
                            </p>
                            <div className="pt-2">
                                <Button className="h-auto py-4 px-7 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                                    Join the Waitlist
                                </Button>
                            </div>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className='relative aspect-450/450 max-w-112.5 w-full flex-1 mx-auto lg:mx-0 rounded-[12px]'
                            >
                                <Swiper
                                    spaceBetween={0}
                                    speed={1000}
                                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                                    effect="cube"
                                    modules={[Autoplay, EffectCube, Mousewheel]}
                                    loop
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    className='relative w-full aspect-450/450 max-w-112.5'
                                >
                                    {
                                        upcomingLaunchesData.map((launch, index) => {
                                            return (
                                                <SwiperSlide key={index} className="relative w-full">
                                                    <div className='w-full aspect-450/450 max-w-112.5 relative overflow-hidden rounded-[12px]'>
                                                        <Image src={launch.imgSrc} alt={launch.name} fill sizes='100vw' className='object-contain object-center' />
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default LaunchingSoon;
