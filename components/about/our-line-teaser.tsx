import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Circle } from "lucide-react"
import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { Button } from "../ui/button"

const OurLineTeaser = () => {
    return (
        <section className="relative overflow-hidden border-t border-primary-foreground/10 bg-primary text-primary-foreground">
            <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-accent/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-accent/15 blur-3xl" />

            <PaddingContainer>
                <MaxContainer className="relative py-16 lg:py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <div className="text-center lg:text-left">
                            <p className="flex items-center justify-center gap-2 lg:justify-start text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                                <Circle size={8} fill="currentColor" stroke="none" />
                                <span>Launching Soon</span>
                            </p>
                            <h2 className="mt-6 font-heading font-bold text-3xl lg:text-4xl leading-tight">
                                Gentle care, perfected.
                            </h2>
                            <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-primary-foreground/70 text-lg">
                                We&apos;re not just distributors — we&apos;re building our own body lotion and shower gel line, crafted with the same care we bring to every brand we carry.
                            </p>
                            <div className="mt-8">
                                <Button
                                    render={<Link href="/our-line" />}
                                    className="h-auto gap-2 rounded-full bg-primary-foreground px-7 py-4 text-primary hover:bg-primary-foreground/90"
                                >
                                    Explore Our Line
                                    <ArrowUpRight className="size-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="relative mx-auto h-64 w-full max-w-xs sm:h-72 lg:mx-0 lg:h-80">
                            <div className="absolute left-1/2 top-0 aspect-3/4 w-40 translate-x-[-85%] -rotate-6 overflow-hidden rounded-2xl ring-1 ring-primary-foreground/15 sm:w-44">
                                <Image
                                    src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1785616553/Vitamin_C_lotion_pd7w2o.jpg"
                                    alt="Vitamin C Lotion"
                                    fill
                                    sizes="176px"
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="absolute left-1/2 top-8 aspect-3/4 w-40 translate-x-[-15%] rotate-6 overflow-hidden rounded-2xl ring-1 ring-primary-foreground/15 sm:w-44">
                                <Image
                                    src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1785616553/Niacinamide_lotion_ub4wfb.jpg"
                                    alt="Niacinamide Lotion"
                                    fill
                                    sizes="176px"
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default OurLineTeaser
