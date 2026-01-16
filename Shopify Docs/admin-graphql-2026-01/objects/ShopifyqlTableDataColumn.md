---
title: ShopifyqlTableDataColumn - GraphQL Admin
description: Represents a column in a ShopifyQL query response.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableDataColumn
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableDataColumn.md
---

# Shopifyql​Table​Data​Column

object

Requires `read_reports` access scope.

Represents a column in a ShopifyQL query response.

## Fields

* data​Type

  [Column​Data​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ColumnDataType)

  non-null

  The data type of the column.

* display​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable display name of the column.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the column.

* sub​Type

  [Column​Data​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/ColumnDataType)

  The sub type of an array column.

***

## Map

### Fields with this object

* {}[ShopifyqlTableData.columns](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableData#field-ShopifyqlTableData.fields.columns)
