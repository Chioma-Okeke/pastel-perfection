import { defineField, defineType } from 'sanity'
import { PackageIcon } from '@sanity/icons'

const PRODUCT_TYPE_OPTIONS = ['Pads', 'Face Cream', 'Serum', 'Body Lotion', 'Soap', 'Oil', 'Shower Gel', 'Body Scrubs']

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: PackageIcon,
  groups: [
    { name: 'details', title: 'Details', default: true },
    { name: 'media', title: 'Media' },
    { name: 'organization', title: 'Organization' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'details',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'details',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Kept short on this site — currently used for the size/variant line, e.g. "30ml".',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      description: 'Wholesale pricing isn\'t shown publicly on the site — this is for internal reference only.',
      type: 'number',
      group: 'details',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      group: 'details',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Brand / Collection',
      type: 'array',
      group: 'organization',
      of: [{ type: 'reference', to: [{ type: 'productCategory' }] }],
      validation: (rule) => rule.min(1).error('Assign at least one brand or collection.'),
    }),
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      group: 'organization',
      options: { list: PRODUCT_TYPE_OPTIONS },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ingredients',
      title: 'Key Ingredients',
      type: 'array',
      group: 'organization',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'skinConcern',
      title: 'Skin Concern',
      type: 'array',
      group: 'organization',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'organization',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      group: 'organization',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'organization',
      initialValue: false,
    }),
    defineField({
      name: 'newArrival',
      title: 'New Arrival',
      type: 'boolean',
      group: 'organization',
      initialValue: false,
    }),
    defineField({
      name: 'bestSelling',
      title: 'Best Selling',
      description: 'Products flagged here appear in the homepage Best Sellers section.',
      type: 'boolean',
      group: 'organization',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'productType',
      media: 'images.0',
    },
  },
})
