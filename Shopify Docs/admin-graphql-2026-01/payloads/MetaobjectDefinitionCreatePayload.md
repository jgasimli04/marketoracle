---
title: MetaobjectDefinitionCreatePayload - GraphQL Admin
description: Return type for `metaobjectDefinitionCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectDefinitionCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectDefinitionCreatePayload.md
---

# Metaobject​Definition​Create​Payload

payload

Return type for `metaobjectDefinitionCreate` mutation.

## Fields

* metaobject​Definition

  [Metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  The created metaobject definition.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [metaobject​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionCreate)

  mutation

  Creates a metaobject definition that establishes the structure for custom data objects in your store. The definition specifies the fields, data types, and access permissions that all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries of this type share.

  Use the `type` field to create a unique namespace for your metaobjects. Prefix the type with `$app:` to reserve the definition for your app's exclusive use. The definition can include capabilities like publishable status or translation eligibility, to extend how metaobjects integrate with Shopify's features.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * definition

    [Metaobject​Definition​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionCreateInput)

    required

    ### Arguments

    The input fields for creating a metaobject definition.

  ***

***

## Map

### Mutations with this payload

* [metaobject​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/metaobjectDefinitionCreate)
