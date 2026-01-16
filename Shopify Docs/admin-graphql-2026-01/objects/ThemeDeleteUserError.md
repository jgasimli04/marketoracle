---
title: ThemeDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `ThemeDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDeleteUserError.md
---

# Theme​Delete​User​Error

object

An error that occurs during the execution of `ThemeDelete`.

## Fields

* code

  [Theme​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeDeleteUserErrorCode)

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

* [theme​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDelete)

  mutation

  Deletes a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme to be deleted.

  ***

***

## <\~> ThemeDeleteUserError Mutations

### Mutated by

* <\~>[theme​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ThemeDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
