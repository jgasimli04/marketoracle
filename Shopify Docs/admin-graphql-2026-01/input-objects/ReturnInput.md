---
title: ReturnInput - GraphQL Admin
description: The input fields for a return.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnInput'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnInput.md
---

# Return​Input

input\_object

The input fields for a return.

## Fields

* exchange​Line​Items

  [\[Exchange​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemInput)

  The new line items to be added to the order.

* order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the order to be returned.

* requested​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The UTC date and time when the return was first solicited by the customer.

* return​Line​Items

  [\[Return​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemInput)

  required

  The return line items list to be handled.

* return​Shipping​Fee

  [Return​Shipping​Fee​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnShippingFeeInput)

  The return shipping fee to capture.

### Deprecated fields

* notify​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  DeprecatedDefault:false

* unprocessed

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  DeprecatedDefault:false

***

## Map

No referencing types
