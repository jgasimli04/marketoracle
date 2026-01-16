---
title: RefundInput - GraphQL Admin
description: The input fields to create a refund.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput.md
---

# Refund​Input

input\_object

The input fields to create a refund.

## Fields

* allow​Over​Refunding

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to allow the total refunded amount to surpass the amount paid for the order.

* currency

  [Currency​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  The currency that is used to refund the order. This must be the presentment currency, which is the currency used by the customer. This is a required field for orders where the currency and presentment currency differ.

* discrepancy​Reason

  [Order​Adjustment​Input​Discrepancy​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderAdjustmentInputDiscrepancyReason)

  An optional reason for a discrepancy between calculated and actual refund amounts.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An optional note that's attached to the refund.

* notify

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to send a refund notification to the customer.

* order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the order that's being refunded.

* processed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the refund is being processed. If not provided, it will be set to the current time.

* refund​Duties

  [\[Refund​Duty​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundDutyInput)

  A list of duties to refund.

* refund​Line​Items

  [\[Refund​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundLineItemInput)

  A list of line items to refund.

* refund​Methods

  [\[Refund​Method​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundMethodInput)

  Default:\[]

  A list of instructions to process the financial outcome of the refund.

* shipping

  [Shipping​Refund​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingRefundInput)

  The input fields that are required to reimburse shipping costs.

* transactions

  [\[Order​Transaction​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderTransactionInput)

  A list of transactions involved in the refund.

***

## Map

No referencing types
