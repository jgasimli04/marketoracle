---
title: CalculatedReturnShippingFee - GraphQL Admin
description: The calculated cost of the return shipping.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturnShippingFee
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturnShippingFee.md
---

# Calculated​Return​Shipping​Fee

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The calculated cost of the return shipping.

## Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The calculated amount of the return fee, in shop and presentment currencies.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

## Map

### Fields with this object

* {}[CalculatedReturn.returnShippingFee](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.returnShippingFee)

***

## Interfaces

* [Calculated​Return​Fee](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedReturnFee)

  interface

***

## ||-CalculatedReturnShippingFee Implements

### Implements

* ||-[Calculated​Return​Fee](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedReturnFee)
