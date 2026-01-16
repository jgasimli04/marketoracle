---
title: ShopifyqlTableData - GraphQL Admin
description: The result of a ShopifyQL query.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableData'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableData.md
---

# Shopifyql​Table​Data

object

Requires `read_reports` access scope.

The result of a ShopifyQL query.

## Fields

* columns

  [\[Shopifyql​Table​Data​Column!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableDataColumn)

  non-null

  The columns of the table.

* rows

  [JSON!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  non-null

  The rows of the table.

***

## Map

### Fields with this object

* {}[ShopifyqlQueryResponse.tableData](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlQueryResponse#field-ShopifyqlQueryResponse.fields.tableData)
