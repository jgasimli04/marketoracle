---
title: OrderClosePayload - GraphQL Admin
description: Return type for `orderClose` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderClosePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderClosePayload.md
---

# Order​Close​Payload

payload

Return type for `orderClose` mutation.

## Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The closed order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderClose)

  mutation

  Marks an open [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) as closed. A closed order is one where merchants fulfill or cancel all [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and complete all financial transactions.

  Once closed, the order indicates that no further work is required. The order's [`closedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-closedAt) timestamp is set when this mutation completes successfully.

  * input

    [Order​Close​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCloseInput)

    required

    ### Arguments

    The input for the mutation.

  ***

***

## Map

### Mutations with this payload

* [order​Close](https://shopify.dev/docs/api/admin-graphql/latest/types/orderClose)
