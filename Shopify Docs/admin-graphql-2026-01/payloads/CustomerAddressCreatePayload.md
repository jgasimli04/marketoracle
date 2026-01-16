---
title: CustomerAddressCreatePayload - GraphQL Admin
description: Return type for `customerAddressCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerAddressCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerAddressCreatePayload.md
---

# Customer​Address​Create​Payload

payload

Return type for `customerAddressCreate` mutation.

## Fields

* address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The created address.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Address​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressCreate)

  mutation

  Creates a new [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer). You can optionally set the address as the customer's default address.

  You can only add addresses to existing customers. Each customer can have multiple addresses.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    Specifies the fields to use when creating the address.

  * set​As​Default

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether to set the address as the customer's default address.

  ***

***

## Map

### Mutations with this payload

* [customer​Address​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/customerAddressCreate)
