---
title: DomainLocalization - GraphQL Admin
description: The country and language settings assigned to a domain.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DomainLocalization'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DomainLocalization.md
---

# Domain​Localization

object

The country and language settings assigned to a domain.

## Fields

* alternate​Locales

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The ISO codes for the domain’s alternate locales. For example, `["en"]`.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The ISO code for the country assigned to the domain. For example, `"CA"` or "\*" for a domain set to "Rest of world".

* default​Locale

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The ISO code for the domain’s default locale. For example, `"en"`.

***

## Map

### Fields with this object

* {}[Domain.localization](https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain#field-Domain.fields.localization)
