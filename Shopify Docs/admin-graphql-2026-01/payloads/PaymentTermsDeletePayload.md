---
title: PaymentTermsDeletePayload - GraphQL Admin
description: Return type for `paymentTermsDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentTermsDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentTermsDeletePayload.md
---

# Payment​Terms​Delete​Payload

payload

Return type for `paymentTermsDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The deleted payment terms ID.

* user​Errors

  [\[Payment​Terms​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [payment​Terms​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsDelete)

  mutation

  Delete payment terms for an order. To delete payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * input

    [Payment​Terms​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsDeleteInput)

    required

    ### Arguments

    The input fields used to delete the payment terms.

  ***

***

## Map

### Mutations with this payload

* [payment​Terms​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/paymentTermsDelete)
