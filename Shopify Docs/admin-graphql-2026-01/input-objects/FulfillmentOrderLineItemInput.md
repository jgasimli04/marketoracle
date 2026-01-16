---
title: FulfillmentOrderLineItemInput - GraphQL Admin
description: >-
  The input fields used to include the quantity of the fulfillment order line
  item that should be fulfilled.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput.md
---

# Fulfillment​Order​Line​Item​Input

input\_object

The input fields used to include the quantity of the fulfillment order line item that should be fulfilled.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the fulfillment order line item.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the fulfillment order line item.

***

## Input objects using this input

* [Fulfillment​Order​Hold​Input.fulfillmentOrderLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderHoldInput#fields-fulfillmentOrderLineItems)

  INPUT OBJECT

  The input fields for the fulfillment hold applied on the fulfillment order.

* [Fulfillment​Order​Line​Items​Input.fulfillmentOrderLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsInput#fields-fulfillmentOrderLineItems)

  INPUT OBJECT

  The input fields used to include the line items of a specified fulfillment order that should be fulfilled.

* [Fulfillment​Order​Merge​Input​Merge​Intent.fulfillmentOrderLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInputMergeIntent#fields-fulfillmentOrderLineItems)

  INPUT OBJECT

  The input fields for merging fulfillment orders into a single merged fulfillment order.

* [Fulfillment​Order​Split​Input.fulfillmentOrderLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput#fields-fulfillmentOrderLineItems)

  INPUT OBJECT

  The input fields for the split applied to the fulfillment order.

***

## Map

### Input objects using this input

* [Fulfillment​Order​Hold​Input.fulfillmentOrderLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderHoldInput#fields-fulfillmentOrderLineItems)
* [Fulfillment​Order​Line​Items​Input.fulfillmentOrderLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsInput#fields-fulfillmentOrderLineItems)
* [Fulfillment​Order​Merge​Input​Merge​Intent.fulfillmentOrderLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInputMergeIntent#fields-fulfillmentOrderLineItems)
* [Fulfillment​Order​Split​Input.fulfillmentOrderLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput#fields-fulfillmentOrderLineItems)
