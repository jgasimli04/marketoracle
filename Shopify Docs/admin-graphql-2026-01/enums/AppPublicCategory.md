---
title: AppPublicCategory - GraphQL Admin
description: The public-facing category for an app.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPublicCategory'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPublicCategory.md'
---

# App​Public​Category

enum

The public-facing category for an app.

## Valid values

* CUSTOM

  The app's public category is [custom](https://shopify.dev/apps/distribution#capabilities-and-requirements).

* OTHER

  The app's public category is other. An app is in this category if it's not classified under any of the other app types (private, public, or custom).

* PRIVATE

  The app's public category is [private](https://shopify.dev/apps/distribution#deprecated-app-types).

* PUBLIC

  The app's public category is [public](https://shopify.dev/apps/distribution#capabilities-and-requirements).

***

## Fields

* [App.publicCategory](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.publicCategory)

  OBJECT

  A Shopify application that extends store functionality. Apps integrate with Shopify through APIs to add features, automate workflows, or connect external services.

  Provides metadata about the app including its developer information and listing details in the Shopify App Store. Use the [`installation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.installation) field to determine if the app is currently installed on the shop and access installation-specific details like granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects. Check [`failedRequirements`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.failedRequirements) before installation to identify any prerequisites that must be met.

***

## Map

### Fields with this enum

* <-|[App.publicCategory](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.publicCategory)
