"use client"

import { useState } from "react"
import Image from "next/image"
import { Image as ImageIcon, X } from "lucide-react"
import { IProduct } from "@/types"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import { Button } from "../ui/button"
import ProductCard from "./product-card"
import { useCartStore } from "@/store/useCartStore"
import { cn } from "@/lib/utils"

const ProductDetails = ({ product, badge }: { product: IProduct; badge?: string }) => {
    const addToCart = useCartStore((state) => state.addToCart)
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const brand = product.category[0]?.title
    const activeImage = product.images[activeImageIndex]

    return (
        <Drawer swipeDirection="right">
            <DrawerTrigger className="text-left">
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
                                src={activeImage.asset.url}
                                alt={activeImage.alt || product.name}
                                fill
                                sizes="512px"
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center">
                                <ImageIcon className="size-10 text-accent/50" />
                            </div>
                        )}
                    </div>

                    {product.images.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto pb-1">
                            {product.images.map((image, index) => (
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

                    <Button className="h-auto w-full rounded-full py-3" onClick={() => addToCart(product)}>
                        Add to Cart
                    </Button>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default ProductDetails
