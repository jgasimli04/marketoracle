---
title: AppInstallationCategory - GraphQL Admin
description: |-
  The possible categories of an app installation, based on their purpose
  or the environment they can run in.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationCategory
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationCategory.md
---

# App​Installation​Category

enum

The possible categories of an app installation, based on their purpose or the environment they can run in.

## Valid values

* CHANNEL

  Apps that serve as channels through which sales are made, such as the online store.

* POS\_​EMBEDDED

  Apps that can be used in the POS mobile client.

***

## Fields

* [Query​Root.appInstallations(category)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.appInstallations.arguments.category)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [app​Installations.category](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallations#arguments-category)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.appInstallations(category)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.appInstallations.arguments.category)
* <-|[app​Installations.category](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallations#arguments-category)
