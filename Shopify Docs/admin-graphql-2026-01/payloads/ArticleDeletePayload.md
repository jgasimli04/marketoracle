---
title: ArticleDeletePayload - GraphQL Admin
description: Return type for `articleDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ArticleDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ArticleDeletePayload.md
---

# Article​Delete​Payload

payload

Return type for `articleDelete` mutation.

## Fields

* deleted​Article​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted article.

* user​Errors

  [\[Article​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [article​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/articleDelete)
