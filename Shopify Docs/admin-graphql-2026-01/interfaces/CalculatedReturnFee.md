---
title: CalculatedReturnFee - GraphQL Admin
description: A calculated return fee.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedReturnFee
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedReturnFee.md
---

# Calculated​Return​Fee

interface

Requires `read_returns` access scope or `read_marketplace_returns` access scope. Also: The shop must have access to exchanges.

A calculated return fee.

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

## Types implemented in

* [Calculated​Restocking​Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedRestockingFee)

  OBJECT

  The calculated costs of handling a return line item. Typically, this would cover the costs of inspecting, repackaging, and restocking the item.

  * amount​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The calculated amount of the return fee, in shop and presentment currencies.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * percentage

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The value of the fee as a percentage.

* [Calculated​Return​Shipping​Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturnShippingFee)

  OBJECT

  The calculated cost of the return shipping.

  * amount​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The calculated amount of the return fee, in shop and presentment currencies.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

***

##### Variables

```json
{
	"amountSet": "",
	"id": ""
}
```

##### Schema

```graphql
interface CalculatedReturnFee {
  amountSet: MoneyBag!
  id: ID!
}
```
