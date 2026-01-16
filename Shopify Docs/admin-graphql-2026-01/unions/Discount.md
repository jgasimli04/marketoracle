---
title: Discount - GraphQL Admin
description: >-
  A discount offers promotional value and can be applied by entering a code or
  automatically when conditions are met. Discounts can provide fixed amounts,
  percentage reductions, free shipping, or Buy X Get Y (BXGY) benefits on
  specific products or the entire order. For more complex scenarios, developers
  can use Function-backed discounts to create custom discount configurations.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/Discount'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/Discount.md'
---

# Discount

union

Requires Apps must have `read_discounts` access scope.

A discount offers promotional value and can be applied by entering a code or automatically when conditions are met. Discounts can provide fixed amounts, percentage reductions, free shipping, or Buy X Get Y (BXGY) benefits on specific products or the entire order. For more complex scenarios, developers can use Function-backed discounts to create custom discount configurations.

## Possible types

* [Discount​Automatic​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp)

  OBJECT

  The `DiscountAutomaticApp` object stores information about automatic discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountAutomaticApp`when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  The [`DiscountCodeApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp) object has similar functionality to the `DiscountAutomaticApp` object, with the exception that `DiscountCodeApp` stores information about discount codes that are managed by an app using Shopify Functions.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

  * app​Discount​Type

    [App​Discount​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType)

    non-null

    The details about the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types). This information includes the app extension's name and [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets), [App Bridge configuration](https://shopify.dev/docs/api/app-bridge), [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations), [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries), and other metadata about the discount type, including the discount type's name and description.

  * applies​On​One​Time​Purchase

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount applies on one-time purchases.

  * applies​On​Subscription

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

  * async​Usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

  * combines​With

    [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

    non-null

    The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

  * context

    [Discount​Context!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)

    non-null

    The context defining which buyers can use the discount.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was created.

  * discount​Classes

    [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-null

    The classes of the discount.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The [globally-unique ID](https://shopify.dev/docs/api/usage/gids) for the discount.

  * ends​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

  * error​History

    [Functions​Error​History](https://shopify.dev/docs/api/admin-graphql/latest/objects/FunctionsErrorHistory)

    The [error history](https://shopify.dev/docs/apps/build/functions/monitoring-and-errors) for the latest version of the discount type that the app provides.

  * recurring​Cycle​Limit

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

  * starts​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount becomes active and is available to customers.

  * status

    [Discount​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

    non-null

    The status of the discount that describes its availability, expiration, or pending activation.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The discount's name that displays to merchants in the Shopify admin and to customers.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was updated.

  * discount​Class

    [Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-nullDeprecated

* [Discount​Automatic​Basic](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic)

  OBJECT

  The `DiscountAutomaticBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are automatically applied on a cart and at checkout. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountAutomaticBasic` object stores information about automatic amount off discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic) object has similar functionality to the `DiscountAutomaticBasic` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

  * async​Usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

  * combines​With

    [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

    non-null

    The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

  * context

    [Discount​Context!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)

    non-null

    The context defining which buyers can use the discount.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was created.

  * customer​Gets

    [Discount​Customer​Gets!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets)

    non-null

    The items in the order that qualify for the discount, their quantities, and the total value of the discount.

  * discount​Classes

    [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-null

    The classes of the discount.

  * ends​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

  * minimum​Requirement

    [Discount​Minimum​Requirement](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountMinimumRequirement)

    The minimum subtotal or quantity of items that are required for the discount to be applied.

  * recurring​Cycle​Limit

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

  * short​Summary

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    An abbreviated version of the discount [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-summary) field.

  * starts​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount becomes active and is available to customers.

  * status

    [Discount​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

    non-null

    The status of the discount that describes its availability, expiration, or pending activation.

  * summary

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A detailed explanation of what the discount is, who can use it, when and where it applies, and any associated rules or limitations.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The discount's name that displays to merchants in the Shopify admin and to customers.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was updated.

  * discount​Class

    [Merchandise​Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MerchandiseDiscountClass)

    non-nullDeprecated

  * usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-nullDeprecated

* [Discount​Automatic​Bxgy](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy)

  OBJECT

  The `DiscountAutomaticBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are automatically applied on a cart and at checkout. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountAutomaticBxgy` object stores information about automatic BXGY discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy) object has similar functionality to the `DiscountAutomaticBxgy` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

  * async​Usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

  * combines​With

    [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

    non-null

    The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

  * context

    [Discount​Context!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)

    non-null

    The context defining which buyers can use the discount.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was created.

  * customer​Buys

    [Discount​Customer​Buys!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerBuys)

    non-null

    The items eligible for the discount and the required quantity of each to receive the discount.

  * customer​Gets

    [Discount​Customer​Gets!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets)

    non-null

    The items in the order that qualify for the discount, their quantities, and the total value of the discount.

  * discount​Classes

    [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-null

    The classes of the discount.

  * ends​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

  * events

    [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

    non-null

    The paginated list of events associated with the host subject.

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

    * sort​Key

      [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * action

          string

        * comments

          boolean

        * created\_at

          time

        * id

          id

        * subject\_type

          string

        - The action that occured.

        - Example:

          * `action:create`

          Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

        - Example:

          * `false`
          * `true`

          Filter by the date and time when the event happened.

        - Example:

          * `created_at:>2020-10-21`
          * `created_at:<now`

          Filter by `id` range.

        - Example:

          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

          The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

          Example:

          * `PRODUCT_VARIANT`
          * `PRODUCT`
          * `COLLECTION`

    ***

  * starts​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount becomes active and is available to customers.

  * status

    [Discount​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

    non-null

    The status of the discount that describes its availability, expiration, or pending activation.

  * summary

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A detailed explanation of what the discount is, who can use it, when and where it applies, and any associated rules or limitations.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The discount's name that displays to merchants in the Shopify admin and to customers.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was updated.

  * uses​Per​Order​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The maximum number of times that the discount can be applied to an order.

  * discount​Class

    [Merchandise​Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MerchandiseDiscountClass)

    non-nullDeprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-nullDeprecated

  * usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-nullDeprecated

* [Discount​Automatic​Free​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping)

  OBJECT

  The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping) object has similar functionality to the `DiscountAutomaticFreeShipping` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

  * applies​On​One​Time​Purchase

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount applies on one-time purchases. A one-time purchase is a transaction where you pay a single time for a product, without any ongoing commitments or recurring charges.

  * applies​On​Subscription

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

  * async​Usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

  * combines​With

    [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

    non-null

    The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

  * context

    [Discount​Context!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)

    non-null

    The context defining which buyers can use the discount.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was created.

  * destination​Selection

    [Discount​Shipping​Destination​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountShippingDestinationSelection)

    non-null

    The countries that qualify for the discount. You can define [a list of countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountries) or specify [all countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountryAll) to be eligible for the discount.

  * discount​Classes

    [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-null

    The classes of the discount.

  * ends​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether there are [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline) associated with the discount.

  * maximum​Shipping​Price

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The maximum shipping price amount accepted to qualify for the discount.

  * minimum​Requirement

    [Discount​Minimum​Requirement](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountMinimumRequirement)

    The minimum subtotal or quantity of items that are required for the discount to be applied.

  * recurring​Cycle​Limit

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

  * short​Summary

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    An abbreviated version of the discount [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-summary) field.

  * starts​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount becomes active and is available to customers.

  * status

    [Discount​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

    non-null

    The status of the discount that describes its availability, expiration, or pending activation.

  * summary

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A detailed explanation of what the discount is, who can use it, when and where it applies, and any associated rules or limitations.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The discount's name that displays to merchants in the Shopify admin and to customers.

  * total​Sales

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The total sales from orders where the discount was used.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was updated.

  * discount​Class

    [Shipping​Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShippingDiscountClass)

    non-nullDeprecated

* [Discount​Code​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp)

  OBJECT

  The `DiscountCodeApp` object stores information about code discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountCodeApp` when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  The [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp) object has similar functionality to the `DiscountCodeApp` object, with the exception that `DiscountAutomaticApp` stores information about automatic discounts that are managed by an app using Shopify Functions.

  ***

  * app​Discount​Type

    [App​Discount​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType)

    non-null

    The details about the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types). This information includes the app extension's name and [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets), [App Bridge configuration](https://shopify.dev/docs/api/app-bridge), [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations), [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries), and other metadata about the discount type, including the discount type's name and description.

  * applies​Once​Per​Customer

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a customer can only use the discount once.

  * applies​On​One​Time​Purchase

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount applies on regular one-time-purchase items.

  * applies​On​Subscription

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount applies to subscriptions items.

  * async​Usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

  * codes

    [Discount​Redeem​Code​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection)

    non-null

    A list codes that customers can use to redeem the discount.

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

    * sort​Key

      [Discount​Code​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountCodeSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * id

          id

        * times\_used

          integer

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

    * saved​Search​Id

      [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

      The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

    ***

  * codes​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of codes that a customer can use to redeem the discount.

  * combines​With

    [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

    non-null

    The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

  * context

    [Discount​Context!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)

    non-null

    The context defining which buyers can use the discount.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was created.

  * discount​Classes

    [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-null

    The classes of the discount.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The [globally-unique ID](https://shopify.dev/docs/api/usage/gids) for the discount.

  * ends​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

  * error​History

    [Functions​Error​History](https://shopify.dev/docs/api/admin-graphql/latest/objects/FunctionsErrorHistory)

    The [error history](https://shopify.dev/docs/apps/build/functions/monitoring-and-errors) for the latest version of the discount type that the app provides.

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether there are [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline) associated with the discount.

  * recurring​Cycle​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

  * shareable​Urls

    [\[Discount​Shareable​Url!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl)

    non-null

    A list of URLs that the app can use to share the discount.

  * starts​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount becomes active and is available to customers.

  * status

    [Discount​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

    non-null

    The status of the discount that describes its availability, expiration, or pending activation.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The discount's name that displays to merchants in the Shopify admin and to customers.

  * total​Sales

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The total sales from orders where the discount was used.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was updated.

  * usage​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The maximum number of times that a customer can use the discount. For discounts with unlimited usage, specify `null`.

  * customer​Selection

    [Discount​Customer​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection)

    non-nullDeprecated

  * discount​Class

    [Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-nullDeprecated

* [Discount​Code​Basic](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic)

  OBJECT

  The `DiscountCodeBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountCodeBasic` object stores information about amount off code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic) object has similar functionality to the `DiscountCodeBasic` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

  * applies​Once​Per​Customer

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a customer can only use the discount once.

  * async​Usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

  * codes

    [Discount​Redeem​Code​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection)

    non-null

    A list codes that customers can use to redeem the discount.

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

    * sort​Key

      [Discount​Code​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountCodeSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * id

          id

        * times\_used

          integer

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

    * saved​Search​Id

      [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

      The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

    ***

  * codes​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of codes that a customer can use to redeem the discount.

  * combines​With

    [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

    non-null

    The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

  * context

    [Discount​Context!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)

    non-null

    The context defining which buyers can use the discount.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was created.

  * customer​Gets

    [Discount​Customer​Gets!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets)

    non-null

    The items in the order that qualify for the discount, their quantities, and the total value of the discount.

  * discount​Classes

    [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-null

    The classes of the discount.

  * ends​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether there are [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline) associated with the discount.

  * minimum​Requirement

    [Discount​Minimum​Requirement](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountMinimumRequirement)

    The minimum subtotal or quantity of items that are required for the discount to be applied.

  * recurring​Cycle​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

  * shareable​Urls

    [\[Discount​Shareable​Url!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl)

    non-null

    A list of URLs that the app can use to share the discount.

  * short​Summary

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    An abbreviated version of the discount [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-summary) field.

  * starts​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount becomes active and is available to customers.

  * status

    [Discount​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

    non-null

    The status of the discount that describes its availability, expiration, or pending activation.

  * summary

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A detailed explanation of what the discount is, who can use it, when and where it applies, and any associated rules or limitations.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The discount's name that displays to merchants in the Shopify admin and to customers.

  * total​Sales

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The total sales from orders where the discount was used.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was updated.

  * usage​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The maximum number of times that a customer can use the discount. For discounts with unlimited usage, specify `null`.

  * customer​Selection

    [Discount​Customer​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection)

    non-nullDeprecated

  * discount​Class

    [Merchandise​Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MerchandiseDiscountClass)

    non-nullDeprecated

* [Discount​Code​Bxgy](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy)

  OBJECT

  The `DiscountCodeBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are applied on a cart and at checkout when a customer enters a code. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountCodeBxgy` object stores information about BXGY code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy) object has similar functionality to the `DiscountCodeBxgy` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

  * applies​Once​Per​Customer

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a customer can only use the discount once.

  * async​Usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

  * codes

    [Discount​Redeem​Code​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection)

    non-null

    A list codes that customers can use to redeem the discount.

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

    * sort​Key

      [Discount​Code​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountCodeSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * id

          id

        * times\_used

          integer

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

    * saved​Search​Id

      [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

      The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

    ***

  * codes​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of codes that a customer can use to redeem the discount.

  * combines​With

    [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

    non-null

    The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

  * context

    [Discount​Context!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)

    non-null

    The context defining which buyers can use the discount.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was created.

  * customer​Buys

    [Discount​Customer​Buys!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerBuys)

    non-null

    The items eligible for the discount and the required quantity of each to receive the discount.

  * customer​Gets

    [Discount​Customer​Gets!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets)

    non-null

    The items in the order that qualify for the discount, their quantities, and the total value of the discount.

  * discount​Classes

    [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-null

    The classes of the discount.

  * ends​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether there are [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline) associated with the discount.

  * shareable​Urls

    [\[Discount​Shareable​Url!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl)

    non-null

    A list of URLs that the app can use to share the discount.

  * starts​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount becomes active and is available to customers.

  * status

    [Discount​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

    non-null

    The status of the discount that describes its availability, expiration, or pending activation.

  * summary

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A detailed explanation of what the discount is, who can use it, when and where it applies, and any associated rules or limitations.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The discount's name that displays to merchants in the Shopify admin and to customers.

  * total​Sales

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The total sales from orders where the discount was used.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was updated.

  * usage​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The maximum number of times that a customer can use the discount. For discounts with unlimited usage, specify `null`.

  * uses​Per​Order​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The maximum number of times that the discount can be applied to an order.

  * customer​Selection

    [Discount​Customer​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection)

    non-nullDeprecated

  * discount​Class

    [Merchandise​Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MerchandiseDiscountClass)

    non-nullDeprecated

* [Discount​Code​Free​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping)

  OBJECT

  The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping) object has similar functionality to the `DiscountCodeFreeShipping` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

  * applies​Once​Per​Customer

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether a customer can only use the discount once.

  * applies​On​One​Time​Purchase

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount applies on one-time purchases. A one-time purchase is a transaction where you pay a single time for a product, without any ongoing commitments or recurring charges.

  * applies​On​Subscription

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

  * async​Usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

  * codes

    [Discount​Redeem​Code​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection)

    non-null

    A list codes that customers can use to redeem the discount.

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

    * sort​Key

      [Discount​Code​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountCodeSortKeys)

      Default:ID

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    * query

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

      * * default

          string

        * id

          id

        * times\_used

          integer

        - Filter by a case-insensitive search of multiple fields in a document.

        - Example:

          * `query=Bob Norman`
          * `query=title:green hoodie`

          Filter by `id` range.

        - Example:
          * `id:1234`
          * `id:>=1234`
          * `id:<=1234`

    * saved​Search​Id

      [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

      The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

    ***

  * codes​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of codes that a customer can use to redeem the discount.

  * combines​With

    [Discount​Combines​With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

    non-null

    The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

  * context

    [Discount​Context!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext)

    non-null

    The context defining which buyers can use the discount.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was created.

  * destination​Selection

    [Discount​Shipping​Destination​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountShippingDestinationSelection)

    non-null

    The countries that qualify for the discount. You can define [a list of countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountries) or specify [all countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountryAll) to be eligible for the discount.

  * discount​Classes

    [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

    non-null

    The classes of the discount.

  * ends​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

  * has​Timeline​Comment

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether there are [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline) associated with the discount.

  * maximum​Shipping​Price

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The maximum shipping price amount accepted to qualify for the discount.

  * minimum​Requirement

    [Discount​Minimum​Requirement](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountMinimumRequirement)

    The minimum subtotal or quantity of items that are required for the discount to be applied.

  * recurring​Cycle​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

  * shareable​Urls

    [\[Discount​Shareable​Url!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl)

    non-null

    A list of URLs that the app can use to share the discount.

  * short​Summary

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    An abbreviated version of the discount [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-summary) field.

  * starts​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount becomes active and is available to customers.

  * status

    [Discount​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

    non-null

    The status of the discount that describes its availability, expiration, or pending activation.

  * summary

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A detailed explanation of what the discount is, who can use it, when and where it applies, and any associated rules or limitations.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The discount's name that displays to merchants in the Shopify admin and to customers.

  * total​Sales

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The total sales from orders where the discount was used.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the discount was updated.

  * usage​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The maximum number of times that a customer can use the discount. For discounts with unlimited usage, specify `null`.

  * customer​Selection

    [Discount​Customer​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection)

    non-nullDeprecated

  * discount​Class

    [Shipping​Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShippingDiscountClass)

    non-nullDeprecated

***

## Fields with this union

* [Discount​Node.discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.discount)

  OBJECT

  The `DiscountNode` object enables you to manage [discounts](https://help.shopify.com/manual/discounts), which are applied at checkout or on a cart.

  Discounts are a way for merchants to promote sales and special offers, or as customer loyalty rewards. Discounts can apply to [orders, products, or shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and can be either automatic or code-based. For example, you can offer customers a buy X get Y discount that's automatically applied when purchases meet specific criteria. Or, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related mutations, limitations, and considerations.

***

```graphql
union Discount = DiscountAutomaticApp | DiscountAutomaticBasic | DiscountAutomaticBxgy | DiscountAutomaticFreeShipping | DiscountCodeApp | DiscountCodeBasic | DiscountCodeBxgy | DiscountCodeFreeShipping
```
