---
title: PublishablePublishToCurrentChannelPayload - GraphQL Admin
description: Return type for `publishablePublishToCurrentChannel` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublishablePublishToCurrentChannelPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PublishablePublishToCurrentChannelPayload.md
---

# Publishable​Publish​To​Current​Channel​Payload

payload

Return type for `publishablePublishToCurrentChannel` mutation.

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

* [publishable​Publish​To​Current​Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublishToCurrentChannel)

  mutation

  Publishes a resource to the current [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) associated with the requesting app. The system determines the current channel by the app's API client ID. Resources include [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects that implement the [`Publishable`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable) interface.

  For products to be visible in the channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus). Products sold exclusively on subscription ([`requiresSellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.requiresSellingPlan): `true`) can only be published to online stores.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to create or update publications for.

  ***

***

## Map

### Mutations with this payload

* [publishable​Publish​To​Current​Channel](https://shopify.dev/docs/api/admin-graphql/latest/types/publishablePublishToCurrentChannel)
