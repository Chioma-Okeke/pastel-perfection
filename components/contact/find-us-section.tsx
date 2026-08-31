import { MapPin } from "lucide-react"
import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { Button } from "../ui/button"
import { CONTACT_DATA, CONTACT_ITEMS, GOOGLE_MAPS_LINK } from "@/constants"

const FindUsSection = () => {
    return (
        <section className="py-16 lg:py-24">
            <PaddingContainer>
                <MaxContainer className="space-y-10 lg:space-y-14">
                    <div className="space-y-4 max-w-2xl">
                        <h1 className="font-heading font-bold text-5xl lg:text-6xl">Find Us</h1>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
                        <div className="border-t border-b border-border divide-y divide-border">
                            {CONTACT_ITEMS.map((item) => (
                                <div key={item.label} className="py-6">
                                    <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-2 block font-semibold text-lg text-foreground hover:text-accent transition-colors">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="mt-2 font-semibold text-lg text-foreground">{item.value}</p>
                                    )}
                                    {item.note && <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>}
                                </div>
                            ))}
                        </div>

                        <div className="relative w-full h-96 lg:h-auto overflow-hidden bg-accent/8 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:56px_56px]">
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
                                <MapPin className="size-10 text-accent" fill="currentColor" />
                                <p className="font-heading text-2xl text-foreground">{CONTACT_DATA.WAREHOUSE_CITY}</p>
                                <Button
                                    render={<a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" />}
                                    className="h-auto rounded-full px-6 py-3"
                                >
                                    Open in Google Maps
                                </Button>
                            </div>
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default FindUsSection
