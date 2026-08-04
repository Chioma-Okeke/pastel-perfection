import { Circle } from "lucide-react"
import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"

const PRODUCT_RENDERS = ["Body lotion", "Shower gel"]

const OurLineHeroSection = () => {
    return (
        <>
            <section className="bg-primary text-primary-foreground">
                <PaddingContainer>
                    <MaxContainer className="py-24 lg:py-32 text-center">
                        <p className="flex items-center justify-center gap-2 text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                            <Circle size={8} fill="currentColor" stroke="none" />
                            <span>Launching Soon</span>
                        </p>
                        <h1 className="mt-6 font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mx-auto">
                            Pastel Perfection — Body Lotion &amp; Shower Gel
                        </h1>
                        <p className="mt-6 text-primary-foreground/70 text-base lg:text-lg max-w-xl mx-auto">
                            Silky, featherlight, gentle. Our first house line, crafted to sit beside the international brands we already distribute.
                        </p>
                    </MaxContainer>
                </PaddingContainer>
            </section>

            <section className="py-16 lg:py-24">
                <PaddingContainer>
                    <MaxContainer>
                        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                            {PRODUCT_RENDERS.map((label) => (
                                <div
                                    key={label}
                                    className="flex aspect-3/4 items-center justify-center bg-accent/8 px-6 text-center"
                                >
                                    <p className="font-heading italic text-lg text-accent/70">{label} — product render</p>
                                </div>
                            ))}
                        </div>
                    </MaxContainer>
                </PaddingContainer>
            </section>
        </>
    )
}

export default OurLineHeroSection
