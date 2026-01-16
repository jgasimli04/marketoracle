---
title: CommentNotSpamPayload - GraphQL Admin
description: Return type for `commentNotSpam` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CommentNotSpamPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CommentNotSpamPayload.md
---

# Comment​Not​Spam​Payload

payload

Return type for `commentNotSpam` mutation.

## Fields

* comment

  [Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  The comment that was marked as not spam.

* user​Errors

  [\[Comment​Not​Spam​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentNotSpamUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [comment​Not​Spam](https://shopify.dev/docs/api/admin-graphql/latest/types/commentNotSpam)
