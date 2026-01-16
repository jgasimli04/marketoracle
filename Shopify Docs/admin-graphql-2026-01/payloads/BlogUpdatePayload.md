---
title: BlogUpdatePayload - GraphQL Admin
description: Return type for `blogUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/BlogUpdatePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BlogUpdatePayload.md
---

# Blog​Update​Payload

payload

Return type for `blogUpdate` mutation.

## Fields

* blog

  [Blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

  The blog that was updated.

* user​Errors

  [\[Blog​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [blog​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogUpdate)

  mutation

  Updates an existing blog's configuration and settings. This mutation allows merchants to modify blog properties to keep their content strategy current.

  For example, a merchant might update their blog's title from "Company News" to "Sustainability Stories" when shifting their content focus, or modify the handle to improve URL structure.

  Use the `blogUpdate` mutation to:

  * Change blog titles for rebranding
  * Modify blog handles for better URLs
  * Adjust comment settings and moderation preferences

  The mutation returns the updated blog with any validation errors.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the blog to be updated.

  * blog

    [Blog​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput)

    required

    The properties of the blog to be updated.

  ***

***

## Map

### Mutations with this payload

* [blog​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/blogUpdate)
