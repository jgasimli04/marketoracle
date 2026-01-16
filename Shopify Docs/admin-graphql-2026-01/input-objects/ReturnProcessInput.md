---
title: ReturnProcessInput - GraphQL Admin
description: The input fields for processing a return.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput.md
---

# Return​Process​Input

input\_object

The input fields for processing a return.

## Fields

* exchange​Line​Items

  [\[Return​Process​Exchange​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessExchangeLineItemInput)

  Default:\[]

  The exchange line items list to be handled.

* financial​Transfer

  [Return​Process​Financial​Transfer​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessFinancialTransferInput)

  The financial transfer for the return.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note for the return.

* notify​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to notify the customer about the return.

* refund​Duties

  [\[Refund​Duty​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundDutyInput)

  Default:\[]

  The refund duties list to be handled.

* refund​Shipping

  [Refund​Shipping​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundShippingInput)

  The shipping cost to refund.

* return​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the return to be processed.

* return​Line​Items

  [\[Return​Process​Return​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessReturnLineItemInput)

  Default:\[]

  The return line items list to be handled.

* tip​Line​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  ID of the tip line item.

***

## Map

No referencing types
