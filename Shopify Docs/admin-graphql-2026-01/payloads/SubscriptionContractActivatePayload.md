---
title: SubscriptionContractActivatePayload - GraphQL Admin
description: Return type for `subscriptionContractActivate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractActivatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractActivatePayload.md
---

# Subscription​Contract​Activate​Payload

payload

Return type for `subscriptionContractActivate` mutation.

## Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Contract​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractActivate)

  mutation

  Activates a Subscription Contract. Contract status must be either active, paused, or failed.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

***

## Map

### Mutations with this payload

* [subscription​Contract​Activate](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionContractActivate)
