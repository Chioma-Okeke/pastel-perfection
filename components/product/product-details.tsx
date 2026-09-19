"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { IProduct } from "@/types"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import ProductCard from "./product-card"
import AddToCartButton from "./add-to-cart-button"
import { cn } from "@/lib/utils"

const ProductDetails = ({ product, badge }: { product: IProduct; badge?: string }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const brand = product.category[0]?.title
    const activeImage = product.images?.length > 0 ? product.images[activeImageIndex] : null

    return (
        <Drawer swipeDirection="right">
            <DrawerTrigger render={<div />} nativeButton={false} className="text-left h-full">
                <ProductCard product={product} badge={badge} />
            </DrawerTrigger>
            <DrawerContent className="mx-auto w-full max-w-lg">
                <div className="relative flex-1 space-y-6 overflow-y-auto p-6">
                    <DrawerClose className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground">
                        <X className="size-4" />
                    </DrawerClose>

                    <div className="relative aspect-square w-full overflow-hidden rounded-md bg-accent/8">
                        {activeImage ? (
                            <Image
                                src={activeImage.asset?.url}
                                alt={activeImage.alt || product.name}
                                fill
                                sizes="512px"
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center">
                                <Image
                                    src='https://res.cloudinary.com/djrp3aaq9/image/upload/v1783890254/Logo_j3qivj.png'
                                    alt="Company Logo"
                                    fill
                                    sizes="512px"
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>

                    {product.images?.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto pb-1">
                            {product.images?.map((image, index) => (
                                <button
                                    key={image.asset._id}
                                    onClick={() => setActiveImageIndex(index)}
                                    className={cn(
                                        "relative size-16 shrink-0 overflow-hidden rounded-md border-2 bg-accent/8",
                                        index === activeImageIndex ? "border-primary" : "border-transparent"
                                    )}
                                >
                                    <Image
                                        src={image.asset.url}
                                        alt={image.alt || product.name}
                                        fill
                                        sizes="64px"
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}

                    <div>
                        {brand && <p className="text-accent text-xs font-semibold tracking-widest uppercase">{brand}</p>}
                        <DrawerTitle className="mt-1 font-heading text-2xl font-bold text-foreground">
                            {product.name}
                        </DrawerTitle>
                        <DrawerDescription className="mt-2 text-base text-muted-foreground">
                            {product.description}
                        </DrawerDescription>
                    </div>

                    <AddToCartButton product={product} buttonClassName="h-auto w-full rounded-full py-3" />
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default ProductDetails
