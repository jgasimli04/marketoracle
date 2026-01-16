---
title: ArticleCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `ArticleCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleCreateUserError.md
---

# Article​Create​User​Error

object

An error that occurs during the execution of `ArticleCreate`.

## Fields

* code

  [Article​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleCreateUserErrorCode)

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

* [article​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate)

  mutation

  Creates an [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). Articles are content pieces that include a title, body text, and author information.

  You can publish the article immediately or schedule it with a specific publish date. You can customize the article's URL handle, apply custom templates for rendering, and add optional fields like [tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.tags), an [image](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.image), and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The mutation validates article content and ensures proper blog association. Error handling provides specific feedback for content requirements.

  * article

    [Article​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput)

    required

    ### Arguments

    The properties of the new article.

  * blog

    [Article​Blog​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleBlogInput)

    The properties of the new blog.

  ***

***

## <\~> ArticleCreateUserError Mutations

### Mutated by

* <\~>[article​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ArticleCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
