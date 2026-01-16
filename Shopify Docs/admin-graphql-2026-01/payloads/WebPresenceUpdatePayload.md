---
title: WebPresenceUpdatePayload - GraphQL Admin
description: Return type for `webPresenceUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebPresenceUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebPresenceUpdatePayload.md
---

# Web​Presence​Update​Payload

payload

Return type for `webPresenceUpdate` mutation.

## Fields

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* web​Presence

  [Market​Web​Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  The web presence object.

***

## Mutations with this payload

* [web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate)

  mutation

  Updates a web presence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to update.

  * input

    [Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceUpdateInput)

    required

    The web presence properties to update.

  ***

***

## Map

### Mutations with this payload

* [web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/webPresenceUpdate)
