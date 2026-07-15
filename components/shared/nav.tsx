'use client'

import Link from "next/link"
import { HEADER_URLS } from "@/constants"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Search01 } from "@/icons"
import CartModal from "../product/cart-modal"
import { useWindowWidth } from "@/hook/use-width"
import Image from "next/image"
import MobileSideBarNav from "./mobile-side-bar-nav"

const NavBar = () => {
    const width = useWindowWidth()
    const pathname = usePathname()

    return (
        <header className={cn('z-50 w-full py-4 px-2 lg:px-[100px] lg:py-6 lg:bg-black/33 text-white', {
            'absolute top-0 left-0': pathname !== "/product-catalog"
        })}>
            <div className="flex items-center justify-between max-md:px-4">
                {pathname === '/product-catalog' && width && width < 1024 && <CartModal />}
                <div className="flex items-center lg:gap-32 max-lg:flex-1">
                    <Link href="/">
                        <Image
                            src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1783890254/Logo_j3qivj.png"
                            alt="Logo"
                            className="rounded-full"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-8">
                            {HEADER_URLS.map((item) => {
                                return (
                                    <Link
                                        href={item.link}
                                        key={item.label}
                                        className={cn("pb-1.5 border-b-2 border-b-transparent font-semibold transition-colors hover:border-b-primary ease-in-out duration-300", {
                                            'border-b-primary': pathname === item.link
                                        })}
                                    >
                                        {item.label.toUpperCase()}
                                    </Link>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                {pathname === "/product-catalog" && width && width >= 1024 ? (
                    <CartModal />
                ) : (
                    <Link href="/product-catalog">
                        <Search01 className="hidden lg:block size-6 cursor-pointer" />
                    </Link>
                )
                }
                <div className="text-white">
                    <MobileSideBarNav />
                </div>
            </div>
        </header>
    )
}

export default NavBar
