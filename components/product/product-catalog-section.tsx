'use client'

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { SlidersHorizontal } from "lucide-react"
import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import ProductDetails from "./product-details"
import { Facet, FilterOption, ProductCatalogSectionProps, SortValue } from "@/types"
import { FilterSidebar } from "./filter-section"
import { countBy } from "@/lib/utils"
import { SORT_OPTIONS } from "@/constants"
import { MobileFilterSidebar } from "./mobile-filter-sidebar"


const ProductCatalogSection = ({ products, categories }: ProductCatalogSectionProps) => {
    const [activeBrand, setActiveBrand] = useState<string>("All")
    const [activeType, setActiveType] = useState<string>("All")
    const [activeIngredient, setActiveIngredient] = useState<string>("All")
    const [activeSkinConcern, setActiveSkinConcern] = useState<string>("All")
    const [sortBy, setSortBy] = useState<SortValue>("")
    const [filtersOpen, setFiltersOpen] = useState(false)

    const typeOptions = useMemo(() => countBy(products.map((product) => product.productType)), [products])

    const brandOptions = useMemo<FilterOption[]>(
        () =>
            categories.map((category) => ({
                label: category.title,
                count: products.filter((product) => product.category.some((c) => c.title === category.title)).length,
            })),
        [products, categories]
    )

    const ingredientOptions = useMemo(() => countBy(products.flatMap((product) => product.ingredients)), [products])

    const skinConcernOptions = useMemo(() => countBy(products.flatMap((product) => product.skinConcern)), [products])

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesBrand = activeBrand === "All" || product.category.some((category) => category.title === activeBrand)
            const matchesType = activeType === "All" || product.productType === activeType
            const matchesIngredient = activeIngredient === "All" || product.ingredients.includes(activeIngredient)
            const matchesSkinConcern = activeSkinConcern === "All" || product.skinConcern.includes(activeSkinConcern)
            return matchesBrand && matchesType && matchesIngredient && matchesSkinConcern
        })
    }, [products, activeBrand, activeType, activeIngredient, activeSkinConcern])

    const sortedProducts = useMemo(() => {
        return [...filteredProducts].sort((a, b) => (sortBy === "name-desc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)))
    }, [filteredProducts, sortBy])

    const activeFilterCount = [activeBrand, activeType, activeIngredient, activeSkinConcern].filter((value) => value !== "All").length

    const breadcrumbLabel =
        activeType !== "All"
            ? activeType
            : activeIngredient !== "All"
                ? activeIngredient
                : activeSkinConcern !== "All"
                    ? activeSkinConcern
                    : activeBrand !== "All"
                        ? activeBrand
                        : "All Products"

    const facets: Facet[] = [
        { key: "type", title: "Product Type", options: typeOptions, activeValue: activeType, onSelect: setActiveType, defaultExpanded: true },
        { key: "collection", title: "Collection", options: brandOptions, activeValue: activeBrand, onSelect: setActiveBrand, defaultExpanded: false },
        { key: "ingredients", title: "Ingredients", options: ingredientOptions, activeValue: activeIngredient, onSelect: setActiveIngredient, defaultExpanded: false },
        { key: "skin-concern", title: "Skin Concern", options: skinConcernOptions, activeValue: activeSkinConcern, onSelect: setActiveSkinConcern, defaultExpanded: false },
    ]

    const resetFilters = () => {
        setActiveBrand("All")
        setActiveType("All")
        setActiveIngredient("All")
        setActiveSkinConcern("All")
    }

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
        <section className="py-10 bg-white">
            <PaddingContainer>
                <MaxContainer className="space-y-8">
                    <h1 className="font-heading font-bold text-4xl">Products</h1>

                    <div className="flex max-md:flex-col md:items-center max-md:gap-5 justify-between border-b border-border pb-3 text-sm">
                        <nav className="text-muted-foreground">
                            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                            <span className="mx-2">/</span>
                            <span className="text-foreground">{breadcrumbLabel}</span>
                        </nav>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setFiltersOpen(true)}
                                className="w-full inline-flex items-center justify-center gap-2 border border-border bg-background px-4 py-2 text-xs font-semibold tracking-widest uppercase text-foreground lg:hidden"
                            >
                                <SlidersHorizontal className="size-4" />
                                Filters
                                {activeFilterCount > 0 && (
                                    <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                                        {activeFilterCount}
                                    </span>
                                )}
                            </button>

                            <div className="relative w-full text-center">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortValue)}
                                    className="w-full appearance-none border border-border bg-background py-2 lg:px-9 text-center text-xs font-semibold tracking-widest uppercase text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                                >
                                    <option value="" disabled hidden>Sort By</option>
                                    {SORT_OPTIONS.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-[240px_1fr] lg:items-start lg:gap-10">
                        <aside className="hidden lg:block">
                            <FilterSidebar facets={facets} />
                        </aside>

                        {sortedProducts.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-5">
                                {sortedProducts.map((product) => (
                                    <ProductDetails key={product._id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <p className="py-12 text-center text-muted-foreground">
                                No products match that combination yet. Try a different filter.
                            </p>
                        )}
                    </div>
                </MaxContainer>
            </PaddingContainer>
            
            <MobileFilterSidebar filtersOpen={filtersOpen} facets={facets} resetFilters={resetFilters} setFiltersOpen={setFiltersOpen}/>
        </section>
    )
}

export default ProductCatalogSection
