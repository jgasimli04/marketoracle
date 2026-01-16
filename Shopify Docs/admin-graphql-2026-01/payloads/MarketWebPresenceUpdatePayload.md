---
title: MarketWebPresenceUpdatePayload - GraphQL Admin
description: Return type for `marketWebPresenceUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketWebPresenceUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketWebPresenceUpdatePayload.md
---

# Market​Web​Presence​Update​Payload

payload

Return type for `marketWebPresenceUpdate` mutation.

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

* [market​Web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceUpdate)

  mutation

  Deprecated

  * web​Presence​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to update.

  * web​Presence

    [Market​Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceUpdateInput)

    required

    The web\_presence fields used to update the market's web presence.

  ***

***

## Map
