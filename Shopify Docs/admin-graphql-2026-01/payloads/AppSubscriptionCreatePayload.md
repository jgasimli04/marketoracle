---
title: AppSubscriptionCreatePayload - GraphQL Admin
description: Return type for `appSubscriptionCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AppSubscriptionCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AppSubscriptionCreatePayload.md
---

# App​Subscription​Create​Payload

payload

Return type for `appSubscriptionCreate` mutation.

## Fields

* app​Subscription

  [App​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  The newly-created app subscription.

* confirmation​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL pointing to the page where the merchant approves or declines the charges for an app subscription.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [app​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate)

  mutation

  Creates a recurring or usage-based [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) that charges merchants for app features and services. The subscription includes one or more [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem) objects that define the pricing structure, billing intervals, and optional [`AppSubscriptionDiscount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount) values.

  Returns a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) where the merchant approves or declines the charges. After approval, the subscription becomes active and billing begins after any trial period expires. You can specify [`AppSubscriptionReplacementBehavior`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior) to control how this subscription interacts with existing active subscriptions.

  Learn more about [creating app subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-time-based-subscriptions).

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    A descriptive name for the app subscription.

  * line​Items

    [\[App​Subscription​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionLineItemInput)

    required

    Attaches one or more pricing plans to an app subscription. Only one pricing plan can be defined for each available type.

  * test

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the app subscription is a test transaction.

  * trial​Days

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of days of the free trial period, beginning on the day that the merchant approves the app charges.

  * return​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    The URL pointing to the page where the merchant is redirected after approving the app subscription.

  * replacement​Behavior

    [App​Subscription​Replacement​Behavior](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior)

    Default:STANDARD

    The replacement behavior when creating an app subscription for a merchant with an already existing app subscription.

  ***

***

## Map

### Mutations with this payload

* [app​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/appSubscriptionCreate)
