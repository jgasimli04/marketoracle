---
title: MarketingActivityUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `MarketingActivityUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityUserErrorCode.md
---

# Marketing​Activity​User​Error​Code

enum

Possible error codes that can be returned by `MarketingActivityUserError`.

## Valid values

* ACTIVITY\_​NOT\_​EXTERNAL

  The marketing activity must be an external activity.

* CANNOT\_​DELETE\_​ACTIVITY\_​WITH\_​CHILD\_​EVENTS

  This activity has child activities and thus cannot be deleted. Child activities must be deleted before a parent activity.

* CANNOT\_​UPDATE\_​TACTIC\_​IF\_​ORIGINALLY\_​STOREFRONT\_​APP

  The activity's tactic can not be updated from STOREFRONT\_APP.

* CANNOT\_​UPDATE\_​TACTIC\_​TO\_​STOREFRONT\_​APP

  The activity's tactic can not be updated to STOREFRONT\_APP. This type of tactic can only be specified when creating a new activity.

* CURRENCY\_​CODE\_​MISMATCH\_​INPUT

  All currency codes provided in the input need to match.

* DELETE\_​JOB\_​ENQUEUED

  A mutation can not be ran because a job to delete all external activities has been enqueued, which happens either from calling the marketingActivitiesDeleteAllExternal mutation or as a result of an app uninstall.

* DELETE\_​JOB\_​FAILED\_​TO\_​ENQUEUE

  The job to delete all external activities failed to enqueue.

* IMMUTABLE\_​CHANNEL\_​HANDLE

  The channel handle value cannot be modified.

* IMMUTABLE\_​HIERARCHY\_​LEVEL

  The hierarchy level cannot be modified.

* IMMUTABLE\_​PARENT\_​ID

  The parent activity cannot be modified.

* IMMUTABLE\_​URL\_​PARAMETER

  The URL parameter value cannot be modified.

* IMMUTABLE\_​UTM\_​PARAMETERS

  The UTM parameters cannot be modified.

* INVALID

  The input value is invalid.

* INVALID\_​CHANNEL\_​HANDLE

  The channel handle is not recognized.

* INVALID\_​DELETE\_​ACTIVITY\_​EXTERNAL\_​ARGUMENTS

  Either the marketing activity ID or remote ID must be provided for the activity to be deleted.

* INVALID\_​DELETE\_​ENGAGEMENTS\_​ARGUMENTS

  Either the channel\_handle or delete\_engagements\_for\_all\_channels must be provided when deleting a marketing engagement.

* INVALID\_​MARKETING\_​ACTIVITY\_​EXTERNAL\_​ARGUMENTS

  Either the marketing activity ID, remote ID, or UTM must be provided.

* INVALID\_​MARKETING\_​ENGAGEMENT\_​ARGUMENT\_​MISSING

  No identifier found. For activity level engagement, either the marketing activity ID or remote ID must be provided. For channel level engagement, the channel handle must be provided.

* INVALID\_​MARKETING\_​ENGAGEMENT\_​ARGUMENTS

  For activity level engagement, either the marketing activity ID or remote ID must be provided. For channel level engagement, the channel handle must be provided.

* INVALID\_​REMOTE\_​ID

  The remote ID does not correspond to an existing activity.

* MARKETING\_​ACTIVITY\_​CURRENCY\_​CODE\_​MISMATCH

  The currency codes provided need to match the referenced marketing activity's currency code.

* MARKETING\_​ACTIVITY\_​DOES\_​NOT\_​EXIST

  Marketing activity does not exist.

* MARKETING\_​ACTIVITY\_​WITH\_​REMOTE\_​ID\_​ALREADY\_​EXISTS

  A marketing activity with the same remote ID already exists.

* MARKETING\_​ACTIVITY\_​WITH\_​URL\_​PARAMETER\_​VALUE\_​ALREADY\_​EXISTS

  A marketing activity with the same URL parameter value already exists.

* MARKETING\_​ACTIVITY\_​WITH\_​UTM\_​CAMPAIGN\_​ALREADY\_​EXISTS

  A marketing activity with the same UTM campaign, medium, and source already exists.

* MARKETING\_​EVENT\_​DOES\_​NOT\_​EXIST

  Marketing activity is not valid, the associated marketing event does not exist.

* NON\_​HIERARCHIAL\_​REQUIRES\_​UTM\_​URL\_​PARAMETER

  Non-hierarchical marketing activities must have UTM parameters or a URL parameter value.

* TAKEN

  The input value is already taken.

***

## Fields

* [Marketing​Activity​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError#field-MarketingActivityUserError.fields.code)

  OBJECT

  An error that occurs during the execution of marketing activity and engagement mutations.

***

## Map

### Fields with this enum

* <-|[Marketing​Activity​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError#field-MarketingActivityUserError.fields.code)
