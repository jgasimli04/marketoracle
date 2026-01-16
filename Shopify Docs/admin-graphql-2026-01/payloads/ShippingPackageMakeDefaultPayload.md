---
title: ShippingPackageMakeDefaultPayload - GraphQL Admin
description: Return type for `shippingPackageMakeDefault` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShippingPackageMakeDefaultPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ShippingPackageMakeDefaultPayload.md
---

# Shipping​Package​Make​Default​Payload

payload

Return type for `shippingPackageMakeDefault` mutation.

## Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [shipping​Package​Make​Default](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageMakeDefault)

  mutation

  Set a shipping package as the default. The default shipping package is the one used to calculate shipping costs on checkout.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to set as the default.

  ***

***

## Map

### Mutations with this payload

* [shipping​Package​Make​Default](https://shopify.dev/docs/api/admin-graphql/latest/types/shippingPackageMakeDefault)
