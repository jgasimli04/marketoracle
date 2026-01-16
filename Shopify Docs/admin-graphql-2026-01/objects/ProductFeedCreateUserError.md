---
title: ProductFeedCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `ProductFeedCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedCreateUserError.md
---

# Product​Feed​Create​User​Error

object

An error that occurs during the execution of `ProductFeedCreate`.

## Fields

* code

  [Product​Feed​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductFeedCreateUserErrorCode)

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

* [product​Feed​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedCreate)

  mutation

  Creates a product feed for a specific publication.

  * input

    [Product​Feed​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductFeedInput)

    ### Arguments

    The properties of the new product feed.

  ***

***

## <\~> ProductFeedCreateUserError Mutations

### Mutated by

* <\~>[product​Feed​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductFeedCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
