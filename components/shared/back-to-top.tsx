'use client'

import { useEffect, useState } from "react"
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        })
    })

    return (
        <>
            {
                showScrollTopButton && (
                    <Button
                        className="group fixed bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-secondary h-auto size-10 shadow-lg transition-all ease-in-out hover:scale-110 duration-300 z-50"
                        onClick={() => window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })}
                    >
                        <ChevronUp
                            size={50}
                            color="black"
                            className="group-hover:stroke-white"
                        />
                    </Button>
                )
            }
        </>
    )
}