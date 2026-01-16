---
title: SubscriptionBillingCycleContractDraftCommitPayload - GraphQL Admin
description: Return type for `subscriptionBillingCycleContractDraftCommit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleContractDraftCommitPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleContractDraftCommitPayload.md
---

# Subscription​Billing​Cycle​Contract​Draft​Commit​Payload

payload

Return type for `subscriptionBillingCycleContractDraftCommit` mutation.

## Fields

* contract

  [Subscription​Billing​Cycle​Edited​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract)

  The committed Subscription Billing Cycle Edited Contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Billing​Cycle​Contract​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftCommit)

  mutation

  Commits the updates of a Subscription Billing Cycle Contract draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to commit.

  ***

***

## Map

### Mutations with this payload

* [subscription​Billing​Cycle​Contract​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingCycleContractDraftCommit)
