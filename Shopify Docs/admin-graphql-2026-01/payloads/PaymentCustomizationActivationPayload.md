---
title: PaymentCustomizationActivationPayload - GraphQL Admin
description: Return type for `paymentCustomizationActivation` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentCustomizationActivationPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentCustomizationActivationPayload.md
---

# Payment​Customization​Activation​Payload

payload

Return type for `paymentCustomizationActivation` mutation.

## Fields

* ids

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The IDs of the updated payment customizations.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [payment​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationActivation)

  mutation

  Activates and deactivates payment customizations.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global IDs of the payment customizations.

  * enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    The enabled status of the payment customizations.

  ***

***

## Map

### Mutations with this payload

* [payment​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/types/paymentCustomizationActivation)
