---
title: SubscriptionBillingCycleContractDraftConcatenatePayload - GraphQL Admin
description: Return type for `subscriptionBillingCycleContractDraftConcatenate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleContractDraftConcatenatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleContractDraftConcatenatePayload.md
---

# Subscription​Billing​Cycle​Contract​Draft​Concatenate​Payload

payload

Return type for `subscriptionBillingCycleContractDraftConcatenate` mutation.

## Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Billing​Cycle​Contract​Draft​Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate)

  mutation

  Concatenates a contract to a Subscription Draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to update.

  * concatenated​Billing​Cycle​Contracts

    [\[Subscription​Billing​Cycle​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    An array of Subscription Contracts with their selected billing cycles to concatenate to the subscription draft.

  ***

***

## Map

### Mutations with this payload

* [subscription​Billing​Cycle​Contract​Draft​Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingCycleContractDraftConcatenate)
