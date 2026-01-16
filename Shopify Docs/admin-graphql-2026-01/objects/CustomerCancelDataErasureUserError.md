---
title: CustomerCancelDataErasureUserError - GraphQL Admin
description: An error that occurs when cancelling a customer data erasure request.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCancelDataErasureUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCancelDataErasureUserError.md
---

# Customer​Cancel​Data​Erasure​User​Error

object

Requires `read_customer_data_erasure` access scope.

An error that occurs when cancelling a customer data erasure request.

## Fields

* code

  [Customer​Cancel​Data​Erasure​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerCancelDataErasureErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

## <\~> CustomerCancelDataErasureUserError Mutations

### Mutated by

* <\~>[customer​Cancel​Data​Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCancelDataErasure)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CustomerCancelDataErasureUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
