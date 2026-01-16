---
title: ThemeUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `ThemeUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeUpdateUserError.md
---

# Theme​Update​User​Error

object

An error that occurs during the execution of `ThemeUpdate`.

## Fields

* code

  [Theme​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeUpdateUserErrorCode)

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

* [theme​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate)

  mutation

  Updates a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme to be updated.

  * input

    [Online​Store​Theme​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeInput)

    required

    The attributes of the theme to be updated.

  ***

***

## <\~> ThemeUpdateUserError Mutations

### Mutated by

* <\~>[theme​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ThemeUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
