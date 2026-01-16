---
title: OrderCaptureInput - GraphQL Admin
description: >-
  The input fields for the authorized transaction to capture and the total
  amount to capture from it.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCaptureInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCaptureInput.md
---

# Order​Capture​Input

input\_object

The input fields for the authorized transaction to capture and the total amount to capture from it.

## Fields

* amount

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-null

  The amount to capture. The capture amount can't be greater than the amount of the authorized transaction.

* currency

  [Currency​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  The currency (in ISO format) that's used to capture the order. This must be the presentment currency (the currency used by the customer) and is a required field for orders where the currency and presentment currency differ.

* final​Capture

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Indicates whether this is to be the final capture for the order transaction. Only applies to Shopify Payments authorizations which are multi-capturable. If true, any uncaptured amount from the authorization will be voided after the capture is completed. If false, the authorization will remain open for future captures.

  For multi-capturable authorizations, this defaults to false if not provided. This field has no effect on authorizations which aren't multi-capturable (can only be captured once), or on other types of transactions.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the order to capture.

* parent​Transaction​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the authorized transaction to capture.

***

## Map

No referencing types
