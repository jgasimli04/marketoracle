---
title: ServerPixelDeletePayload - GraphQL Admin
description: Return type for `serverPixelDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ServerPixelDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ServerPixelDeletePayload.md
---

# Server​Pixel​Delete​Payload

payload

Return type for `serverPixelDelete` mutation.

## Fields

* deleted​Server​Pixel​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the server pixel that was deleted, if one was deleted.

* user​Errors

  [\[Errors​Server​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [server​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelDelete)

  mutation

  Deletes the Server Pixel associated with the current app & shop.

***

## Map

### Mutations with this payload

* [server​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/serverPixelDelete)
