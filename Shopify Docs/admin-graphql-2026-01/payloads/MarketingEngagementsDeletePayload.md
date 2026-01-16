---
title: MarketingEngagementsDeletePayload - GraphQL Admin
description: Return type for `marketingEngagementsDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingEngagementsDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingEngagementsDeletePayload.md
---

# Marketing​Engagements​Delete​Payload

payload

Return type for `marketingEngagementsDelete` mutation.

## Fields

* result

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Informational message about the engagement data that has been marked for deletion.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [marketing​Engagements​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementsDelete)

  mutation

  Marks channel-level engagement data such that it no longer appears in reports. Activity-level data cannot be deleted directly, instead the MarketingActivity itself should be deleted to hide it from reports.

  * channel​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The handle of the channel for which engagement data should be deleted.

  * delete​Engagements​For​All​Channels

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    When true, engagements for all channels that belong to the api client will be deleted.

  ***

***

## Map

### Mutations with this payload

* [marketing​Engagements​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/marketingEngagementsDelete)
