---
title: MarketingActivityUpdatePayload - GraphQL Admin
description: Return type for `marketingActivityUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityUpdatePayload.md
---

# Marketing​Activity​Update​Payload

payload

Return type for `marketingActivityUpdate` mutation.

## Fields

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The updated marketing activity.

* redirect​Path

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The redirect path from the embedded editor to the Shopify admin.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [marketing​Activity​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdate)

  mutation

  Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.

  * input

    [Marketing​Activity​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput)

    required

    ### Arguments

    The Input of the marketing activity.

  ***

***

## Map

### Mutations with this payload

* [marketing​Activity​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/marketingActivityUpdate)
