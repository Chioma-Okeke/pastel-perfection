import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"

const OurLineHeroSection = () => {
    return (
        <section className="relative bg-primary text-primary-foreground">
            <div className="relative aspect-video w-full h-[60vh] lg:h-[75vh] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-transparent lg:aspect-21/9">
                <video autoPlay muted loop playsInline className="size-full object-cover object-center">
                    <source src="/ad.mp4" type="video/mp4" />
                </video>
            </div>
            <PaddingContainer>
                <MaxContainer className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="px-5">
                        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mx-auto">
                            Gentle care, perfected.
                        </h1>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default OurLineHeroSection
