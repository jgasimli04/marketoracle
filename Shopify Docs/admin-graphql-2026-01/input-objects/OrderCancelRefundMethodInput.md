---
title: OrderCancelRefundMethodInput - GraphQL Admin
description: The input fields used to specify the refund method for an order cancellation.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCancelRefundMethodInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCancelRefundMethodInput.md
---

# Order​Cancel​Refund​Method​Input

input\_object

The input fields used to specify the refund method for an order cancellation.

## Fields

* original​Payment​Methods​Refund

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to refund to the original payment method.

* store​Credit​Refund

  [Order​Cancel​Store​Credit​Refund​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCancelStoreCreditRefundInput)

  Whether to refund to store credit.

***

## Map

No referencing types
