import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"

const STATS = [
    { value: "150+", label: "Retail Partners" },
    { value: "12", label: "States Served" },
    { value: "100%", label: "Authentic Products" },
]

const StatsSection = () => {
    return (
        <section className="pb-16 lg:pb-24">
            <PaddingContainer>
                <MaxContainer>
                    <div className="grid grid-cols-1 divide-y divide-border border-t border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="px-8 py-8 text-center">
                                <p className="font-heading font-bold text-4xl lg:text-5xl">{stat.value}</p>
                                <p className="mt-3 text-muted-foreground text-xs font-semibold tracking-widest uppercase">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default StatsSection
