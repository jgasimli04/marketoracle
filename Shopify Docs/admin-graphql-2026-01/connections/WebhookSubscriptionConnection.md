---
title: WebhookSubscriptionConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple WebhookSubscriptions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection.md
---

# Webhook​Subscription​Connection

connection

An auto-generated type for paginating through multiple WebhookSubscriptions.

## Queries with this connection

* [webhook​Subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions)

  query

  Retrieves a paginated list of webhook subscriptions created using the API for the current app and shop.

  ***

  Note

  Returns only shop-scoped subscriptions, not app-scoped subscriptions configured in TOML files.

  ***

  Subscription details include event topics, endpoint URIs, filtering rules, field inclusion settings, and metafield namespace permissions. Results support cursor-based pagination that you can filter by topic, format, or custom search criteria.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

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

    [Webhook​Subscription​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * updated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    Deprecated

  * uri

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    URI to filter by. Supports an HTTPS URL, a Google Pub/Sub URI (pubsub://{project-id}:{topic-id}) or an Amazon EventBridge event source ARN.

  * format

    [Webhook​Subscription​Format](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionFormat)

    Response format to filter by.

  * topics

    [\[Webhook​Subscription​Topic!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    List of webhook subscription topics to filter by.

  ***

***

## Possible returns

* edges

  [\[Webhook​Subscription​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscriptionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Webhook​Subscription!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  non-null

  A list of nodes that are contained in WebhookSubscriptionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[webhook​Subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions)

### Possible returns

* <->[Webhook​Subscription​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection#returns-edges)
* <->[Webhook​Subscription​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection#returns-nodes)
* <->[Webhook​Subscription​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection#returns-pageInfo)
