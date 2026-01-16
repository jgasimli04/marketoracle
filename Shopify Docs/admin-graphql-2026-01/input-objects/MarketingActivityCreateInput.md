---
title: MarketingActivityCreateInput - GraphQL Admin
description: >-
  The input fields required to create a marketing activity. Marketing activity
  app extensions are deprecated and will be removed in the near future.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput.md
---

# Marketing​Activity​Create​Input

input\_object

The input fields required to create a marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

## Fields

* marketing​Activity​Extension​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the marketing activity extension.

* status

  [Marketing​Activity​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityStatus)

  non-null

  The current state of the marketing activity.

### Deprecated fields

* budget

  [Marketing​Activity​Budget​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityBudgetInput)

  Deprecated

* context

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* form​Data

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* marketing​Activity​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* url​Parameter​Value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* utm

  [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

  Deprecated

***

## Map

No referencing types
