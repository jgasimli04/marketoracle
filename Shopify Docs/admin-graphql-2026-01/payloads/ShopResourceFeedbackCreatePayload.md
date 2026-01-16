---
title: ShopResourceFeedbackCreatePayload - GraphQL Admin
description: Return type for `shopResourceFeedbackCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopResourceFeedbackCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShopResourceFeedbackCreatePayload.md
---

# Shop​Resource​Feedback​Create​Payload

payload

Return type for `shopResourceFeedbackCreate` mutation.

## Fields

* feedback

  [App​Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback)

  The shop feedback that's created.

* user​Errors

  [\[Shop​Resource​Feedback​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopResourceFeedbackCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [shop​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopResourceFeedbackCreate)

  mutation

  The `ResourceFeedback` object lets your app report the status of shops and their resources. For example, if your app is a marketplace channel, then you can use resource feedback to alert merchants that they need to connect their marketplace account by signing in.

  Resource feedback notifications are displayed to the merchant on the home screen of their Shopify admin, and in the product details view for any products that are published to your app.

  This resource should be used only in cases where you're describing steps that a merchant is required to complete. If your app offers optional or promotional set-up steps, or if it makes recommendations, then don't use resource feedback to let merchants know about them.

  ## Sending feedback on a shop

  You can send resource feedback on a shop to let the merchant know what steps they need to take to make sure that your app is set up correctly. Feedback can have one of two states: `requires_action` or `success`. You need to send a `requires_action` feedback request for each step that the merchant is required to complete.

  If there are multiple set-up steps that require merchant action, then send feedback with a state of `requires_action` as merchants complete prior steps. And to remove the feedback message from the Shopify admin, send a `success` feedback request.

  #### Important

  Sending feedback replaces previously sent feedback for the shop. Send a new `shopResourceFeedbackCreate` mutation to push the latest state of a shop or its resources to Shopify.

  * input

    [Resource​Feedback​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ResourceFeedbackCreateInput)

    required

    ### Arguments

    The fields required to create shop feedback.

  ***

***

## Map

### Mutations with this payload

* [shop​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/shopResourceFeedbackCreate)
