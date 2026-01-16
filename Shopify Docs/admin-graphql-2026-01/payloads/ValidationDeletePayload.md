---
title: ValidationDeletePayload - GraphQL Admin
description: Return type for `validationDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ValidationDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ValidationDeletePayload.md
---

# Validation​Delete​Payload

payload

Return type for `validationDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Returns the deleted validation ID.

* user​Errors

  [\[Validation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [validation​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationDelete)

  mutation

  Deletes a validation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID representing the installed validation.

  ***

***

## Map

### Mutations with this payload

* [validation​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/validationDelete)
