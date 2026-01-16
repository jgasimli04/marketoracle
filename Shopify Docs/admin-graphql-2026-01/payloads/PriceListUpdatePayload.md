---
title: PriceListUpdatePayload - GraphQL Admin
description: Return type for `priceListUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListUpdatePayload.md
---

# Price​List​Update​Payload

payload

Return type for `priceListUpdate` mutation.

## Fields

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The updated price list.

* user​Errors

  [\[Price​List​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [price​List​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListUpdate)

  mutation

  Updates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)'s configuration, including its name, currency, [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) association, and pricing adjustments.

  Changing the currency removes all fixed prices from the price list. The affected [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects revert to prices calculated from the price list's adjustment settings.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to update.

  * input

    [Price​List​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListUpdateInput)

    required

    The input data used to update the price list.

  ***

***

## Map

### Mutations with this payload

* [price​List​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/priceListUpdate)
