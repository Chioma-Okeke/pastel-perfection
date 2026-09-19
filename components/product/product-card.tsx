'use client'

import Image from "next/image"
import AddToCartButton from "./add-to-cart-button"
import { IProduct } from "@/types"

const ProductCard = ({ product, badge }: { product: IProduct; badge?: string }) => {
    const image = product.images?.length > 0 ? product.images[0] : null
    const brand = product.category[0]?.title

    return (
        <div className="group flex flex-col gap-4 overflow-hidden h-full bg-card transition-colors hover:border-accent/40 cursor-pointer">
            <div className="relative flex aspect-square items-center justify-center bg-accent/8">
                {badge && (
                    <span className="absolute left-3 top-3 z-10 rounded-sm bg-destructive px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                        {badge}
                    </span>
                )}
                {image ? (
                    <Image src={image.asset?.url} alt={image.alt || product.name} fill sizes="220px" className="object-cover lg:group-hover:scale-105 transition-all duration-300" />
                ) : (
                    <Image src='https://res.cloudinary.com/djrp3aaq9/image/upload/v1783890254/Logo_j3qivj.png' alt="Company Logo" fill sizes="220px" className="object-cover lg:group-hover:scale-105 transition-all duration-300" />
                )}
            </div>
            <div className="flex flex-1 flex-col gap-3 justify-between">
                <div className="flex-1 flex flex-col">
                    {brand && <p className="text-accent text-xs font-semibold tracking-widest uppercase">{brand}</p>}
                    <h3 className="mt-1 font-semibold text-card-foreground leading-snug">{product.name}</h3>
                </div>
                <AddToCartButton product={product} variant="outline" className="mt-auto" buttonClassName="h-auto w-full py-2.5" />
            </div>
        </div>
    )
}

export default ProductCard
