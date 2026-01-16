---
title: OrderCreateOptionsInput - GraphQL Admin
description: |-
  The input fields that define the strategies for updating inventory and
  whether to send shipping and order confirmations to customers.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput.md
---

# Order​Create​Options​Input

input\_object

The input fields that define the strategies for updating inventory and whether to send shipping and order confirmations to customers.

## Fields

* inventory​Behaviour

  [Order​Create​Inputs​Inventory​Behavior](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateInputsInventoryBehavior)

  Default:BYPASS

  The strategy for handling updates to inventory: not claiming inventory, ignoring inventory policies, or following policies when claiming inventory.

* send​Fulfillment​Receipt

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to send a shipping confirmation to the customer.

* send​Receipt

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to send an order confirmation to the customer.

***

## Map

No referencing types
