---
title: MarketDeletePayload - GraphQL Admin
description: Return type for `marketDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketDeletePayload.md
---

# Market​Delete​Payload

payload

Return type for `marketDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted market.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [market​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketDelete)

  mutation

  Deletes a market definition.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to delete.

  ***

***

## Map

### Mutations with this payload

* [market​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/marketDelete)
