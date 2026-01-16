---
title: MarketRegionsCreatePayload - GraphQL Admin
description: Return type for `marketRegionsCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketRegionsCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketRegionsCreatePayload.md
---

# Market​Regions​Create​Payload

payload

Return type for `marketRegionsCreate` mutation.

## Fields

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market object.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [market​Regions​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionsCreate)

  mutation

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to add the regions to.

  * regions

    [\[Market​Region​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketRegionCreateInput)

    required

    The regions to be created.

  ***

***

## Map
