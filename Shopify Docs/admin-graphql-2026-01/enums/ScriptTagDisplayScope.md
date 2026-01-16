---
title: ScriptTagDisplayScope - GraphQL Admin
description: The page or pages on the online store where the script should be included.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ScriptTagDisplayScope
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ScriptTagDisplayScope.md
---

# Script​Tag​Display​Scope

enum

The page or pages on the online store where the script should be included.

## Valid values

* ONLINE\_​STORE

  Include the script only on the web storefront.

### Deprecated valid values

* ALL

  Deprecated

* ORDER\_​STATUS

  Deprecated

***

## Fields

* [Script​Tag.displayScope](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag#field-ScriptTag.fields.displayScope)

  OBJECT

  Theme app extensions

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  Script tag deprecation

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  A script tag represents remote JavaScript code that is loaded into the pages of a shop's storefront or the **Order status** page of checkout.

* [Script​Tag​Input.displayScope](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput#fields-displayScope)

  INPUT OBJECT

  The input fields for a script tag. This input object is used when creating or updating a script tag to specify its URL, where it should be included, and how it will be cached.

***

## Map

### Fields with this enum

* <-|[Script​Tag.displayScope](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag#field-ScriptTag.fields.displayScope)

### Inputs with this enum

* [Script​Tag​Input.displayScope](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput#fields-displayScope)
