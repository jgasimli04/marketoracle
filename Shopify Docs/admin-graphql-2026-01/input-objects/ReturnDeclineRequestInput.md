---
title: ReturnDeclineRequestInput - GraphQL Admin
description: The input fields for declining a customer's return request.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnDeclineRequestInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnDeclineRequestInput.md
---

# Return​Decline​Request​Input

input\_object

The input fields for declining a customer's return request.

## Fields

* decline​Note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The notification message that's sent to a customer about their declined return request. Maximum length: 500 characters.

* decline​Reason

  [Return​Decline​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnDeclineReason)

  non-null

  The reason why the merchant declined the customer's return request.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the return that's being declined.

* notify​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Notify the customer when a return request is declined. The customer will only receive a notification if `Order.email` is present.

***

## Map

No referencing types
