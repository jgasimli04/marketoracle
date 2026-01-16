---
title: CustomerMergeUserError - GraphQL Admin
description: An error that occurs while merging two customers.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeUserError.md
---

# Customer​Merge​User​Error

object

Requires `read_customer_merge` access scope.

An error that occurs while merging two customers.

## Fields

* code

  [Customer​Merge​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeErrorCode)

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

* [customer​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge)

  mutation

  Merges two customers.

  * customer​One​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the first customer that will be merged.

  * customer​Two​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the second customer that will be merged.

  * override​Fields

    [Customer​Merge​Override​Fields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerMergeOverrideFields)

    The fields to override the default customer merge rules.

  ***

***

## <\~> CustomerMergeUserError Mutations

### Mutated by

* <\~>[customer​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CustomerMergeUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
