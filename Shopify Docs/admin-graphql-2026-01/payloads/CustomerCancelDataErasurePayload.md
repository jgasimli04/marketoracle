---
title: CustomerCancelDataErasurePayload - GraphQL Admin
description: Return type for `customerCancelDataErasure` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerCancelDataErasurePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerCancelDataErasurePayload.md
---

# Customer​Cancel​Data​Erasure​Payload

payload

Return type for `customerCancelDataErasure` mutation.

## Fields

* customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer whose pending data erasure has been cancelled.

* user​Errors

  [\[Customer​Cancel​Data​Erasure​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCancelDataErasureUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Cancel​Data​Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCancelDataErasure)

  mutation

  Cancels a pending erasure of a customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-requests#cancel-customer-data-erasure).

  To request an erasure of a customer's data use the [customerRequestDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerRequestDataErasure).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer for whom to cancel a pending data erasure.

  ***

***

## Map

### Mutations with this payload

* [customer​Cancel​Data​Erasure](https://shopify.dev/docs/api/admin-graphql/latest/types/customerCancelDataErasure)
