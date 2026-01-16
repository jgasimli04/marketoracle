---
title: ProductChangeStatusUserError - GraphQL Admin
description: An error that occurs during the execution of `ProductChangeStatus`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductChangeStatusUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductChangeStatusUserError.md
---

# Product​Change​Status​User​Error

object

An error that occurs during the execution of `ProductChangeStatus`.

## Fields

* code

  [Product​Change​Status​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductChangeStatusUserErrorCode)

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

* [product​Change​Status](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productChangeStatus)

  mutation

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * status

    [Product​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

    required

    The status to be assigned to the product.

  ***

***

## <\~> ProductChangeStatusUserError Mutations

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductChangeStatusUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
