---
title: CustomerMoment - GraphQL Admin
description: >-
  Represents a session preceding an order, often used for building a timeline of
  events leading to an order.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMoment'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMoment.md
---

# Customer​Moment

interface

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Represents a session preceding an order, often used for building a timeline of events leading to an order.

## Fields

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the customer's session occurred.

***

## Types implemented in

* [Customer​Visit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit)

  OBJECT

  A customer's session on the online store. Tracks how the [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) arrived at the store, including the landing page, referral source, and any associated marketing campaigns.

  The visit captures attribution data such as [`UTMParameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/UTMParameters), referral codes, and the [`MarketingEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent) that drove the session. This information helps merchants understand which marketing efforts successfully bring customers to their store.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * landing​Page

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    URL of the first page the customer landed on for the session.

  * landing​Page​Html

    [HTML](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

    Landing page information with URL linked in HTML. For example, the first page the customer visited was store.myshopify.com/products/1.

  * marketing​Event

    [Marketing​Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent)

    Represent actions taken by an app, on behalf of a merchant, to market Shopify resources such as products, collections, and discounts.

  * occurred​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the customer's session occurred.

  * referral​Code

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Marketing referral code from the link that the customer clicked to visit the store. Supports the following URL attributes: *ref*, *source*, or *r*. For example, if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.

  * referral​Info​Html

    [Formatted​String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

    non-null

    Referral information with URLs linked in HTML.

  * referrer​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    Webpage where the customer clicked a link that sent them to the online store. For example, *<https://randomblog.com/page1>* or *android-app\://com.google.android.gm*.

  * source

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    Source from which the customer visited the store, such as a platform (Facebook, Google), email, direct, a website domain, QR code, or unknown.

  * source​Description

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Describes the source explicitly for first or last session.

  * source​Type

    [Marketing​Tactic](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingTactic)

    Type of marketing tactic.

  * utm​Parameters

    [UTMParameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/UTMParameters)

    A set of UTM parameters gathered from the URL parameters of the referrer.

***

##### Variables

```json
{
	"occurredAt": ""
}
```

##### Schema

```graphql
interface CustomerMoment {
  occurredAt: DateTime!
}
```
