---
title: AppPurchase - GraphQL Admin
description: Services and features purchased once by the store.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/AppPurchase'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/AppPurchase.md'
---

# App​Purchase

interface

Requires The staff member must have permission to manage app billing or approve app charges if authenticated with an online access token as described in <https://shopify.dev/apps/auth/oauth/access-modes>.

Services and features purchased once by the store.

## Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the app purchase occurred.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the app purchase.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount to be charged to the store for the app purchase.

* status

  [App​Purchase​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPurchaseStatus)

  non-null

  The status of the app purchase.

* test

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the app purchase is a test transaction.

***

## Types implemented in

* [App​Purchase​One​Time](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime)

  OBJECT

  Represents a one-time purchase of app services or features by a merchant, tracking the transaction details and status throughout the billing lifecycle. This object captures essential information about non-recurring charges, including price and merchant acceptance status.

  One-time purchases are particularly valuable for apps offering premium features, professional services, or digital products that don't require ongoing subscriptions. For instance, a photography app might sell premium filters as one-time purchases, while a marketing app could charge for individual campaign setups or advanced analytics reports.

  Use the `AppPurchaseOneTime` object to:

  * Track the status of individual feature purchases and service charges
  * Track payment status for premium content or digital products
  * Access purchase details to enable or disable features based on payment status

  The purchase status indicates whether the charge is pending merchant approval, has been accepted and processed, or was declined. This status tracking is crucial for apps that need to conditionally enable features based on successful payment completion.

  Purchase records include creation timestamps, pricing details, and test flags to distinguish between production charges and development testing. The test flag ensures that development and staging environments don't generate actual charges while maintaining realistic billing flow testing.

  For detailed implementation patterns and billing best practices, see the [one-time-charges page](https://shopify.dev/docs/apps/launch/billing/one-time-charges).

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the app purchase occurred.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the app purchase.

  * price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The amount to be charged to the store for the app purchase.

  * status

    [App​Purchase​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPurchaseStatus)

    non-null

    The status of the app purchase.

  * test

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the app purchase is a test transaction.

***

##### Variables

```json
{
	"createdAt": "",
	"name": "",
	"price": "",
	"status": "",
	"test": ""
}
```

##### Schema

```graphql
interface AppPurchase {
  createdAt: DateTime!
  name: String!
  price: MoneyV2!
  status: AppPurchaseStatus!
  test: Boolean!
}
```
