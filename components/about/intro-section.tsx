import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"

const IntroSection = () => {
    return (
        <section className="py-10 lg:py-24">
            <PaddingContainer>
                <MaxContainer>
                    <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16 items-start">
                        <div>
                            <h1 className="mt-6 font-heading font-bold text-4xl lg:text-5xl leading-tight max-w-2xl">
                                Making authentic beauty accessible to African retailers
                            </h1>
                            <div className="mt-6 space-y-4 max-w-xl text-lg text-muted-foreground">
                                <p>
                                    Pastel Perfection Beauty started as a simple promise to retailers: what you buy from us is real. We import and distribute trusted international skincare brands in bulk, so store owners across Nigeria can stock shelves with confidence.
                                </p>
                            </div>
                        </div>

                        <div className="flex aspect-square w-full items-center justify-center bg-accent/8 px-6 text-center">
                            <p className="font-heading italic text-lg text-accent/70">Founder photo</p>
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default IntroSection
