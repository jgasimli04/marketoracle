---
title: WebPresenceDeletePayload - GraphQL Admin
description: Return type for `webPresenceDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebPresenceDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebPresenceDeletePayload.md
---

# Web​Presence​Delete​Payload

payload

Return type for `webPresenceDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted web presence.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [web​Presence​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceDelete)

  mutation

  Deletes a web presence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to delete.

  ***

***

## Map

### Mutations with this payload

* [web​Presence​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/webPresenceDelete)
