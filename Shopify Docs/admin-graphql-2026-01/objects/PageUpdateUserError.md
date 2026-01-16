---
title: PageUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `PageUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PageUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PageUpdateUserError.md
---

# Page​Update​User​Error

object

An error that occurs during the execution of `PageUpdate`.

## Fields

* code

  [Page​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PageUpdateUserErrorCode)

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

* [page​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate)

  mutation

  Updates an existing page's content and settings.

  For example, merchants can update their "Shipping Policy" page when rates change, or refresh their "About Us" page with new team information.

  Use the `pageUpdate` mutation to:

  * Update page content and titles
  * Modify publication status
  * Change page handles for URL structure
  * Adjust template settings

  The mutation supports partial updates, allowing specific changes while preserving other page properties.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the page to be updated.

  * page

    [Page​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageUpdateInput)

    required

    The properties of the page to be updated.

  ***

***

## <\~> PageUpdateUserError Mutations

### Mutated by

* <\~>[page​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PageUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
