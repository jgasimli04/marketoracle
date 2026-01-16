---
title: ArticleUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `ArticleUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleUpdateUserError.md
---

# Article​Update​User​Error

object

An error that occurs during the execution of `ArticleUpdate`.

## Fields

* code

  [Article​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleUpdateUserErrorCode)

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

* [article​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate)

  mutation

  Updates an existing [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). You can modify the article's content, metadata, publication status, and associated properties like author information and tags.

  If you update the [`handle`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate#arguments-article.fields.handle), then you can optionally create a redirect from the old URL to the new one by setting [`redirectNewHandle`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate#arguments-article.fields.redirectNewHandle) to `true`.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the article to be updated.

  * article

    [Article​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput)

    required

    The properties of the article to be updated.

  * blog

    [Article​Blog​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleBlogInput)

    The properties of the blog to be created.

  ***

***

## <\~> ArticleUpdateUserError Mutations

### Mutated by

* <\~>[article​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ArticleUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
