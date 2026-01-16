---
title: WebPresenceCreatePayload - GraphQL Admin
description: Return type for `webPresenceCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebPresenceCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebPresenceCreatePayload.md
---

# Web​Presence​Create​Payload

payload

Return type for `webPresenceCreate` mutation.

## Fields

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* web​Presence

  [Market​Web​Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  The created web presence object.

***

## Mutations with this payload

* [web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate)

  mutation

  Creates a web presence.

  * input

    [Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceCreateInput)

    required

    ### Arguments

    The details of the web presence to be created.

  ***

***

## Map

### Mutations with this payload

* [web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/webPresenceCreate)
