---
title: stagedUploadTargetGenerate - GraphQL Admin
description: Generates the URL and signed paramaters needed to upload an asset to Shopify.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadTargetGenerate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadTargetGenerate.md
---

# staged​Upload​Target​Generate

mutation

Deprecated. Use [stagedUploadsCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadsCreate) instead.

Generates the URL and signed paramaters needed to upload an asset to Shopify.

## Arguments

* input

  [Staged​Upload​Target​Generate​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput)

  required

  The input fields for generating a staged upload.

***

## Staged​Upload​Target​Generate​Payload returns

* parameters

  [\[Mutations​Staged​Upload​Target​Generate​Upload​Parameter!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MutationsStagedUploadTargetGenerateUploadParameter)

  non-null

  The signed parameters that can be used to upload the asset.

* url

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The signed URL where the asset can be uploaded.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### stagedUploadTargetGenerate reference

## Mutation Reference

```graphql
mutation stagedUploadTargetGenerate($input: StagedUploadTargetGenerateInput!) {
  stagedUploadTargetGenerate(input: $input) {
    parameters {
      # MutationsStagedUploadTargetGenerateUploadParameter fields
    }
    url
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "input": {
    "resource": "COLLECTION_IMAGE",
    "filename": "<your-filename>",
    "mimeType": "<your-mimeType>",
    "httpMethod": "POST",
    "fileSize": "50"
  }
}
```

##### Schema

```graphql
input StagedUploadTargetGenerateInput {
  resource: StagedUploadTargetGenerateUploadResource!
  filename: String!
  mimeType: String!
  httpMethod: StagedUploadHttpMethodType
  fileSize: UnsignedInt64
}
```
