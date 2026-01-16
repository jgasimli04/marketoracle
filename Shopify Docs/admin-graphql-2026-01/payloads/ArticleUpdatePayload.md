---
title: ArticleUpdatePayload - GraphQL Admin
description: Return type for `articleUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ArticleUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ArticleUpdatePayload.md
---

# Article​Update​Payload

payload

Return type for `articleUpdate` mutation.

## Fields

* article

  [Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

  The article that was updated.

* user​Errors

  [\[Article​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [article​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/articleUpdate)
