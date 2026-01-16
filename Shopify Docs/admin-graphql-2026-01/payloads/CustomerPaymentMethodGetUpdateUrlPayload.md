---
title: CustomerPaymentMethodGetUpdateUrlPayload - GraphQL Admin
description: Return type for `customerPaymentMethodGetUpdateUrl` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodGetUpdateUrlPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerPaymentMethodGetUpdateUrlPayload.md
---

# Customer​Payment​Method​Get​Update​Url​Payload

payload

Return type for `customerPaymentMethodGetUpdateUrl` mutation.

## Fields

* update​Payment​Method​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL to redirect the customer to update the payment method.

* user​Errors

  [\[Customer​Payment​Method​Get​Update​Url​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetUpdateUrlUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Payment​Method​Get​Update​Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodGetUpdateUrl)

  mutation

  Returns a URL that allows the customer to update a specific payment method.

  Currently, `customerPaymentMethodGetUpdateUrl` only supports Shop Pay.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The payment method to be updated.

  ***

***

## Map

### Mutations with this payload

* [customer​Payment​Method​Get​Update​Url](https://shopify.dev/docs/api/admin-graphql/latest/types/customerPaymentMethodGetUpdateUrl)
