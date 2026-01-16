---
title: RemoteBraintreePaymentMethodInput - GraphQL Admin
description: The input fields for a remote Braintree customer payment profile.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RemoteBraintreePaymentMethodInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RemoteBraintreePaymentMethodInput.md
---

# Remote​Braintree​Payment​Method​Input

input\_object

The input fields for a remote Braintree customer payment profile.

## Fields

* customer​Id

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The `customer_id` value from the Braintree API.

* payment​Method​Token

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The `payment_method_token` value from the Braintree API. Starting on 2025, payment\_method\_token will become mandatory for all API versions.

***

## Input objects using this input

* [Customer​Payment​Method​Remote​Input.braintreePaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput#fields-braintreePaymentMethod)

  INPUT OBJECT

  The input fields for a remote gateway payment method, only one remote reference permitted.

***

## Map

### Input objects using this input

* [Customer​Payment​Method​Remote​Input.braintreePaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput#fields-braintreePaymentMethod)
