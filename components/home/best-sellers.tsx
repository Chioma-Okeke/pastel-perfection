"use client"

import { useState } from "react"
import Image from "next/image"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { cn } from "@/lib/utils"

type BestSellerCardProps = {
    alt: string
    isDesktopHero?: boolean
    isExpanded: boolean
    onExpand: () => void
}

const BestSellerCard = ({ alt, isDesktopHero = false, isExpanded, onExpand }: BestSellerCardProps) => {
    return (
        <div
            onClick={onExpand}
            className={cn(
                "relative overflow-y-auto cursor-pointer",
                "max-lg:shrink-0 max-lg:flex-none max-md:w-44",
                isDesktopHero
                    ? "lg:col-span-2 max-h-125 h-full w-full flex-1"
                    : "lg:max-h-37.5 flex-1",
                isExpanded ? "md:max-lg:w-70" : "md:max-lg:w-44"
            )}
        >
            <div className="relative overflow-hidden aspect-4/5 w-full h-full after:content-[''] after:absolute after:inset-0 after:bg-linear-to-t after:from-black/60 after:to-transparent">
                <Image
                    src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1763093178/ladies-hero_ig7yxp.png"
                    alt={alt}
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div
                className={cn(
                    "absolute left-0 pl-8 space-y-2",
                    "max-md:bottom-4 max-md:top-auto max-md:pl-4 max-md:space-y-1",
                    isDesktopHero ? "lg:bottom-8" : "lg:top-7 lg:space-y-1",
                    isExpanded
                        ? "md:max-lg:bottom-8 md:max-lg:top-auto md:max-lg:space-y-2"
                        : "md:max-lg:top-7 md:max-lg:bottom-auto md:max-lg:space-y-1"
                )}
            >
                <p className="font-bold text-accent max-md:text-xs">MEDICUBE</p>
                <h3 className={cn(
                    "font-semibold text-primary-foreground max-md:text-lg",
                    "md:text-3xl",
                    isDesktopHero ? "lg:text-6xl" : "lg:text-3xl"
                )}>
                    Zero Pore Pad 2.0
                </h3>
                {[1, 2].map((_, index) => (
                    <span key={index} className="max-md:text-xs">
                        <span className="text-muted">Tag</span>
                        {index !== 1 && <span className="text-muted mx-2">·</span>}
                    </span>
                ))}
            </div>
        </div>
    )
}

const BestSellers = () => {
    const [expandedIndex, setExpandedIndex] = useState(0)

    return (
        <section className="py-10 lg:py-20">
            <PaddingContainer>
                <MaxContainer className="space-y-10">
                    <h2 className='text-4xl lg:text-5xl max-sm:text-center font-semibold'>Bestsellers</h2>
                    <div className="max-lg:flex max-lg:gap-4 max-lg:overflow-x-auto max-lg:pb-2 grid grid-cols-3 gap-6">
                        <BestSellerCard
                            alt="Best Seller 1"
                            isDesktopHero
                            isExpanded={expandedIndex === 0}
                            onExpand={() => setExpandedIndex(0)}
                        />
                        <div className="max-lg:contents lg:flex lg:flex-col lg:justify-between">
                            {[1, 2, 3].map((_, index) => {
                                const cardIndex = index + 1
                                return (
                                    <BestSellerCard
                                        key={cardIndex}
                                        alt={`Best Seller ${cardIndex + 1}`}
                                        isExpanded={expandedIndex === cardIndex}
                                        onExpand={() => setExpandedIndex(cardIndex)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default BestSellers
