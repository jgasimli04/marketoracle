---
title: PaymentCustomizationUpdatePayload - GraphQL Admin
description: Return type for `paymentCustomizationUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentCustomizationUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentCustomizationUpdatePayload.md
---

# Payment​Customization​Update​Payload

payload

Return type for `paymentCustomizationUpdate` mutation.

## Fields

* payment​Customization

  [Payment​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization)

  Returns the updated payment customization.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [payment​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationUpdate)

  mutation

  Updates a payment customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the payment customization.

  * payment​Customization

    [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

    required

    The input data used to update the payment customization.

  ***

***

## Map

### Mutations with this payload

* [payment​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/paymentCustomizationUpdate)
