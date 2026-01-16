---
title: PriceListFixedPricesByProductUpdatePayload - GraphQL Admin
description: Return type for `priceListFixedPricesByProductUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListFixedPricesByProductUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListFixedPricesByProductUpdatePayload.md
---

# Price​List​Fixed​Prices​By​Product​Update​Payload

payload

Return type for `priceListFixedPricesByProductUpdate` mutation.

## Fields

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The price list for which the fixed prices were modified.

* prices​To​Add​Products

  [\[Product!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product for which the fixed prices were added.

* prices​To​Delete​Products

  [\[Product!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product for which the fixed prices were deleted.

* user​Errors

  [\[Price​List​Fixed​Prices​By​Product​Bulk​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListFixedPricesByProductBulkUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [price​List​Fixed​Prices​By​Product​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/priceListFixedPricesByProductUpdate)
