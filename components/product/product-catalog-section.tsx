'use client'

import { useMemo, useState } from "react"
import Image from "next/image"
import { Image as ImageIcon } from "lucide-react"
import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { productCategories, productsData } from "@/lib/data"
import { useCartStore } from "@/store/useCartStore"
import { IProduct } from "@/types"

const ProductCard = ({ product }: { product: IProduct }) => {
    const addToCart = useCartStore((state) => state.addToCart)
    const image = product.images[0]
    const brand = product.category[0]?.title

    return (
        <div className="flex flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-accent/40">
            <div className="relative flex aspect-square items-center justify-center bg-accent/8">
                {image ? (
                    <Image src={image.asset.url} alt={image.alt || product.name} fill sizes="220px" className="object-cover" />
                ) : (
                    <ImageIcon className="size-8 text-accent/50" />
                )}
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4">
                <div>
                    {brand && <p className="text-accent text-xs font-semibold tracking-widest uppercase">{brand}</p>}
                    <h3 className="mt-1 font-semibold text-card-foreground leading-snug">{product.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                </div>
                <Button
                    variant="outline"
                    className="mt-auto h-auto w-full rounded-full py-2.5"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

const ProductCatalogSection = () => {
    const [activeCategory, setActiveCategory] = useState<string>("All")

    const filters = useMemo(() => ["All", ...productCategories.map((category) => category.title)], [])

    const filteredProducts = useMemo(() => {
        if (activeCategory === "All") return productsData
        return productsData.filter((product) => product.category.some((category) => category.title === activeCategory))
    }, [activeCategory])

    return (
        <section className="py-16 lg:py-24">
            <PaddingContainer>
                <MaxContainer className="space-y-10">
                    <div className="space-y-4 border-b border-border pb-8">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-accent" />
                            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Full Catalog</span>
                        </div>
                        <h1 className="font-heading font-bold text-5xl lg:text-6xl">All Products</h1>
                        <p className="max-w-xl text-lg text-muted-foreground">
                            Every product we currently stock, in one place. Tap a card for details, then reach out on WhatsApp for bulk pricing.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveCategory(filter)}
                                className={cn(
                                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                                    activeCategory === filter
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : "border-border bg-background text-foreground hover:border-foreground/30"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-5">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default ProductCatalogSection
