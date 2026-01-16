---
title: PriceListFixedPricesAddPayload - GraphQL Admin
description: Return type for `priceListFixedPricesAdd` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListFixedPricesAddPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListFixedPricesAddPayload.md
---

# Price​List​Fixed​Prices​Add​Payload

payload

Return type for `priceListFixedPricesAdd` mutation.

## Fields

* prices

  [\[Price​List​Price!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)

  The list of fixed prices that were added to or updated in the price list.

* user​Errors

  [\[Price​List​Price​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [price​List​Fixed​Prices​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesAdd)

  mutation

  Creates or updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Use this mutation to set specific prices for [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects that override the price list's default percentage-based adjustments.

  When you add fixed prices, the mutation replaces any existing fixed prices for those variants on the price list.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to which the fixed prices will be added or updated.

  * prices

    [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

    required

    The list of fixed prices to add or update in the price list.

  ***

***

## Map

### Mutations with this payload

* [price​List​Fixed​Prices​Add](https://shopify.dev/docs/api/admin-graphql/latest/types/priceListFixedPricesAdd)
