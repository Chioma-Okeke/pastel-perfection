"use client"

import React, { useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import Image from 'next/image';
import { heroImageData } from '@/lib/data';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useWindowWidth } from '@/hook/use-width';
import { useRouter } from 'next/navigation';

function HeroSection() {
    const swiperRef = useRef<SwiperClass | null>(null);
    const width = useWindowWidth();
    const [currentIndex, setCurrentIndex] = useState<number | undefined>(0);
    const navigation = useRouter()

    const handleSlideChange = (swiper: SwiperClass) => {
        setCurrentIndex(swiper.realIndex);
    };

    const sendToCatalog = () => {
        navigation.push('/product-catalog')
    }

    return (
        <section className="relative h-fit pb-24 lg:pb-12">
            {/* Background Swiper */}
            <div>
                <Swiper
                    spaceBetween={0}
                    speed={1000}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    effect="fade"
                    modules={[Autoplay, EffectFade, Mousewheel]}
                    loop
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className='absolute inset-0 z-0 w-full swiper-class bg-black/60 '
                >
                    {heroImageData.map(({ imgSrc, alt }, index) => (
                        <SwiperSlide key={index} className="relative w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 1.2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="relative z-0 w-full h-full after:content-[''] after:absolute after:inset-0 after:bg-linear-to-t after:from-black/60 after:to-transparent">
                                <Image
                                    priority
                                    alt={alt}
                                    src={imgSrc}
                                    fill
                                    quality={100}
                                    sizes="100vw"
                                    className="object-cover object-center"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Foreground content */}
            <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.175, 0.885, 0.32, 1.3],
                    type: "spring",
                    stiffness: 120,
                    damping: 12
                }}
                className="relative z-20 w-full lg:pb-12 md:pl-18 pt-29.25 md:pt-44 max-w-189 max-sm:mx-auto text-white">
                <div className="mt-11 md:mx-5 lg:ml-21.75 space-y-11 rounded-xl max-w-85.75 mx-auto md:max-w-167.5 md:w-full">
                    <div>
                        <h1 className="font-bold text-white text-[45px] md:text-[56px] lg:leading-19.5 mt-4 mb-2">
                            Stock the brands your customers already love.
                        </h1>
                        <p className="text-sm md:text-lg hidden md:block">
                            Authentic bulk supply of Medicube, Dr. Rashel and more - trusted by retailers and resellers across Nigeria.
                        </p>
                    </div>
                    {/* <CustomButton /> */}
                    <div className="flex gap-10 max-md:flex-col">
                        <Button className="h-auto py-4 px-7 rounded-full border-primary" onClick={sendToCatalog}>
                            View Catalog
                        </Button>
                        <Button className="h-auto py-4 px-7 rounded-full border-primary text-foreground" variant="outline">
                            Chat on WhatsApp
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile pagination dots */}
            {width < 1024 && (
                <div className="absolute bottom-4 right-3 z-20 flex items-center justify-center gap-2">
                    {heroImageData.map((_, index) => (
                        <Button
                            key={index}
                            onClick={() => swiperRef.current?.slideToLoop(index)}
                            variant={currentIndex === index ? "outline" : "default"}
                            className="size-2.5 rounded-full p-1"
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default HeroSection;