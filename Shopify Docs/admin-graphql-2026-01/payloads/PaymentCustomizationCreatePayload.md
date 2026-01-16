---
title: PaymentCustomizationCreatePayload - GraphQL Admin
description: Return type for `paymentCustomizationCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentCustomizationCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentCustomizationCreatePayload.md
---

# Payment​Customization​Create​Payload

payload

Return type for `paymentCustomizationCreate` mutation.

## Fields

* payment​Customization

  [Payment​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization)

  Returns the created payment customization.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [payment​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationCreate)

  mutation

  Creates a payment customization.

  * payment​Customization

    [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

    required

    ### Arguments

    The input data used to create the payment customization.

  ***

***

## Map

### Mutations with this payload

* [payment​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/paymentCustomizationCreate)
