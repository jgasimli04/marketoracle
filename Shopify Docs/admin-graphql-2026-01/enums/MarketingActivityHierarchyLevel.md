---
title: MarketingActivityHierarchyLevel - GraphQL Admin
description: Hierarchy levels for external marketing activities.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityHierarchyLevel
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityHierarchyLevel.md
---

# Marketing​Activity​Hierarchy​Level

enum

Hierarchy levels for external marketing activities.

## Valid values

* AD

  An advertisement activity. Must be parented by an ad group or a campaign activity, and must be assigned tracking parameters (URL or UTM).

* AD\_​GROUP

  A group of advertisement activities. Must be parented by a campaign activity.

* CAMPAIGN

  A campaign activity. May contain either ad groups or ads as child activities. If childless, then the campaign activity should have tracking parameters assigned (URL or UTM) otherwise it won't appear in marketing reports.

***

## Fields

* [Marketing​Activity.hierarchyLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.hierarchyLevel)

  OBJECT

  The marketing activity resource represents marketing that a merchant created through an app.

* [Marketing​Activity​Create​External​Input.hierarchyLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-hierarchyLevel)

  INPUT OBJECT

  The input fields for creating an externally-managed marketing activity.

* [Marketing​Activity​Upsert​External​Input.hierarchyLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-hierarchyLevel)

  INPUT OBJECT

  The input fields for creating or updating an externally-managed marketing activity.

***

## Map

### Fields with this enum

* <-|[Marketing​Activity.hierarchyLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.hierarchyLevel)

### Inputs with this enum

* [Marketing​Activity​Create​External​Input.hierarchyLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-hierarchyLevel)
* [Marketing​Activity​Upsert​External​Input.hierarchyLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-hierarchyLevel)
