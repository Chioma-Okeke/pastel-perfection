'use client'

import { motion } from "framer-motion"
import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { AnimatedSection } from "../shared/animated-section"
import Image from "next/image"

const IntroSection = () => {
    return (
        <section className="py-10 lg:py-24">
            <PaddingContainer>
                <MaxContainer>
                    <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16 items-start">
                        <AnimatedSection>
                            <h1 className="mt-6 font-heading font-bold text-4xl lg:text-5xl leading-tight max-w-2xl">
                                Making authentic beauty accessible to African retailers
                            </h1>
                            <div className="mt-6 space-y-4 max-w-xl text-lg text-muted-foreground">
                                <p>
                                    Pastel Perfection Beauty started as a simple promise to retailers: what you buy from us is real. We import and distribute trusted international skincare brands in bulk, so store owners across Nigeria can stock shelves with confidence.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="relative aspect-4/5 w-full overflow-hidden rounded-[32px] lg:aspect-auto lg:h-125">
                            <Image
                                src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1789790695/IMG_0193_eh67if.jpg"
                                alt="Product image"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover object-center"
                            />
                        </AnimatedSection>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default IntroSection
