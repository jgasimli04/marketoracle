---
title: DeliveryLegacyModeBlocked - GraphQL Admin
description: >-
  Whether the shop is blocked from converting to full multi-location delivery
  profiles mode. If the shop is blocked, then the blocking reasons are also
  returned.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLegacyModeBlocked
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLegacyModeBlocked.md
---

# Delivery​Legacy​Mode​Blocked

object

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

Whether the shop is blocked from converting to full multi-location delivery profiles mode. If the shop is blocked, then the blocking reasons are also returned.

## Fields

* blocked

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the shop can convert to full multi-location delivery profiles mode.

* reasons

  [\[Delivery​Legacy​Mode​Blocked​Reason!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLegacyModeBlockedReason)

  The reasons why the shop is blocked from converting to full multi-location delivery profiles mode.

***

## Map

### Fields with this object

* {}[DeliverySetting.legacyModeBlocked](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliverySetting#field-DeliverySetting.fields.legacyModeBlocked)
