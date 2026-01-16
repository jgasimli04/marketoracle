---
title: UrlRedirectImportUserError - GraphQL Admin
description: >-
  Represents an error that happens during execution of a redirect import
  mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImportUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImportUserError.md
---

# Url​Redirect​Import​User​Error

object

Requires `read_online_store_navigation` access scope.

Represents an error that happens during execution of a redirect import mutation.

## Fields

* code

  [Url​Redirect​Import​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectImportErrorCode)

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

## <\~> UrlRedirectImportUserError Mutations

### Mutated by

* <\~>[url​Redirect​Import​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportCreate)
* <\~>[url​Redirect​Import​Submit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportSubmit)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-UrlRedirectImportUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
