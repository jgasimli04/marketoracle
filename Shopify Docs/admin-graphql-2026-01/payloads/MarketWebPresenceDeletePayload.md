---
title: MarketWebPresenceDeletePayload - GraphQL Admin
description: Return type for `marketWebPresenceDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketWebPresenceDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketWebPresenceDeletePayload.md
---

# Market​Web​Presence​Delete​Payload

payload

Return type for `marketWebPresenceDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted web presence.

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market for which the web presence was deleted.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [market​Web​Presence​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceDelete)

  mutation

  Deprecated

  * web​Presence​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to delete.

  ***

***

## Map
