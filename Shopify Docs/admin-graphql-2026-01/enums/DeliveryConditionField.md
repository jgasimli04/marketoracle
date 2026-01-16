---
title: DeliveryConditionField - GraphQL Admin
description: The field type that the condition will be applied to.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryConditionField
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryConditionField.md
---

# Delivery​Condition​Field

enum

The field type that the condition will be applied to.

## Valid values

* TOTAL\_​PRICE

  The condition will check against the total price of the order.

* TOTAL\_​WEIGHT

  The condition will check against the total weight of the order.

***

## Fields

* [Delivery​Condition.field](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCondition#field-DeliveryCondition.fields.field)

  OBJECT

  A condition that must pass for a delivery method definition to be applied to an order.

* [Delivery​Update​Condition​Input.field](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryUpdateConditionInput#fields-field)

  INPUT OBJECT

  The input fields for updating the condition of a delivery method definition.

***

## Map

### Fields with this enum

* <-|[Delivery​Condition.field](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCondition#field-DeliveryCondition.fields.field)

### Inputs with this enum

* [Delivery​Update​Condition​Input.field](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryUpdateConditionInput#fields-field)
