---
title: UrlRedirectUserError - GraphQL Admin
description: Represents an error that happens during execution of a redirect mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError.md
---

# Url​Redirect​User​Error

object

Requires `read_online_store_navigation` access scope.

Represents an error that happens during execution of a redirect mutation.

## Fields

* code

  [Url​Redirect​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectErrorCode)

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

* [url​Redirect​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectCreate)

  mutation

  Creates a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

  * url​Redirect

    [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

    required

    ### Arguments

    The fields to use when creating the redirect.

  ***

* [url​Redirect​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectDelete)

  mutation

  Deletes a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the redirect to delete.

  ***

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

## <\~> UrlRedirectUserError Mutations

### Mutated by

* <\~>[url​Redirect​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectCreate)
* <\~>[url​Redirect​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectDelete)
* <\~>[url​Redirect​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-UrlRedirectUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
