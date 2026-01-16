---
title: SubscriptionContractCreatePayload - GraphQL Admin
description: Return type for `subscriptionContractCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionContractCreatePayload.md
---

# Subscription​Contract​Create​Payload

payload

Return type for `subscriptionContractCreate` mutation.

## Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Contract​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCreate)

  mutation

  Creates a subscription contract draft, which is an intention to create a new subscription. The draft lets you incrementally build and modify subscription details before committing them to create the actual [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract).

  The mutation requires [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) information, billing details, and contract configuration including the [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy). You can specify the [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod), the [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for shipping, and subscription intervals.

  After you create the draft, you can either modify it with the [`subscriptionDraftUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate) mutation or finalize and create the active subscription contract with [`subscriptionDraftCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit).

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract).

  * input

    [Subscription​Contract​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractCreateInput)

    required

    ### Arguments

    The properties of the new Subscription Contract.

  ***

***

## Map

### Mutations with this payload

* [subscription​Contract​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionContractCreate)
