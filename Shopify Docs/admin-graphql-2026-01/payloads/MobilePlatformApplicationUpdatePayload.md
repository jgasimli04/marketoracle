---
title: MobilePlatformApplicationUpdatePayload - GraphQL Admin
description: Return type for `mobilePlatformApplicationUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MobilePlatformApplicationUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MobilePlatformApplicationUpdatePayload.md
---

# Mobile​Platform​Application​Update​Payload

payload

Return type for `mobilePlatformApplicationUpdate` mutation.

## Fields

* mobile​Platform​Application

  [Mobile​Platform​Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

  Created mobile platform application.

* user​Errors

  [\[Mobile​Platform​Application​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [mobile​Platform​Application​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationUpdate)

  mutation

  Update a mobile platform application.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Mobile Platform Application to be updated.

  * input

    [Mobile​Platform​Application​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationUpdateInput)

    required

    The input to updat a Mobile Platform Application.

  ***

***

## Map

### Mutations with this payload

* [mobile​Platform​Application​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/mobilePlatformApplicationUpdate)
