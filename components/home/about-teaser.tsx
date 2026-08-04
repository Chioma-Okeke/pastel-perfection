import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { Button } from "../ui/button"

const AboutTeaser = () => {
    return (
        <section className="py-16 lg:py-24">
            <PaddingContainer>
                <MaxContainer>
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <div className="max-w-md space-y-6">
                            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                                Authentic beauty, curated for the shelves that matter
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Pastel Perfection connects retailers across Nigeria with genuine Medicube, Dr. Rashel, and more — sourced right, delivered fast.
                            </p>
                            <Button
                                render={<Link href="/about-us" />}
                                className="h-auto gap-2 rounded-full px-7 py-4"
                            >
                                Learn More
                                <ArrowUpRight className="size-4" />
                            </Button>
                        </div>

                        <div className="relative aspect-4/5 w-full overflow-hidden rounded-[32px] lg:aspect-auto lg:h-125">
                            <Image
                                src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1763093178/ladies-hero_ig7yxp.png"
                                alt="Woman applying skincare"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default AboutTeaser
