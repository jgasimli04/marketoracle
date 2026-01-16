---
title: ThemeDuplicateUserError - GraphQL Admin
description: An error that occurs during the execution of `ThemeDuplicate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDuplicateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDuplicateUserError.md
---

# Theme​Duplicate​User​Error

object

An error that occurs during the execution of `ThemeDuplicate`.

## Fields

* code

  [Theme​Duplicate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeDuplicateUserErrorCode)

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

* [theme​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDuplicate)

  mutation

  Duplicates a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the theme to be duplicated.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Name of the new theme.

  ***

***

## <\~> ThemeDuplicateUserError Mutations

### Mutated by

* <\~>[theme​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDuplicate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ThemeDuplicateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
