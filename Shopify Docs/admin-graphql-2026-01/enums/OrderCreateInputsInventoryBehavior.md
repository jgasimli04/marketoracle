---
title: OrderCreateInputsInventoryBehavior - GraphQL Admin
description: The types of behavior to use when updating inventory.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateInputsInventoryBehavior
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateInputsInventoryBehavior.md
---

# Order​Create​Inputs​Inventory​Behavior

enum

The types of behavior to use when updating inventory.

## Valid values

* BYPASS

  Do not claim inventory.

* DECREMENT\_​IGNORING\_​POLICY

  Ignore the product's inventory policy and claim inventory.

* DECREMENT\_​OBEYING\_​POLICY

  Follow the product's inventory policy and claim inventory, if possible.

***

## Fields

* [Order​Create​Options​Input.inventoryBehaviour](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput#fields-inventoryBehaviour)

  INPUT OBJECT

  The input fields that define the strategies for updating inventory and whether to send shipping and order confirmations to customers.

***

## Map

### Inputs with this enum

* [Order​Create​Options​Input.inventoryBehaviour](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput#fields-inventoryBehaviour)
