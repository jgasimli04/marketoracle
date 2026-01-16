---
title: AppTransactionSortKeys - GraphQL Admin
description: The set of valid sort keys for the AppTransaction query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppTransactionSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppTransactionSortKeys.md
---

# App​Transaction​Sort​Keys

enum

The set of valid sort keys for the AppTransaction query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

***

## Fields

* [App​Installation.credits(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.credits.arguments.sortKey)

  ARGUMENT

  An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

* [App​Installation.oneTimePurchases(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases.arguments.sortKey)

  ARGUMENT

  An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

***

## Map

### Arguments with this enum

* <-|[App​Installation.credits(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.credits.arguments.sortKey)
* <-|[App​Installation.oneTimePurchases(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases.arguments.sortKey)
