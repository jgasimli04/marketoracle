---
title: SubscriptionContractPausePayload - GraphQL Admin
description: Return type for `subscriptionContractPause` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractPausePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractPausePayload.md
---

# Subscription​Contract​Pause​Payload

payload

Return type for `subscriptionContractPause` mutation.

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

* [subscription​Contract​Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause)

  mutation

  Pauses a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

***

## Map

### Mutations with this payload

* [subscription​Contract​Pause](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionContractPause)
