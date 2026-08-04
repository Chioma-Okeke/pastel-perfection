'use client'

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { Image as ImageIcon, SlidersHorizontal, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
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

type FilterGroupsProps = {
    brandFilters: string[]
    typeFilters: string[]
    activeBrand: string
    activeType: string
    setActiveBrand: (value: string) => void
    setActiveType: (value: string) => void
}

const FilterPill = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button
        onClick={onClick}
        className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-foreground/30"
        )}
    >
        {label}
    </button>
)

const FilterGroups = ({ brandFilters, typeFilters, activeBrand, activeType, setActiveBrand, setActiveType }: FilterGroupsProps) => (
    <div className="space-y-6">
        <div>
            <p className="mb-2 text-accent text-xs font-semibold tracking-widest uppercase">Brand</p>
            <div className="flex flex-wrap gap-2">
                {brandFilters.map((filter) => (
                    <FilterPill key={filter} label={filter} active={activeBrand === filter} onClick={() => setActiveBrand(filter)} />
                ))}
            </div>
        </div>

        <div>
            <p className="mb-2 text-accent text-xs font-semibold tracking-widest uppercase">Product Type</p>
            <div className="flex flex-wrap gap-2">
                {typeFilters.map((filter) => (
                    <FilterPill key={filter} label={filter} active={activeType === filter} onClick={() => setActiveType(filter)} />
                ))}
            </div>
        </div>
    </div>
)

const ProductCatalogSection = () => {
    const [activeBrand, setActiveBrand] = useState<string>("All")
    const [activeType, setActiveType] = useState<string>("All")
    const [filtersOpen, setFiltersOpen] = useState(false)

    const brandFilters = useMemo(() => ["All", ...productCategories.map((category) => category.title)], [])

    const typeFilters = useMemo(
        () => ["All", ...Array.from(new Set(productsData.map((product) => product.productType)))],
        []
    )

    const filteredProducts = useMemo(() => {
        return productsData.filter((product) => {
            const matchesBrand = activeBrand === "All" || product.category.some((category) => category.title === activeBrand)
            const matchesType = activeType === "All" || product.productType === activeType
            return matchesBrand && matchesType
        })
    }, [activeBrand, activeType])

    const activeFilterCount = [activeBrand, activeType].filter((value) => value !== "All").length

    useEffect(() => {
        if (filtersOpen) {
            const originalStyle = window.getComputedStyle(document.body).overflow
            document.body.style.overflow = "hidden"
            return () => {
                document.body.style.overflow = originalStyle
            }
        }
    }, [filtersOpen])

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setFiltersOpen(false)
        }
        if (filtersOpen) window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [filtersOpen])

    return (
        <section className="py-16 lg:py-24">
            <PaddingContainer>
                <MaxContainer className="space-y-10">
                    <div className="space-y-4 border-b border-border pb-8">
                        <h1 className="font-heading font-bold text-5xl lg:text-6xl">All Products</h1>
                        <p className="max-w-xl text-lg text-muted-foreground">
                            Every product we currently stock, in one place. Tap a card for details, then reach out on WhatsApp for bulk pricing.
                        </p>
                    </div>

                    <div className="hidden lg:block">
                        <FilterGroups
                            brandFilters={brandFilters}
                            typeFilters={typeFilters}
                            activeBrand={activeBrand}
                            activeType={activeType}
                            setActiveBrand={setActiveBrand}
                            setActiveType={setActiveType}
                        />
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setFiltersOpen(true)}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
                        >
                            <SlidersHorizontal className="size-4" />
                            Filters
                            {activeFilterCount > 0 && (
                                <span className="flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                                    {activeFilterCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-5">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <p className="py-12 text-center text-muted-foreground">
                            No products match that combination yet. Try a different brand or product type.
                        </p>
                    )}
                </MaxContainer>
            </PaddingContainer>

            <AnimatePresence>
                {filtersOpen && (
                    <>
                        <motion.div
                            key="filters-backdrop"
                            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setFiltersOpen(false)}
                        />
                        <motion.aside
                            key="filters-panel"
                            className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-background p-6 shadow-2xl lg:hidden"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.28 }}
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <p className="text-lg font-semibold text-foreground">Filters</p>
                                <button aria-label="Close filters" onClick={() => setFiltersOpen(false)}>
                                    <X className="size-6" />
                                </button>
                            </div>

                            <FilterGroups
                                brandFilters={brandFilters}
                                typeFilters={typeFilters}
                                activeBrand={activeBrand}
                                activeType={activeType}
                                setActiveBrand={setActiveBrand}
                                setActiveType={setActiveType}
                            />

                            <div className="mt-8 flex gap-3">
                                <Button
                                    variant="outline"
                                    className="h-auto flex-1 rounded-full py-3"
                                    onClick={() => {
                                        setActiveBrand("All")
                                        setActiveType("All")
                                    }}
                                >
                                    Reset
                                </Button>
                                <Button className="h-auto flex-1 rounded-full py-3" onClick={() => setFiltersOpen(false)}>
                                    Show Results
                                </Button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </section>
    )
}

export default ProductCatalogSection
