---
title: CommentApproveUserError - GraphQL Admin
description: An error that occurs during the execution of `CommentApprove`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentApproveUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentApproveUserError.md
---

# Comment​Approve​User​Error

object

An error that occurs during the execution of `CommentApprove`.

## Fields

* code

  [Comment​Approve​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentApproveUserErrorCode)

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

## <\~> CommentApproveUserError Mutations

### Mutated by

* <\~>[comment​Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentApprove)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CommentApproveUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
