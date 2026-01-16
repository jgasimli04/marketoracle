---
title: ContextualPricingContext - GraphQL Admin
description: >-
  The input fields for the context data that determines the pricing of a
  variant. Refer to
  [Product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product?example=Get+the+price+range+for+a+product+for+buyers+from+Canada)for
  more information on how to use this input object.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ContextualPricingContext
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ContextualPricingContext.md
---

# Contextual​Pricing​Context

input\_object

The input fields for the context data that determines the pricing of a variant. Refer to [Product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product?example=Get+the+price+range+for+a+product+for+buyers+from+Canada)for more information on how to use this input object.

## Fields

* company​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The CompanyLocation ID used to fetch company location specific prices.

* country

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The country code used to fetch country-specific prices.

* location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The Location ID used to fetch location specific prices.

***

## Map

No referencing types
