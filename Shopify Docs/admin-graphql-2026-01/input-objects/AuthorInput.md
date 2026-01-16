---
title: AuthorInput - GraphQL Admin
description: >-
  The input fields for an author. Either the `name` or `user_id` fields can be
  supplied, but never both.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AuthorInput'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AuthorInput.md
---

# Author​Input

input\_object

The input fields for an author. Either the `name` or `user_id` fields can be supplied, but never both.

## Fields

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The author's full name.

* user​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of a staff member's account.

***

## Input objects using this input

* [Article​Create​Input.author](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-author)

  INPUT OBJECT

  The input fields to create an article.

* [Article​Update​Input.author](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-author)

  INPUT OBJECT

  The input fields to update an article.

***

## Map

### Input objects using this input

* [Article​Create​Input.author](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-author)
* [Article​Update​Input.author](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-author)
