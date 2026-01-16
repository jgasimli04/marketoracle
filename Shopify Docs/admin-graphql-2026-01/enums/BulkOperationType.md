---
title: BulkOperationType - GraphQL Admin
description: The valid values for the bulk operation's type.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationType.md'
---

# Bulk​Operation​Type

enum

The valid values for the bulk operation's type.

## Valid values

* MUTATION

  The bulk operation is a mutation.

* QUERY

  The bulk operation is a query.

***

## Fields

* [Bulk​Operation.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.type)

  OBJECT

  An asynchronous operation that exports large datasets or imports data in bulk. Create bulk operations using [bulkOperationRunQuery](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery) to export data or [bulkOperationRunMutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) to import data.

  After creation, check the [`status`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.status) field to track progress. When completed, the [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.url) field contains a link to download results in [JSONL](http://jsonlines.org/) format. The [`objectCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.objectCount) field shows the running total of processed objects, while [`rootObjectCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.rootObjectCount) tracks only root-level objects in nested queries.

  If an operation fails but retrieves partial data, then the [`partialDataUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.partialDataUrl) field provides access to incomplete results.

  ***

  Note

  `url` and `partialDataUrl` values expire after seven days.

  ***

  Learn more about [exporting](https://shopify.dev/docs/api/usage/bulk-operations/queries) and [importing](https://shopify.dev/docs/api/usage/bulk-operations/imports) data in bulk.

* [Query​Root.currentBulkOperation(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.currentBulkOperation.arguments.type)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [current​Bulk​Operation.type](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentBulkOperation#arguments-type)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Bulk​Operation.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.type)

### Arguments with this enum

* <-|[Query​Root.currentBulkOperation(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.currentBulkOperation.arguments.type)
* <-|[current​Bulk​Operation.type](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentBulkOperation#arguments-type)
