---
title: ReturnLineItemInput - GraphQL Admin
description: The input fields for a return line item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemInput.md
---

# Return​Line​Item​Input

input\_object

The input fields for a return line item.

## Fields

* fulfillment​Line​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the fulfillment line item to be returned. Specifically, this field expects a `FulfillmentLineItem.id`.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the item to be returned.

* restocking​Fee

  [Restocking​Fee​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RestockingFeeInput)

  The restocking fee to capture.

* return​Reason​Definition​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of a [`ReturnReasonDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition). Accepts any ID from the full library of reasons available via [`returnReasonDefinitions`](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions), not limited to the suggested reasons for the line item.

* return​Reason​Note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Default:""

  A note about the reason that the item is being returned. Maximum length: 255 characters.

* return​Reason

  [Return​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnReason)

  Deprecated

***

## Input objects using this input

* [Return​Input.returnLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnInput#fields-returnLineItems)

  INPUT OBJECT

  The input fields for a return.

***

## Map

### Input objects using this input

* [Return​Input.returnLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnInput#fields-returnLineItems)
