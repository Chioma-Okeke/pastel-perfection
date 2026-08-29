'use client'

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Check, ChevronDown, Minus, Plus, SlidersHorizontal, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { Button } from "../ui/button"
import ProductCard from "./product-card"
import { cn } from "@/lib/utils"
import { productCategories, productsData } from "@/lib/data"

type FilterOption = { label: string; count: number }

type Facet = {
    key: string
    title: string
    options: FilterOption[]
    activeValue: string
    onSelect: (value: string) => void
    defaultExpanded?: boolean
}

const FilterSection = ({ title, options, activeValue, onSelect, defaultExpanded = true }: Omit<Facet, "key">) => {
    const [expanded, setExpanded] = useState(defaultExpanded)

    return (
        <div className="border-b border-border">
            <button
                onClick={() => setExpanded((value) => !value)}
                className={cn(
                    "flex w-full items-center justify-between px-4 py-3 text-sm font-semibold tracking-widest uppercase transition-colors",
                    expanded ? "bg-primary text-primary-foreground" : "bg-transparent text-foreground"
                )}
            >
                {title}
                {expanded ? <Minus className="size-4" /> : <Plus className="size-4" />}
            </button>
            {expanded && (
                <ul className="space-y-1 py-3">
                    {options.map((option) => {
                        const isActive = activeValue === option.label
                        return (
                            <li key={option.label}>
                                <button
                                    onClick={() => onSelect(isActive ? "All" : option.label)}
                                    className="flex w-full items-center gap-2 px-4 py-1.5 text-left text-sm transition-colors hover:text-accent"
                                >
                                    <span
                                        className={cn(
                                            "flex size-4 shrink-0 items-center justify-center rounded-sm border",
                                            isActive ? "border-primary bg-primary text-primary-foreground" : "border-border"
                                        )}
                                    >
                                        {isActive && <Check className="size-3" />}
                                    </span>
                                    <span className={isActive ? "font-medium text-foreground" : "text-muted-foreground"}>
                                        {option.label} ({option.count})
                                    </span>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

const FilterSidebar = ({ facets }: { facets: Facet[] }) => (
    <div>
        <p className="mb-4 text-lg font-semibold text-foreground">Filter By:</p>
        {facets.map((facet) => (
            <FilterSection
                key={facet.key}
                title={facet.title}
                options={facet.options}
                activeValue={facet.activeValue}
                onSelect={facet.onSelect}
                defaultExpanded={facet.defaultExpanded}
            />
        ))}
    </div>
)

const SORT_OPTIONS = [
    { value: "name-asc", label: "Name (A–Z)" },
    { value: "name-desc", label: "Name (Z–A)" },
] as const

type SortValue = (typeof SORT_OPTIONS)[number]["value"]

const countBy = (values: string[]): FilterOption[] => {
    const counts = new Map<string, number>()
    values.forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1))
    return Array.from(counts.entries())
        .map(([label, count]) => ({ label, count }))
        .sort((a, b) => a.label.localeCompare(b.label))
}

const ProductCatalogSection = () => {
    const [activeBrand, setActiveBrand] = useState<string>("All")
    const [activeType, setActiveType] = useState<string>("All")
    const [activeIngredient, setActiveIngredient] = useState<string>("All")
    const [activeSkinConcern, setActiveSkinConcern] = useState<string>("All")
    const [sortBy, setSortBy] = useState<SortValue>("name-asc")
    const [filtersOpen, setFiltersOpen] = useState(false)

    const typeOptions = useMemo(() => countBy(productsData.map((product) => product.productType)), [])

    const brandOptions = useMemo<FilterOption[]>(
        () =>
            productCategories.map((category) => ({
                label: category.title,
                count: productsData.filter((product) => product.category.some((c) => c.title === category.title)).length,
            })),
        []
    )

    const ingredientOptions = useMemo(() => countBy(productsData.flatMap((product) => product.ingredients)), [])

    const skinConcernOptions = useMemo(() => countBy(productsData.flatMap((product) => product.skinConcern)), [])

    const filteredProducts = useMemo(() => {
        return productsData.filter((product) => {
            const matchesBrand = activeBrand === "All" || product.category.some((category) => category.title === activeBrand)
            const matchesType = activeType === "All" || product.productType === activeType
            const matchesIngredient = activeIngredient === "All" || product.ingredients.includes(activeIngredient)
            const matchesSkinConcern = activeSkinConcern === "All" || product.skinConcern.includes(activeSkinConcern)
            return matchesBrand && matchesType && matchesIngredient && matchesSkinConcern
        })
    }, [activeBrand, activeType, activeIngredient, activeSkinConcern])

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

                    <div className="flex items-center justify-between border-b border-border pb-6 text-sm">
                        <nav className="text-muted-foreground">
                            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                            <span className="mx-2">/</span>
                            <span className="text-foreground">{breadcrumbLabel}</span>
                        </nav>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setFiltersOpen(true)}
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold tracking-widest uppercase text-foreground lg:hidden"
                            >
                                <SlidersHorizontal className="size-4" />
                                Filters
                                {activeFilterCount > 0 && (
                                    <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                                        {activeFilterCount}
                                    </span>
                                )}
                            </button>

                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortValue)}
                                    className="appearance-none rounded-full border border-border bg-background py-2 pl-4 pr-9 text-xs font-semibold tracking-widest uppercase text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                                >
                                    {SORT_OPTIONS.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            Sort By: {option.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
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
                                    <ProductCard key={product._id} product={product} />
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

                            <FilterSidebar facets={facets} />

                            <div className="mt-8 flex gap-3">
                                <Button variant="outline" className="h-auto flex-1 rounded-full py-3" onClick={resetFilters}>
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
