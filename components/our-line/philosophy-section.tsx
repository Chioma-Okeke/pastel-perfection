import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { PHILOSOPHY_ITEMS, PRODUCT_RENDERS } from "@/lib/data"
import Image from "next/image"

const PhilosophySection = () => {
    return (
        <section className="pt-16 lg:pt-24">
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
            <section className="py-16 lg:py-24">
                <PaddingContainer>
                    <MaxContainer>
                        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                            {PRODUCT_RENDERS.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex aspect-3/4 items-center justify-center bg-accent/8 w-full px-6 text-center relative overflow-hidden"
                                >
                                    <Image src={item.imgUrl} alt={item.label} fill sizes='100vw' className='object-contain object-center' />
                                </div>
                            ))}
                        </div>
                    </MaxContainer>
                </PaddingContainer>
            </section>
        </section>
    )
}

export default PhilosophySection
