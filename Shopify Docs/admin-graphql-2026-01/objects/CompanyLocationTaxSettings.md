---
title: CompanyLocationTaxSettings - GraphQL Admin
description: Represents the tax settings for a company location.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationTaxSettings
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationTaxSettings.md
---

# Company​Location​Tax​Settings

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Represents the tax settings for a company location.

## Fields

* tax​Exempt

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the location is exempt from taxes.

* tax​Exemptions

  [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

  non-null

  The list of tax exemptions applied to the location.

* tax​Registration​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The tax registration ID for the company location.

***

## Map

### Fields with this object

* {}[CompanyLocation.taxSettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.taxSettings)
