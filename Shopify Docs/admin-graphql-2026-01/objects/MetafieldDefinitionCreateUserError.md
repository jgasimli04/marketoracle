---
title: MetafieldDefinitionCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `MetafieldDefinitionCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionCreateUserError.md
---

# Metafield​Definition​Create​User​Error

object

An error that occurs during the execution of `MetafieldDefinitionCreate`.

## Fields

* code

  [Metafield​Definition​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionCreateUserErrorCode)

  The error code.

* element​Index

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The index of the array element that's causing the error.

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

* [metafield​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionCreate)

  mutation

  Creates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/MetafieldDefinition) that establishes structure and validation rules for metafields. The definition specifies the data type, validation constraints, and access permissions for metafields with a given namespace and key combination.

  When you create a new definition, the system validates any existing unstructured metafields matching the same owner type, namespace, and key against it. The system updates each valid metafield's type to match the definition. Invalid metafields remain unchanged but must conform to the definition when updated.

  Learn more about [creating metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * definition

    [Metafield​Definition​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput)

    required

    ### Arguments

    Specifies the input fields for a metafield definition.

  ***

***

## <\~> MetafieldDefinitionCreateUserError Mutations

### Mutated by

* <\~>[metafield​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MetafieldDefinitionCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
