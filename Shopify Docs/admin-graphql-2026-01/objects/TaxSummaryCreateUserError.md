---
title: TaxSummaryCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `TaxSummaryCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxSummaryCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxSummaryCreateUserError.md
---

# Tax​Summary​Create​User​Error

object

An error that occurs during the execution of `TaxSummaryCreate`.

## Fields

* code

  [Tax​Summary​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxSummaryCreateUserErrorCode)

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

* [tax​Summary​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxSummaryCreate)

  mutation

  Creates a tax summary for a given order. If both an order ID and a start and end time are provided, the order ID will be used.

  * order​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the order to create the tax summary for.

  * start​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The start time of the range of orders to create the tax summary for.

  * end​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The end time of the range of orders to create the tax summary for.

  ***

***

## <\~> TaxSummaryCreateUserError Mutations

### Mutated by

* <\~>[tax​Summary​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxSummaryCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-TaxSummaryCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
