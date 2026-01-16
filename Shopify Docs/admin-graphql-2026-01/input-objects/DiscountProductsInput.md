---
title: DiscountProductsInput - GraphQL Admin
description: >-
  The input fields for adding and removing

  [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  and

  [product
  variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant)

  as prerequisites or as eligible items for a discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountProductsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountProductsInput.md
---

# Discount​Products​Input

input\_object

The input fields for adding and removing [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) as prerequisites or as eligible items for a discount.

## Fields

* products​To​Add

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the products to add as prerequisites or as eligible items for a discount.

* products​To​Remove

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the products to remove as prerequisites or as eligible items for a discount.

* product​Variants​To​Add

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the product variants to add as prerequisites or as eligible items for a discount.

* product​Variants​To​Remove

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the product variants to remove as prerequisites or as eligible items for a discount.

***

## Input objects using this input

* [Discount​Items​Input.products](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountItemsInput#fields-products)

  INPUT OBJECT

  The input fields for the items attached to a discount. You can specify the discount items by product ID or collection ID.

***

## Map

### Input objects using this input

* [Discount​Items​Input.products](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountItemsInput#fields-products)
