---
title: BundlesDraftOrderBundleLineItemComponentInput - GraphQL Admin
description: The input fields representing the components of a bundle line item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BundlesDraftOrderBundleLineItemComponentInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BundlesDraftOrderBundleLineItemComponentInput.md
---

# Bundles​Draft​Order​Bundle​Line​Item​Component​Input

input\_object

The input fields representing the components of a bundle line item.

## Fields

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the bundle component.

* uuid

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The UUID of the bundle component. Must be unique and consistent across requests. This field is mandatory in order to manipulate drafts with bundles.

* variant​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the product variant corresponding to the bundle component.

***

## Input objects using this input

* [Draft​Order​Line​Item​Input.bundleComponents](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-bundleComponents)

  INPUT OBJECT

  The input fields for a line item included in a draft order.

***

## Map

### Input objects using this input

* [Draft​Order​Line​Item​Input.bundleComponents](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-bundleComponents)
