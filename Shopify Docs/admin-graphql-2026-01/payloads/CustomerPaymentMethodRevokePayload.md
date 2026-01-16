---
title: CustomerPaymentMethodRevokePayload - GraphQL Admin
description: Return type for `customerPaymentMethodRevoke` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodRevokePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodRevokePayload.md
---

# Customer​Payment​Method​Revoke​Payload

payload

Return type for `customerPaymentMethodRevoke` mutation.

## Fields

* revoked​Customer​Payment​Method​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the revoked customer payment method.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Payment​Method​Revoke](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRevoke)

  mutation

  Revokes a customer's payment method.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method to be revoked.

  ***

***

## Map

### Mutations with this payload

* [customer​Payment​Method​Revoke](https://shopify.dev/docs/api/admin-graphql/latest/types/customerPaymentMethodRevoke)
