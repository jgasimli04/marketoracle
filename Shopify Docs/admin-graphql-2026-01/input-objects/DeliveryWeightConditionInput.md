---
title: DeliveryWeightConditionInput - GraphQL Admin
description: The input fields for a weight-based condition of a delivery method definition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryWeightConditionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryWeightConditionInput.md
---

# Delivery​Weight​Condition​Input

input\_object

The input fields for a weight-based condition of a delivery method definition.

## Fields

* criteria

  [Weight​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WeightInput)

  The weight value to compare the weight of an order to.

* operator

  [Delivery​Condition​Operator](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryConditionOperator)

  The operator to use for comparison.

***

## Input objects using this input

* [Delivery​Method​Definition​Input.weightConditionsToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput#fields-weightConditionsToCreate)

  INPUT OBJECT

  The input fields for a method definition.

***

## Map

### Input objects using this input

* [Delivery​Method​Definition​Input.weightConditionsToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput#fields-weightConditionsToCreate)
