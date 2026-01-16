---
title: BulkMutationUserError - GraphQL Admin
description: Represents an error that happens during execution of a bulk mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkMutationUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkMutationUserError.md
---

# Bulk​Mutation​User​Error

object

Represents an error that happens during execution of a bulk mutation.

## Fields

* code

  [Bulk​Mutation​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkMutationErrorCode)

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

* [bulk​Operation​Run​Mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation)

  mutation

  Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to import data asynchronously. This mutation executes a specified GraphQL mutation multiple times using input data from a [JSONL](http://jsonlines.org/) file that you've uploaded to Shopify.

  The operation processes each line in your JSONL file as a separate mutation execution. The operation delivers results in a JSONL file when it completes. You can run one bulk mutation operation at a time per shop, though a [`bulkOperationRunQuery`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery) operation can run simultaneously.

  Learn more about [bulk importing data](https://shopify.dev/docs/api/usage/bulk-operations/imports).

  * mutation

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The mutation to be executed in bulk.

  * staged​Upload​Path

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The staged upload path of the file containing mutation variables.

  * group​Objects

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:true

  * client​Identifier

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional identifier which may be used for querying.

  ***

***

## <\~> BulkMutationUserError Mutations

### Mutated by

* <\~>[bulk​Operation​Run​Mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-BulkMutationUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
