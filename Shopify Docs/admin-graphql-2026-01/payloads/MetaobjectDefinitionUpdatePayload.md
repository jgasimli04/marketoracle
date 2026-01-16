---
title: MetaobjectDefinitionUpdatePayload - GraphQL Admin
description: Return type for `metaobjectDefinitionUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectDefinitionUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectDefinitionUpdatePayload.md
---

# Metaobject​Definition​Update​Payload

payload

Return type for `metaobjectDefinitionUpdate` mutation.

## Fields

* metaobject​Definition

  [Metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  The updated metaobject definition.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [metaobject​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionUpdate)

  mutation

  Updates a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s configuration and field structure. You can modify the definition's name, description, display name key, access controls, and capabilities, as well as those of all its fields.

  The mutation supports reordering fields when `resetFieldOrder` is `true`, which arranges submitted fields first followed by alphabetized omitted fields.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject definition to update.

  * definition

    [Metaobject​Definition​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionUpdateInput)

    required

    The input fields for updating a metaobject definition.

  ***

***

## Map

### Mutations with this payload

* [metaobject​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/metaobjectDefinitionUpdate)
