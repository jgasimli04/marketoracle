---
title: OrderCustomerRemovePayload - GraphQL Admin
description: Return type for `orderCustomerRemove` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderCustomerRemovePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderCustomerRemovePayload.md
---

# Order​Customer​Remove​Payload

payload

Return type for `orderCustomerRemove` mutation.

## Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that had its customer removed.

* user​Errors

  [\[Order​Customer​Remove​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerRemoveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Customer​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove)

  mutation

  Removes customer from an order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order having its customer removed.

  ***

***

## Map

### Mutations with this payload

* [order​Customer​Remove](https://shopify.dev/docs/api/admin-graphql/latest/types/orderCustomerRemove)
