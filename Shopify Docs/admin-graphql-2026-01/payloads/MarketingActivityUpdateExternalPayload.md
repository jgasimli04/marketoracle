---
title: MarketingActivityUpdateExternalPayload - GraphQL Admin
description: Return type for `marketingActivityUpdateExternal` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityUpdateExternalPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityUpdateExternalPayload.md
---

# Marketing​Activity​Update​External​Payload

payload

Return type for `marketingActivityUpdateExternal` mutation.

## Fields

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The updated marketing activity.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [marketing​Activity​Update​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal)

  mutation

  Update an external marketing activity.

  * input

    [Marketing​Activity​Update​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput)

    required

    ### Arguments

    The input field for updating an external marketing activity.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the marketing activity. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  * utm

    [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

    Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  ***

***

## Map

### Mutations with this payload

* [marketing​Activity​Update​External](https://shopify.dev/docs/api/admin-graphql/latest/types/marketingActivityUpdateExternal)
