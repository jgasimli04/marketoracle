---
title: PaymentScheduleConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple PaymentSchedules.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection.md
---

# Payment​Schedule​Connection

connection

An auto-generated type for paginating through multiple PaymentSchedules.

## Fields with this connection

* [Payment​Terms.paymentSchedules](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules)

  OBJECT

  Payment conditions for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), including when payment is due and how it's scheduled. Payment terms are created from templates that specify net terms (payment due after a certain number of days) or fixed schedules with specific due dates. You can optionally provide custom payment schedules using [`PaymentScheduleInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentScheduleInput).

  Each payment term contains one or more [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule), which you can access through the [`paymentSchedules`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules) field. Payment schedules contain detailed information for each payment installment.

  Learn more about [payment terms](https://shopify.dev/docs/apps/build/checkout/payments/payment-terms).

***

## Possible returns

* edges

  [\[Payment​Schedule​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentScheduleEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Payment​Schedule!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule)

  non-null

  A list of nodes that are contained in PaymentScheduleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Payment​Terms.paymentSchedules](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules)

### Possible returns

* <->[Payment​Schedule​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection#returns-edges)
* <->[Payment​Schedule​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection#returns-nodes)
* <->[Payment​Schedule​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection#returns-pageInfo)
