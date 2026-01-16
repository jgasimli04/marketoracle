---
title: BlogCreatePayload - GraphQL Admin
description: Return type for `blogCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/BlogCreatePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BlogCreatePayload.md
---

# Blog​Create​Payload

payload

Return type for `blogCreate` mutation.

## Fields

* blog

  [Blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

  The blog that was created.

* user​Errors

  [\[Blog​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [blog​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/blogCreate)
