---
title: PaymentCustomizationDeletePayload - GraphQL Admin
description: Return type for `paymentCustomizationDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentCustomizationDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentCustomizationDeletePayload.md
---

# Payment​Customization​Delete​Payload

payload

Return type for `paymentCustomizationDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Returns the deleted payment customization ID.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [payment​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationDelete)

  mutation

  Deletes a payment customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the payment customization.

  ***

***

## Map

### Mutations with this payload

* [payment​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/paymentCustomizationDelete)
