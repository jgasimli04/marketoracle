---
title: CheckoutProfile - GraphQL Admin
description: >-
  A checkout profile defines the branding settings and the UI extensions for a
  store's checkout. A checkout profile could be published or draft. A store
  might have at most one published checkout profile, which is used to render
  their live checkout. The store could also have multiple draft profiles that
  were created, previewed, and published using the admin checkout editor.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile.md'
---

# Checkout​Profile

object

Requires access to the checkout and accounts editor.

A checkout profile defines the branding settings and the UI extensions for a store's checkout. A checkout profile could be published or draft. A store might have at most one published checkout profile, which is used to render their live checkout. The store could also have multiple draft profiles that were created, previewed, and published using the admin checkout editor.

## Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the checkout profile was created.

* edited​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the checkout profile was last edited.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* is​Published

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the checkout profile is published or not.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The profile name.

* typ​Osp​Pages​Active

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the checkout profile Thank You Page and Order Status Page are actively using extensibility or not.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the checkout profile was last updated.

***

## Map

### Fields and connections with this object

* <->[CheckoutProfileConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutProfileConnection#returns-nodes)
* {}[CheckoutProfileEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfileEdge#field-CheckoutProfileEdge.fields.node)

***

## Queries

* [checkout​Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutProfile)

  query

  Returns a [`CheckoutProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile). Checkout profiles define the branding settings and UI extensions for a store's checkout experience. Stores can have one published profile that renders on their live checkout and multiple draft profiles for testing customizations in the checkout editor.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the checkout profile.

  ***

* [checkout​Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutProfiles)

  query

  List of checkout profiles on a shop.

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

    [Checkout​Profile​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutProfileSortKeys)

    Default:UPDATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * is\_published

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

## \<?>CheckoutProfile Queries

### Queried by

* \<?>[checkout​Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutProfile)
* \<?>[checkout​Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutProfiles)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ||-CheckoutProfile Implements

### Implements

* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
