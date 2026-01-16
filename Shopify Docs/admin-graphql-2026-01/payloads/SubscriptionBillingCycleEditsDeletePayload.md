---
title: SubscriptionBillingCycleEditsDeletePayload - GraphQL Admin
description: Return type for `subscriptionBillingCycleEditsDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleEditsDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleEditsDeletePayload.md
---

# Subscription​Billing​Cycle​Edits​Delete​Payload

payload

Return type for `subscriptionBillingCycleEditsDelete` mutation.

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

* [subscription​Billing​Cycle​Edits​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete)

  mutation

  Delete the current and future schedule and contract edits of a list of subscription billing cycles.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The globally-unique identifier of the subscription contract that the billing cycle belongs to.

  * target​Selection

    [Subscription​Billing​Cycles​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesTargetSelection)

    required

    Select billing cycles to be deleted.

  ***

***

## Map

### Mutations with this payload

* [subscription​Billing​Cycle​Edits​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingCycleEditsDelete)
