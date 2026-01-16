---
title: UrlRedirectUpdatePayload - GraphQL Admin
description: Return type for `urlRedirectUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectUpdatePayload.md
---

# Url​Redirect​Update​Payload

payload

Return type for `urlRedirectUpdate` mutation.

## Fields

* url​Redirect

  [Url​Redirect](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  Returns the updated URL redirect.

* user​Errors

  [\[Url​Redirect​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [url​Redirect​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectUpdate)

  mutation

  Updates a URL redirect.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the URL redirect to update.

  * url​Redirect

    [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

    required

    The input fields required to update the URL redirect.

  ***

***

## Map

### Mutations with this payload

* [url​Redirect​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/urlRedirectUpdate)
