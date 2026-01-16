---
title: CommentApprovePayload - GraphQL Admin
description: Return type for `commentApprove` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CommentApprovePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CommentApprovePayload.md
---

# Comment​Approve​Payload

payload

Return type for `commentApprove` mutation.

## Fields

* comment

  [Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  The comment that was approved.

* user​Errors

  [\[Comment​Approve​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentApproveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [comment​Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentApprove)

  mutation

  Approves a pending comment, making it visible to store visitors on the associated blog article.

  For example, when a customer submits a question about a product in a blog post, merchants can approve the comment to make it publicly visible.

  Use the `commentApprove` mutation to:

  * Publish pending comments after review
  * Enable customer discussions on blog articles
  * Maintain quality control over comments

  Once approved, the comment becomes visible to all store visitors.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be approved.

  ***

***

## Map

### Mutations with this payload

* [comment​Approve](https://shopify.dev/docs/api/admin-graphql/latest/types/commentApprove)
