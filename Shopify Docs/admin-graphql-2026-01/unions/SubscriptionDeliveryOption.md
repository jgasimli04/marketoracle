---
title: SubscriptionDeliveryOption - GraphQL Admin
description: The delivery option for a subscription contract.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryOption
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryOption.md
---

# Subscription​Delivery​Option

union

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

The delivery option for a subscription contract.

## Possible types

* [Subscription​Local​Delivery​Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLocalDeliveryOption)

  OBJECT

  A local delivery option for a subscription contract.

  * code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The code of the local delivery option.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The description of the local delivery option.

  * phone​Required

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a phone number is required for the local delivery option.

  * presentment​Title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The presentment title of the local delivery option.

  * price

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The price of the local delivery option.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the local delivery option.

* [Subscription​Pickup​Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPickupOption)

  OBJECT

  A pickup option to deliver a subscription contract.

  * code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The code of the pickup option.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The description of the pickup option.

  * location

    [Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

    non-null

    The pickup location.

  * phone​Required

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a phone number is required for the pickup option.

  * pickup​Time

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The estimated amount of time it takes for the pickup to be ready. For example, "Usually ready in 24 hours".).

  * presentment​Title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The presentment title of the pickup option.

  * price

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The price of the pickup option.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the pickup option.

* [Subscription​Shipping​Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionShippingOption)

  OBJECT

  A shipping option to deliver a subscription contract.

  * code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The code of the shipping option.

  * description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The description of the shipping option.

  * phone​Required

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    If a phone number is required for the shipping option.

  * presentment​Title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The presentment title of the shipping option.

  * price

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The price of the shipping option.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the shipping option.

  * carrier​Service

    [Delivery​Carrier​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

    Deprecated

***

## Fields with this union

* [Subscription​Delivery​Option​Result​Success.deliveryOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryOptionResultSuccess#field-SubscriptionDeliveryOptionResultSuccess.fields.deliveryOptions)

  OBJECT

  The delivery option for a subscription contract.

***

```graphql
union SubscriptionDeliveryOption = SubscriptionLocalDeliveryOption | SubscriptionPickupOption | SubscriptionShippingOption
```
