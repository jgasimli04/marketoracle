---
title: UTMInput - GraphQL Admin
description: >-
  Specifies the

  [Urchin Traffic Module (UTM)
  parameters](https://en.wikipedia.org/wiki/UTM_parameters)

  that are associated with a related marketing campaign.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput.md'
---

# UTMInput

input\_object

Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign.

## Fields

* campaign

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the UTM campaign.

* medium

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The UTM campaign medium.

* source

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the website or application where the referral link exists.

***

## Input objects using this input

* [Marketing​Activity​Create​External​Input.utm](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-utm)

  INPUT OBJECT

  The input fields for creating an externally-managed marketing activity.

* [Marketing​Activity​Create​Input.utm](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput#fields-utm)

  INPUT OBJECT

  The input fields required to create a marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

* [Marketing​Activity​Update​Input.utm](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput#fields-utm)

  INPUT OBJECT

  The input fields required to update a marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

* [Marketing​Activity​Upsert​External​Input.utm](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-utm)

  INPUT OBJECT

  The input fields for creating or updating an externally-managed marketing activity.

***

## Map

### Input objects using this input

* [Marketing​Activity​Create​External​Input.utm](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-utm)
* [Marketing​Activity​Create​Input.utm](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput#fields-utm)
* [Marketing​Activity​Update​Input.utm](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput#fields-utm)
* [Marketing​Activity​Upsert​External​Input.utm](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-utm)
