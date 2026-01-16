---
title: CustomerRequestDataErasurePayload - GraphQL Admin
description: Return type for `customerRequestDataErasure` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerRequestDataErasurePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerRequestDataErasurePayload.md
---

# Customer​Request​Data​Erasure​Payload

payload

Return type for `customerRequestDataErasure` mutation.

## Fields

* customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer that will be erased.

* user​Errors

  [\[Customer​Request​Data​Erasure​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerRequestDataErasureUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Request​Data​Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRequestDataErasure)

  mutation

  Enqueues a request to erase customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-requests#erase-customer-personal-data).

  To cancel the data erasure request use the [customerCancelDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerCancelDataErasure).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to erase.

  ***

***

## Map

### Mutations with this payload

* [customer​Request​Data​Erasure](https://shopify.dev/docs/api/admin-graphql/latest/types/customerRequestDataErasure)
