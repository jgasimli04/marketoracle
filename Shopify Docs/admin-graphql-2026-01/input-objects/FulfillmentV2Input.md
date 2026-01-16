---
title: FulfillmentV2Input - GraphQL Admin
description: The input fields used to create a fulfillment from fulfillment orders.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input.md
---

# Fulfillment​V2Input

input\_object

The input fields used to create a fulfillment from fulfillment orders.

## Fields

* line​Items​By​Fulfillment​Order

  [\[Fulfillment​Order​Line​Items​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsInput)

  required

  Pairs of `fulfillment_order_id` and `fulfillment_order_line_items` that represent the fulfillment order line items that have to be fulfilled for each fulfillment order. For any given pair, if the fulfillment order line items are left blank then all the fulfillment order line items of the associated fulfillment order ID will be fulfilled.

* notify​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the customer is notified. If `true`, then a notification is sent when the fulfillment is created. The default value is `false`.

* origin​Address

  [Fulfillment​Origin​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOriginAddressInput)

  Address information about the location from which the order was fulfilled.

* tracking​Info

  [Fulfillment​Tracking​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput)

  The fulfillment's tracking information, including a tracking URL, a tracking number, and the company associated with the fulfillment.

***

## Map

No referencing types
