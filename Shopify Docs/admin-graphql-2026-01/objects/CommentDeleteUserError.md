---
title: CommentDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `CommentDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentDeleteUserError.md
---

# Comment​Delete​User​Error

object

An error that occurs during the execution of `CommentDelete`.

## Fields

* code

  [Comment​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentDeleteUserErrorCode)

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

## <\~> CommentDeleteUserError Mutations

### Mutated by

* <\~>[comment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CommentDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
