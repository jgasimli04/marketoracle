---
title: PublishableUnpublishPayload - GraphQL Admin
description: Return type for `publishableUnpublish` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublishableUnpublishPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublishableUnpublishPayload.md
---

# Publishable​Unpublish​Payload

payload

Return type for `publishableUnpublish` mutation.

## Fields

* publishable

  [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

  Resource that has been unpublished.

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

* [publishable​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish)

  mutation

  Unpublishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), from one or more [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication). The resource remains in your store but becomes unavailable to customers.

  For products to be visible in a channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to delete or update publications for.

  * input

    [\[Publication​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput)

    required

    Specifies the input fields required to unpublish a resource.

  ***

***

## Map

### Mutations with this payload

* [publishable​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/types/publishableUnpublish)
