---
title: PublishableUnpublishToCurrentChannelPayload - GraphQL Admin
description: Return type for `publishableUnpublishToCurrentChannel` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublishableUnpublishToCurrentChannelPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublishableUnpublishToCurrentChannelPayload.md
---

# Publishable​Unpublish​To​Current​Channel​Payload

payload

Return type for `publishableUnpublishToCurrentChannel` mutation.

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

* [publishable​Unpublish​To​Current​Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublishToCurrentChannel)

  mutation

  Unpublishes a resource from the current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to delete or update publications for.

  ***

***

## Map

### Mutations with this payload

* [publishable​Unpublish​To​Current​Channel](https://shopify.dev/docs/api/admin-graphql/latest/types/publishableUnpublishToCurrentChannel)
