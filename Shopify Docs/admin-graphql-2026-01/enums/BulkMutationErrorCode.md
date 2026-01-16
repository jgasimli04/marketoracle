---
title: BulkMutationErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `BulkMutationUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkMutationErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkMutationErrorCode.md
---

# Bulk​Mutation​Error​Code

enum

Possible error codes that can be returned by `BulkMutationUserError`.

## Valid values

* INTERNAL\_​FILE\_​SERVER\_​ERROR

  There was a problem reading the JSONL file. This error might be intermittent, so you can try performing the same query again.

* INVALID\_​MUTATION

  The operation did not run because the mutation is invalid. Check your mutation syntax and try again.

* INVALID\_​STAGED\_​UPLOAD\_​FILE

  The JSONL file submitted via the `stagedUploadsCreate` mutation is invalid. Update the file and try again.

* LIMIT\_​REACHED

  Bulk operations limit reached. Please try again later.

* NO\_​SUCH\_​FILE

  The JSONL file could not be found. Try [uploading the file](https://shopify.dev/api/usage/bulk-operations/imports#generate-the-uploaded-url-and-parameters) again, and check that you've entered the URL correctly for the `stagedUploadPath` mutation argument.

* OPERATION\_​IN\_​PROGRESS

  The operation did not run because another bulk mutation is already running. [Wait for the operation to finish](https://shopify.dev/api/usage/bulk-operations/imports#wait-for-the-operation-to-finish) before retrying this operation.

***

## Fields

* [Bulk​Mutation​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkMutationUserError#field-BulkMutationUserError.fields.code)

  OBJECT

  Represents an error that happens during execution of a bulk mutation.

***

## Map

### Fields with this enum

* <-|[Bulk​Mutation​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkMutationUserError#field-BulkMutationUserError.fields.code)
