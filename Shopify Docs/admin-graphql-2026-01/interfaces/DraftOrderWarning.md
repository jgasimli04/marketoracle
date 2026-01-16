---
title: DraftOrderWarning - GraphQL Admin
description: >-
  A warning that is displayed to the merchant when a change is made to a draft
  order.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning.md
---

# Draft​Order​Warning

interface

Requires `read_draft_orders` access scope.

A warning that is displayed to the merchant when a change is made to a draft order.

## Fields

* error​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error code.

* field

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The input field that the warning applies to.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The warning message.

***

## Types implemented in

* [Draft​Order​Bundle​Added​Warning](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderBundleAddedWarning)

  OBJECT

  A warning indicating that a bundle was added to a draft order.

  * error​Code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error code.

  * field

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The input field that the warning applies to.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The warning message.

* [Draft​Order​Discount​Not​Applied​Warning](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderDiscountNotAppliedWarning)

  OBJECT

  A warning indicating that a discount cannot be applied to a draft order.

  * discount​Code

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The code of the discount that can't be applied.

  * discount​Title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The title of the discount that can't be applied.

  * error​Code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error code.

  * field

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The input field that the warning applies to.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The warning message.

  * price​Rule

    [Price​Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule)

    The price rule that can't be applied.

* [Draft​Order​Market​Region​Country​Code​Not​Supported​Warning](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderMarketRegionCountryCodeNotSupportedWarning)

  OBJECT

  A warning indicating that the market region country code is not supported with Markets.

  * error​Code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The error code.

  * field

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The input field that the warning applies to.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The warning message.

***

##### Variables

```json
{
	"errorCode": "",
	"field": "",
	"message": ""
}
```

##### Schema

```graphql
interface DraftOrderWarning {
  errorCode: String!
  field: String!
  message: String!
}
```
