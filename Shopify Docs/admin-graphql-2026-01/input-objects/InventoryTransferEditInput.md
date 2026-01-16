---
title: InventoryTransferEditInput - GraphQL Admin
description: The input fields to edit an inventory transfer.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferEditInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferEditInput.md
---

# Inventory​Transfer​Edit​Input

input\_object

The input fields to edit an inventory transfer.

## Fields

* date​Created

  [Date](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

  The date the inventory transfer was created.

* destination​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The destination location for the inventory transfer. The destination location can only be changed for draft transfers.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note to add to the Inventory Transfer.

* origin​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The origin location for the inventory transfer. The origin location can only be changed for draft transfers.

* reference​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The reference name to add to the inventory transfer.

* tags

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The tags to add to the inventory transfer.

***

## Map

No referencing types
