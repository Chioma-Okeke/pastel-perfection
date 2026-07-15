import BackToTop from "@/components/shared/back-to-top"
import NavBar from "@/components/shared/nav"
import React from "react"

const ExternalPagesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen">
            <NavBar />
            <main>{children}</main>
            <BackToTop />
        </div>
    )
}

export default ExternalPagesLayout;