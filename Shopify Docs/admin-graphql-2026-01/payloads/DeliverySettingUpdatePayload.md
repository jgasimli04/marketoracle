---
title: DeliverySettingUpdatePayload - GraphQL Admin
description: Return type for `deliverySettingUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliverySettingUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DeliverySettingUpdatePayload.md
---

# Delivery​Setting​Update​Payload

payload

Return type for `deliverySettingUpdate` mutation.

## Fields

* setting

  [Delivery​Setting](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliverySetting)

  The updated delivery shop level settings.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [delivery​Setting​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverySettingUpdate)

  mutation

  Set the delivery settings for a shop.

  * setting

    [Delivery​Setting​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliverySettingInput)

    required

    ### Arguments

    Specifies the input fields for the delivery shop level settings.

  ***

***

## Map

### Mutations with this payload

* [delivery​Setting​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/deliverySettingUpdate)
