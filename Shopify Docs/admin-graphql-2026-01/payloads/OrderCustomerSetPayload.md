---
title: OrderCustomerSetPayload - GraphQL Admin
description: Return type for `orderCustomerSet` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderCustomerSetPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderCustomerSetPayload.md
---

# Order​Customer​Set​Payload

payload

Return type for `orderCustomerSet` mutation.

## Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that had a customer set.

* user​Errors

  [\[Order​Customer​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Customer​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerSet)

  mutation

  Sets a customer on an order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order having a customer set.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer being set on the order.

  ***

***

## Map

### Mutations with this payload

* [order​Customer​Set](https://shopify.dev/docs/api/admin-graphql/latest/types/orderCustomerSet)
