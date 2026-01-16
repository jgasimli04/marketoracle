---
title: CustomerAddressUpdatePayload - GraphQL Admin
description: Return type for `customerAddressUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerAddressUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerAddressUpdatePayload.md
---

# Customer​Address​Update​Payload

payload

Return type for `customerAddressUpdate` mutation.

## Fields

* address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The updated address.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Address​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressUpdate)

  mutation

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress). You can modify any field of the address and optionally set it as the customer's default address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer whose address is being updated.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the address to update.

  * address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    Specifies the fields to use when updating the address.

  * set​As​Default

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether to set the address as the customer's default address.

  ***

***

## Map

### Mutations with this payload

* [customer​Address​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/customerAddressUpdate)
