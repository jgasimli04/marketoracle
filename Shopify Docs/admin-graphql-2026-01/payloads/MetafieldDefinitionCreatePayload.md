---
title: MetafieldDefinitionCreatePayload - GraphQL Admin
description: Return type for `metafieldDefinitionCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldDefinitionCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldDefinitionCreatePayload.md
---

# Metafield​Definition​Create​Payload

payload

Return type for `metafieldDefinitionCreate` mutation.

## Fields

* created​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was created.

* user​Errors

  [\[Metafield​Definition​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [metafield​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/metafieldDefinitionCreate)
