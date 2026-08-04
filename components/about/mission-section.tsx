import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"

const MissionSection = () => {
    return (
        <section className="bg-primary text-primary-foreground">
            <PaddingContainer>
                <MaxContainer className="py-16 lg:py-24 text-center">
                    <h2 className="font-heading font-bold text-3xl lg:text-4xl">Our Mission</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/70 text-lg">
                        To be the trusted source for authentic beauty in Africa — reliable supply for retailers today, and a soft, premium brand of our own tomorrow.
                    </p>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default MissionSection
