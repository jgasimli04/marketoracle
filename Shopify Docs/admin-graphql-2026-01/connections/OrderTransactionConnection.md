---
title: OrderTransactionConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple OrderTransactions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection.md
---

# Order​Transaction​Connection

connection

An auto-generated type for paginating through multiple OrderTransactions.

## Fields with this connection

* [Cash​Tracking​Session.cashTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.cashTransactions)

  OBJECT

  Tracks the balance in a cash drawer for a point of sale device over the course of a shift.

* [Refund.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.transactions)

  OBJECT

  The `Refund` object represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

  The `Refund` object provides information to:

  * Process customer returns and issue payments back to customers
  * Handle partial or full refunds for line items with optional inventory restocking
  * Refund shipping costs, duties, and additional fees
  * Issue store credit refunds as an alternative to original payment method returns
  * Track and reconcile all financial transactions related to refunds

  Each `Refund` object maintains detailed records of what was refunded, how much was refunded, which payment transactions were involved, and any inventory restocking that occurred. The refund can include multiple components such as product line items, shipping charges, taxes, duties, and additional fees, all calculated with proper currency handling for international orders.

  Refunds are always associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can optionally be linked to a [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) if the refund was initiated through the returns process. The refund tracks both the presentment currency (what the customer sees) and the shop currency for accurate financial reporting.

  ***

  Note

  The existence of a `Refund` object doesn't guarantee that the money has been returned to the customer. The actual financial processing happens through associated [`OrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction) objects, which can be in various states, such as pending, processing, success, or failure. To determine if money has actually been refunded, check the [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status) of the associated transactions.

  ***

  Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management), [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties), and [processing refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).

* [Return.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.transactions)

  OBJECT

  The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

  Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

* [Subscription​Billing​Attempt.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.transactions)

  OBJECT

  A record of an execution of the subscription billing process. Billing attempts use idempotency keys to avoid duplicate order creation.

  When a billing attempt completes successfully, it creates an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The attempt includes associated payment transactions and any errors that occur during billing. If 3D Secure authentication is required, the `nextActionUrl` field provides the redirect URL for customer verification.

***

## Possible returns

* edges

  [\[Order​Transaction​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransactionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Order​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  non-null

  A list of nodes that are contained in OrderTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Cash​Tracking​Session.cashTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.cashTransactions)
* {}[Refund.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.transactions)
* {}[Return.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.transactions)
* {}[Subscription​Billing​Attempt.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.transactions)

### Possible returns

* <->[Order​Transaction​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection#returns-edges)
* <->[Order​Transaction​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection#returns-nodes)
* <->[Order​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection#returns-pageInfo)
