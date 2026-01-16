---
title: MarketRegionDeletePayload - GraphQL Admin
description: Return type for `marketRegionDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketRegionDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketRegionDeletePayload.md
---

# Market​Region​Delete​Payload

payload

Return type for `marketRegionDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted market region.

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The parent market object of the deleted region.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [market​Region​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionDelete)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market region to delete.

  ***

***

## Map
