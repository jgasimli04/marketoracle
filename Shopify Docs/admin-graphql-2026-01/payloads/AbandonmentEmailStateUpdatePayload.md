---
title: AbandonmentEmailStateUpdatePayload - GraphQL Admin
description: Return type for `abandonmentEmailStateUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AbandonmentEmailStateUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/AbandonmentEmailStateUpdatePayload.md
---

# Abandonment​Email​State​Update​Payload

payload

Return type for `abandonmentEmailStateUpdate` mutation.

## Fields

* abandonment

  [Abandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment)

  The updated abandonment.

* user​Errors

  [\[Abandonment​Email​State​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentEmailStateUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [abandonment​Email​State​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentEmailStateUpdate)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the abandonment that needs to be updated.

  * email​State

    [Abandonment​Email​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentEmailState)

    required

    The new email state of the abandonment.

  * email​Sent​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time for when the email was sent, if that is the case.

  * email​State​Change​Reason

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The reason why the email was or was not sent.

  ***

***

## Map
