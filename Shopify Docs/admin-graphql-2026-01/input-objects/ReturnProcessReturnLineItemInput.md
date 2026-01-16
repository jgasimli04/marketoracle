---
title: ReturnProcessReturnLineItemInput - GraphQL Admin
description: The input fields for a return line item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessReturnLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessReturnLineItemInput.md
---

# Return​Process​Return​Line​Item​Input

input\_object

The input fields for a return line item.

## Fields

* dispositions

  [\[Reverse​Fulfillment​Order​Dispose​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput)

  The dispositions for the return line item.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the return line item.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the return line item.

***

## Input objects using this input

* [Return​Process​Input.returnLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput#fields-returnLineItems)

  INPUT OBJECT

  The input fields for processing a return.

***

## Map

### Input objects using this input

* [Return​Process​Input.returnLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput#fields-returnLineItems)
