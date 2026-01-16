---
title: SubscriptionContractExpirePayload - GraphQL Admin
description: Return type for `subscriptionContractExpire` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractExpirePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractExpirePayload.md
---

# Subscription​Contract​Expire​Payload

payload

Return type for `subscriptionContractExpire` mutation.

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

* [subscription​Contract​Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractExpire)

  mutation

  Expires a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

***

## Map

### Mutations with this payload

* [subscription​Contract​Expire](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionContractExpire)
