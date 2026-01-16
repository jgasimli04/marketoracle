---
title: InventoryTransferCreateAsReadyToShipInput - GraphQL Admin
description: The input fields to create an inventory transfer.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput.md
---

# Inventory​Transfer​Create​As​Ready​To​Ship​Input

input\_object

The input fields to create an inventory transfer.

## Fields

* date​Created

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time the inventory transfer was created. If left blank, defaults to the current date and time in UTC format.

* destination​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The destination location for the inventory transfer.

* line​Items

  [\[Inventory​Transfer​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferLineItemInput)

  requiredDefault:\[]

  The list of line items for the inventory transfer.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note to add to the Inventory Transfer.

* origin​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The origin location for the inventory transfer.

* reference​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The reference name to add to the inventory transfer.

* tags

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The tags to add to the inventory transfer.

***

## Map

No referencing types
