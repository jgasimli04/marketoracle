---
title: CommentPolicy - GraphQL Admin
description: Possible comment policies for a blog.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentPolicy'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentPolicy.md'
---

# Comment​Policy

enum

Possible comment policies for a blog.

## Valid values

* AUTO\_​PUBLISHED

  Readers can post comments to blog articles without moderation.

* CLOSED

  Readers cannot post comments to blog articles.

* MODERATED

  Readers can post comments to blog articles, but comments must be moderated before they appear.

***

## Fields

* [Blog.commentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.commentPolicy)

  OBJECT

  A blog for publishing articles in the online store. Stores can have multiple blogs to organize content by topic or purpose.

  Each blog contains articles with their associated comments, tags, and metadata. The comment policy controls whether readers can post comments and whether moderation is required. Blogs use customizable URL handles and can apply alternate templates for specialized layouts.

* [Blog​Create​Input.commentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput#fields-commentPolicy)

  INPUT OBJECT

  The input fields to create a blog.

* [Blog​Update​Input.commentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput#fields-commentPolicy)

  INPUT OBJECT

  The input fields to update a blog.

***

## Map

### Fields with this enum

* <-|[Blog.commentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.commentPolicy)

### Inputs with this enum

* [Blog​Create​Input.commentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput#fields-commentPolicy)
* [Blog​Update​Input.commentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput#fields-commentPolicy)
