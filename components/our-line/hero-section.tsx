'use client'

import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { AnimatedSection } from "../shared/animated-section"
import { motion } from "framer-motion"

const OurLineHeroSection = () => {
    return (
        <section className="relative bg-primary text-primary-foreground">
            <div className="relative aspect-video w-full h-[60vh] lg:h-[75vh] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-transparent lg:aspect-21/9">
                <motion.video
                    autoPlay
                    muted
                    loop
                    playsInline
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="size-full object-cover object-center"
                >
                    <source src="/ad.mp4" type="video/mp4" />
                </motion.video>
            </div>
            <PaddingContainer>
                <MaxContainer className="absolute inset-0 flex items-center justify-center text-center">
                    <AnimatedSection className="px-5">
                        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mx-auto">
                            Gentle care, perfected.
                        </h1>
                    </AnimatedSection>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default OurLineHeroSection
