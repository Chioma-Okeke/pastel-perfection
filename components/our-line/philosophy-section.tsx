import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"

const PHILOSOPHY_ITEMS = [
    {
        title: "Silky",
        description: "A featherlight glide that never feels heavy or greasy.",
    },
    {
        title: "Featherlight",
        description: "Fast-absorbing formulas built for everyday, all-day wear.",
    },
    {
        title: "Gentle",
        description: "Soft on skin, honest in claims — no miracle promises, just care.",
    },
]

const PhilosophySection = () => {
    return (
        <section className="pb-16 lg:pb-24">
            <PaddingContainer>
                <MaxContainer className="max-w-4xl">
                    <h2 className="text-center font-heading font-bold text-4xl lg:text-5xl">The Philosophy</h2>
                    <div className="mt-10 grid grid-cols-1 divide-y divide-border border-t border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        {PHILOSOPHY_ITEMS.map((item) => (
                            <div key={item.title} className="px-8 py-8 text-center sm:py-4">
                                <h3 className="font-heading italic text-2xl text-accent">{item.title}</h3>
                                <p className="mt-3 text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default PhilosophySection
