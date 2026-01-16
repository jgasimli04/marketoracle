---
title: CheckoutProfileSortKeys - GraphQL Admin
description: The set of valid sort keys for the CheckoutProfile query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutProfileSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutProfileSortKeys.md
---

# Checkout​Profile​Sort​Keys

enum

The set of valid sort keys for the CheckoutProfile query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* EDITED\_​AT

  Sort by the `edited_at` value.

* ID

  Sort by the `id` value.

* IS\_​PUBLISHED

  Sort by the `is_published` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Query​Root.checkoutProfiles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.checkoutProfiles.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [checkout​Profiles.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutProfiles#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.checkoutProfiles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.checkoutProfiles.arguments.sortKey)
* <-|[checkout​Profiles.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutProfiles#arguments-sortKey)
