---
title: TranslatableResourceType - GraphQL Admin
description: Specifies the type of resources that are translatable.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslatableResourceType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslatableResourceType.md
---

# Translatable​Resource​Type

enum

Specifies the type of resources that are translatable.

## Valid values

* ARTICLE

  A blog post. Translatable fields: `title`, `body_html`, `summary_html`, `handle`, `meta_title`, `meta_description`.

* ARTICLE\_​IMAGE

  An article image. Translatable fields: `alt`.

* BLOG

  A blog. Translatable fields: `title`, `handle`, `meta_title`, `meta_description`.

* COLLECTION

  A product collection. Translatable fields: `title`, `body_html`, `handle`, `meta_title`, `meta_description`.

* COLLECTION\_​IMAGE

  A collection image. Translatable fields: `alt`.

* DELIVERY\_​METHOD\_​DEFINITION

  The delivery method definition. For example, "Standard", or "Expedited". Translatable fields: `name`.

* EMAIL\_​TEMPLATE

  An email template. Translatable fields: `title`, `body_html`.

* FILTER

  A filter. Translatable fields: `label`.

* LINK

  A link to direct users. Translatable fields: `title`.

* MEDIA\_​IMAGE

  An image. Translatable fields: `alt`.

* MENU

  A category of links. Translatable fields: `title`.

* METAFIELD

  A Metafield. Translatable fields: `value`.

* METAOBJECT

  A Metaobject. Translatable fields are determined by the Metaobject type.

* ONLINE\_​STORE\_​THEME

  An online store theme. Translatable fields: `dynamic keys based on theme data`.

* ONLINE\_​STORE\_​THEME\_​APP\_​EMBED

  A theme app embed. Translatable fields: `dynamic keys based on theme data`.

* ONLINE\_​STORE\_​THEME\_​JSON\_​TEMPLATE

  A theme json template. Translatable fields: `dynamic keys based on theme data`.

* ONLINE\_​STORE\_​THEME\_​LOCALE\_​CONTENT

  Locale file content of an online store theme. Translatable fields: `dynamic keys based on theme data`.

* ONLINE\_​STORE\_​THEME\_​SECTION\_​GROUP

  A theme json section group. Translatable fields: `dynamic keys based on theme data`.

* ONLINE\_​STORE\_​THEME\_​SETTINGS\_​CATEGORY

  A theme setting category. Translatable fields: `dynamic keys based on theme data`.

* ONLINE\_​STORE\_​THEME\_​SETTINGS\_​DATA\_​SECTIONS

  Shared static sections of an online store theme. Translatable fields: `dynamic keys based on theme data`.

* PACKING\_​SLIP\_​TEMPLATE

  A packing slip template. Translatable fields: `body`.

* PAGE

  A page. Translatable fields: `title`, `body_html`, `handle`, `meta_title`, `meta_description`.

* PAYMENT\_​GATEWAY

  A payment gateway. Translatable fields: `name`, `message`, `before_payment_instructions`.

* PRODUCT

  An online store product. Translatable fields: `title`, `body_html`, `handle`, `product_type`, `meta_title`, `meta_description`.

* PRODUCT\_​OPTION

  An online store custom product property name. For example, "Size", "Color", or "Material". Translatable fields: `name`.

* PRODUCT\_​OPTION\_​VALUE

  The product option value names. For example, "Red", "Blue", and "Green" for a "Color" option. Translatable fields: `name`.

* SELLING\_​PLAN

  A selling plan. Translatable fields:`name`, `option1`, `option2`, `option3`, `description`.

* SELLING\_​PLAN\_​GROUP

  A selling plan group. Translatable fields: `name`, `option1`, `option2`, `option3`.

* SHOP

  A shop. Translatable fields: `meta_title`, `meta_description`.

* SHOP\_​POLICY

  A shop policy. Translatable fields: `body`.

***

## Fields

* [Translatable​Resource.nestedTranslatableResources(resourceType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-TranslatableResource.fields.nestedTranslatableResources.arguments.resourceType)

  ARGUMENT

  A resource in Shopify that contains fields available for translation into different languages. Accesses the resource's translatable content, existing [`Translation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation) objects, and any nested resources that can also be translated.

  The [`TranslatableContent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent) includes field keys, values, and digest hashes needed when [registering translations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister).

  You can retrieve translations for specific [`Locale`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale) and [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) configurations. Each translation includes an `outdated` flag indicating whether the original content has changed since that translation was last updated.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

* [Query​Root.translatableResources(resourceType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.translatableResources.arguments.resourceType)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [translatable​Resources.resourceType](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResources#arguments-resourceType)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Translatable​Resource.nestedTranslatableResources(resourceType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-TranslatableResource.fields.nestedTranslatableResources.arguments.resourceType)
* <-|[Query​Root.translatableResources(resourceType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.translatableResources.arguments.resourceType)
* <-|[translatable​Resources.resourceType](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResources#arguments-resourceType)
