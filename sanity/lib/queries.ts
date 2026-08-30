import { defineQuery } from 'next-sanity'

const PRODUCT_PROJECTION = `{
  _id,
  name,
  slug,
  price,
  originalPrice,
  description,
  "category": category[]->{ _id, title, slug },
  productType,
  ingredients,
  skinConcern,
  tags,
  "images": images[]{ alt, "asset": asset->{ _id, url } },
  inStock,
  featured,
  newArrival,
  bestSelling,
}`

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(name asc) ${PRODUCT_PROJECTION}
`)

export const BEST_SELLING_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && bestSelling == true] | order(name asc) ${PRODUCT_PROJECTION}
`)

export const PRODUCT_CATEGORIES_QUERY = defineQuery(`
  *[_type == "productCategory"] | order(title asc) {
    _id,
    title,
    slug,
  }
`)
