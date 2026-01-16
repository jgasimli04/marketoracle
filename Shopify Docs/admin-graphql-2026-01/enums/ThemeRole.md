---
title: ThemeRole - GraphQL Admin
description: The role of the theme.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole.md'
---

# Theme​Role

enum

The role of the theme.

## Valid values

* ARCHIVED

  The theme is archived if a merchant changes their plan and exceeds the maximum number of themes allowed. Archived themes can be downloaded by merchant, but can not be customized or published until the plan is upgraded.

* DEMO

  The theme is installed as a trial from the Shopify Theme Store. It can be customized using the theme editor, but access to the code editor and the ability to publish the theme are restricted until it is purchased.

* DEVELOPMENT

  The theme is automatically created by the CLI for previewing purposes when in a development session.

* LOCKED

  The theme is locked if it is identified as unlicensed. Customization and publishing are restricted until the merchant resolves the licensing issue.

* MAIN

  The currently published theme. There can only be one main theme at any time.

* UNPUBLISHED

  The theme is currently not published. It can be transitioned to the main role if it is published by the merchant.

* MOBILE

  Deprecated

***

## Fields

* [Online​Store​Theme.role](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.role)

  OBJECT

  A theme for display on the storefront. Themes control the visual appearance and functionality of the online store through templates, stylesheets, and assets that determine how [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), and other content display to customers.

  Each theme has a [role](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.role) that indicates its status. Main themes are live on the storefront, unpublished themes are inactive, demo themes require purchase before publishing, and development themes are temporary for previewing during development. The theme includes [translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.translations) for multi-language support.

* [Query​Root.themes(roles)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.themes.arguments.roles)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [theme​Create.role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role)

  ARGUMENT

* [themes.roles](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-roles)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Online​Store​Theme.role](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.role)

### Arguments with this enum

* <-|[Query​Root.themes(roles)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.themes.arguments.roles)
* <-|[theme​Create.role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role)
* <-|[themes.roles](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-roles)
