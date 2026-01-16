---
title: QuantityPricingByVariantUpdateInput - GraphQL Admin
description: The input fields used to update quantity pricing.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput.md
---

# Quantity​Pricing​By​Variant​Update​Input

input\_object

The input fields used to update quantity pricing.

## Fields

* prices​To​Add

  [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

  required

  A list of fixed prices to add.

* prices​To​Delete​By​Variant​Id

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A list of variant IDs that identify which fixed prices to remove.

* quantity​Price​Breaks​To​Add

  [\[Quantity​Price​Break​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPriceBreakInput)

  required

  A list of quantity price breaks to add.

* quantity​Price​Breaks​To​Delete

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A list of quantity price break IDs that identify which quantity breaks to remove.

* quantity​Price​Breaks​To​Delete​By​Variant​Id

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of product variant IDs that identify which quantity breaks to remove.

* quantity​Rules​To​Add

  [\[Quantity​Rule​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityRuleInput)

  required

  A list of quantity rules to add.

* quantity​Rules​To​Delete​By​Variant​Id

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A list of variant IDs that identify which quantity rules to remove.

***

## Map

No referencing types
