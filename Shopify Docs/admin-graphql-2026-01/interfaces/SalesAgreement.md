---
title: SalesAgreement - GraphQL Admin
description: >-
  A contract between a merchant and a customer to do business. Shopify creates a
  sales agreement whenever an order is placed, edited, or refunded. A sales
  agreement has one or more sales records, which provide itemized details about
  the initial agreement or subsequent changes made to the order. For example,
  when a customer places an order, Shopify creates the order, generates a sales
  agreement, and records a sale for each line item purchased in the order. A
  sale record is specific to a type of order line. Order lines can represent
  different things such as a purchased product, a tip added by a customer,
  shipping costs collected at checkout, and more.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement.md
---

# Sales​Agreement

interface

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more.

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

## Types implemented in

* [Order​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement)

  OBJECT

  An agreement associated with an order placement.

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

  * order

    [Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

    non-null

    The order associated with the agreement.

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

* [Order​Edit​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement)

  OBJECT

  An agreement associated with an edit to the order.

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

* [Refund​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement)

  OBJECT

  An agreement between the merchant and customer to refund all or a portion of the order.

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

  * refund

    [Refund!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

    non-null

    The refund associated with the agreement.

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

* [Return​Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement)

  OBJECT

  An agreement between the merchant and customer for a return.

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

  * return

    [Return!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

    non-null

    The return associated with the agreement.

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

##### Variables

```json
{
	"app": "",
	"happenedAt": "",
	"id": "",
	"reason": "",
	"sales": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"user": ""
}
```

##### Schema

```graphql
interface SalesAgreement {
  app: App
  happenedAt: DateTime!
  id: ID!
  reason: OrderActionType!
  sales: SaleConnection!
  user: StaffMember
}
```
