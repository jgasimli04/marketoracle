---
title: CombinedListingUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `CombinedListingUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingUpdateUserError.md
---

# Combined​Listing​Update​User​Error

object

An error that occurs during the execution of `CombinedListingUpdate`.

## Fields

* code

  [Combined​Listing​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CombinedListingUpdateUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

## <\~> CombinedListingUpdateUserError Mutations

### Mutated by

* <\~>[combined​Listing​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedListingUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CombinedListingUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
