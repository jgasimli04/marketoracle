---
title: DataSaleOptOutUserError - GraphQL Admin
description: An error that occurs during the execution of `DataSaleOptOut`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DataSaleOptOutUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DataSaleOptOutUserError.md
---

# Data​Sale​Opt​Out​User​Error

object

An error that occurs during the execution of `DataSaleOptOut`.

## Fields

* code

  [Data​Sale​Opt​Out​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/DataSaleOptOutUserErrorCode)

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

* [data​Sale​Opt​Out](https://shopify.dev/docs/api/admin-graphql/latest/mutations/dataSaleOptOut)

  mutation

  Opt out a customer from data sale.

  * email

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The email address of the customer to opt out of data sale.

  ***

***

## <\~> DataSaleOptOutUserError Mutations

### Mutated by

* <\~>[data​Sale​Opt​Out](https://shopify.dev/docs/api/admin-graphql/latest/mutations/dataSaleOptOut)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-DataSaleOptOutUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
