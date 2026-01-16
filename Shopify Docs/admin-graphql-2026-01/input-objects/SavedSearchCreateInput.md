---
title: SavedSearchCreateInput - GraphQL Admin
description: The input fields to create a saved search.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchCreateInput.md
---

# Saved​Search​Create​Input

input\_object

The input fields to create a saved search.

## Fields

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A descriptive name of the saved search.

* query

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The query string of a saved search. This includes search terms and filters.

* resource​Type

  [Search​Result​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SearchResultType)

  non-null

  The type of resource this saved search is searching in.

***

## Map

No referencing types
