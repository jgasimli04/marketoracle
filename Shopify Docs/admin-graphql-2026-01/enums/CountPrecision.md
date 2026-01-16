---
title: CountPrecision - GraphQL Admin
description: The precision of the value returned by a count field.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CountPrecision'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CountPrecision.md'
---

# Count​Precision

enum

The precision of the value returned by a count field.

## Valid values

* AT\_​LEAST

  The count is at least the value. A limit was imposed and reached.

* EXACT

  The count is exactly the value. A write may not be reflected instantaneously.

***

## Fields

* [Count.precision](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count#field-Count.fields.precision)

  OBJECT

  A numeric count with precision information indicating whether the count is exact or an estimate.

***

## Map

### Fields with this enum

* <-|[Count.precision](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count#field-Count.fields.precision)
