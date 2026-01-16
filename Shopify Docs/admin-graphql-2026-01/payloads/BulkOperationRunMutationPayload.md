---
title: BulkOperationRunMutationPayload - GraphQL Admin
description: Return type for `bulkOperationRunMutation` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BulkOperationRunMutationPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BulkOperationRunMutationPayload.md
---

# Bulk​Operation​Run​Mutation​Payload

payload

Return type for `bulkOperationRunMutation` mutation.

## Fields

* bulk​Operation

  [Bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  The newly created bulk operation.

* user​Errors

  [\[Bulk​Mutation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkMutationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [bulk​Operation​Run​Mutation](https://shopify.dev/docs/api/admin-graphql/latest/types/bulkOperationRunMutation)
