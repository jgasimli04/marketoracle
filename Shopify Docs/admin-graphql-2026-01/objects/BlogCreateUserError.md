---
title: BlogCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `BlogCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogCreateUserError.md
---

# Blog​Create​User​Error

object

An error that occurs during the execution of `BlogCreate`.

## Fields

* code

  [Blog​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BlogCreateUserErrorCode)

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

* [blog​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogCreate)

  mutation

  Creates a new blog within a shop, establishing a container for organizing articles.

  For example, a fitness equipment retailer launching a wellness blog would use this mutation to create the blog, enabling them to publish workout guides and nutrition tips.

  Use the `blogCreate` mutation to:

  * Launch new content marketing initiatives
  * Create separate blogs for different content themes
  * Establish spaces for article organization

  The mutation validates blog settings and establishes the structure for article publishing.

  * blog

    [Blog​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput)

    required

    ### Arguments

    The properties of the new blog.

  ***

***

## <\~> BlogCreateUserError Mutations

### Mutated by

* <\~>[blog​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-BlogCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
