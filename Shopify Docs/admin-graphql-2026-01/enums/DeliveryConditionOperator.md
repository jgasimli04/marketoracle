---
title: DeliveryConditionOperator - GraphQL Admin
description: The operator to use to determine if the condition passes.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryConditionOperator
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryConditionOperator.md
---

# Delivery​Condition​Operator

enum

The operator to use to determine if the condition passes.

## Valid values

* GREATER\_​THAN\_​OR\_​EQUAL\_​TO

  The condition will check whether the field is greater than or equal to the criterion.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The condition will check if the field is less than or equal to the criterion.

***

## Fields

* [Delivery​Condition.operator](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCondition#field-DeliveryCondition.fields.operator)

  OBJECT

  A condition that must pass for a delivery method definition to be applied to an order.

* [Delivery​Price​Condition​Input.operator](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryPriceConditionInput#fields-operator)

  INPUT OBJECT

  The input fields for a price-based condition of a delivery method definition.

* [Delivery​Update​Condition​Input.operator](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryUpdateConditionInput#fields-operator)

  INPUT OBJECT

  The input fields for updating the condition of a delivery method definition.

* [Delivery​Weight​Condition​Input.operator](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryWeightConditionInput#fields-operator)

  INPUT OBJECT

  The input fields for a weight-based condition of a delivery method definition.

***

## Map

### Fields with this enum

* <-|[Delivery​Condition.operator](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCondition#field-DeliveryCondition.fields.operator)

### Inputs with this enum

* [Delivery​Price​Condition​Input.operator](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryPriceConditionInput#fields-operator)
* [Delivery​Update​Condition​Input.operator](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryUpdateConditionInput#fields-operator)
* [Delivery​Weight​Condition​Input.operator](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryWeightConditionInput#fields-operator)
