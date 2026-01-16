---
title: ArticleDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `ArticleDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleDeleteUserError.md
---

# Article​Delete​User​Error

object

An error that occurs during the execution of `ArticleDelete`.

## Fields

* code

  [Article​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleDeleteUserErrorCode)

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

* [article​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleDelete)

  mutation

  Permanently deletes a blog article from a shop's blog. This mutation removes the article and all associated metadata.

  For example, when outdated product information or seasonal content needs removal, merchants can use this mutation to clean up their blog.

  Use the `articleDelete` mutation to:

  * Remove outdated or incorrect blog content
  * Clean up seasonal or time-sensitive articles
  * Maintain blog organization

  The deletion is permanent and returns the deleted article's ID for confirmation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the article to be deleted.

  ***

***

## <\~> ArticleDeleteUserError Mutations

### Mutated by

* <\~>[article​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ArticleDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
