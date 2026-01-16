---
title: PurchasingEntityInput - GraphQL Admin
description: >-
  The input fields for a purchasing entity. Can either be a customer or a
  purchasing company.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PurchasingEntityInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PurchasingEntityInput.md
---

# Purchasing​Entity​Input

input\_object

The input fields for a purchasing entity. Can either be a customer or a purchasing company.

## Fields

* customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Represents a customer. Null if there's a purchasing company.

* purchasing​Company

  [Purchasing​Company​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PurchasingCompanyInput)

  Represents a purchasing company. Null if there's a customer.

***

## Input objects using this input

* [Draft​Order​Available​Delivery​Options​Input.purchasingEntity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput#fields-purchasingEntity)

  INPUT OBJECT

  The input fields used to determine available delivery options for a draft order.

* [Draft​Order​Input.purchasingEntity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-purchasingEntity)

  INPUT OBJECT

  The input fields used to create or update a draft order.

***

## Map

### Input objects using this input

* [Draft​Order​Available​Delivery​Options​Input.purchasingEntity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput#fields-purchasingEntity)
* [Draft​Order​Input.purchasingEntity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-purchasingEntity)
