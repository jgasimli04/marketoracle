---
title: ResourceFeedbackCreateInput - GraphQL Admin
description: The input fields for a resource feedback object.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ResourceFeedbackCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ResourceFeedbackCreateInput.md
---

# Resource​Feedback​Create​Input

input\_object

The input fields for a resource feedback object.

## Fields

* feedback​Generated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the feedback was generated. Used to help determine whether incoming feedback is outdated compared to existing feedback.

* messages

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  If the feedback state is `requires_action`, then you can send a string message that communicates the action to be taken by the merchant. The string must be a single message up to 100 characters long and must end with a period. You need to adhere to the message formatting rules or your requests will fail:

  * `[Explanation of the problem]. [Suggested action].`

  **Examples:**

  * `[Your app name]` isn't connected. Connect your account to use this sales channel. `[Learn more]`
  * `[Your app name]` isn't configured. Agree to the terms and conditions to use this app. `[Learn more]` Both `Your app name` and `Learn more` (a button which directs merchants to your app) are automatically populated in the Shopify admin.

* state

  [Resource​Feedback​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceFeedbackState)

  non-null

  The state of the feedback and whether it requires merchant action.

***

## Map

No referencing types
