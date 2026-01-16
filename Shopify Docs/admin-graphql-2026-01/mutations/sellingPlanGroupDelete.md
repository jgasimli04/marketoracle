---
title: sellingPlanGroupDelete - GraphQL Admin
description: Delete a Selling Plan Group. This does not affect subscription contracts.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupDelete.md
---

# selling​Plan​Group​Delete

mutation

Requires `write_products` access scope as well as any of `write_own_subscription_contracts`, `write_purchase_options` access scopes. Also: The user must have `manage_orders_information` permissions.

Delete a Selling Plan Group. This does not affect subscription contracts.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The id of the selling plan group to delete.

***

## Selling​Plan​Group​Delete​Payload returns

* deleted​Selling​Plan​Group​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted selling plan group object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### sellingPlanGroupDelete reference

## Mutation Reference

```graphql
mutation sellingPlanGroupDelete($id: ID!) {
  sellingPlanGroupDelete(id: $id) {
    deletedSellingPlanGroupId
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
  "id": "gid://shopify/<objectName>/10079785100"
}
```
