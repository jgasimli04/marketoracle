---
title: CommentEventAttachment - GraphQL Admin
description: A file attachment associated to a comment event.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEventAttachment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEventAttachment.md
---

# Comment​Event​Attachment

object

A file attachment associated to a comment event.

## Fields

* file​Extension

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The file extension of the comment event attachment, indicating the file format.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image attached to the comment event.

  * max​Width

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

    ### Arguments

  * max​Height

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  * crop

    [Crop​Region](https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion)

    Deprecated

  * scale

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    DeprecatedDefault:1

  ***

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The filename of the comment event attachment.

* size

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The size of the attachment.

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL of the attachment.

***

## Map

### Fields with this object

* {}[CommentEvent.attachments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent#field-CommentEvent.fields.attachments)
