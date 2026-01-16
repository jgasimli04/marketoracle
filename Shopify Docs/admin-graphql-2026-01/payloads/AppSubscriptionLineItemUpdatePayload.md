---
title: AppSubscriptionLineItemUpdatePayload - GraphQL Admin
description: Return type for `appSubscriptionLineItemUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AppSubscriptionLineItemUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AppSubscriptionLineItemUpdatePayload.md
---

# App​Subscription​Line​Item​Update​Payload

payload

Return type for `appSubscriptionLineItemUpdate` mutation.

## Fields

* app​Subscription

  [App​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  The updated app subscription.

* confirmation​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL where the merchant approves or declines the updated app subscription line item.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [app​Subscription​Line​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionLineItemUpdate)

  mutation

  Updates the capped amount on usage-based billing for an [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem). Enables you to modify the maximum charge limit that prevents merchants from exceeding a specified threshold during their billing period.

  The mutation returns a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) where the merchant must approve the new pricing limit before it takes effect. Use this when adjusting usage limits based on merchant needs or changing pricing models.

  Learn more about [updating the maximum charge for a subscription](https://shopify.dev/docs/apps/launch/billing/subscription-billing/update-max-charge).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription line item to be updated.

  * capped​Amount

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The new maximum amount of usage charges that can be incurred within a subscription billing interval.

  ***

***

## Map

### Mutations with this payload

* [app​Subscription​Line​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/appSubscriptionLineItemUpdate)
