---
title: BlogCreateInput - GraphQL Admin
description: The input fields to create a blog.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput.md
---

# Blog​Create​Input

input\_object

The input fields to create a blog.

## Fields

* comment​Policy

  [Comment​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentPolicy)

  Indicates whether readers can post comments to the blog and whether comments are moderated.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique, human-friendly string for the blog. If no handle is specified, a handle will be generated automatically from the blog title. The handle is customizable and is used by the Liquid templating language to refer to the blog.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  Attaches additional metadata to a store's resources.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the template a blog is using if it's using an alternate template. Returns `null` if a blog is using the default blog.liquid template.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the blog.

***

## Map

No referencing types
