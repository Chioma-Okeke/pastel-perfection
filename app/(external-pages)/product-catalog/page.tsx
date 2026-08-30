import ProductCatalogSection from "@/components/product/product-catalog-section"
import { sanityFetch } from "@/sanity/lib/live"
import { PRODUCTS_QUERY, PRODUCT_CATEGORIES_QUERY } from "@/sanity/lib/queries"
import { IProduct, IProductCategory } from "@/types"

export default async function ProductCatalogPage() {
    const [{ data: products }, { data: categories }] = await Promise.all([
        sanityFetch({ query: PRODUCTS_QUERY }),
        sanityFetch({ query: PRODUCT_CATEGORIES_QUERY }),
    ])

    return (
        <ProductCatalogSection products={products as IProduct[]} categories={categories as IProductCategory[]} />
    )
}
