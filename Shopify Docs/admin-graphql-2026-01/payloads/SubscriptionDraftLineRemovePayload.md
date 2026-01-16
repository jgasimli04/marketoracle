---
title: SubscriptionDraftLineRemovePayload - GraphQL Admin
description: Return type for `subscriptionDraftLineRemove` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftLineRemovePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftLineRemovePayload.md
---

# Subscription​Draft​Line​Remove​Payload

payload

Return type for `subscriptionDraftLineRemove` mutation.

## Fields

* discounts​Updated

  [\[Subscription​Manual​Discount!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  The list of updated subscription discounts impacted by the removed line.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* line​Removed

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The removed Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Draft​Line​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)

  mutation

  Removes a subscription line from a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to remove a subscription line from.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to remove.

  ***

***

## Map

### Mutations with this payload

* [subscription​Draft​Line​Remove](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionDraftLineRemove)
