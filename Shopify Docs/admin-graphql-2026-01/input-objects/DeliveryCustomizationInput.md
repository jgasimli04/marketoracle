---
title: DeliveryCustomizationInput - GraphQL Admin
description: The input fields to create and update a delivery customization.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput.md
---

# Delivery​Customization​Input

input\_object

The input fields to create and update a delivery customization.

## Fields

* enabled

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The enabled status of the delivery customization.

* function​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Function handle scoped to your current app ID. Only finds functions within your app.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  Default:\[]

  Additional metafields to associate to the delivery customization.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the delivery customization.

* function​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Map

No referencing types
