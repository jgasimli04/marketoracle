---
title: WeightInput - GraphQL Admin
description: The input fields for the weight unit and value inputs.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WeightInput'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WeightInput.md
---

# Weight​Input

input\_object

The input fields for the weight unit and value inputs.

## Fields

* unit

  [Weight​Unit!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WeightUnit)

  non-null

  Unit of measurement for `value`.

* value

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The weight value using the unit system specified with `weight_unit`.

***

## Input objects using this input

* [Custom​Shipping​Package​Input.weight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput#fields-weight)

  INPUT OBJECT

  The input fields for a custom shipping package used to pack shipment.

* [Delivery​Weight​Condition​Input.criteria](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryWeightConditionInput#fields-criteria)

  INPUT OBJECT

  The input fields for a weight-based condition of a delivery method definition.

* [Draft​Order​Line​Item​Input.weight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-weight)

  INPUT OBJECT

  The input fields for a line item included in a draft order.

* [Inventory​Item​Measurement​Input.weight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemMeasurementInput#fields-weight)

  INPUT OBJECT

  The input fields for an inventory item measurement.

* [Order​Create​Line​Item​Input.weight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateLineItemInput#fields-weight)

  INPUT OBJECT

  The input fields for a line item to create for an order.

***

## Map

### Input objects using this input

* [Custom​Shipping​Package​Input.weight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput#fields-weight)
* [Delivery​Weight​Condition​Input.criteria](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryWeightConditionInput#fields-criteria)
* [Draft​Order​Line​Item​Input.weight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-weight)
* [Inventory​Item​Measurement​Input.weight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemMeasurementInput#fields-weight)
* [Order​Create​Line​Item​Input.weight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateLineItemInput#fields-weight)
