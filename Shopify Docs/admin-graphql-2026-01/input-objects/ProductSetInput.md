---
title: ProductSetInput - GraphQL Admin
description: >-
  The input fields required to create or update a product via ProductSet
  mutation.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput.md
---

# Product​Set​Input

input\_object

The input fields required to create or update a product via ProductSet mutation.

## Fields

* category

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the [category](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) that's associated with the product.

* claim​Ownership

  [Product​Claim​Ownership​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductClaimOwnershipInput)

  The input field to enable an app to provide additional product features. For example, you can specify [`bundles: true`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductClaimOwnershipInput#field-bundles) in the `claimOwnership` field to let an app add a [product configuration extension](https://shopify.dev/docs/apps/build/product-merchandising/bundles/product-configuration-extension/add-merchant-config-ui).

* collections

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of collections that this product will be a member of.

* combined​Listing​Role

  [Combined​Listings​Role](https://shopify.dev/docs/api/admin-graphql/latest/enums/CombinedListingsRole)

  The role of the product in a product grouping. It can only be set during creation.

* description​Html

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the product, with HTML tags. For example, the description might include bold `<strong></strong>` and italic `<i></i>` text.

* files

  [\[File​Set​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileSetInput)

  The files to associate with the product.

  Complexity cost: 1.9 per file.

* gift​Card

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the product is a gift card.

* gift​Card​Template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view a gift card in a store.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique, human-readable string that's used to identify the product in URLs. A handle can contain letters, hyphens (`-`), and numbers, but no spaces. If no handle is explicitly provided, then the title is used to construct the product's handle. For example, if a product is titled "Black Sunglasses" and no handle is provided, then the handle `black-sunglasses` is generated (unless that handle is already taken, in which case a suffix is added to make the handle unique).

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  The metafields to associate with this product.

  Complexity cost: 0.4 per metafield.

* product​Options

  [\[Option​Set​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionSetInput)

  List of custom product options and option values (maximum of 3 per product).

* product​Type

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The [product type](https://help.shopify.com/manual/products/details/product-type) that merchants define.

* redirect​New​Handle

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether a redirect is required after a new handle has been provided. If `true`, then the old handle is redirected to the new one automatically.

* requires​Selling​Plan

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the product can only be purchased with a selling plan (subscription). Products that are sold exclusively on subscription can only be created on online stores. If set to `true` on an already existing product, then the product will be marked unavailable on channels that don't support subscriptions.

* seo

  [SEOInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SEOInput)

  The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords) that are associated with a product.

* status

  [Product​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

  The status of the product.

* tags

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A list of searchable keywords that are associated with the product. For example, a merchant might apply the `sports` and `summer` tags to products that are associated with sportwear for summer.

  Updating `tags` overwrites any existing tags that were previously added to the product. To add new tags without overwriting existing tags, use the [`tagsAdd`](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view a product in a store.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name for the product that displays to customers. If no handle is explicitly provided, then the title is used to construct the product's handle. For example, if a product is titled "Black Sunglasses" and no handle is provided, then the handle `black-sunglasses` is generated.

* variants

  [\[Product​Variant​Set​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput)

  A list of variants associated with the product.

  Complexity cost: 0.2 per variant.

* vendor

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the product's vendor.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Deprecated

***

## Map

No referencing types
