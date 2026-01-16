---
title: MarketRegionsDeletePayload - GraphQL Admin
description: Return type for `marketRegionsDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketRegionsDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketRegionsDeletePayload.md
---

# Market​Regions​Delete​Payload

payload

Return type for `marketRegionsDelete` mutation.

## Fields

* deleted​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted market region.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [market​Regions​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionsDelete)

  mutation

  Deprecated

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of the market regions to delete.

  ***

***

## Map
