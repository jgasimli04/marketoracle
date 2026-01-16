---
title: PageDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `PageDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PageDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PageDeleteUserError.md
---

# Page​Delete​User​Error

object

An error that occurs during the execution of `PageDelete`.

## Fields

* code

  [Page​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PageDeleteUserErrorCode)

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

* [page​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageDelete)

  mutation

  Permanently deletes a page from the online store.

  For example, merchants might delete seasonal landing pages after campaigns end, or remove outdated policy pages when terms change.

  Use the `pageDelete` mutation to:

  * Remove outdated or unnecessary pages
  * Clean up seasonal landing pages
  * Delete duplicate pages

  The deletion is permanent and returns the deleted page's ID for confirmation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the page to be deleted.

  ***

***

## <\~> PageDeleteUserError Mutations

### Mutated by

* <\~>[page​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PageDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
