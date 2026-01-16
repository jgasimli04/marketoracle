---
title: DeliveryPriceConditionInput - GraphQL Admin
description: The input fields for a price-based condition of a delivery method definition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryPriceConditionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryPriceConditionInput.md
---

# Delivery​Price​Condition​Input

input\_object

The input fields for a price-based condition of a delivery method definition.

## Fields

* criteria

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  The monetary value to compare the price of an order to.

* operator

  [Delivery​Condition​Operator](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryConditionOperator)

  The operator to use for comparison.

***

## Input objects using this input

* [Delivery​Method​Definition​Input.priceConditionsToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput#fields-priceConditionsToCreate)

  INPUT OBJECT

  The input fields for a method definition.

***

## Map

### Input objects using this input

* [Delivery​Method​Definition​Input.priceConditionsToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput#fields-priceConditionsToCreate)
