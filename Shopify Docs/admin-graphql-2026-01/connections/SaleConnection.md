---
title: SaleConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Sales.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection.md
---

# Sale​Connection

connection

An auto-generated type for paginating through multiple Sales.

## Fields with this connection

* [Order​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-OrderAgreement.fields.sales)

  OBJECT

  An agreement associated with an order placement.

* [Order​Edit​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.sales)

  OBJECT

  An agreement associated with an edit to the order.

* [Refund​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-RefundAgreement.fields.sales)

  OBJECT

  An agreement between the merchant and customer to refund all or a portion of the order.

* [Return​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.sales)

  OBJECT

  An agreement between the merchant and customer for a return.

* [Sales​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement#fields-sales)

  INTERFACE

  A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more.

***

## Possible returns

* edges

  [\[Sale​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Sale!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale)

  non-null

  A list of nodes that are contained in SaleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Order​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-OrderAgreement.fields.sales)
* {}[Order​Edit​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.sales)
* {}[Refund​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-RefundAgreement.fields.sales)
* {}[Return​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.sales)
* ||-[Sales​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement#fields-sales)

### Possible returns

* <->[Sale​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection#returns-edges)
* <->[Sale​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection#returns-nodes)
* <->[Sale​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection#returns-pageInfo)
