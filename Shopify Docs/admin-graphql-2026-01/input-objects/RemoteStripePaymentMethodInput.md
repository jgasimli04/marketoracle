---
title: RemoteStripePaymentMethodInput - GraphQL Admin
description: The input fields for a remote stripe payment method.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RemoteStripePaymentMethodInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RemoteStripePaymentMethodInput.md
---

# Remote​Stripe​Payment​Method​Input

input\_object

The input fields for a remote stripe payment method.

## Fields

* customer​Id

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The customer\_id value from the Stripe API.

* payment​Method​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The payment\_method\_id value from the Stripe API. Starting on 2025, payment\_method\_id will become mandatory for all API versions.

***

## Input objects using this input

* [Customer​Payment​Method​Remote​Input.stripePaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput#fields-stripePaymentMethod)

  INPUT OBJECT

  The input fields for a remote gateway payment method, only one remote reference permitted.

***

## Map

### Input objects using this input

* [Customer​Payment​Method​Remote​Input.stripePaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput#fields-stripePaymentMethod)
