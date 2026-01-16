---
title: CommentSpamUserError - GraphQL Admin
description: An error that occurs during the execution of `CommentSpam`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentSpamUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentSpamUserError.md
---

# Comment​Spam​User​Error

object

An error that occurs during the execution of `CommentSpam`.

## Fields

* code

  [Comment​Spam​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentSpamUserErrorCode)

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

* [comment​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentSpam)

  mutation

  Marks a comment as spam, removing it from public view. This mutation enables merchants to quickly handle unwanted promotional content, malicious links, or other spam that appears in blog discussions.

  For example, when a comment contains suspicious links to unrelated products or services, merchants can mark it as spam to immediately hide it from customers.

  Use the `commentSpam` mutation to:

  * Hide promotional or malicious comments from public view
  * Protect customers from potentially harmful links
  * Maintain professional discussion quality on blog articles

  Spam-marked comments can be reviewed later and potentially restored using the `commentNotSpam` mutation if they were incorrectly classified.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be marked as spam.

  ***

***

## <\~> CommentSpamUserError Mutations

### Mutated by

* <\~>[comment​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentSpam)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CommentSpamUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
