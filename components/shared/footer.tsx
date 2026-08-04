import Link from "next/link"
import PaddingContainer from "./padding-container"
import MaxContainer from "./max-container"
import { BULK_ORDER_LINK, CONTACT_DATA } from "@/constants"
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/icons"

const EXPLORE_LINKS = [
    { label: "Brands & Products", link: "/product-catalog" },
    { label: "Our Line", link: "/#our-line" },
    { label: "Contact Us", link: "/contact-us" },
    { label: "About Us", link: "/about-us" },
]

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer>
            <div className="bg-primary text-primary-foreground">
                <PaddingContainer>
                    <MaxContainer className="py-16 lg:py-20">
                        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
                            <div>
                                <h3 className="font-heading text-2xl font-bold">Pastel Perfection Beauty</h3>
                                <p className="mt-3 max-w-xs text-primary-foreground/60">
                                    Authentic wholesale beauty distribution across Nigeria.
                                </p>
                            </div>

                            <div>
                                <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Explore</p>
                                <ul className="mt-4 space-y-3">
                                    {EXPLORE_LINKS.map((item) => (
                                        <li key={item.label}>
                                            <Link href={item.link} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Contact</p>
                                <ul className="mt-4 space-y-3">
                                    <li>
                                        <a
                                            href={BULK_ORDER_LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                                        >
                                            WhatsApp: {CONTACT_DATA.PHONE_NUMBER}
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="/contact-us" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                                            Contact Page
                                        </Link>
                                    </li>
                                    <li className="text-primary-foreground/60 flex items-center gap-4">
                                        <a href={CONTACT_DATA.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                                            <InstagramIcon />
                                        </a>
                                        <a href={CONTACT_DATA.TIKTOK} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                                            <TikTokIcon />
                                        </a>
                                        <a href={CONTACT_DATA.FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                                            <FacebookIcon />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-primary-foreground/10 pt-6 lg:mt-16">
                            <p className="text-xs text-primary-foreground/50">
                                © {year} Pastel Perfection Beauty. All third-party brand names and trademarks are property of their respective owners.
                            </p>
                        </div>
                    </MaxContainer>
                </PaddingContainer>
            </div>
        </footer>
    )
}

export default Footer
