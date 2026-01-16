---
title: SubscriptionShippingOptionResult - GraphQL Admin
description: >-
  The result of the query to fetch shipping options for the subscription
  contract.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionShippingOptionResult
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionShippingOptionResult.md
---

# Subscription​Shipping​Option​Result

union

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

The result of the query to fetch shipping options for the subscription contract.

## Possible types

* [Subscription​Shipping​Option​Result​Failure](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionShippingOptionResultFailure)

  OBJECT

  Failure determining available shipping options for delivery of a subscription contract.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Failure reason.

* [Subscription​Shipping​Option​Result​Success](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionShippingOptionResultSuccess)

  OBJECT

  A shipping option for delivery of a subscription contract.

  * shipping​Options

    [\[Subscription​Shipping​Option!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionShippingOption)

    non-null

    Available shipping options.

***

## Fields with this union

* [Subscription​Draft.shippingOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.shippingOptions)

  OBJECT

  Deprecated

***

```graphql
union SubscriptionShippingOptionResult = SubscriptionShippingOptionResultFailure | SubscriptionShippingOptionResultSuccess
```
