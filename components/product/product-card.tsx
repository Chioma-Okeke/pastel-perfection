'use client'

import Image from "next/image"
import { Image as ImageIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useCartStore } from "@/store/useCartStore"
import { IProduct } from "@/types"

const ProductCard = ({ product, badge }: { product: IProduct; badge?: string }) => {
    const addToCart = useCartStore((state) => state.addToCart)
    const image = product.images[0]
    const brand = product.category[0]?.title

    return (
        <div className="group flex flex-col overflow-hidden h-full bg-card transition-colors hover:border-accent/40 cursor-pointer">
            <div className="relative flex aspect-square items-center justify-center bg-accent/8">
                {badge && (
                    <span className="absolute left-3 top-3 z-10 rounded-sm bg-destructive px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                        {badge}
                    </span>
                )}
                {image ? (
                    <Image src={image.asset.url} alt={image.alt || product.name} fill sizes="220px" className="object-cover lg:group-hover:scale-105 transition-all duration-300" />
                ) : (
                    <ImageIcon className="size-8 text-accent/50" />
                )}
            </div>
            <div className="flex flex-1 flex-col gap-3 py-4">
                <div className="flex-1 flex flex-col justify-between">
                    {brand && <p className="text-accent text-xs font-semibold tracking-widest uppercase">{brand}</p>}
                    <h3 className="mt-1 font-semibold text-card-foreground leading-snug">{product.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                </div>
                <Button
                    variant="outline"
                    className="mt-auto h-auto w-full py-2.5"
                    onClick={(e) => {
                        e.stopPropagation()
                        addToCart(product)
                    }}
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
