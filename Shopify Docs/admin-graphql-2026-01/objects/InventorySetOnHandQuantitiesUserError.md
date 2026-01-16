---
title: InventorySetOnHandQuantitiesUserError - GraphQL Admin
description: An error that occurs during the execution of `InventorySetOnHandQuantities`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetOnHandQuantitiesUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetOnHandQuantitiesUserError.md
---

# Inventory​Set​On​Hand​Quantities​User​Error

object

An error that occurs during the execution of `InventorySetOnHandQuantities`.

## Fields

* code

  [Inventory​Set​On​Hand​Quantities​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetOnHandQuantitiesUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [inventory​Set​On​Hand​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetOnHandQuantities)

  mutation

  Deprecated

  * input

    [Inventory​Set​On​Hand​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetOnHandQuantitiesInput)

    required

    ### Arguments

    The information required to set inventory on hand quantities.

  ***

***

## <\~> InventorySetOnHandQuantitiesUserError Mutations

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-InventorySetOnHandQuantitiesUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
