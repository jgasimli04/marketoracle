---
title: Fee - GraphQL Admin
description: >-
  A additional cost, charged by the merchant, on an order. Examples include
  return shipping fees and restocking fees.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Fee'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Fee.md'
---

# Fee

interface

Requires `read_returns` access scope and (`read_orders` access scope or `read_marketplace_orders` access scope).

A additional cost, charged by the merchant, on an order. Examples include return shipping fees and restocking fees.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the Fee.

***

## Types implemented in

* [Restocking​Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/RestockingFee)

  OBJECT

  A restocking fee is a fee captured as part of a return to cover the costs of handling a return line item. Typically, this would cover the costs of inspecting, repackaging, and restocking the item.

  * amount​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The amount of the restocking fee, in shop and presentment currencies.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the Fee.

  * percentage

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The value of the fee as a percentage.

* [Return​Shipping​Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnShippingFee)

  OBJECT

  A return shipping fee is a fee captured as part of a return to cover the costs of shipping the return.

  * amount​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The amount of the return shipping fee, in shop and presentment currencies.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the Fee.

***

##### Variables

```json
{
	"id": ""
}
```

##### Schema

```graphql
interface Fee {
  id: ID!
}
```
