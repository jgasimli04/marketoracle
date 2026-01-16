---
title: ProductResourceFeedbackInput - GraphQL Admin
description: The input fields used to create a product feedback.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductResourceFeedbackInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductResourceFeedbackInput.md
---

# Product​Resource​Feedback​Input

input\_object

The input fields used to create a product feedback.

## Fields

* feedback​Generated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the payload is constructed. Used to help determine whether incoming feedback is outdated compared to feedback already received, and if it should be ignored upon arrival.

* messages

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A concise set of copy strings to be displayed to merchants. Used to guide merchants in resolving problems that your app encounters when trying to make use of their products. You can specify up to ten messages. Each message is limited to 100 characters.

* product​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the product that the feedback was created on.

* product​Updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The timestamp of the product associated with the feedback.

* state

  [Resource​Feedback​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceFeedbackState)

  non-null

  Whether the merchant needs to take action on the product.

***

## Map

No referencing types
