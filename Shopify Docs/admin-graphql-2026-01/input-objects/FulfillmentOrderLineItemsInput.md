---
title: FulfillmentOrderLineItemsInput - GraphQL Admin
description: >-
  The input fields used to include the line items of a specified fulfillment
  order that should be fulfilled.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsInput.md
---

# Fulfillment​Order​Line​Items​Input

input\_object

The input fields used to include the line items of a specified fulfillment order that should be fulfilled.

## Fields

* fulfillment​Order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the fulfillment order.

* fulfillment​Order​Line​Items

  [\[Fulfillment​Order​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

  The fulfillment order line items to be fulfilled. If left blank, all line items of the fulfillment order will be fulfilled.

***

## Input objects using this input

* [Fulfillment​Input.lineItemsByFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentInput#fields-lineItemsByFulfillmentOrder)

  INPUT OBJECT

  The input fields used to create a fulfillment from fulfillment orders.

* [Fulfillment​V2Input.lineItemsByFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input#fields-lineItemsByFulfillmentOrder)

  INPUT OBJECT

  The input fields used to create a fulfillment from fulfillment orders.

***

## Map

### Input objects using this input

* [Fulfillment​Input.lineItemsByFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentInput#fields-lineItemsByFulfillmentOrder)
* [Fulfillment​V2Input.lineItemsByFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input#fields-lineItemsByFulfillmentOrder)
