---
title: CustomerPaymentMethodPaypalBillingAgreementCreatePayload - GraphQL Admin
description: Return type for `customerPaymentMethodPaypalBillingAgreementCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodPaypalBillingAgreementCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodPaypalBillingAgreementCreatePayload.md
---

# Customer​Payment​Method​Paypal​Billing​Agreement​Create​Payload

payload

Return type for `customerPaymentMethodPaypalBillingAgreementCreate` mutation.

## Fields

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method.

* user​Errors

  [\[Customer​Payment​Method​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Payment​Method​Paypal​Billing​Agreement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementCreate)

  mutation

  Creates a PayPal billing agreement for a customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * billing​Address

    [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    The billing address.

  * billing​Agreement​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The billing agreement ID from PayPal that starts with 'B-' (for example, `B-1234XXXXX`).

  * inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the PayPal billing agreement is inactive.

  ***

***

## Map

### Mutations with this payload

* [customer​Payment​Method​Paypal​Billing​Agreement​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/customerPaymentMethodPaypalBillingAgreementCreate)
