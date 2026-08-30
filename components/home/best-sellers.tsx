import Link from "next/link"
import { ArrowRight } from "lucide-react"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import ProductDetails from "../product/product-details"
import { sanityFetch } from "@/sanity/lib/live"
import { BEST_SELLING_PRODUCTS_QUERY } from "@/sanity/lib/queries"
import { IProduct } from "@/types"

const BestSellers = async () => {
    const { data: bestSellingProducts } = await sanityFetch({ query: BEST_SELLING_PRODUCTS_QUERY })

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
                        {(bestSellingProducts as IProduct[]).map((product) => (
                            <ProductDetails key={product._id} product={product} badge="Best Seller" />
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default BestSellers
