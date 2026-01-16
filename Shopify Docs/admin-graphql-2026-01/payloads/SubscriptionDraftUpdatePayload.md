---
title: SubscriptionDraftUpdatePayload - GraphQL Admin
description: Return type for `subscriptionDraftUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftUpdatePayload.md
---

# Subscription​Draft​Update​Payload

payload

Return type for `subscriptionDraftUpdate` mutation.

## Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Draft​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate)

  mutation

  Updates a Subscription Draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Draft to update.

  * input

    [Subscription​Draft​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput)

    required

    The properties of the new Subscription Contract.

  ***

***

## Map

### Mutations with this payload

* [subscription​Draft​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionDraftUpdate)
