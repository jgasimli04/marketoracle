---
title: MarketingTactic - GraphQL Admin
description: The available types of tactics for a marketing activity.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingTactic'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingTactic.md'
---

# Marketing​Tactic

enum

The available types of tactics for a marketing activity.

## Valid values

* ABANDONED\_​CART

  An abandoned cart recovery email.

* AD

  An ad, such as a Facebook ad.

* AFFILIATE

  An affiliate link.

* LINK

  A link.

* LOYALTY

  A loyalty program.

* MESSAGE

  A messaging app, such as Facebook Messenger.

* NEWSLETTER

  A newsletter.

* NOTIFICATION

  A notification in the Shopify admin.

* POST

  A blog post.

* RETARGETING

  A retargeting ad.

* SEO

  Search engine optimization.

* STOREFRONT\_​APP

  A popup on the online store.

* TRANSACTIONAL

  A transactional email.

***

## Fields

* [Customer​Visit.sourceType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.sourceType)

  OBJECT

  A customer's session on the online store. Tracks how the [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) arrived at the store, including the landing page, referral source, and any associated marketing campaigns.

  The visit captures attribution data such as [`UTMParameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/UTMParameters), referral codes, and the [`MarketingEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent) that drove the session. This information helps merchants understand which marketing efforts successfully bring customers to their store.

* [Marketing​Activity.tactic](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.tactic)

  OBJECT

  The marketing activity resource represents marketing that a merchant created through an app.

* [Marketing​Activity​Create​External​Input.tactic](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-tactic)

  INPUT OBJECT

  The input fields for creating an externally-managed marketing activity.

* [Marketing​Activity​Update​External​Input.tactic](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-tactic)

  INPUT OBJECT

  The input fields required to update an externally managed marketing activity.

* [Marketing​Activity​Upsert​External​Input.tactic](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-tactic)

  INPUT OBJECT

  The input fields for creating or updating an externally-managed marketing activity.

* [Marketing​Event.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent#field-MarketingEvent.fields.type)

  OBJECT

  Represents actions that market a merchant's store or products.

***

## Map

### Fields with this enum

* <-|[Customer​Visit.sourceType](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.sourceType)
* <-|[Marketing​Activity.tactic](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.tactic)
* <-|[Marketing​Event.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent#field-MarketingEvent.fields.type)

### Inputs with this enum

* [Marketing​Activity​Create​External​Input.tactic](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-tactic)
* [Marketing​Activity​Update​External​Input.tactic](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-tactic)
* [Marketing​Activity​Upsert​External​Input.tactic](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-tactic)
