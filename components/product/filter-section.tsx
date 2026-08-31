import { cn } from "@/lib/utils"
import { Facet } from "@/types"
import { Check, Minus, Plus } from "lucide-react"
import { useState } from "react"

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

export default FilterSection

export const FilterSidebar = ({ facets }: { facets: Facet[] }) => (
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
