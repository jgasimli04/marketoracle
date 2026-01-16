---
title: OnlineStoreThemeFileBody - GraphQL Admin
description: Represents the body of a theme file.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/OnlineStoreThemeFileBody
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/OnlineStoreThemeFileBody.md
---

# Online​Store​Theme​File​Body

union

Requires `read_themes` access scope.

Represents the body of a theme file.

## Possible types

* [Online​Store​Theme​File​Body​Base64](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileBodyBase64)

  OBJECT

  Represents the base64 encoded body of a theme file.

  * content​Base64

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The body of the theme file, base64 encoded.

* [Online​Store​Theme​File​Body​Text](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileBodyText)

  OBJECT

  Represents the body of a theme file.

  * content

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The body of the theme file.

* [Online​Store​Theme​File​Body​Url](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileBodyUrl)

  OBJECT

  Represents the url of the body of a theme file.

  * url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    non-null

    The short lived url for the body of the theme file.

***

## Fields with this union

* [Online​Store​Theme​File.body](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFile#field-OnlineStoreThemeFile.fields.body)

  OBJECT

  Represents a theme file.

***

```graphql
union OnlineStoreThemeFileBody = OnlineStoreThemeFileBodyBase64 | OnlineStoreThemeFileBodyText | OnlineStoreThemeFileBodyUrl
```
