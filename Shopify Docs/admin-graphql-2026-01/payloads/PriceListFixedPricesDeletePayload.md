---
title: PriceListFixedPricesDeletePayload - GraphQL Admin
description: Return type for `priceListFixedPricesDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListFixedPricesDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListFixedPricesDeletePayload.md
---

# Price​List​Fixed​Prices​Delete​Payload

payload

Return type for `priceListFixedPricesDelete` mutation.

## Fields

* deleted​Fixed​Price​Variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of product variant IDs whose fixed prices were removed from the price list.

* user​Errors

  [\[Price​List​Price​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [price​List​Fixed​Prices​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesDelete)

  mutation

  Deletes specific fixed prices from a price list using a product variant ID. You can use the `priceListFixedPricesDelete` mutation to delete a set of fixed prices from a price list. After deleting the set of fixed prices from the price list, the price of each product variant reverts to the original price that was determined by the price list adjustment.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list from which the fixed prices will be removed.

  * variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs whose fixed prices will be removed from the price list.

  ***

***

## Map

### Mutations with this payload

* [price​List​Fixed​Prices​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/priceListFixedPricesDelete)
