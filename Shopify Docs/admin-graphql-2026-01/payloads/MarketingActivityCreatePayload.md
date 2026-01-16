---
title: MarketingActivityCreatePayload - GraphQL Admin
description: Return type for `marketingActivityCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MarketingActivityCreatePayload.md
---

# Marketing​Activity​Create​Payload

payload

Return type for `marketingActivityCreate` mutation.

## Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

### Deprecated fields

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  Deprecated

* redirect​Path

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Mutations with this payload

* [marketing​Activity​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreate)

  mutation

  Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

  * input

    [Marketing​Activity​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput)

    required

    ### Arguments

    The Input of marketing activity create.

  ***

***

## Map

### Mutations with this payload

* [marketing​Activity​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/marketingActivityCreate)
