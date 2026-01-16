---
title: BlogDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `BlogDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogDeleteUserError.md
---

# Blog​Delete​User​Error

object

An error that occurs during the execution of `BlogDelete`.

## Fields

* code

  [Blog​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BlogDeleteUserErrorCode)

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

* [blog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogDelete)

  mutation

  Permanently deletes a blog from a shop. This mutation removes the blog container and its organizational structure.

  For example, when consolidating multiple seasonal blogs into a single year-round content strategy, merchants can use this mutation to remove unused blogs.

  Use the `blogDelete` mutation to:

  * Remove unused or outdated blogs
  * Consolidate content organization
  * Clean up blog structure

  The deletion is permanent and returns the deleted blog's ID for confirmation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the blog to be deleted.

  ***

***

## <\~> BlogDeleteUserError Mutations

### Mutated by

* <\~>[blog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-BlogDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
