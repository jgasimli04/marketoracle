---
title: CommentNotSpamUserError - GraphQL Admin
description: An error that occurs during the execution of `CommentNotSpam`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentNotSpamUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentNotSpamUserError.md
---

# Comment​Not​Spam​User​Error

object

An error that occurs during the execution of `CommentNotSpam`.

## Fields

* code

  [Comment​Not​Spam​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentNotSpamUserErrorCode)

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

* [comment​Not​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentNotSpam)

  mutation

  Reverses a spam classification on a comment, restoring it to normal moderation status. This mutation allows merchants to change their decision when a comment has been manually marked as spam.

  For example, when a merchant reviews comments marked as spam and finds a legitimate customer question, they can use this mutation to restore the comment's normal status and make it eligible for approval.

  Use the `commentNotSpam` mutation to:

  * Unmark comments that were marked as spam
  * Restore comments to normal moderation status
  * Move comments back to the approval queue

  This action changes the comment's status from spam back to pending, where it can then be approved or managed according to standard moderation practices.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be marked as not spam.

  ***

***

## <\~> CommentNotSpamUserError Mutations

### Mutated by

* <\~>[comment​Not​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentNotSpam)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CommentNotSpamUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
