---
title: SubscriptionBillingCycleEditDeletePayload - GraphQL Admin
description: Return type for `subscriptionBillingCycleEditDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleEditDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleEditDeletePayload.md
---

# Subscription​Billing​Cycle​Edit​Delete​Payload

payload

Return type for `subscriptionBillingCycleEditDelete` mutation.

## Fields

* billing​Cycles

  [\[Subscription​Billing​Cycle!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The list of updated billing cycles.

* user​Errors

  [\[Subscription​Billing​Cycle​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Billing​Cycle​Edit​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditDelete)

  mutation

  Delete the schedule and contract edits of the selected subscription billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object used to select and use billing cycles.

  ***

***

## Map

### Mutations with this payload

* [subscription​Billing​Cycle​Edit​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingCycleEditDelete)
