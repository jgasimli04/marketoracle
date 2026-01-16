---
title: AppSubscriptionTrialExtendPayload - GraphQL Admin
description: Return type for `appSubscriptionTrialExtend` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AppSubscriptionTrialExtendPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AppSubscriptionTrialExtendPayload.md
---

# App​Subscription​Trial​Extend​Payload

payload

Return type for `appSubscriptionTrialExtend` mutation.

## Fields

* app​Subscription

  [App​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  The app subscription that had its trial extended.

* user​Errors

  [\[App​Subscription​Trial​Extend​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionTrialExtendUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [app​Subscription​Trial​Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionTrialExtend)

  mutation

  Extends the trial period for an existing app subscription. Trial extensions give merchants additional time to use the app before committing to paid billing.

  Requires the subscription ID and the number of days to extend (between one and 1000). The extension modifies the existing trial end date, allowing continued access to subscription features without immediate billing. Returns the updated [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription).

  Learn more about [offering free trials](https://shopify.dev/docs/apps/launch/billing/offer-free-trials).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription to extend the trial for.

  * days

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The number of days to extend the trial. The value must be greater than 0 and less than or equal to 1000.

  ***

***

## Map

### Mutations with this payload

* [app​Subscription​Trial​Extend](https://shopify.dev/docs/api/admin-graphql/latest/types/appSubscriptionTrialExtend)
