---
title: MarketingActivityUpsertExternalPayload - GraphQL Admin
description: Return type for `marketingActivityUpsertExternal` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityUpsertExternalPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityUpsertExternalPayload.md
---

# Marketing​Activity​Upsert​External​Payload

payload

Return type for `marketingActivityUpsertExternal` mutation.

## Fields

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The external marketing activity that was created or updated.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [marketing​Activity​Upsert​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal)

  mutation

  Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed from an existing marketing activity.

  * input

    [Marketing​Activity​Upsert​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput)

    required

    ### Arguments

    The input field for creating or updating an external marketing activity.

  ***

***

## Map

### Mutations with this payload

* [marketing​Activity​Upsert​External](https://shopify.dev/docs/api/admin-graphql/latest/types/marketingActivityUpsertExternal)
