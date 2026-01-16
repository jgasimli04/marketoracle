---
title: MobilePlatformApplicationDeletePayload - GraphQL Admin
description: Return type for `mobilePlatformApplicationDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MobilePlatformApplicationDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MobilePlatformApplicationDeletePayload.md
---

# Mobile​Platform​Application​Delete​Payload

payload

Return type for `mobilePlatformApplicationDelete` mutation.

## Fields

* deleted​Mobile​Platform​Application​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the mobile platform application that was just deleted.

* user​Errors

  [\[Mobile​Platform​Application​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [mobile​Platform​Application​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationDelete)

  mutation

  Delete a mobile platform application.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Mobile Platform Application to be deleted.

  ***

***

## Map

### Mutations with this payload

* [mobile​Platform​Application​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/mobilePlatformApplicationDelete)
