---
title: ReverseDeliveryDeliverable - GraphQL Admin
description: The delivery method and artifacts associated with a reverse delivery.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/ReverseDeliveryDeliverable
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/ReverseDeliveryDeliverable.md
---

# Reverse​Delivery​Deliverable

union

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The delivery method and artifacts associated with a reverse delivery.

## Possible types

* [Reverse​Delivery​Shipping​Deliverable](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryShippingDeliverable)

  OBJECT

  A reverse shipping deliverable that may include a label and tracking information.

  * label

    [Reverse​Delivery​Label​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLabelV2)

    The return label attached to the reverse delivery.

  * tracking

    [Reverse​Delivery​Tracking​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryTrackingV2)

    The information to track the reverse delivery.

***

## Fields with this union

* [Reverse​Delivery.deliverable](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery#field-ReverseDelivery.fields.deliverable)

  OBJECT

  A reverse delivery is a post-fulfillment object that represents a buyer sending a package to a merchant. For example, a buyer requests a return, and a merchant sends the buyer a shipping label. The reverse delivery contains the context of the items sent back, how they're being sent back (for example, a shipping label), and the current state of the delivery (tracking information).

***

```graphql
union ReverseDeliveryDeliverable = ReverseDeliveryShippingDeliverable
```
