"use client"

import { cn } from "@/lib/utils"
import CartModal from "../product/cart-modal"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const CartModalFloat = () => {
    const [showFloat, setShowFloat] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300 && pathname === "/product-catalog") {
                setShowFloat(true)
            } else {
                setShowFloat(false)
            }
        })
    })

    const pathname = usePathname()
    return (
        <div className={cn("hidden fixed bottom-5 right-5 z-50 size-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110", {
            "flex": showFloat
        })}>
            <CartModal iconColor="white"/>
        </div>
    )
}


export default CartModalFloat
