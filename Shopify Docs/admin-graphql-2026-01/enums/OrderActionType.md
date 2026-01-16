---
title: OrderActionType - GraphQL Admin
description: >-
  The possible order action types for a

  [sales
  agreement](https://shopify.dev/api/admin-graphql/latest/interfaces/salesagreement).
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderActionType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderActionType.md'
---

# Order​Action​Type

enum

The possible order action types for a [sales agreement](https://shopify.dev/api/admin-graphql/latest/interfaces/salesagreement).

## Valid values

* ORDER

  An order with a purchase or charge.

* ORDER\_​EDIT

  An edit to the order.

* REFUND

  A refund on the order.

* RETURN

  A return on the order.

* UNKNOWN

  An unknown agreement action. Represents new actions that may be added in future versions.

***

## Fields

* [Order​Agreement.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-OrderAgreement.fields.reason)

  OBJECT

  An agreement associated with an order placement.

* [Order​Edit​Agreement.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.reason)

  OBJECT

  An agreement associated with an edit to the order.

* [Refund​Agreement.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-RefundAgreement.fields.reason)

  OBJECT

  An agreement between the merchant and customer to refund all or a portion of the order.

* [Return​Agreement.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.reason)

  OBJECT

  An agreement between the merchant and customer for a return.

* [Sales​Agreement.reason](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement#fields-reason)

  INTERFACE

  A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more.

***

## Map

### Fields with this enum

* <-|[Order​Agreement.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-OrderAgreement.fields.reason)
* <-|[Order​Edit​Agreement.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.reason)
* <-|[Refund​Agreement.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-RefundAgreement.fields.reason)
* <-|[Return​Agreement.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.reason)
