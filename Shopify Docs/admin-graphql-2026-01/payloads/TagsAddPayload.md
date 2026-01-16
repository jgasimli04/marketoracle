---
title: TagsAddPayload - GraphQL Admin
description: Return type for `tagsAdd` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/TagsAddPayload'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/TagsAddPayload.md'
---

# Tags​Add​Payload

payload

Return type for `tagsAdd` mutation.

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

* [tags​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsAdd)

  mutation

  Adds tags to a resource in the store. Supported resources include [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), and [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article).

  Tags help merchants organize and filter resources. See the [`tags`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsAdd#arguments-tags) argument for supported input formats.

  Learn more about [using tags to organize subscription orders](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/fulfillments/sync-orders-subscriptions#order-tagging).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a resource to add tags to.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A list of tags to add to the resource. Can be an array of strings or a single string composed of a comma-separated list of values. Example values: `["tag1", "tag2", "tag3"]`, `"tag1, tag2, tag3"`.

  ***

***

## Map

### Mutations with this payload

* [tags​Add](https://shopify.dev/docs/api/admin-graphql/latest/types/tagsAdd)
