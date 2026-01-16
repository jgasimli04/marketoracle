---
title: UrlRedirectBulkDeleteBySavedSearchUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `UrlRedirectBulkDeleteBySavedSearch`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySavedSearchUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySavedSearchUserError.md
---

# Url​Redirect​Bulk​Delete​By​Saved​Search​User​Error

object

An error that occurs during the execution of `UrlRedirectBulkDeleteBySavedSearch`.

## Fields

* code

  [Url​Redirect​Bulk​Delete​By​Saved​Search​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectBulkDeleteBySavedSearchUserErrorCode)

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

* [url​Redirect​Bulk​Delete​By​Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySavedSearch)

  mutation

  Asynchronously delete redirects in bulk.

  * saved​Search​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the URL redirect saved search for filtering.

  ***

***

## <\~> UrlRedirectBulkDeleteBySavedSearchUserError Mutations

### Mutated by

* <\~>[url​Redirect​Bulk​Delete​By​Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySavedSearch)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-UrlRedirectBulkDeleteBySavedSearchUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
