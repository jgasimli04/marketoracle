---
title: CombinedListingUpdatePayload - GraphQL Admin
description: Return type for `combinedListingUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CombinedListingUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CombinedListingUpdatePayload.md
---

# Combined​Listing​Update​Payload

payload

Return type for `combinedListingUpdate` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The parent product.

* user​Errors

  [\[Combined​Listing​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [combined​Listing​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedListingUpdate)

  mutation

  Add, remove and update `CombinedListing`s of a given Product.

  `CombinedListing`s are comprised of multiple products to create a single listing. There are two kinds of products used in a `CombinedListing`:

  1. Parent products
  2. Child products

  The parent product is created with a `productCreate` with a `CombinedListingRole` of `PARENT`. Once created, you can associate child products with the parent product using this mutation. Parent products represent the idea of a product (e.g. Shoe).

  Child products represent a particular option value (or combination of option values) of a parent product. For instance, with your Shoe parent product, you may have several child products representing specific colors of the shoe (e.g. Shoe - Blue). You could also have child products representing more than a single option (e.g. Shoe - Blue/Canvas, Shoe - Blue/Leather, etc...).

  The combined listing is the association of parent product to one or more child products.

  Learn more about [Combined Listings](https://shopify.dev/apps/selling-strategies/combined-listings).

  * parent​Product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the parent product.

  * title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The updated title for the combined listing.

  * products​Added

    [\[Child​Product​Relation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput)

    The child products to add and their assigned options and option values.

  * products​Edited

    [\[Child​Product​Relation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput)

    The child products to edit and their assigned options and option values.

  * products​Removed​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of products to be removed from the combined listing.

  * options​And​Values

    [\[Option​And​Value​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionAndValueInput)

    The ordered options and values to be used by the combined listing. Options and values will be reordered to match the order specified here.

  ***

***

## Map

### Mutations with this payload

* [combined​Listing​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/combinedListingUpdate)
