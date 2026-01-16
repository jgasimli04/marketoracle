---
title: MetaobjectUpsertPayload - GraphQL Admin
description: Return type for `metaobjectUpsert` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectUpsertPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectUpsertPayload.md
---

# Metaobject​Upsert​Payload

payload

Return type for `metaobjectUpsert` mutation.

## Fields

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  The created or updated metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [metaobject​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert)

  mutation

  Creates or updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) based on its handle. If a metaobject with the specified handle exists, the mutation updates it with the provided field values. If no matching metaobject exists, the mutation creates a new one.

  The handle serves as a unique identifier within a metaobject type. Field values map to the [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s field keys and overwrite existing values during updates.

  * handle

    [Metaobject​Handle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectHandleInput)

    required

    ### Arguments

    The identifier of the metaobject to upsert.

  * metaobject

    [Metaobject​Upsert​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpsertInput)

    required

    The parameters to upsert the metaobject.

  ***

***

## Map

### Mutations with this payload

* [metaobject​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/types/metaobjectUpsert)
