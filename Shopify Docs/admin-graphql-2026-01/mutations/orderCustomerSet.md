---
title: orderCustomerSet - GraphQL Admin
description: Sets a customer on an order.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerSet'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerSet.md
---

# order​Customer​Set

mutation

Requires `write_orders` access scope or `write_quick_sale` access scope. Also: The user must have permission to manage the order.

Sets a customer on an order.

## Arguments

* customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the customer being set on the order.

* order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the order having a customer set.

***

## Order​Customer​Set​Payload returns

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that had a customer set.

* user​Errors

  [\[Order​Customer​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### orderCustomerSet reference

## Mutation Reference

```graphql
mutation orderCustomerSet($orderId: ID!, $customerId: ID!) {
  orderCustomerSet(orderId: $orderId, customerId: $customerId) {
    order {
      # Order fields
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
  "orderId": "gid://shopify/<objectName>/10079785100",
  "customerId": "gid://shopify/<objectName>/10079785100"
}
```
