---
title: AppDeveloperType - GraphQL Admin
description: Possible types of app developer.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/AppDeveloperType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/AppDeveloperType.md'
---

# App​Developer​Type

enum

Possible types of app developer.

## Valid values

* MERCHANT

  Indicates the app developer works directly for a Merchant.

* PARTNER

  Indicates the app developer is a Partner.

* SHOPIFY

  Indicates the app developer is Shopify.

* UNKNOWN

  Indicates the app developer is unknown. It is not categorized as any of the other developer types.

***

## Fields

* [App.developerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.developerType)

  OBJECT

  A Shopify application that extends store functionality. Apps integrate with Shopify through APIs to add features, automate workflows, or connect external services.

  Provides metadata about the app including its developer information and listing details in the Shopify App Store. Use the [`installation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.installation) field to determine if the app is currently installed on the shop and access installation-specific details like granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects. Check [`failedRequirements`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.failedRequirements) before installation to identify any prerequisites that must be met.

***

## Map

### Fields with this enum

* <-|[App.developerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.developerType)
