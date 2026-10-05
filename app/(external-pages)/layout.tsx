import BackToTop from "@/components/shared/back-to-top"
import CartModalFloat from "@/components/shared/cart-modal-float"
import Footer from "@/components/shared/footer"
import NavBar from "@/components/shared/nav"
import React from "react"

const ExternalPagesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen">
            <NavBar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <CartModalFloat />
        </div>
    )
}

export default ExternalPagesLayout;