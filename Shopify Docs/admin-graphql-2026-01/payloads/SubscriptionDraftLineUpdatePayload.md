---
title: SubscriptionDraftLineUpdatePayload - GraphQL Admin
description: Return type for `subscriptionDraftLineUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftLineUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftLineUpdatePayload.md
---

# Subscription​Draft​Line​Update​Payload

payload

Return type for `subscriptionDraftLineUpdate` mutation.

## Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* line​Updated

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The updated Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Draft​Line​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)

  mutation

  Updates a subscription line on a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to update a subscription line from.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to update.

  * input

    [Subscription​Line​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineUpdateInput)

    required

    The properties of the new Subscription Line.

  ***

***

## Map

### Mutations with this payload

* [subscription​Draft​Line​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionDraftLineUpdate)
