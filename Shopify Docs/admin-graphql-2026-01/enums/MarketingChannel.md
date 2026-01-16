---
title: MarketingChannel - GraphQL Admin
description: >-
  The medium through which the marketing activity and event reached consumers.
  This is used for reporting aggregation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel.md'
---

# Marketing​Channel

enum

The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.

## Valid values

* DISPLAY

  Displayed ads.

* EMAIL

  Email.

* REFERRAL

  Referral links.

* SEARCH

  Paid search.

* SOCIAL

  Social media.

***

## Fields

* [Marketing​Activity.marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.marketingChannelType)

  OBJECT

  The marketing activity resource represents marketing that a merchant created through an app.

* [Marketing​Activity​Create​External​Input.channel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-channel)

  INPUT OBJECT

  The input fields for creating an externally-managed marketing activity.

* [Marketing​Activity​Create​External​Input.marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-marketingChannelType)

  INPUT OBJECT

  The input fields for creating an externally-managed marketing activity.

* [Marketing​Activity​Update​External​Input.channel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-channel)

  INPUT OBJECT

  The input fields required to update an externally managed marketing activity.

* [Marketing​Activity​Update​External​Input.marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-marketingChannelType)

  INPUT OBJECT

  The input fields required to update an externally managed marketing activity.

* [Marketing​Activity​Upsert​External​Input.marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-marketingChannelType)

  INPUT OBJECT

  The input fields for creating or updating an externally-managed marketing activity.

* [Marketing​Event.marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent#field-MarketingEvent.fields.marketingChannelType)

  OBJECT

  Represents actions that market a merchant's store or products.

### Deprecated fields

* [Marketing​Activity.marketingChannel](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.marketingChannel)

  OBJECT

  Deprecated

* [Marketing​Event.channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent#field-MarketingEvent.fields.channel)

  OBJECT

  Deprecated

***

## Map

### Fields with this enum

* <-|[Marketing​Activity.marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.marketingChannelType)
* <-|[Marketing​Event.marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent#field-MarketingEvent.fields.marketingChannelType)

### Inputs with this enum

* [Marketing​Activity​Create​External​Input.channel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-channel)
* [Marketing​Activity​Create​External​Input.marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-marketingChannelType)
* [Marketing​Activity​Update​External​Input.channel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-channel)
* [Marketing​Activity​Update​External​Input.marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-marketingChannelType)
* [Marketing​Activity​Upsert​External​Input.marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-marketingChannelType)
