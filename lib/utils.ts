import { FilterOption } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const countBy = (values: string[]): FilterOption[] => {
    const counts = new Map<string, number>()
    values.forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1))
    return Array.from(counts.entries())
        .map(([label, count]) => ({ label, count }))
        .sort((a, b) => a.label.localeCompare(b.label))
}
