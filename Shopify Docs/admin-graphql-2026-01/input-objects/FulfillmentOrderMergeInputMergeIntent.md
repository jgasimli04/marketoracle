---
title: FulfillmentOrderMergeInputMergeIntent - GraphQL Admin
description: >-
  The input fields for merging fulfillment orders into a single merged
  fulfillment order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInputMergeIntent
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInputMergeIntent.md
---

# Fulfillment​Order​Merge​Input​Merge​Intent

input\_object

The input fields for merging fulfillment orders into a single merged fulfillment order.

## Fields

* fulfillment​Order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the fulfillment order to be merged.

* fulfillment​Order​Line​Items

  [\[Fulfillment​Order​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

  The fulfillment order line items to be merged.

***

## Input objects using this input

* [Fulfillment​Order​Merge​Input.mergeIntents](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInput#fields-mergeIntents)

  INPUT OBJECT

  The input fields for merging fulfillment orders.

***

## Map

### Input objects using this input

* [Fulfillment​Order​Merge​Input.mergeIntents](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInput#fields-mergeIntents)
