---
title: UrlRedirectBulkDeleteByIdsUserError - GraphQL Admin
description: An error that occurs during the execution of `UrlRedirectBulkDeleteByIds`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteByIdsUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteByIdsUserError.md
---

# Url​Redirect​Bulk​Delete​By​Ids​User​Error

object

An error that occurs during the execution of `UrlRedirectBulkDeleteByIds`.

## Fields

* code

  [Url​Redirect​Bulk​Delete​By​Ids​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectBulkDeleteByIdsUserErrorCode)

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

* [url​Redirect​Bulk​Delete​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteByIds)

  mutation

  Asynchronously delete [URLRedirect](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) objects in bulk by IDs. Learn more about [URLRedirect](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) objects.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of [`URLRedirect`](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) object IDs to delete.

  ***

***

## <\~> UrlRedirectBulkDeleteByIdsUserError Mutations

### Mutated by

* <\~>[url​Redirect​Bulk​Delete​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteByIds)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-UrlRedirectBulkDeleteByIdsUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
