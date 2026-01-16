---
title: TaxPartnerState - GraphQL Admin
description: State of the tax app configuration.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxPartnerState'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxPartnerState.md'
---

# Tax​Partner​State

enum

State of the tax app configuration.

## Valid values

* ACTIVE

  App is configured and to be used for tax calculations.

* PENDING

  App is not configured.

* READY

  App is configured, but not used for tax calculations.

***

## Fields

* [Tax​App​Configuration.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfiguration#field-TaxAppConfiguration.fields.state)

  OBJECT

  Tax app configuration of a merchant.

***

## Map

### Fields with this enum

* <-|[Tax​App​Configuration.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfiguration#field-TaxAppConfiguration.fields.state)
