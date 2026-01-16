---
title: MarketingEngagementCreatePayload - GraphQL Admin
description: Return type for `marketingEngagementCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingEngagementCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingEngagementCreatePayload.md
---

# Marketing​Engagement​Create​Payload

payload

Return type for `marketingEngagementCreate` mutation.

## Fields

* marketing​Engagement

  [Marketing​Engagement](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement)

  The marketing engagement that was created. This represents customer activity taken on a marketing activity or a marketing channel.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [marketing​Engagement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementCreate)

  mutation

  Creates a new marketing engagement for a marketing activity or a marketing channel.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The identifier of the marketing activity for which the engagement metrics are being provided. This or the remoteId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. This or the marketingActivityId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

  * channel​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The unique string identifier of the channel to which the engagement metrics are being provided. This should be set when and only when providing channel-level engagements. This should be nil when providing activity-level engagements. For the correct handle for your channel, contact your partner manager.

  * marketing​Engagement

    [Marketing​Engagement​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput)

    required

    The marketing engagement's attributes.

  ***

***

## Map

### Mutations with this payload

* [marketing​Engagement​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/marketingEngagementCreate)
