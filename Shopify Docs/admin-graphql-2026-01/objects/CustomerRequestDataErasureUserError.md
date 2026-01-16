---
title: CustomerRequestDataErasureUserError - GraphQL Admin
description: An error that occurs when requesting a customer data erasure.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerRequestDataErasureUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerRequestDataErasureUserError.md
---

# Customer​Request​Data​Erasure​User​Error

object

Requires `read_customer_data_erasure` access scope.

An error that occurs when requesting a customer data erasure.

## Fields

* code

  [Customer​Request​Data​Erasure​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerRequestDataErasureErrorCode)

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

## <\~> CustomerRequestDataErasureUserError Mutations

### Mutated by

* <\~>[customer​Request​Data​Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRequestDataErasure)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CustomerRequestDataErasureUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
