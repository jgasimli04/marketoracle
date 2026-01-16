---
title: CustomerDeletePayload - GraphQL Admin
description: Return type for `customerDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerDeletePayload.md
---

# Customer​Delete​Payload

payload

Return type for `customerDelete` mutation.

## Fields

* deleted​Customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted customer.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop of the deleted customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerDelete)

  mutation

  Deletes a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) from the store. You can only delete customers who haven't placed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerDeleteInput)

    required

    ### Arguments

    Specifies the customer to delete.

  ***

***

## Map

### Mutations with this payload

* [customer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/customerDelete)
