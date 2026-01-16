---
title: ValidationCreatePayload - GraphQL Admin
description: Return type for `validationCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ValidationCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ValidationCreatePayload.md
---

# Validation​Create​Payload

payload

Return type for `validationCreate` mutation.

## Fields

* user​Errors

  [\[Validation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* validation

  [Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation)

  The created validation.

***

## Mutations with this payload

* [validation​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationCreate)

  mutation

  Creates a validation.

  * validation

    [Validation​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationCreateInput)

    required

    ### Arguments

    The input fields for a new validation.

  ***

***

## Map

### Mutations with this payload

* [validation​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/validationCreate)
