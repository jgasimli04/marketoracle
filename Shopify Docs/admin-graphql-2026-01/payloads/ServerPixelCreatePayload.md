---
title: ServerPixelCreatePayload - GraphQL Admin
description: Return type for `serverPixelCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ServerPixelCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ServerPixelCreatePayload.md
---

# Server​Pixel​Create​Payload

payload

Return type for `serverPixelCreate` mutation.

## Fields

* server​Pixel

  [Server​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/ServerPixel)

  The new server pixel.

* user​Errors

  [\[Errors​Server​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [server​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelCreate)

  mutation

  Creates a new unconfigured server pixel. A single server pixel can exist for an app and shop combination. If you call this mutation when a server pixel already exists, then an error will return.

***

## Map

### Mutations with this payload

* [server​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/serverPixelCreate)
