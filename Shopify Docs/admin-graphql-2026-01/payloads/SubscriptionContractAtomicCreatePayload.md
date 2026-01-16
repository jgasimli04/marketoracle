---
title: SubscriptionContractAtomicCreatePayload - GraphQL Admin
description: Return type for `subscriptionContractAtomicCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractAtomicCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractAtomicCreatePayload.md
---

# Subscription​Contract​Atomic​Create​Payload

payload

Return type for `subscriptionContractAtomicCreate` mutation.

## Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Contract​Atomic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate)

  mutation

  Creates a Subscription Contract.

  * input

    [Subscription​Contract​Atomic​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput)

    required

    ### Arguments

    The properties of the new Subscription Contract.

  ***

***

## Map

### Mutations with this payload

* [subscription​Contract​Atomic​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionContractAtomicCreate)
