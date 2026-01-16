---
title: SubscriptionContractProductChangePayload - GraphQL Admin
description: Return type for `subscriptionContractProductChange` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractProductChangePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractProductChangePayload.md
---

# Subscription​Contract​Product​Change​Payload

payload

Return type for `subscriptionContractProductChange` mutation.

## Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* line​Updated

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The updated Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Contract​Product​Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)

  mutation

  Allows for the easy change of a Product in a Contract or a Product price change.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to update.

  * input

    [Subscription​Contract​Product​Change​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractProductChangeInput)

    required

    The properties of the Product changes.

  ***

***

## Map

### Mutations with this payload

* [subscription​Contract​Product​Change](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionContractProductChange)
