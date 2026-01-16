---
title: WebPixelDeletePayload - GraphQL Admin
description: Return type for `webPixelDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebPixelDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebPixelDeletePayload.md
---

# Web​Pixel​Delete​Payload

payload

Return type for `webPixelDelete` mutation.

## Fields

* deleted​Web​Pixel​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the web pixel settings that was deleted.

* user​Errors

  [\[Errors​Web​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [web​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelDelete)

  mutation

  Deletes the web pixel shop settings.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web pixel to delete.

  ***

***

## Map

### Mutations with this payload

* [web​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/webPixelDelete)
