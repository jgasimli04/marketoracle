---
title: SubscriptionDraftLineAddPayload - GraphQL Admin
description: Return type for `subscriptionDraftLineAdd` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftLineAddPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftLineAddPayload.md
---

# Subscription​Draft​Line​Add​Payload

payload

Return type for `subscriptionDraftLineAdd` mutation.

## Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* line​Added

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The added Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Draft​Line​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)

  mutation

  Adds a subscription line to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to add a subscription line to.

  * input

    [Subscription​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput)

    required

    The properties of the new Subscription Line.

  ***

***

## Map

### Mutations with this payload

* [subscription​Draft​Line​Add](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionDraftLineAdd)
