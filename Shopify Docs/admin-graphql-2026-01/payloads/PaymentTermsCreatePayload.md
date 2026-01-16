---
title: PaymentTermsCreatePayload - GraphQL Admin
description: Return type for `paymentTermsCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentTermsCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentTermsCreatePayload.md
---

# Payment​Terms​Create​Payload

payload

Return type for `paymentTermsCreate` mutation.

## Fields

* payment​Terms

  [Payment​Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

  The created payment terms.

* user​Errors

  [\[Payment​Terms​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [payment​Terms​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsCreate)

  mutation

  Create payment terms on an order. To create payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * reference​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the reference orderId to add the payment terms for.

  * payment​Terms​Attributes

    [Payment​Terms​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsCreateInput)

    required

    The attributes used to create the payment terms.

  ***

***

## Map

### Mutations with this payload

* [payment​Terms​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/paymentTermsCreate)
