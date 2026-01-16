---
title: ValidationUpdatePayload - GraphQL Admin
description: Return type for `validationUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ValidationUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ValidationUpdatePayload.md
---

# Validation​Update​Payload

payload

Return type for `validationUpdate` mutation.

## Fields

* user​Errors

  [\[Validation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* validation

  [Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation)

  The updated validation.

***

## Mutations with this payload

* [validation​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationUpdate)

  mutation

  Update a validation.

  * validation

    [Validation​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationUpdateInput)

    required

    ### Arguments

    The input fields to update a validation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID representing the validation to update.

  ***

***

## Map

### Mutations with this payload

* [validation​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/validationUpdate)
