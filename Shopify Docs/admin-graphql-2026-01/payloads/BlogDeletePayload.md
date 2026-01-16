---
title: BlogDeletePayload - GraphQL Admin
description: Return type for `blogDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/BlogDeletePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BlogDeletePayload.md
---

# Blog​Delete​Payload

payload

Return type for `blogDelete` mutation.

## Fields

* deleted​Blog​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted blog.

* user​Errors

  [\[Blog​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [blog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/blogDelete)
