---
title: ShopifyPaymentsDispute - GraphQL Admin
description: >-
  A dispute occurs when a buyer questions the legitimacy of a charge with their
  financial institution.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute.md
---

# Shopify​Payments​Dispute

object

Requires User must have `read_shopify_payments_disputes` access.

A dispute occurs when a buyer questions the legitimacy of a charge with their financial institution.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total amount disputed by the cardholder.

* dispute​Evidence

  [Shopify​Payments​Dispute​Evidence!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence)

  non-null

  The evidence associated with the dispute.

* evidence​Due​By

  [Date](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

  The deadline for evidence submission.

* evidence​Sent​On

  [Date](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

  The date when evidence was sent. Returns null if evidence hasn't yet been sent.

* finalized​On

  [Date](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

  The date when this dispute was resolved. Returns null if the dispute isn't yet resolved.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* initiated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date when this dispute was initiated.

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that contains the charge that's under dispute.

* reason​Details

  [Shopify​Payments​Dispute​Reason​Details!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeReasonDetails)

  non-null

  The reason of the dispute.

* status

  [Dispute​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeStatus)

  non-null

  The current state of the dispute.

* type

  [Dispute​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeType)

  non-null

  Indicates if this dispute is still in the inquiry phase or has turned into a chargeback.

***

## Map

### Fields and connections with this object

* {}[ShopifyPaymentsAccount.disputes](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.disputes)
* <->[ShopifyPaymentsDisputeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection#returns-nodes)
* {}[ShopifyPaymentsDisputeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEdge#field-ShopifyPaymentsDisputeEdge.fields.node)
* {}[ShopifyPaymentsDisputeEvidence.dispute](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence#field-ShopifyPaymentsDisputeEvidence.fields.dispute)

***

## Queries

* [dispute](https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute)

  query

  Returns a `ShopifyPaymentsDispute` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `ShopifyPaymentsDispute` to return.

  ***

* [disputes](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputes)

  query

  All disputes related to the Shop.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * initiated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * status

      string

  ***

***

## \<?>ShopifyPaymentsDispute Queries

### Queried by

* \<?>[dispute](https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute)
* \<?>[disputes](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputes)

***

## Interfaces

* * [Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## ||-ShopifyPaymentsDispute Implements

### Implements

* ||-[Legacy​Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
