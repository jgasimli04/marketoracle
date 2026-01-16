---
title: MarketWebPresenceCreatePayload - GraphQL Admin
description: Return type for `marketWebPresenceCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketWebPresenceCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketWebPresenceCreatePayload.md
---

# Market​Web​Presence​Create​Payload

payload

Return type for `marketWebPresenceCreate` mutation.

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

* [market​Web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceCreate)

  mutation

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market for which to create a web presence.

  * web​Presence

    [Market​Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceCreateInput)

    required

    The details of the web presence to be created.

  ***

***

## Map
