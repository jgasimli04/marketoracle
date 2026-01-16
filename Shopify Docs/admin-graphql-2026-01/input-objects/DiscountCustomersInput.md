---
title: DiscountCustomersInput - GraphQL Admin
description: The input fields for which customers to add to or remove from the discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomersInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomersInput.md
---

# Discount​Customers​Input

input\_object

The input fields for which customers to add to or remove from the discount.

## Fields

* add

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of customers to add to the current list of customers who can use the discount.

* remove

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of customers to remove from the current list of customers who can use the discount.

***

## Input objects using this input

* [Discount​Context​Input.customers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput#fields-customers)

  INPUT OBJECT

  The input fields for the buyers who can use this discount.

* [Discount​Customer​Selection​Input.customers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerSelectionInput#fields-customers)

  INPUT OBJECT

  The input fields for the customers who can use this discount.

***

## Map

### Input objects using this input

* [Discount​Context​Input.customers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput#fields-customers)
* [Discount​Customer​Selection​Input.customers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerSelectionInput#fields-customers)
