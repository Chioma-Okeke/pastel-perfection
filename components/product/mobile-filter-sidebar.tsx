
import { AnimatePresence, motion } from "framer-motion"
import { FilterSidebar } from "./filter-section"
import { Button } from "../ui/button"
import { X } from "lucide-react"
import { Facet } from "@/types"

type IMobileFilterSidebar = {
    filtersOpen: boolean
    setFiltersOpen: (open: boolean) => void
    facets: Facet[]
    resetFilters: () => void
}

export const MobileFilterSidebar = ({filtersOpen, setFiltersOpen, facets, resetFilters}: IMobileFilterSidebar) => {
    return (
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
    )
}