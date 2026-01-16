---
title: ShopPayPaymentRequestReceipt - GraphQL Admin
description: The receipt of Shop Pay payment request session submission.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceipt
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceipt.md
---

# Shop​Pay​Payment​Request​Receipt

object

The receipt of Shop Pay payment request session submission.

## Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the payment request receipt was created.

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that's associated with the payment request receipt.

* payment​Request

  [Shop​Pay​Payment​Request!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequest)

  non-null

  The shop pay payment request object.

* processing​Status

  [Shop​Pay​Payment​Request​Receipt​Processing​Status!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptProcessingStatus)

  non-null

  The status of the payment request session submission.

* source​Identifier

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The source identifier provided in the `ShopPayPaymentRequestSessionCreate` mutation.

* token

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The token of the receipt, initially returned by an `ShopPayPaymentRequestSessionSubmit` mutation.

***

## Map

### Fields and connections with this object

* <->[ShopPayPaymentRequestReceiptConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopPayPaymentRequestReceiptConnection#returns-nodes)
* {}[ShopPayPaymentRequestReceiptEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptEdge#field-ShopPayPaymentRequestReceiptEdge.fields.node)

***

## Queries

* [shop​Pay​Payment​Request​Receipt](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopPayPaymentRequestReceipt)

  query

  Returns a Shop Pay payment request receipt.

  * token

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Unique identifier of the payment request receipt.

  ***

* [shop​Pay​Payment​Request​Receipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopPayPaymentRequestReceipts)

  query

  Returns a list of Shop Pay payment request receipts.

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

    [Shop​Pay​Payment​Request​Receipts​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPayPaymentRequestReceiptsSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * created\_at

        time

      * id

        id

      * source\_identifier

        string

      * state

        string

      - Filter by the creation date of the payment request receipt.

      - Example:

        * `created_at:2021-01-01`
        * `created_at:2021-01-01..2021-01-02`
        * `created_at:<now`
        * `created_at:<2024-01-01`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the source identifier of the payment request receipt.

      - Example:

        * `source_identifier:1282823`

        Filter by the state of the payment request receipt. Options include: - COMPLETED - FAILED - PENDING - PROCESSING

        Example:

        * `state:COMPLETED`

  ***

***

## \<?>ShopPayPaymentRequestReceipt Queries

### Queried by

* \<?>[shop​Pay​Payment​Request​Receipt](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopPayPaymentRequestReceipt)
* \<?>[shop​Pay​Payment​Request​Receipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopPayPaymentRequestReceipts)
