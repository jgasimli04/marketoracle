---
title: SubscriptionBillingCycleContractEditPayload - GraphQL Admin
description: Return type for `subscriptionBillingCycleContractEdit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleContractEditPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleContractEditPayload.md
---

# Subscription​Billing​Cycle​Contract​Edit​Payload

payload

Return type for `subscriptionBillingCycleContractEdit` mutation.

## Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The draft subscription contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Billing​Cycle​Contract​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit)

  mutation

  Edit the contents of a subscription contract for the specified billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

***

## Map

### Mutations with this payload

* [subscription​Billing​Cycle​Contract​Edit](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingCycleContractEdit)
