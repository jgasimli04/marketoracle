---
title: MetafieldOwnerType - GraphQL Admin
description: Possible types of a metafield's owner resource.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType.md
---

# Metafield​Owner​Type

enum

Possible types of a metafield's owner resource.

## Valid values

* API\_​PERMISSION

  The Api Permission metafield owner type.

* ARTICLE

  The Article metafield owner type.

* BLOG

  The Blog metafield owner type.

* CARTTRANSFORM

  The Cart Transform metafield owner type.

* COLLECTION

  The Collection metafield owner type.

* COMPANY

  The Company metafield owner type.

* COMPANY\_​LOCATION

  The Company Location metafield owner type.

* CUSTOMER

  The Customer metafield owner type.

* DELIVERY\_​CUSTOMIZATION

  The Delivery Customization metafield owner type.

* DISCOUNT

  The Discount metafield owner type.

* DRAFTORDER

  The draft order metafield owner type.

* FULFILLMENT\_​CONSTRAINT\_​RULE

  The Fulfillment Constraint Rule metafield owner type.

* GIFT\_​CARD\_​TRANSACTION

  The GiftCardTransaction metafield owner type.

* LOCATION

  The Location metafield owner type.

* MARKET

  The Market metafield owner type.

* ORDER

  The Order metafield owner type.

* ORDER\_​ROUTING\_​LOCATION\_​RULE

  The Order Routing Location Rule metafield owner type.

* PAGE

  The Page metafield owner type.

* PAYMENT\_​CUSTOMIZATION

  The Payment Customization metafield owner type.

* PRODUCT

  The Product metafield owner type.

* PRODUCTVARIANT

  The Product Variant metafield owner type.

* SELLING\_​PLAN

  The Selling Plan metafield owner type.

* SHOP

  The Shop metafield owner type.

* VALIDATION

  The Validation metafield owner type.

* MEDIA\_​IMAGE

  Deprecated

***

## Fields

* [Metafield.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.ownerType)

  OBJECT

  Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection). For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin-graphql/latest/interfaces/HasMetafields). Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers. Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.

* [Metafield​Definition.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.ownerType)

  OBJECT

  Defines the structure, validation rules, and permissions for [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects attached to a specific owner type. Each definition establishes a schema that metafields must follow, including the data type and validation constraints.

  The definition controls access permissions across different APIs, determines whether the metafield can be used for filtering or as a collection condition, and can be constrained to specific resource subtypes.

* [Metafield​Definition​Identifier.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionIdentifier#field-MetafieldDefinitionIdentifier.fields.ownerType)

  OBJECT

  Identifies a metafield definition by its owner type, namespace, and key.

* [Metafield​Definition​Identifier​Input.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput#fields-ownerType)

  INPUT OBJECT

  The input fields that identify metafield definitions.

* [Metafield​Definition​Input.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput#fields-ownerType)

  INPUT OBJECT

  The input fields required to create a metafield definition.

* [Metafield​Definition​Update​Input.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput#fields-ownerType)

  INPUT OBJECT

  The input fields required to update a metafield definition.

* [Standard​Metafield​Definition​Template.ownerTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate#field-StandardMetafieldDefinitionTemplate.fields.ownerTypes)

  OBJECT

  Standard metafield definition templates provide preset configurations to create metafield definitions. Each template has a specific namespace and key that we've reserved to have specific meanings for common use cases.

  Refer to the [list of standard metafield definitions](https://shopify.dev/apps/metafields/definitions/standard-definitions).

* [Query​Root.metafieldDefinitions(ownerType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.metafieldDefinitions.arguments.ownerType)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [standard​Metafield​Definition​Enable.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable#arguments-ownerType)

  ARGUMENT

* [metafield​Definitions.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions#arguments-ownerType)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Metafield.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.ownerType)
* <-|[Metafield​Definition.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.ownerType)
* <-|[Metafield​Definition​Identifier.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionIdentifier#field-MetafieldDefinitionIdentifier.fields.ownerType)
* <-|[Standard​Metafield​Definition​Template.ownerTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate#field-StandardMetafieldDefinitionTemplate.fields.ownerTypes)

### Inputs with this enum

* [Metafield​Definition​Identifier​Input.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput#fields-ownerType)
* [Metafield​Definition​Input.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput#fields-ownerType)
* [Metafield​Definition​Update​Input.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput#fields-ownerType)

### Arguments with this enum

* <-|[Query​Root.metafieldDefinitions(ownerType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.metafieldDefinitions.arguments.ownerType)
* <-|[standard​Metafield​Definition​Enable.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable#arguments-ownerType)
* <-|[metafield​Definitions.ownerType](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions#arguments-ownerType)
