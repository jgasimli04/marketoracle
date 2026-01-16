---
title: CustomerPaymentMethodCreditCardCreatePayload - GraphQL Admin
description: Return type for `customerPaymentMethodCreditCardCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodCreditCardCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodCreditCardCreatePayload.md
---

# Customer​Payment​Method​Credit​Card​Create​Payload

payload

Return type for `customerPaymentMethodCreditCardCreate` mutation.

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

* [customer​Payment​Method​Credit​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardCreate)

  mutation

  Creates a credit card payment method for a customer using a session id. These values are only obtained through card imports happening from a PCI compliant environment. Please use customerPaymentMethodRemoteCreate if you are not managing credit cards directly.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    The billing address.

  * session​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Cardserver session ID. Obtained by storing card data with Shopify's Cardsink. Exchanging raw card data for a session ID must be done in a PCI complaint environment.

  ***

***

## Map

### Mutations with this payload

* [customer​Payment​Method​Credit​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/customerPaymentMethodCreditCardCreate)
