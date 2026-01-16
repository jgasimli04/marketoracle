---
title: PaymentTermsUpdatePayload - GraphQL Admin
description: Return type for `paymentTermsUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentTermsUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentTermsUpdatePayload.md
---

# Payment​Terms​Update​Payload

payload

Return type for `paymentTermsUpdate` mutation.

## Fields

* payment​Terms

  [Payment​Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

  The updated payment terms.

* user​Errors

  [\[Payment​Terms​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [payment​Terms​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsUpdate)

  mutation

  Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * input

    [Payment​Terms​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsUpdateInput)

    required

    ### Arguments

    The input fields used to update the payment terms.

  ***

***

## Map

### Mutations with this payload

* [payment​Terms​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/paymentTermsUpdate)
