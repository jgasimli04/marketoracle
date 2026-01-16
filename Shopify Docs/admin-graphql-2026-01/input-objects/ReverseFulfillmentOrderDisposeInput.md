---
title: ReverseFulfillmentOrderDisposeInput - GraphQL Admin
description: The input fields to dispose a reverse fulfillment order line item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput.md
---

# Reverse​Fulfillment​Order​Dispose​Input

input\_object

The input fields to dispose a reverse fulfillment order line item.

## Fields

* disposition​Type

  [Reverse​Fulfillment​Order​Disposition​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReverseFulfillmentOrderDispositionType)

  non-null

  The final arrangement for the reverse fulfillment order line item.

* location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the location where the reverse fulfillment order line item is to be disposed. This is required when the disposition type is RESTOCKED.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the reverse fulfillment order line item to dispose.

* reverse​Fulfillment​Order​Line​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the reverse fulfillment order line item.

***

## Input objects using this input

* [Return​Process​Return​Line​Item​Input.dispositions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessReturnLineItemInput#fields-dispositions)

  INPUT OBJECT

  The input fields for a return line item.

***

## Map

### Input objects using this input

* [Return​Process​Return​Line​Item​Input.dispositions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessReturnLineItemInput#fields-dispositions)
