---
title: MarketingActivityDeleteExternalPayload - GraphQL Admin
description: Return type for `marketingActivityDeleteExternal` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityDeleteExternalPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityDeleteExternalPayload.md
---

# Marketing​Activity​Delete​External​Payload

payload

Return type for `marketingActivityDeleteExternal` mutation.

## Fields

* deleted​Marketing​Activity​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the marketing activity that was deleted, if one was deleted.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [marketing​Activity​Delete​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityDeleteExternal)

  mutation

  Deletes an external marketing activity.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the marketing activity. A marketing activity ID or remote ID must be provided.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. A marketing activity ID or remote ID must be provided.

  ***

***

## Map

### Mutations with this payload

* [marketing​Activity​Delete​External](https://shopify.dev/docs/api/admin-graphql/latest/types/marketingActivityDeleteExternal)
