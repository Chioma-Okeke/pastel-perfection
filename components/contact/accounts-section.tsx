'use client'

import { motion } from "framer-motion"
import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { AnimatedSection } from "../shared/animated-section"
import { SOCIAL_LINKS } from "@/constants"

const AccountsSection = () => {
    return (
        <section className="py-16 lg:py-20">
            <PaddingContainer>
                <MaxContainer className="space-y-4">
                    <AnimatedSection>
                        <h2 className="font-heading font-bold text-4xl lg:text-5xl">Follow Us</h2>
                    </AnimatedSection>

                    <div className="grid gap-4 sm:grid-cols-3 pt-6">
                        {SOCIAL_LINKS.map(({ label, handle, href, Icon }) => (
                            <AnimatedSection key={label}>
                                <motion.a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                                    className="flex items-center gap-4 rounded-md border border-border bg-card p-5 transition-colors hover:border-accent/40"
                                >
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                                        <Icon />
                                    </span>
                                    <span>
                                        <span className="block font-semibold text-card-foreground">{label}</span>
                                        <span className="block text-accent text-sm">{handle}</span>
                                    </span>
                                </motion.a>
                            </AnimatedSection>
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default AccountsSection
