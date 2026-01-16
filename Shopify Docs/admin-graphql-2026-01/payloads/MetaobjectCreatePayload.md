---
title: MetaobjectCreatePayload - GraphQL Admin
description: Return type for `metaobjectCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectCreatePayload.md
---

# Metaobject​Create​Payload

payload

Return type for `metaobjectCreate` mutation.

## Fields

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  The created metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [metaobject​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectCreate)

  mutation

  Creates a metaobject entry based on an existing [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). The type must match a definition that already exists in the shop.

  Specify field values using key-value pairs that correspond to the field definitions. The mutation generates a unique handle automatically if you don't provide one. You can also configure capabilities like publishable status to control the metaobject's visibility across channels.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * metaobject

    [Metaobject​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCreateInput)

    required

    ### Arguments

    The parameters for the metaobject to create.

  ***

***

## Map

### Mutations with this payload

* [metaobject​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/metaobjectCreate)
