---
title: CustomerPaymentMethodRemoteCreatePayload - GraphQL Admin
description: Return type for `customerPaymentMethodRemoteCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodRemoteCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodRemoteCreatePayload.md
---

# Customer​Payment​Method​Remote​Create​Payload

payload

Return type for `customerPaymentMethodRemoteCreate` mutation.

## Fields

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method. Note that the returned payment method may initially be in an incomplete state. Developers should poll this payment method using the customerPaymentMethod query until all required payment details have been processed.

* user​Errors

  [\[Customer​Payment​Method​Remote​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodRemoteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Payment​Method​Remote​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRemoteCreate)

  mutation

  Creates a customer payment method using identifiers from remote payment gateways like Stripe, Authorize.Net, or Braintree. Imports existing payment methods from external gateways and associates them with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) objects in Shopify.

  The operation processes payment methods asynchronously. The returned [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod) initially has incomplete details while Shopify validates and processes the remote gateway information. Use the [`customerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerPaymentMethod) query to retrieve the payment method status until all details are available or the payment method is revoked.

  Learn more about [migrating customer payment methods from remote gateways](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/migrate-to-subscriptions-api/migrate-customer-information#step-2-import-payment-methods-for-customers).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * remote​Reference

    [Customer​Payment​Method​Remote​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput)

    required

    Remote gateway payment method details.

  ***

***

## Map

### Mutations with this payload

* [customer​Payment​Method​Remote​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/customerPaymentMethodRemoteCreate)
