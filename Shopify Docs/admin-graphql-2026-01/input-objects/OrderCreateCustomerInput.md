---
title: OrderCreateCustomerInput - GraphQL Admin
description: >-
  The input fields for a customer to associate with an order. Allows creation of
  a new customer or specifying an existing one.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateCustomerInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateCustomerInput.md
---

# Order​Create​Customer​Input

input\_object

The input fields for a customer to associate with an order. Allows creation of a new customer or specifying an existing one.

## Fields

* to​Associate

  [Order​Create​Associate​Customer​Attributes​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateAssociateCustomerAttributesInput)

  An existing customer to associate with the order, specified by ID.

* to​Upsert

  [Order​Create​Upsert​Customer​Attributes​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateUpsertCustomerAttributesInput)

  A new customer to create or update and associate with the order.

***

## Input objects using this input

* [Order​Create​Order​Input.customer](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-customer)

  INPUT OBJECT

  The input fields for creating an order.

***

## Map

### Input objects using this input

* [Order​Create​Order​Input.customer](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-customer)
