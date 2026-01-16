---
title: BulkOperationStatus - GraphQL Admin
description: The valid values for the status of a bulk operation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationStatus'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationStatus.md
---

# Bulk​Operation​Status

enum

The valid values for the status of a bulk operation.

## Valid values

* CANCELED

  The bulk operation has been canceled.

* CANCELING

  Cancelation has been initiated on the bulk operation. There may be a short delay from when a cancelation starts until the operation is actually canceled.

* COMPLETED

  The bulk operation has successfully completed.

* CREATED

  The bulk operation has been created.

* EXPIRED

  The bulk operation URL has expired.

* FAILED

  The bulk operation has failed. For information on why the operation failed, use [BulkOperation.errorCode](https://shopify.dev/api/admin-graphql/latest/enums/bulkoperationerrorcode).

* RUNNING

  The bulk operation is runnning.

***

## Fields

* [Bulk​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.status)

  OBJECT

  An asynchronous operation that exports large datasets or imports data in bulk. Create bulk operations using [bulkOperationRunQuery](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery) to export data or [bulkOperationRunMutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) to import data.

  After creation, check the [`status`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.status) field to track progress. When completed, the [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.url) field contains a link to download results in [JSONL](http://jsonlines.org/) format. The [`objectCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.objectCount) field shows the running total of processed objects, while [`rootObjectCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.rootObjectCount) tracks only root-level objects in nested queries.

  If an operation fails but retrieves partial data, then the [`partialDataUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.partialDataUrl) field provides access to incomplete results.

  ***

  Note

  `url` and `partialDataUrl` values expire after seven days.

  ***

  Learn more about [exporting](https://shopify.dev/docs/api/usage/bulk-operations/queries) and [importing](https://shopify.dev/docs/api/usage/bulk-operations/imports) data in bulk.

***

## Map

### Fields with this enum

* <-|[Bulk​Operation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.status)
