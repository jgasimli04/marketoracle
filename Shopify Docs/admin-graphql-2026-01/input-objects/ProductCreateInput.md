---
title: ProductCreateInput - GraphQL Admin
description: The input fields required to create a product.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput.md
---

# Product​Create​Input

input\_object

The input fields required to create a product.

## Fields

* category

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the [category](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) that's associated with the product.

* claim​Ownership

  [Product​Claim​Ownership​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductClaimOwnershipInput)

  The input field to enable an app to provide additional product features. For example, you can specify [`bundles: true`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductClaimOwnershipInput#field-bundles) in the `claimOwnership` field to let an app add a [product configuration extension](https://shopify.dev/docs/apps/build/product-merchandising/bundles/product-configuration-extension/add-merchant-config-ui).

* collections​To​Join

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of collection IDs to associate with the product.

* combined​Listing​Role

  [Combined​Listings​Role](https://shopify.dev/docs/api/admin-graphql/latest/enums/CombinedListingsRole)

  The role of the product in a [combined listing](https://shopify.dev/apps/build/product-merchandising/combined-listings).

* description​Html

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the product, with HTML tags. For example, the description might include bold `<strong></strong>` and italic `<i></i>` text.

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

  The [custom fields](https://shopify.dev/docs/apps/build/custom-data) to associate with the product for the purposes of adding and storing additional information.

* product​Options

  [\[Option​Create​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionCreateInput)

  A list of product options and option values. Maximum product options: three. There's no limit on the number of option values.

* product​Type

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The [product type](https://help.shopify.com/manual/products/details/product-type) that merchants define.

* requires​Selling​Plan

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the product can only be purchased with a [selling plan](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans). Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores. If you update a product to be subscription-only (`requiresSellingPlan:false`), then the product is unpublished from all channels except the online store.

* seo

  [SEOInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SEOInput)

  The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords) that are associated with a product.

* status

  [Product​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

  The [product status](https://help.shopify.com/manual/products/details/product-details-page#product-status), which controls visibility across all sales channels.

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

* vendor

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the product's vendor.

***

## Map

No referencing types
