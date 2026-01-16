---
title: sellingPlanGroupAddProducts - GraphQL Admin
description: Adds multiple products to a selling plan group.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts.md
---

# selling​Plan​Group​Add​Products

mutation

Requires `write_products` access scope as well as any of `write_own_subscription_contracts`, `write_purchase_options` access scopes. Also: The user must have `manage_orders_information` permissions.

Adds multiple products to a selling plan group.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the selling plan group.

* product​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The IDs of the products to add.

***

## Selling​Plan​Group​Add​Products​Payload returns

* selling​Plan​Group

  [Selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  The updated selling plan group.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### sellingPlanGroupAddProducts reference

## Mutation Reference

```graphql
mutation sellingPlanGroupAddProducts($id: ID!, $productIds: [ID!]!) {
  sellingPlanGroupAddProducts(id: $id, productIds: $productIds) {
    sellingPlanGroup {
      # SellingPlanGroup fields
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
  "productIds": [
    "gid://shopify/<objectName>/10079785100"
  ]
}
```
