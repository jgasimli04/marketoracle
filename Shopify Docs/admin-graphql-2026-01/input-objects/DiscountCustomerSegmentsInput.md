---
title: DiscountCustomerSegmentsInput - GraphQL Admin
description: >-
  The input fields for which customer segments to add to or remove from the
  discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerSegmentsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerSegmentsInput.md
---

# Discount​Customer​Segments​Input

input\_object

The input fields for which customer segments to add to or remove from the discount.

## Fields

* add

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of customer segments to add to the current list of customer segments.

* remove

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of customer segments to remove from the current list of customer segments.

***

## Input objects using this input

* [Discount​Context​Input.customerSegments](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput#fields-customerSegments)

  INPUT OBJECT

  The input fields for the buyers who can use this discount.

* [Discount​Customer​Selection​Input.customerSegments](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerSelectionInput#fields-customerSegments)

  INPUT OBJECT

  The input fields for the customers who can use this discount.

***

## Map

### Input objects using this input

* [Discount​Context​Input.customerSegments](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput#fields-customerSegments)
* [Discount​Customer​Selection​Input.customerSegments](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerSelectionInput#fields-customerSegments)
