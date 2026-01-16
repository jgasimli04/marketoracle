---
title: CustomerPaymentMethodSendUpdateEmailPayload - GraphQL Admin
description: Return type for `customerPaymentMethodSendUpdateEmail` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodSendUpdateEmailPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodSendUpdateEmailPayload.md
---

# Customer​Payment​Method​Send​Update​Email​Payload

payload

Return type for `customerPaymentMethodSendUpdateEmail` mutation.

## Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer to whom an update payment method email was sent.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Payment​Method​Send​Update​Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodSendUpdateEmail)

  mutation

  Sends a link to the customer so they can update a specific payment method.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The payment method to be updated.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the payment method update email fields. Only the 'from' and 'bcc' fields are accepted for input.

  ***

***

## Map

### Mutations with this payload

* [customer​Payment​Method​Send​Update​Email](https://shopify.dev/docs/api/admin-graphql/latest/types/customerPaymentMethodSendUpdateEmail)
