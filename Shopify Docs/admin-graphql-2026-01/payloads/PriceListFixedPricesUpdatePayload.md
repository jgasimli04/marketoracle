---
title: PriceListFixedPricesUpdatePayload - GraphQL Admin
description: Return type for `priceListFixedPricesUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListFixedPricesUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListFixedPricesUpdatePayload.md
---

# Price​List​Fixed​Prices​Update​Payload

payload

Return type for `priceListFixedPricesUpdate` mutation.

## Fields

* deleted​Fixed​Price​Variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of deleted variant IDs for prices.

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The price list for which the fixed prices were modified.

* prices​Added

  [\[Price​List​Price!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)

  The prices that were added to the price list.

* user​Errors

  [\[Price​List​Price​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [price​List​Fixed​Prices​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesUpdate)

  mutation

  Updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). This mutation lets you add new fixed prices for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and remove existing prices in a single operation.

  Use this mutation to modify variant pricing on a price list by providing prices to add and variant IDs to delete.

  Learn more about [setting fixed prices for product variants](https://shopify.dev/docs/apps/build/markets/build-catalog#step-3-set-fixed-prices-for-specific-product-variants).

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The price list that the prices will be updated against.

  * prices​To​Add

    [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

    required

    The fixed prices to add.

  * variant​Ids​To​Delete

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs to remove from the price list.

  ***

***

## Map

### Mutations with this payload

* [price​List​Fixed​Prices​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/priceListFixedPricesUpdate)
