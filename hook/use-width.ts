"use client";

import { useLayoutEffect, useState } from "react";

export const useWindowWidth = () => {
    const [width, setWidth] = useState<number>(() => {
        return typeof window !== "undefined" ? window.innerWidth : 0;
    });

    useLayoutEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
};
