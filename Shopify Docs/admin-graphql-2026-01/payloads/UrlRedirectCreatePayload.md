---
title: UrlRedirectCreatePayload - GraphQL Admin
description: Return type for `urlRedirectCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectCreatePayload.md
---

# Url​Redirect​Create​Payload

payload

Return type for `urlRedirectCreate` mutation.

## Fields

* url​Redirect

  [Url​Redirect](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  The created redirect.

* user​Errors

  [\[Url​Redirect​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [url​Redirect​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectCreate)

  mutation

  Creates a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

  * url​Redirect

    [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

    required

    ### Arguments

    The fields to use when creating the redirect.

  ***

***

## Map

### Mutations with this payload

* [url​Redirect​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/urlRedirectCreate)
