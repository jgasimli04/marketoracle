---
title: ProductBundleMutationUserError - GraphQL Admin
description: Defines errors encountered while managing a product bundle.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleMutationUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleMutationUserError.md
---

# Product​Bundle​Mutation​User​Error

object

Defines errors encountered while managing a product bundle.

## Fields

* code

  [Product​Bundle​Mutation​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductBundleMutationUserErrorCode)

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

### Fields with this object

* {}[ProductBundleOperation.userErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation#field-ProductBundleOperation.fields.userErrors)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductBundleMutationUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
