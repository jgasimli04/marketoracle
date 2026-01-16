---
title: CommentDeletePayload - GraphQL Admin
description: Return type for `commentDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CommentDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CommentDeletePayload.md
---

# Comment​Delete​Payload

payload

Return type for `commentDelete` mutation.

## Fields

* deleted​Comment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the comment that was deleted.

* user​Errors

  [\[Comment​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [comment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentDelete)

  mutation

  Permanently removes a comment from a blog article.

  For example, when a comment contains spam links or inappropriate language that violates store policies, merchants can delete it entirely.

  Use the `commentDelete` mutation to:

  * Remove spam or inappropriate comments permanently
  * Clean up irrelevant discussions
  * Maintain content standards on blog articles

  Deletion is permanent and can't be undone.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be deleted.

  ***

***

## Map

### Mutations with this payload

* [comment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/commentDelete)
