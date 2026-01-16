---
title: MarketingActivityExternalStatus - GraphQL Admin
description: Set of possible statuses for an external marketing activity.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityExternalStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityExternalStatus.md
---

# Marketing​Activity​External​Status

enum

Set of possible statuses for an external marketing activity.

## Valid values

* ACTIVE

  This marketing activity is currently running.

* DELETED\_​EXTERNALLY

  This marketing activity was deleted and it was triggered from outside of Shopify.

* INACTIVE

  This marketing activity has completed running.

* PAUSED

  This marketing activity is currently not running.

* SCHEDULED

  This marketing activity is scheduled to run.

* UNDEFINED

  The marketing activity's status is unknown.

***

## Fields

* [Marketing​Activity​Create​External​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-status)

  INPUT OBJECT

  The input fields for creating an externally-managed marketing activity.

* [Marketing​Activity​Update​External​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-status)

  INPUT OBJECT

  The input fields required to update an externally managed marketing activity.

* [Marketing​Activity​Upsert​External​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-status)

  INPUT OBJECT

  The input fields for creating or updating an externally-managed marketing activity.

***

## Map

### Inputs with this enum

* [Marketing​Activity​Create​External​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-status)
* [Marketing​Activity​Update​External​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-status)
* [Marketing​Activity​Upsert​External​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-status)
