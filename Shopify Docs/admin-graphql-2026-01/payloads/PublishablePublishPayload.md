---
title: PublishablePublishPayload - GraphQL Admin
description: Return type for `publishablePublish` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublishablePublishPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublishablePublishPayload.md
---

# Publishable​Publish​Payload

payload

Return type for `publishablePublish` mutation.

## Fields

* publishable

  [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

  Resource that has been published.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [publishable​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)

  mutation

  Publishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), to one or more [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  For products to be visible in a channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus). Products sold exclusively on subscription (`requiresSellingPlan: true`) can only be published to online stores.

  You can schedule future publication by providing a publish date. Only online store channels support [scheduled publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to create or update publications for.

  * input

    [\[Publication​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput)

    required

    Specifies the input fields required to publish a resource.

  ***

***

## Map

### Mutations with this payload

* [publishable​Publish](https://shopify.dev/docs/api/admin-graphql/latest/types/publishablePublish)
