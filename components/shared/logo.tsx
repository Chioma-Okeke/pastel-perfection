import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/">
            <Image
                src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1783890254/Logo_j3qivj.png"
                alt="Logo"
                className="rounded-full"
                width={40}
                height={40}
            />
        </Link>
    )
}