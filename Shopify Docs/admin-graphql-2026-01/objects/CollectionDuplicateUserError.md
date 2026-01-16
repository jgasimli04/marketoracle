---
title: CollectionDuplicateUserError - GraphQL Admin
description: Errors related to collection duplication.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionDuplicateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionDuplicateUserError.md
---

# Collection​Duplicate​User​Error

object

Errors related to collection duplication.

## Fields

* code

  [Collection​Duplicate​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionDuplicateUserErrorCode)

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

* [collection​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDuplicate)

  mutation

  Duplicates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  An existing collection ID and new title are required.

  ## Publication Duplication

  Publications may be excluded by passing `copyPublications: false` in the input.

  ## Metafields

  Metafield values are not duplicated if the unique values capability is enabled.

  * input

    [Collection​Duplicate​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDuplicateInput)

    required

    ### Arguments

    The input for duplicating a collection.

  ***

***

## <\~> CollectionDuplicateUserError Mutations

### Mutated by

* <\~>[collection​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDuplicate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CollectionDuplicateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
