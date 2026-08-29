import Link from "next/link"
import { ArrowRight } from "lucide-react"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import ProductCard from "../product/product-card"
import { productsData } from "@/lib/data"

const BestSellers = () => {
    const bestSellingProducts = productsData.filter((product) => product.bestSelling)

    return (
        <section className="py-10 lg:py-20">
            <PaddingContainer>
                <MaxContainer className="space-y-10">
                    <div className="flex items-center justify-between">
                        <h2 className="font-heading italic text-3xl lg:text-4xl">Best Sellers</h2>
                        <Link
                            href="/product-catalog"
                            className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase underline underline-offset-4"
                        >
                            View All
                            <span className="flex size-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                                <ArrowRight className="size-3.5" />
                            </span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                        {bestSellingProducts.map((product) => (
                            <ProductCard key={product._id} product={product} badge="Best Seller" />
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default BestSellers
