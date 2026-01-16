---
title: MarketingActivityCreateExternalInput - GraphQL Admin
description: The input fields for creating an externally-managed marketing activity.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput.md
---

# Marketing​Activity​Create​External​Input

input\_object

The input fields for creating an externally-managed marketing activity.

## Fields

* ad​Spend

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  The amount spent on the marketing activity.

* budget

  [Marketing​Activity​Budget​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityBudgetInput)

  The budget for this marketing activity.

* channel​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique string identifier of the channel to which this activity belongs. For the correct handle for your channel, contact your partner manager.

* end

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the activity ended. If omitted or set to `null`, the current time will be used if the status is set to `INACTIVE` or `DELETED_EXTERNALLY`.

* hierarchy​Level

  [Marketing​Activity​Hierarchy​Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityHierarchyLevel)

  The hierarchy level of the activity within a campaign. The hierarchy level can't be updated.

* marketing​Channel​Type

  [Marketing​Channel!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

  non-null

  The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.

* parent​Activity​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID for the parent marketing activity, if creating hierarchical activities.

* parent​Remote​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The remote ID for the parent marketing activity, if creating hierarchical activities.

* referring​Domain

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The domain from which ad clicks are forwarded to the shop.

* remote​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems.

* remote​Preview​Image​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL for a preview image that's used for the marketing activity.

* remote​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL for viewing and/or managing the activity outside of Shopify.

* scheduled​End

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the activity is scheduled to end.

* scheduled​Start

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the activity is scheduled to start.

* start

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the activity started. If omitted or set to `null`, the current time will be used.

* status

  [Marketing​Activity​External​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityExternalStatus)

  The status of the marketing activity. If status isn't set it will default to UNDEFINED.

* tactic

  [Marketing​Tactic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingTactic)

  non-null

  The method of marketing used for this marketing activity. The marketing tactic determines which default fields are included in the marketing activity.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the marketing activity.

* url​Parameter​Value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Value for a query parameter that gets inserted into storefront URLs for matching storefront traffic to this activity. This feature is currently available on a limited basis to some partners only. UTMs should continue to be used for most partners. Both the URL parameter value and UTM parameters can be set.

* utm

  [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

  Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Either the URL parameter value or UTM can be set, but not both.

* channel

  [Marketing​Channel](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

  Deprecated

***

## Map

No referencing types
