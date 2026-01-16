---
title: MarketingActivityUpdateExternalInput - GraphQL Admin
description: The input fields required to update an externally managed marketing activity.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput.md
---

# Marketing​Activity​Update​External​Input

input\_object

The input fields required to update an externally managed marketing activity.

## Fields

* ad​Spend

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  The amount spent on the marketing activity.

* budget

  [Marketing​Activity​Budget​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityBudgetInput)

  The budget for this marketing activity.

* end

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the activity ended.

* marketing​Channel​Type

  [Marketing​Channel](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

  The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.

* referring​Domain

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The domain from which ad clicks are forwarded to the shop.

* remote​Preview​Image​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL for a preview image that's used for the marketing activity.

* remote​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL for viewing and/or managing the activity outside of Shopify.

* scheduled​End

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the activity is scheduled to end.

* scheduled​Start

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the activity is scheduled to start.

* start

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the activity started.

* status

  [Marketing​Activity​External​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityExternalStatus)

  The status of the marketing activity.

* tactic

  [Marketing​Tactic](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingTactic)

  The method of marketing used for this marketing activity. The marketing tactic determines which default fields are included in the marketing activity.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the marketing activity.

* channel

  [Marketing​Channel](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

  Deprecated

***

## Map

No referencing types
