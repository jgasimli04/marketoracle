---
title: BulkProductResourceFeedbackCreateUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `BulkProductResourceFeedbackCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkProductResourceFeedbackCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkProductResourceFeedbackCreateUserError.md
---

# Bulk​Product​Resource​Feedback​Create​User​Error

object

An error that occurs during the execution of `BulkProductResourceFeedbackCreate`.

## Fields

* code

  [Bulk​Product​Resource​Feedback​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkProductResourceFeedbackCreateUserErrorCode)

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

* [bulk​Product​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkProductResourceFeedbackCreate)

  mutation

  Creates product feedback for multiple products.

  * feedback​Input

    [\[Product​Resource​Feedback​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductResourceFeedbackInput)

    required

    ### Arguments

    An array of inputs to create the feedback. Limited to 50.

  ***

***

## <\~> BulkProductResourceFeedbackCreateUserError Mutations

### Mutated by

* <\~>[bulk​Product​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkProductResourceFeedbackCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-BulkProductResourceFeedbackCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
