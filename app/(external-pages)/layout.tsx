import BackToTop from "@/components/shared/back-to-top"
import Footer from "@/components/shared/footer"
import NavBar from "@/components/shared/nav"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import React from "react"

const ExternalPagesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen">
            <NavBar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <WhatsAppFloat />
        </div>
    )
}

export default ExternalPagesLayout;