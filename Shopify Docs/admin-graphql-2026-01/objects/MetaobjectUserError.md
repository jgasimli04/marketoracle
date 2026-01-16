---
title: MetaobjectUserError - GraphQL Admin
description: Defines errors encountered while managing metaobject resources.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError.md
---

# Metaobject​User​Error

object

Defines errors encountered while managing metaobject resources.

## Fields

* code

  [Metaobject​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectUserErrorCode)

  The error code.

* element​Index

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The index of the failing list element in an array.

* element​Key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The key of the failing object element.

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

* [metaobject​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectBulkDelete)

  mutation

  Asynchronously delete metaobjects and their associated metafields in bulk.

  * where

    [Metaobject​Bulk​Delete​Where​Condition!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectBulkDeleteWhereCondition)

    required

    ### Arguments

    Specifies the condition by which metaobjects are deleted. Exactly one field of input is required.

  ***

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

* [metaobject​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionDelete)

  mutation

  Deletes the specified metaobject definition. Also deletes all related metafield definitions, metaobjects, and metafields asynchronously.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobjects definition to delete.

  ***

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

* [metaobject​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDelete)

  mutation

  Deletes the specified metaobject and its associated metafields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to delete.

  ***

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

* [standard​Metaobject​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetaobjectDefinitionEnable)

  mutation

  Enables the specified standard metaobject definition from its template.

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The type of the metaobject definition to enable.

  ***

***

## <\~> MetaobjectUserError Mutations

### Mutated by

* <\~>[metaobject​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectBulkDelete)
* <\~>[metaobject​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectCreate)
* <\~>[metaobject​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionCreate)
* <\~>[metaobject​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionDelete)
* <\~>[metaobject​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionUpdate)
* <\~>[metaobject​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDelete)
* <\~>[metaobject​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate)
* <\~>[metaobject​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert)
* <\~>[standard​Metaobject​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetaobjectDefinitionEnable)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MetaobjectUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
