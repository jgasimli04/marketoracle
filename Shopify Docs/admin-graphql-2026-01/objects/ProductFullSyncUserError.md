---
title: ProductFullSyncUserError - GraphQL Admin
description: An error that occurs during the execution of `ProductFullSync`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFullSyncUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFullSyncUserError.md
---

# Product​Full​Sync​User​Error

object

An error that occurs during the execution of `ProductFullSync`.

## Fields

* code

  [Product​Full​Sync​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductFullSyncUserErrorCode)

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

* [product​Full​Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFullSync)

  mutation

  Runs the full product sync for a given shop.

  * before​Updated​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    ### Arguments

    Syncs only products that haven't changed since the specified timestamp.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The product feed which needs syncing.

  * updated​At​Since

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    Syncs only products that have changed since the specified timestamp.

  ***

***

## <\~> ProductFullSyncUserError Mutations

### Mutated by

* <\~>[product​Full​Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFullSync)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductFullSyncUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
