---
title: SubscriptionDraftCommitPayload - GraphQL Admin
description: Return type for `subscriptionDraftCommit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftCommitPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftCommitPayload.md
---

# Subscription​Draft​Commit​Payload

payload

Return type for `subscriptionDraftCommit` mutation.

## Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The updated Subscription Contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit)

  mutation

  Commits the updates of a Subscription Contract draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to commit.

  ***

***

## Map

### Mutations with this payload

* [subscription​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionDraftCommit)
