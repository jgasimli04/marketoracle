---
title: ReturnRequestInput - GraphQL Admin
description: The input fields for requesting a return.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRequestInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRequestInput.md
---

# Return​Request​Input

input\_object

The input fields for requesting a return.

## Fields

* order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the order that's being returned.

* return​Line​Items

  [\[Return​Request​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRequestLineItemInput)

  required

  The line items that are being handled in the return.

* return​Shipping​Fee

  [Return​Shipping​Fee​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnShippingFeeInput)

  The return shipping fee to capture.

***

## Map

No referencing types
