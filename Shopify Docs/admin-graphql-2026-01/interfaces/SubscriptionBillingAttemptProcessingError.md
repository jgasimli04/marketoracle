---
title: SubscriptionBillingAttemptProcessingError - GraphQL Admin
description: An error that prevented a billing attempt.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionBillingAttemptProcessingError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionBillingAttemptProcessingError.md
---

# Subscription​Billing​Attempt​Processing​Error

interface

An error that prevented a billing attempt.

## Fields

* code

  [Subscription​Billing​Attempt​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptErrorCode)

  non-null

  The code for the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  An explanation of the error.

***

## Types implemented in

* [Subscription​Billing​Attempt​Generic​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptGenericError)

  OBJECT

  A base error type that applies to all uncategorized error classes.

  * code

    [Subscription​Billing​Attempt​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptErrorCode)

    non-null

    The code for the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    An explanation of the error.

* [Subscription​Billing​Attempt​Insufficient​Stock​Product​Variants​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError)

  OBJECT

  An inventory error caused by an issue with one or more of the contract merchandise lines.

  * code

    [Subscription​Billing​Attempt​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptErrorCode)

    non-null

    The code for the error.

  * insufficient​Stock​Product​Variants

    [Product​Variant​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

    non-null

    A list of product variants that caused the insufficient inventory error.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    An explanation of the error.

* [Subscription​Billing​Attempt​Out​Of​Stock​Product​Variants​Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptOutOfStockProductVariantsError)

  OBJECT

  An inventory error caused by an issue with one or more of the contract merchandise lines.

  * code

    [Subscription​Billing​Attempt​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptErrorCode)

    non-null

    The code for the error.

  * message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    An explanation of the error.

  * out​Of​Stock​Product​Variants

    [Product​Variant​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

    non-nullDeprecated

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

***

##### Variables

```json
{
	"code": "",
	"message": ""
}
```

##### Schema

```graphql
interface SubscriptionBillingAttemptProcessingError {
  code: SubscriptionBillingAttemptErrorCode!
  message: String!
}
```
