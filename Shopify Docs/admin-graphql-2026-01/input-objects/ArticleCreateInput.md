---
title: ArticleCreateInput - GraphQL Admin
description: The input fields to create an article.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput.md
---

# Article​Create​Input

input\_object

The input fields to create an article.

## Fields

* author

  [Author​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AuthorInput)

  required

  The name of the author of the article.

* blog​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the blog containing the article.

* body

  [HTML](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  The text of the article's body, complete with HTML markup.

* handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique, human-friendly string for the article that's automatically generated from the article's title. The handle is used in the article's URL.

* image

  [Article​Image​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleImageInput)

  The image associated with the article.

* is​Published

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not the article should be visible.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  The input fields to create or update a metafield.

* publish​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time (ISO 8601 format) when the article should become visible.

* summary

  [HTML](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  A summary of the article, which can include HTML markup. The summary is used by the online store theme to display the article on other pages, such as the home page or the main blog page.

* tags

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A comma-separated list of tags. Tags are additional short descriptors formatted as a string of comma-separated values.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The suffix of the template that's used to render the page. If the value is an empty string or `null`, then the default article template is used.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the article.

***

## Map

No referencing types
