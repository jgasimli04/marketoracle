---
title: validationCreate - GraphQL Admin
description: Creates a validation.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationCreate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationCreate.md
---

# validation​Create

mutation

Requires `write_validations` access scope.

Creates a validation.

## Arguments

* validation

  [Validation​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationCreateInput)

  required

  The input fields for a new validation.

***

## Validation​Create​Payload returns

* user​Errors

  [\[Validation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* validation

  [Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation)

  The created validation.

***

## Examples

* ### validationCreate reference

## Mutation Reference

```graphql
mutation validationCreate($validation: ValidationCreateInput!) {
  validationCreate(validation: $validation) {
    userErrors {
      field
      message
    }
    validation {
      # Validation fields
    }
  }
}
```

## Input

##### Variables

```json
{
  "validation": {
    "functionHandle": "<your-functionHandle>",
    "enable": true,
    "blockOnFailure": true,
    "metafields": [
      {
        "id": "gid://shopify/<objectName>/10079785100",
        "namespace": "<your-namespace>",
        "key": "<your-key>",
        "value": "<your-value>",
        "type": "<your-type>"
      }
    ],
    "title": "<your-title>"
  }
}
```

##### Schema

```graphql
input ValidationCreateInput {
  functionHandle: String
  enable: Boolean
  blockOnFailure: Boolean
  metafields: [MetafieldInput!]
  title: String
}

input MetafieldInput {
  id: ID
  namespace: String
  key: String
  value: String
  type: String
}
```
