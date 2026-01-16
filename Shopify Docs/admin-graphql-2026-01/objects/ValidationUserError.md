---
title: ValidationUserError - GraphQL Admin
description: An error that occurs during the execution of a validation mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError.md
---

# Validation​User​Error

object

Requires `read_validations` access scope.

An error that occurs during the execution of a validation mutation.

## Fields

* code

  [Validation​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ValidationUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [validation​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationCreate)

  mutation

  Creates a validation.

  * validation

    [Validation​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationCreateInput)

    required

    ### Arguments

    The input fields for a new validation.

  ***

* [validation​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationDelete)

  mutation

  Deletes a validation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID representing the installed validation.

  ***

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

## <\~> ValidationUserError Mutations

### Mutated by

* <\~>[validation​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationCreate)
* <\~>[validation​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationDelete)
* <\~>[validation​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ValidationUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
