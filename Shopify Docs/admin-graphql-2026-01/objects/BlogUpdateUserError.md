---
title: BlogUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `BlogUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogUpdateUserError.md
---

# Blog​Update​User​Error

object

An error that occurs during the execution of `BlogUpdate`.

## Fields

* code

  [Blog​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BlogUpdateUserErrorCode)

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

* [blog​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogUpdate)

  mutation

  Updates an existing blog's configuration and settings. This mutation allows merchants to modify blog properties to keep their content strategy current.

  For example, a merchant might update their blog's title from "Company News" to "Sustainability Stories" when shifting their content focus, or modify the handle to improve URL structure.

  Use the `blogUpdate` mutation to:

  * Change blog titles for rebranding
  * Modify blog handles for better URLs
  * Adjust comment settings and moderation preferences

  The mutation returns the updated blog with any validation errors.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the blog to be updated.

  * blog

    [Blog​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput)

    required

    The properties of the blog to be updated.

  ***

***

## <\~> BlogUpdateUserError Mutations

### Mutated by

* <\~>[blog​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-BlogUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
