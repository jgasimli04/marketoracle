---
title: ShippingPackageUpdatePayload - GraphQL Admin
description: Return type for `shippingPackageUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShippingPackageUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShippingPackageUpdatePayload.md
---

# Shipping​Package​Update​Payload

payload

Return type for `shippingPackageUpdate` mutation.

## Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [shipping​Package​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageUpdate)

  mutation

  Updates a shipping package.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to update.

  * shipping​Package

    [Custom​Shipping​Package​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput)

    required

    Specifies the input fields for a shipping package.

  ***

***

## Map

### Mutations with this payload

* [shipping​Package​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/shippingPackageUpdate)
