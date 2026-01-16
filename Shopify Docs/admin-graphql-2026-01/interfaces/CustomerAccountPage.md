---
title: CustomerAccountPage - GraphQL Admin
description: A customer account page.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerAccountPage
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerAccountPage.md
---

# Customer​Account​Page

interface

Requires `read_content` access scope or `read_online_store_pages` access scope.

A customer account page.

## Fields

* default​Cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A unique, human-friendly string for the customer account page.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the customer account page.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the customer account page.

***

## Types implemented in

* [Customer​Account​App​Extension​Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountAppExtensionPage)

  OBJECT

  An app extension page for the customer account navigation menu.

  * app​Extension​Uuid

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The UUID of the app extension.

  * default​Cursor

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A unique, human-friendly string for the customer account page.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the customer account page.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the customer account page.

* [Customer​Account​Native​Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountNativePage)

  OBJECT

  A native page for the customer account navigation menu.

  * default​Cursor

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    A unique, human-friendly string for the customer account page.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the customer account page.

  * page​Type

    [Customer​Account​Native​Page​Page​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerAccountNativePagePageType)

    non-null

    The type of customer account native page.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the customer account page.

***

##### Variables

```json
{
	"defaultCursor": "",
	"handle": "",
	"id": "",
	"title": ""
}
```

##### Schema

```graphql
interface CustomerAccountPage {
  defaultCursor: String!
  handle: String!
  id: ID!
  title: String!
}
```
