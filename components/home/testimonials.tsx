'use client'

import { useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import PaddingContainer from "../shared/padding-container";
import MaxContainer from "../shared/max-container";
import { testimonialsData } from "@/lib/data";

const Testimonials = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

    return (
        <section className="py-16 lg:py-24">
            <PaddingContainer>
                <MaxContainer className="space-y-12 lg:space-y-16">
                    <h2 className="font-heading font-bold text-4xl lg:text-5xl">What Retailers Say</h2>

                    <div className="max-w-3xl mx-auto text-center">
                        <Quote className="mx-auto size-10 text-accent/40" fill="currentColor" stroke="none" />

                        <Swiper
                            modules={[Autoplay, EffectFade, Navigation]}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop
                            autoHeight
                            navigation={{ prevEl, nextEl }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            onAutoplayTimeLeft={(_, __, percentage) => setProgress(1 - percentage)}
                            className="mt-6 w-full"
                        >
                            {testimonialsData.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <blockquote className="font-heading italic text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground">
                                        {testimonial.quote}
                                    </blockquote>
                                    <div className="mt-8">
                                        <p className="font-semibold text-lg text-foreground">{testimonial.name}</p>
                                        <p className="text-accent/80 text-sm mt-1">{testimonial.location}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="flex items-center justify-center gap-4 pt-10">
                            <button
                                ref={setPrevEl}
                                aria-label="Previous testimonial"
                                className="size-10 shrink-0 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors"
                            >
                                <ChevronLeft className="size-4" />
                            </button>

                            <div className="flex items-center gap-1.5">
                                {testimonialsData.map((_, index) => (
                                    <span key={index} className="relative h-1 w-10 rounded-full bg-muted overflow-hidden">
                                        <span
                                            className="absolute inset-y-0 left-0 rounded-full bg-accent"
                                            style={{
                                                width: index < activeIndex ? "100%" : index === activeIndex ? `${progress * 100}%` : "0%",
                                                transitionProperty: "width",
                                                transitionDuration: index === activeIndex ? "100ms" : "300ms",
                                                transitionTimingFunction: "linear",
                                            }}
                                        />
                                    </span>
                                ))}
                            </div>

                            <button
                                ref={setNextEl}
                                aria-label="Next testimonial"
                                className="size-10 shrink-0 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors"
                            >
                                <ChevronRight className="size-4" />
                            </button>
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    );
};

export default Testimonials;
