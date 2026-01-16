---
title: BlogUpdateInput - GraphQL Admin
description: The input fields to update a blog.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput.md
---

# Blog​Update​Input

input\_object

The input fields to update a blog.

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

* redirect​Articles

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to redirect blog posts automatically.

* redirect​New​Handle

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether a redirect is required after a new handle has been provided. If `true`, then the old handle is redirected to the new one automatically.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the template a blog is using if it's using an alternate template. Returns `null` if a blog is using the default blog.liquid template.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the blog.

***

## Map

No referencing types
