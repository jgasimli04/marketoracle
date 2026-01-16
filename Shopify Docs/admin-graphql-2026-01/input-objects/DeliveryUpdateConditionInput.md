---
title: DeliveryUpdateConditionInput - GraphQL Admin
description: The input fields for updating the condition of a delivery method definition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryUpdateConditionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryUpdateConditionInput.md
---

# Delivery​Update​Condition​Input

input\_object

The input fields for updating the condition of a delivery method definition.

## Fields

* criteria

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The value that will be used in comparison.

* criteria​Unit

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unit associated with the value that will be used in comparison.

* field

  [Delivery​Condition​Field](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryConditionField)

  The property of an order that will be used in comparison.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID of the condition.

* operator

  [Delivery​Condition​Operator](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryConditionOperator)

  The operator to use for comparison.

***

## Input objects using this input

* [Delivery​Method​Definition​Input.conditionsToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput#fields-conditionsToUpdate)

  INPUT OBJECT

  The input fields for a method definition.

***

## Map

### Input objects using this input

* [Delivery​Method​Definition​Input.conditionsToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput#fields-conditionsToUpdate)
