---
title: sellingPlanGroupRemoveProducts - GraphQL Admin
description: Removes multiple products from a selling plan group.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProducts
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProducts.md
---

# selling​Plan​Group​Remove​Products

mutation

Requires `write_products` access scope as well as any of `write_own_subscription_contracts`, `write_purchase_options` access scopes. Also: The user must have `manage_orders_information` permissions.

Removes multiple products from a selling plan group.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the selling plan group.

* product​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The IDs of the products to remove.

***

## Selling​Plan​Group​Remove​Products​Payload returns

* removed​Product​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The removed product ids.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### sellingPlanGroupRemoveProducts reference

## Mutation Reference

```graphql
mutation sellingPlanGroupRemoveProducts($id: ID!, $productIds: [ID!]!) {
  sellingPlanGroupRemoveProducts(id: $id, productIds: $productIds) {
    removedProductIds
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
