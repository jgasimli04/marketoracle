---
title: FulfillmentOrderSplitInput - GraphQL Admin
description: The input fields for the split applied to the fulfillment order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput.md
---

# Fulfillment​Order​Split​Input

input\_object

The input fields for the split applied to the fulfillment order.

## Fields

* fulfillment​Order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the fulfillment order to be split.

* fulfillment​Order​Line​Items

  [\[Fulfillment​Order​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

  required

  The fulfillment order line items to be split out.

***

## Map

No referencing types
