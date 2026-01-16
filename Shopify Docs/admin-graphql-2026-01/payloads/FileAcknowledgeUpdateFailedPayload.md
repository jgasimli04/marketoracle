---
title: FileAcknowledgeUpdateFailedPayload - GraphQL Admin
description: Return type for `fileAcknowledgeUpdateFailed` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FileAcknowledgeUpdateFailedPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FileAcknowledgeUpdateFailedPayload.md
---

# File​Acknowledge​Update​Failed​Payload

payload

Return type for `fileAcknowledgeUpdateFailed` mutation.

## Fields

* files

  [\[File!\]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

  The updated file(s).

* user​Errors

  [\[Files​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [file​Acknowledge​Update​Failed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileAcknowledgeUpdateFailed)

  mutation

  Acknowledges file update failure by resetting FAILED status to READY and clearing any media errors.

  * file​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the file(s) to acknowledge the failed updates of.

  ***

***

## Map

### Mutations with this payload

* [file​Acknowledge​Update​Failed](https://shopify.dev/docs/api/admin-graphql/latest/types/fileAcknowledgeUpdateFailed)
