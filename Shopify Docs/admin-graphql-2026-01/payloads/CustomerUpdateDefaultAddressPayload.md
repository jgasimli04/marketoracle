---
title: CustomerUpdateDefaultAddressPayload - GraphQL Admin
description: Return type for `customerUpdateDefaultAddress` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerUpdateDefaultAddressPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerUpdateDefaultAddressPayload.md
---

# Customer​Update​Default​Address​Payload

payload

Return type for `customerUpdateDefaultAddress` mutation.

## Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer whose address was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Update​Default​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdateDefaultAddress)

  mutation

  Updates a customer's default address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer whose default address is being updated.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer's new default address.

  ***

***

## Map

### Mutations with this payload

* [customer​Update​Default​Address](https://shopify.dev/docs/api/admin-graphql/latest/types/customerUpdateDefaultAddress)
