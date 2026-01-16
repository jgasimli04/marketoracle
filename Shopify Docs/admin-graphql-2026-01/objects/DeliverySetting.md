---
title: DeliverySetting - GraphQL Admin
description: >-
  The `DeliverySetting` object enables you to manage shop-wide shipping
  settings.

  You can enable legacy compatibility mode for the multi-location delivery
  profiles feature

  if the legacy mode isn't blocked.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliverySetting'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliverySetting.md'
---

# Delivery​Setting

object

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

The `DeliverySetting` object enables you to manage shop-wide shipping settings. You can enable legacy compatibility mode for the multi-location delivery profiles feature if the legacy mode isn't blocked.

## Fields

* legacy​Mode​Blocked

  [Delivery​Legacy​Mode​Blocked!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLegacyModeBlocked)

  non-null

  Whether the shop is blocked from converting to full multi-location delivery profiles mode. If the shop is blocked, then the blocking reasons are also returned. Note: this field is effectively deprecated and will be removed in a future version of the API.

* legacy​Mode​Profiles

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Enables legacy compatability mode for the multi-location delivery profiles feature. Note: this field is effectively deprecated and will be removed in a future version of the API.

***

## Map

No referencing types

***

## Queries

* [delivery​Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverySettings)

  query

  Returns the shop-wide shipping settings.

***

## \<?>DeliverySetting Queries

### Queried by

* \<?>[delivery​Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverySettings)

***

## Mutations

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

## <\~> DeliverySetting Mutations

### Mutated by

* <\~>[delivery​Setting​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverySettingUpdate)
