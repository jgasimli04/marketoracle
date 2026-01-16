---
title: CustomerPaymentMethodCreditCardUpdatePayload - GraphQL Admin
description: Return type for `customerPaymentMethodCreditCardUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodCreditCardUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodCreditCardUpdatePayload.md
---

# Customer​Payment​Method​Credit​Card​Update​Payload

payload

Return type for `customerPaymentMethodCreditCardUpdate` mutation.

## Fields

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method.

* processing

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  If the card verification result is processing. When this is true, customer\_payment\_method will be null.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Payment​Method​Credit​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardUpdate)

  mutation

  Updates the credit card payment method for a customer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    The billing address.

  * session​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Cardserver session ID.

  ***

***

## Map

### Mutations with this payload

* [customer​Payment​Method​Credit​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/customerPaymentMethodCreditCardUpdate)
