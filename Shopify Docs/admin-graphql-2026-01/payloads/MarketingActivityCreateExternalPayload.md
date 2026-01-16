---
title: MarketingActivityCreateExternalPayload - GraphQL Admin
description: Return type for `marketingActivityCreateExternal` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityCreateExternalPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityCreateExternalPayload.md
---

# Marketing​Activity​Create​External​Payload

payload

Return type for `marketingActivityCreateExternal` mutation.

## Fields

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The external marketing activity that was created.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [marketing​Activity​Create​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreateExternal)

  mutation

  Creates a new external marketing activity.

  * input

    [Marketing​Activity​Create​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput)

    required

    ### Arguments

    The input field for creating an external marketing activity.

  ***

***

## Map

### Mutations with this payload

* [marketing​Activity​Create​External](https://shopify.dev/docs/api/admin-graphql/latest/types/marketingActivityCreateExternal)
