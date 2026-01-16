---
title: PriceListCreatePayload - GraphQL Admin
description: Return type for `priceListCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PriceListCreatePayload.md
---

# Price​List​Create​Payload

payload

Return type for `priceListCreate` mutation.

## Fields

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The newly created price list.

* user​Errors

  [\[Price​List​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [price​List​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListCreate)

  mutation

  Creates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Price lists enable contextual pricing by defining fixed prices or percentage-based adjustments.

  The price list requires a unique name, currency for fixed prices, and parent adjustment settings that determine how the system calculates prices relative to base prices. To apply contextual pricing, link the price list to a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog). When that catalog's context is matched, customers receive the price list's prices.

  Learn more about [building catalogs with price lists](https://shopify.dev/docs/apps/build/markets/build-catalog#step-2-associate-a-price-list-with-the-catalog).

  * input

    [Price​List​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListCreateInput)

    required

    ### Arguments

    The properties of the new price list.

  ***

***

## Map

### Mutations with this payload

* [price​List​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/priceListCreate)
