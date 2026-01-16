---
title: CustomerPaymentMethodPaypalBillingAgreementUpdatePayload - GraphQL Admin
description: Return type for `customerPaymentMethodPaypalBillingAgreementUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodPaypalBillingAgreementUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodPaypalBillingAgreementUpdatePayload.md
---

# Customer​Payment​Method​Paypal​Billing​Agreement​Update​Payload

payload

Return type for `customerPaymentMethodPaypalBillingAgreementUpdate` mutation.

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

* [customer​Payment​Method​Paypal​Billing​Agreement​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementUpdate)

  mutation

  Updates a PayPal billing agreement for a customer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    The billing address.

  ***

***

## Map

### Mutations with this payload

* [customer​Payment​Method​Paypal​Billing​Agreement​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/customerPaymentMethodPaypalBillingAgreementUpdate)
