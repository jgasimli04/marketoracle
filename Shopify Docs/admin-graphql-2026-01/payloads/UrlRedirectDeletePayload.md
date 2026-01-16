---
title: UrlRedirectDeletePayload - GraphQL Admin
description: Return type for `urlRedirectDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectDeletePayload.md
---

# Url​Redirect​Delete​Payload

payload

Return type for `urlRedirectDelete` mutation.

## Fields

* deleted​Url​Redirect​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted redirect.

* user​Errors

  [\[Url​Redirect​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [url​Redirect​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectDelete)

  mutation

  Deletes a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the redirect to delete.

  ***

***

## Map

### Mutations with this payload

* [url​Redirect​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/urlRedirectDelete)
