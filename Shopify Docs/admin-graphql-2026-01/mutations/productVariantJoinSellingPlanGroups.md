---
title: productVariantJoinSellingPlanGroups - GraphQL Admin
description: Adds multiple selling plan groups to a product variant.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantJoinSellingPlanGroups
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantJoinSellingPlanGroups.md
---

# product​Variant​Join​Selling​Plan​Groups

mutation

Requires `write_products` access scope as well as any of `write_own_subscription_contracts`, `write_purchase_options` access scopes. Also: The user must have `manage_orders_information` permissions.

Adds multiple selling plan groups to a product variant.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the product variant.

* selling​Plan​Group​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The IDs of the selling plan groups to add.

***

## Product​Variant​Join​Selling​Plan​Groups​Payload returns

* product​Variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variant object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### productVariantJoinSellingPlanGroups reference

## Mutation Reference

```graphql
mutation productVariantJoinSellingPlanGroups($id: ID!, $sellingPlanGroupIds: [ID!]!) {
  productVariantJoinSellingPlanGroups(id: $id, sellingPlanGroupIds: $sellingPlanGroupIds) {
    productVariant {
      # ProductVariant fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "id": "gid://shopify/<objectName>/10079785100",
  "sellingPlanGroupIds": [
    "gid://shopify/<objectName>/10079785100"
  ]
}
```
