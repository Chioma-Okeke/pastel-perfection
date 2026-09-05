'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import { useCartStore } from "@/store/useCartStore"
import { cn } from "@/lib/utils"
import { IProduct } from "@/types"

type AddToCartButtonProps = {
    product: IProduct
    className?: string
    buttonClassName?: string
    variant?: "default" | "outline"
}

const AddToCartButton = ({ product, className, buttonClassName, variant = "default" }: AddToCartButtonProps) => {
    const addToCart = useCartStore((state) => state.addToCart)
    const [justAdded, setJustAdded] = useState(false)

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (justAdded) return
        addToCart(product)
        setJustAdded(true)
        setTimeout(() => setJustAdded(false), 1600)
    }

    return (
        <motion.div whileTap={{ scale: 0.96 }} className={className}>
            <Button
                variant={variant}
                onClick={handleClick}
                disabled={justAdded}
                className={cn(
                    "overflow-hidden transition-colors",
                    justAdded && "bg-primary border-primary text-primary-foreground disabled:opacity-100",
                    buttonClassName
                )}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {justAdded ? (
                        <motion.span
                            key="added"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                            className="flex items-center justify-center gap-2"
                        >
                            <Check className="size-4" />
                            Added to Cart
                        </motion.span>
                    ) : (
                        <motion.span
                            key="add"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center gap-2"
                        >
                            <ShoppingBag className="size-4" />
                            Add to Cart
                        </motion.span>
                    )}
                </AnimatePresence>
            </Button>
        </motion.div>
    )
}

export default AddToCartButton
