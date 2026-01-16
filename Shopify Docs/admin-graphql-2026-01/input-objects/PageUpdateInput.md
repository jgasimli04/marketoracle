---
title: PageUpdateInput - GraphQL Admin
description: The input fields to update a page.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageUpdateInput.md
---

# Page​Update​Input

input\_object

The input fields to update a page.

## Fields

* body

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The text content of the page, complete with HTML markup.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique, human-friendly string for the page. If no handle is specified, a handle will be generated automatically from the page title. In themes, the Liquid templating language refers to a page by its handle.

* is​Published

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not the page should be visible. Defaults to `true` if no publish date is specified.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  The input fields to create or update a metafield.

* publish​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time (ISO 8601 format) when the page should become visible.

* redirect​New​Handle

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether a redirect is required after a new handle has been provided. If `true`, then the old handle is redirected to the new one automatically.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The suffix of the template that's used to render the page. If the value is an empty string or `null`, then the default page template is used.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the page.

***

## Map

No referencing types
