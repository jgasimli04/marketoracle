---
title: OrderEditAgreement - GraphQL Admin
description: An agreement associated with an edit to the order.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement.md
---

# Order​Edit​Agreement

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

An agreement associated with an edit to the order.

## Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The application that created the agreement.

* happened​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time at which the agreement occured.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the agreement.

* reason

  [Order​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderActionType)

  non-null

  The reason the agremeent was created.

* sales

  [Sale​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection)

  non-null

  The sales associated with the agreement.

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

* user

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  The staff member associated with the agreement.

***

## Map

No referencing types

***

## Interfaces

* [Sales​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement)

  interface

***

## ||-OrderEditAgreement Implements

### Implements

* ||-[Sales​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement)
