---
title: UrlRedirectImportCreatePayload - GraphQL Admin
description: Return type for `urlRedirectImportCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectImportCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/UrlRedirectImportCreatePayload.md
---

# Url​Redirect​Import​Create​Payload

payload

Return type for `urlRedirectImportCreate` mutation.

## Fields

* url​Redirect​Import

  [Url​Redirect​Import](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImport)

  The created `URLRedirectImport` object.

* user​Errors

  [\[Url​Redirect​Import​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImportUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [url​Redirect​Import​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportCreate)

  mutation

  Creates a [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

  After creating the `UrlRedirectImport` object, the `UrlRedirectImport` request can be performed using the [`urlRedirectImportSubmit`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportSubmit) mutation.

  * url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    ### Arguments

    The staged upload URL of the CSV file. You can download [a sample URL redirect CSV file](https://help.shopify.com/csv/sample-redirect-template.csv).

  ***

***

## Map

### Mutations with this payload

* [url​Redirect​Import​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/urlRedirectImportCreate)
