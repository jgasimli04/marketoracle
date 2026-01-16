---
title: productLeaveSellingPlanGroups - GraphQL Admin
description: Removes multiple groups from a product.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productLeaveSellingPlanGroups
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productLeaveSellingPlanGroups.md
---

# product​Leave​Selling​Plan​Groups

mutation

Requires `write_products` access scope as well as any of `write_own_subscription_contracts`, `write_purchase_options` access scopes. Also: The user must have `manage_orders_information` permissions.

Removes multiple groups from a product.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the product.

* selling​Plan​Group​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The IDs of the selling plan groups to add.

***

## Product​Leave​Selling​Plan​Groups​Payload returns

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### productLeaveSellingPlanGroups reference

## Mutation Reference

```graphql
mutation productLeaveSellingPlanGroups($id: ID!, $sellingPlanGroupIds: [ID!]!) {
  productLeaveSellingPlanGroups(id: $id, sellingPlanGroupIds: $sellingPlanGroupIds) {
    product {
      # Product fields
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
