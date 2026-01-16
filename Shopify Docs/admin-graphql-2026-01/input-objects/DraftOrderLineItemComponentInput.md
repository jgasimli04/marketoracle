---
title: DraftOrderLineItemComponentInput - GraphQL Admin
description: The input fields representing the components of a line item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemComponentInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemComponentInput.md
---

# Draft​Order​Line​Item​Component​Input

input\_object

The input fields representing the components of a line item.

## Fields

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the component.

* uuid

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The UUID of the component. Must be unique and consistent across requests. This field is mandatory in order to manipulate drafts with parent line items.

* variant​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the product variant corresponding to the component.

***

## Input objects using this input

* [Draft​Order​Line​Item​Input.components](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-components)

  INPUT OBJECT

  The input fields for a line item included in a draft order.

***

## Map

### Input objects using this input

* [Draft​Order​Line​Item​Input.components](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-components)
