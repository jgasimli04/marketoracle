---
title: CustomerCreatePayload - GraphQL Admin
description: Return type for `customerCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerCreatePayload.md
---

# Customer​Create​Payload

payload

Return type for `customerCreate` mutation.

## Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The created customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCreate)

  mutation

  Creates a new [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) in the store.

  Accepts customer details including contact information, marketing consent preferences, and tax exemptions through the [`CustomerInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput) input object. You can also associate [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput) and tags to organize and extend customer data.

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput)

    required

    ### Arguments

    The input fields to create a customer.

  ***

***

## Map

### Mutations with this payload

* [customer​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/customerCreate)
