---
title: MarketingActivityStatus - GraphQL Admin
description: >-
  Status helps to identify if this marketing activity has been completed,
  queued, failed etc.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityStatus.md
---

# Marketing​Activity​Status

enum

Status helps to identify if this marketing activity has been completed, queued, failed etc.

## Valid values

* ACTIVE

  This marketing activity is currently running.

* DELETED

  This marketing activity is permanently unavailable.

* DELETED\_​EXTERNALLY

  This marketing activity was deleted and it was triggered from outside of Shopify.

* DISCONNECTED

  This marketing activity is disconnected and no longer editable.

* DRAFT

  This marketing activity has been edited, but it is not yet created.

* FAILED

  This marketing activity is unable to run.

* INACTIVE

  This marketing activity has completed running.

* PAUSED

  This marketing activity is currently not running.

* PENDING

  This marketing activity is pending creation on the app's marketing platform.

* SCHEDULED

  This marketing activity is scheduled to run.

* UNDEFINED

  The marketing activity's status is unknown.

***

## Fields

* [Marketing​Activity.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.status)

  OBJECT

  The marketing activity resource represents marketing that a merchant created through an app.

* [Marketing​Activity.targetStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.targetStatus)

  OBJECT

  The marketing activity resource represents marketing that a merchant created through an app.

* [Marketing​Activity​Create​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput#fields-status)

  INPUT OBJECT

  The input fields required to create a marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

* [Marketing​Activity​Update​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput#fields-status)

  INPUT OBJECT

  The input fields required to update a marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

* [Marketing​Activity​Update​Input.targetStatus](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput#fields-targetStatus)

  INPUT OBJECT

  The input fields required to update a marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

***

## Map

### Fields with this enum

* <-|[Marketing​Activity.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.status)
* <-|[Marketing​Activity.targetStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.targetStatus)

### Inputs with this enum

* [Marketing​Activity​Create​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput#fields-status)
* [Marketing​Activity​Update​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput#fields-status)
* [Marketing​Activity​Update​Input.targetStatus](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput#fields-targetStatus)
