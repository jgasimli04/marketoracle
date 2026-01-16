---
title: CommentSpamPayload - GraphQL Admin
description: Return type for `commentSpam` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CommentSpamPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CommentSpamPayload.md
---

# Comment​Spam​Payload

payload

Return type for `commentSpam` mutation.

## Fields

* comment

  [Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  The comment that was marked as spam.

* user​Errors

  [\[Comment​Spam​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentSpamUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [comment​Spam](https://shopify.dev/docs/api/admin-graphql/latest/types/commentSpam)
