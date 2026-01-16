---
title: MetaobjectUpdatePayload - GraphQL Admin
description: Return type for `metaobjectUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectUpdatePayload.md
---

# Metaobject​Update​Payload

payload

Return type for `metaobjectUpdate` mutation.

## Fields

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  The updated metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [metaobject​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate)

  mutation

  Updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) with new field values, handle, or capabilities. [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) are custom data structures that extend Shopify's data model.

  You can modify field values mapped to the metaobject's [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition), update the handle for a unique identifier, and adjust capabilities like publishing status. When updating the handle, you can optionally create a redirect from the old handle to maintain existing references.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to update.

  * metaobject

    [Metaobject​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpdateInput)

    required

    Specifies parameters to update on the metaobject.

  ***

***

## Map

### Mutations with this payload

* [metaobject​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/metaobjectUpdate)
