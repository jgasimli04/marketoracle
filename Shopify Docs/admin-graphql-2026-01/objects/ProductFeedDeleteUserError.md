---
title: ProductFeedDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `ProductFeedDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedDeleteUserError.md
---

# Product​Feed​Delete​User​Error

object

An error that occurs during the execution of `ProductFeedDelete`.

## Fields

* code

  [Product​Feed​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductFeedDeleteUserErrorCode)

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

* [product​Feed​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedDelete)

  mutation

  Deletes a product feed for a specific publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product feed to be deleted.

  ***

***

## <\~> ProductFeedDeleteUserError Mutations

### Mutated by

* <\~>[product​Feed​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductFeedDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
