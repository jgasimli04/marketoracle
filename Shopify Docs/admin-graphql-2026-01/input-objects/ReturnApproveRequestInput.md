---
title: ReturnApproveRequestInput - GraphQL Admin
description: The input fields for approving a customer's return request.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnApproveRequestInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnApproveRequestInput.md
---

# Return​Approve​Request​Input

input\_object

The input fields for approving a customer's return request.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the return that's being approved.

* notify​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Notify the customer when a return request is approved. The customer will only receive a notification if `Order.email` is present.

* unprocessed

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  DeprecatedDefault:false

***

## Map

No referencing types
