---
title: DiscountItemsInput - GraphQL Admin
description: >-
  The input fields for the items attached to a discount. You can specify the
  discount items by product ID or collection ID.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountItemsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountItemsInput.md
---

# Discount​Items​Input

input\_object

The input fields for the items attached to a discount. You can specify the discount items by product ID or collection ID.

## Fields

* all

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether all items should be selected for the discount. Not supported for Buy X get Y discounts.

* collections

  [Discount​Collections​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCollectionsInput)

  The collections that are attached to a discount.

* products

  [Discount​Products​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountProductsInput)

  The [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) that the discount applies to.

***

## Input objects using this input

* [Discount​Customer​Buys​Input.items](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysInput#fields-items)

  INPUT OBJECT

  The input fields for prerequisite items and quantity for the discount.

* [Discount​Customer​Gets​Input.items](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsInput#fields-items)

  INPUT OBJECT

  Specifies the items that will be discounted, the quantity of items that will be discounted, and the value of discount.

***

## Map

### Input objects using this input

* [Discount​Customer​Buys​Input.items](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysInput#fields-items)
* [Discount​Customer​Gets​Input.items](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsInput#fields-items)
