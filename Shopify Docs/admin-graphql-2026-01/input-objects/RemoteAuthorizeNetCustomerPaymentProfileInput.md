---
title: RemoteAuthorizeNetCustomerPaymentProfileInput - GraphQL Admin
description: The input fields for a remote Authorize.net customer payment profile.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RemoteAuthorizeNetCustomerPaymentProfileInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RemoteAuthorizeNetCustomerPaymentProfileInput.md
---

# Remote​Authorize​Net​Customer​Payment​Profile​Input

input\_object

The input fields for a remote Authorize.net customer payment profile.

## Fields

* customer​Payment​Profile​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customerPaymentProfileId value from the Authorize.net API. Starting on 2025, customer\_payment\_profile\_id will become mandatory for all API versions.

* customer​Profile​Id

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The customerProfileId value from the Authorize.net API.

***

## Input objects using this input

* [Customer​Payment​Method​Remote​Input.authorizeNetCustomerPaymentProfile](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput#fields-authorizeNetCustomerPaymentProfile)

  INPUT OBJECT

  The input fields for a remote gateway payment method, only one remote reference permitted.

***

## Map

### Input objects using this input

* [Customer​Payment​Method​Remote​Input.authorizeNetCustomerPaymentProfile](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput#fields-authorizeNetCustomerPaymentProfile)
