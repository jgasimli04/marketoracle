---
title: OrderOpenPayload - GraphQL Admin
description: Return type for `orderOpen` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderOpenPayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderOpenPayload.md
---

# Order​Open​Payload

payload

Return type for `orderOpen` mutation.

## Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The opened order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderOpen)

  mutation

  Opens a closed order.

  * input

    [Order​Open​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderOpenInput)

    required

    ### Arguments

    The input for the mutation.

  ***

***

## Map

### Mutations with this payload

* [order​Open](https://shopify.dev/docs/api/admin-graphql/latest/types/orderOpen)
