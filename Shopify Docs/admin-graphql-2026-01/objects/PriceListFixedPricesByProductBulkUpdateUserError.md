---
title: PriceListFixedPricesByProductBulkUpdateUserError - GraphQL Admin
description: >-
  Error codes for failed price list fixed prices by product bulk update
  operations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListFixedPricesByProductBulkUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListFixedPricesByProductBulkUpdateUserError.md
---

# Price​List​Fixed​Prices​By​Product​Bulk​Update​User​Error

object

Requires `read_products` access scope. Also: The user must have permission to view catalogs.

Error codes for failed price list fixed prices by product bulk update operations.

## Fields

* code

  [Price​List​Fixed​Prices​By​Product​Bulk​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListFixedPricesByProductBulkUpdateUserErrorCode)

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

* [price​List​Fixed​Prices​By​Product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesByProductUpdate)

  mutation

  Sets or removes fixed prices for all variants of a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Simplifies pricing management when all variants of a product should have the same price on a price list, rather than setting individual variant prices.

  When you add a fixed price for a product, all its [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects receive the same price on the price list. When you remove a product's fixed prices, all variant prices revert to the price list's adjustment rules.

  * prices​To​Add

    [\[Price​List​Product​Price​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListProductPriceInput)

    ### Arguments

    A list of `PriceListProductPriceInput` that identifies which products to update the fixed prices for.

  * prices​To​Delete​By​Product​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    A list of product IDs that identifies which products to remove the fixed prices for.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The price list to update the prices for.

  ***

***

## <\~> PriceListFixedPricesByProductBulkUpdateUserError Mutations

### Mutated by

* <\~>[price​List​Fixed​Prices​By​Product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesByProductUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PriceListFixedPricesByProductBulkUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
