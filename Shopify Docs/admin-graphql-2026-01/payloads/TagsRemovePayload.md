---
title: TagsRemovePayload - GraphQL Admin
description: Return type for `tagsRemove` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/TagsRemovePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TagsRemovePayload.md
---

# Tags​Remove​Payload

payload

Return type for `tagsRemove` mutation.

## Fields

* node

  [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  The object that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [tags​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsRemove)

  mutation

  Removes tags from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), or [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article).

  Tags are searchable keywords that help organize and filter these resources.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the resource to remove tags from.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A list of tags to remove from the resource in the form of an array of strings. Example value: `["tag1", "tag2", "tag3"]`.

  ***

***

## Map

### Mutations with this payload

* [tags​Remove](https://shopify.dev/docs/api/admin-graphql/latest/types/tagsRemove)
