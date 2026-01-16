---
title: ArticleSortKeys - GraphQL Admin
description: The set of valid sort keys for the Article query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleSortKeys.md'
---

# Article​Sort​Keys

enum

The set of valid sort keys for the Article query.

## Valid values

* AUTHOR

  Sort by the `author` value.

* BLOG\_​TITLE

  Sort by the `blog_title` value.

* ID

  Sort by the `id` value.

* PUBLISHED\_​AT

  Sort by the `published_at` value.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Query​Root.articles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.articles.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [articles.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.articles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.articles.arguments.sortKey)
* <-|[articles.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-sortKey)
