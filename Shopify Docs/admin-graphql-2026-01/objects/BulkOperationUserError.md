---
title: BulkOperationUserError - GraphQL Admin
description: >-
  An error in the input of a mutation. Mutations return `UserError` objects to
  indicate validation failures, such as invalid field values or business logic
  violations, that prevent the operation from completing.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationUserError.md
---

# Bulk​Operation​User​Error

object

An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

## Fields

* code

  [Bulk​Operation​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationUserErrorCode)

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

* [bulk​Operation​Run​Query](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery)

  mutation

  Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to fetch data asynchronously. The operation processes your GraphQL query in the background and returns results in a [JSONL](http://jsonlines.org/) file when complete.

  Apps can run one bulk query operation and one bulk mutation operation at a time per shop. The query must include at least one connection field and supports up to five connections with a maximum nesting depth of two levels.

  ***

  Note

  Results remain available for seven days after completion.

  ***

  For more information, see the [bulk operations guide](https://shopify.dev/docs/api/usage/bulk-operations/queries).

  * query

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The query to be executed in bulk.

  * group​Objects

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    requiredDefault:false

    Enables grouping objects directly under their corresponding parent objects in the JSONL output. Enabling grouping slows down bulk operations and increases the likelihood of timeouts. Only enable grouping if you depend on the grouped format.

  ***

***

## <\~> BulkOperationUserError Mutations

### Mutated by

* <\~>[bulk​Operation​Run​Query](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-BulkOperationUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
