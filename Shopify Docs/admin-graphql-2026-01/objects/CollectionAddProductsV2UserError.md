---
title: CollectionAddProductsV2UserError - GraphQL Admin
description: An error that occurs during the execution of `CollectionAddProductsV2`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionAddProductsV2UserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionAddProductsV2UserError.md
---

# Collection​Add​Products​V2User​Error

object

An error that occurs during the execution of `CollectionAddProductsV2`.

## Fields

* code

  [Collection​Add​Products​V2User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionAddProductsV2UserErrorCode)

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

* [collection​Add​Products​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProductsV2)

  mutation

  Adds products to a [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) asynchronously and returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to track the operation's progress. This mutation handles large product sets efficiently by processing them in the background.

  You can poll the returned job using the [`job`](https://shopify.dev/docs/api/admin-graphql/latest/queries/job) query to monitor completion status.

  ***

  Note

  This mutation adds products in the order specified in the [`productIds`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts#arguments-productIds) argument.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection that's being updated.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products that are being added to the collection. If the collection's sort order is manual, the products will be added in the order in which they are provided.

  ***

***

## <\~> CollectionAddProductsV2UserError Mutations

### Mutated by

* <\~>[collection​Add​Products​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProductsV2)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CollectionAddProductsV2UserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
