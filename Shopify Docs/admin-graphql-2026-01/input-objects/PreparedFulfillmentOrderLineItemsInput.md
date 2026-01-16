---
title: PreparedFulfillmentOrderLineItemsInput - GraphQL Admin
description: >-
  The input fields used to include the line items of a specified fulfillment
  order that should be marked as prepared for pickup by a customer.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PreparedFulfillmentOrderLineItemsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PreparedFulfillmentOrderLineItemsInput.md
---

# Prepared​Fulfillment​Order​Line​Items​Input

input\_object

The input fields used to include the line items of a specified fulfillment order that should be marked as prepared for pickup by a customer.

## Fields

* fulfillment​Order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the fulfillment order.

***

## Input objects using this input

* [Fulfillment​Order​Line​Items​Prepared​For​Pickup​Input.lineItemsByFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsPreparedForPickupInput#fields-lineItemsByFulfillmentOrder)

  INPUT OBJECT

  The input fields for marking fulfillment order line items as ready for pickup.

***

## Map

### Input objects using this input

* [Fulfillment​Order​Line​Items​Prepared​For​Pickup​Input.lineItemsByFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsPreparedForPickupInput#fields-lineItemsByFulfillmentOrder)
