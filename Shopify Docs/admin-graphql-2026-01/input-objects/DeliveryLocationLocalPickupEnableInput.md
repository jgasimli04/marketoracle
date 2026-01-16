---
title: DeliveryLocationLocalPickupEnableInput - GraphQL Admin
description: The input fields for a local pickup setting associated with a location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationLocalPickupEnableInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationLocalPickupEnableInput.md
---

# Delivery​Location​Local​Pickup​Enable​Input

input\_object

The input fields for a local pickup setting associated with a location.

## Fields

* instructions

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The instructions for the local pickup.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the location associated with the location setting.

* pickup​Time

  [Delivery​Local​Pickup​Time!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLocalPickupTime)

  non-null

  The time of the local pickup.

***

## Map

No referencing types
