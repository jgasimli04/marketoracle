---
title: UrlRedirectBulkDeleteBySearchUserError - GraphQL Admin
description: An error that occurs during the execution of `UrlRedirectBulkDeleteBySearch`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySearchUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySearchUserError.md
---

# Url​Redirect​Bulk​Delete​By​Search​User​Error

object

An error that occurs during the execution of `UrlRedirectBulkDeleteBySearch`.

## Fields

* code

  [Url​Redirect​Bulk​Delete​By​Search​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectBulkDeleteBySearchUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [url​Redirect​Bulk​Delete​By​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySearch)

  mutation

  Asynchronously delete redirects in bulk.

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Search query for filtering redirects on (both Redirect from and Redirect to fields).

  ***

***

## <\~> UrlRedirectBulkDeleteBySearchUserError Mutations

### Mutated by

* <\~>[url​Redirect​Bulk​Delete​By​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySearch)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-UrlRedirectBulkDeleteBySearchUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
