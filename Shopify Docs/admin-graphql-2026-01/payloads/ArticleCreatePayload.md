---
title: ArticleCreatePayload - GraphQL Admin
description: Return type for `articleCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ArticleCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ArticleCreatePayload.md
---

# Article​Create​Payload

payload

Return type for `articleCreate` mutation.

## Fields

* article

  [Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

  The article that was created.

* user​Errors

  [\[Article​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [article​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/articleCreate)
