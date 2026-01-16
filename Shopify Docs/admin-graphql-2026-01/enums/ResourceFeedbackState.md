---
title: ResourceFeedbackState - GraphQL Admin
description: The state of the resource feedback.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceFeedbackState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceFeedbackState.md
---

# Resource​Feedback​State

enum

The state of the resource feedback.

## Valid values

* ACCEPTED

  No action required from merchant.

* REQUIRES\_​ACTION

  The merchant needs to resolve an issue with the resource.

***

## Fields

* [App​Feedback.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback#field-AppFeedback.fields.state)

  OBJECT

  Reports the status of shops and their resources and displays this information within Shopify admin. AppFeedback is used to notify merchants about steps they need to take to set up an app on their store.

* [Product​Resource​Feedback.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductResourceFeedback#field-ProductResourceFeedback.fields.state)

  OBJECT

  Reports the status of product for a Sales Channel or Storefront API. This might include why a product is not available in a Sales Channel and how a merchant might fix this.

* [Product​Resource​Feedback​Input.state](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductResourceFeedbackInput#fields-state)

  INPUT OBJECT

  The input fields used to create a product feedback.

* [Resource​Feedback​Create​Input.state](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ResourceFeedbackCreateInput#fields-state)

  INPUT OBJECT

  The input fields for a resource feedback object.

***

## Map

### Fields with this enum

* <-|[App​Feedback.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback#field-AppFeedback.fields.state)
* <-|[Product​Resource​Feedback.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductResourceFeedback#field-ProductResourceFeedback.fields.state)

### Inputs with this enum

* [Product​Resource​Feedback​Input.state](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductResourceFeedbackInput#fields-state)
* [Resource​Feedback​Create​Input.state](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ResourceFeedbackCreateInput#fields-state)
