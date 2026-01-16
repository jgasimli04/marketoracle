---
title: OrderCreateAssociateCustomerAttributesInput - GraphQL Admin
description: >-
  The input fields for identifying an existing customer to associate with the
  order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateAssociateCustomerAttributesInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateAssociateCustomerAttributesInput.md
---

# Order​Create​Associate​Customer​Attributes​Input

input\_object

The input fields for identifying an existing customer to associate with the order.

## Fields

* email

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The email of the customer to associate to the order.

  ***

  Note

  If both this email input field and the email on `OrderCreateOrderInput` are provided, this field will take precedence.

  ***

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The customer to associate to the order.

***

## Input objects using this input

* [Order​Create​Customer​Input.toAssociate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateCustomerInput#fields-toAssociate)

  INPUT OBJECT

  The input fields for a customer to associate with an order. Allows creation of a new customer or specifying an existing one.

***

## Map

### Input objects using this input

* [Order​Create​Customer​Input.toAssociate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateCustomerInput#fields-toAssociate)
