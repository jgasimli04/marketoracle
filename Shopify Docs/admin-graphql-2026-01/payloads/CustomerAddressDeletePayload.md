---
title: CustomerAddressDeletePayload - GraphQL Admin
description: Return type for `customerAddressDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerAddressDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerAddressDeletePayload.md
---

# Customer​Address​Delete​Payload

payload

Return type for `customerAddressDelete` mutation.

## Fields

* deleted​Address​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the address deleted from the customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressDelete)

  mutation

  Deletes a customer's address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer whose address is being deleted.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the address to be deleted from the customer.

  ***

***

## Map

### Mutations with this payload

* [customer​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/customerAddressDelete)
