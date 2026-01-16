---
title: UrlRedirectImportSubmitPayload - GraphQL Admin
description: Return type for `urlRedirectImportSubmit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectImportSubmitPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectImportSubmitPayload.md
---

# Url​Redirect​Import​Submit​Payload

payload

Return type for `urlRedirectImportSubmit` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job importing the redirects.

* user​Errors

  [\[Url​Redirect​Import​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImportUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [url​Redirect​Import​Submit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportSubmit)

  mutation

  Submits a `UrlRedirectImport` request to be processed.

  The `UrlRedirectImport` request is first created with the [`urlRedirectImportCreate`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportCreate) mutation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

  ***

***

## Map

### Mutations with this payload

* [url​Redirect​Import​Submit](https://shopify.dev/docs/api/admin-graphql/latest/types/urlRedirectImportSubmit)
