---
title: MarketUpdatePayload - GraphQL Admin
description: Return type for `marketUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketUpdatePayload.md
---

# Market​Update​Payload

payload

Return type for `marketUpdate` mutation.

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

* [market​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate)

  mutation

  Updates the properties of a market.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to update.

  * input

    [Market​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput)

    required

    The properties to update.

  ***

***

## Map

### Mutations with this payload

* [market​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/marketUpdate)
