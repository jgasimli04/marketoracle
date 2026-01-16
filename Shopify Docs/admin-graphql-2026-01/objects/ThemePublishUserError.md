---
title: ThemePublishUserError - GraphQL Admin
description: An error that occurs during the execution of `ThemePublish`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemePublishUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemePublishUserError.md
---

# Theme​Publish​User​Error

object

An error that occurs during the execution of `ThemePublish`.

## Fields

* code

  [Theme​Publish​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemePublishUserErrorCode)

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

* [theme​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themePublish)

  mutation

  Publishes a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the theme to be published.

  ***

***

## <\~> ThemePublishUserError Mutations

### Mutated by

* <\~>[theme​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themePublish)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ThemePublishUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
