---
title: BulkOperationErrorCode - GraphQL Admin
description: Error codes for failed bulk operations.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationErrorCode.md
---

# Bulk​Operation​Error​Code

enum

Error codes for failed bulk operations.

## Valid values

* ACCESS\_​DENIED

  The provided operation `query` returned access denied due to missing [access scopes](https://shopify.dev/api/usage/access-scopes). Review the requested object permissions and execute the query as a normal non-bulk GraphQL request to see more details.

* INTERNAL\_​SERVER\_​ERROR

  The operation resulted in partial or incomplete data due to internal server errors during execution. These errors might be intermittent, so you can try performing the same query again.

* TIMEOUT

  The operation resulted in partial or incomplete data due to query timeouts during execution. In some cases, timeouts can be avoided by modifying your `query` to select fewer fields.

***

## Fields

* [Bulk​Operation.errorCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.errorCode)

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

* <-|[Bulk​Operation.errorCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.errorCode)
