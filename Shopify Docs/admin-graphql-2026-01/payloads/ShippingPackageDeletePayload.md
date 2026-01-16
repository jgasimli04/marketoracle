---
title: ShippingPackageDeletePayload - GraphQL Admin
description: Return type for `shippingPackageDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShippingPackageDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShippingPackageDeletePayload.md
---

# Shipping​Package​Delete​Payload

payload

Return type for `shippingPackageDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted shipping package.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [shipping​Package​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageDelete)

  mutation

  Deletes a shipping package.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to remove.

  ***

***

## Map

### Mutations with this payload

* [shipping​Package​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/shippingPackageDelete)
