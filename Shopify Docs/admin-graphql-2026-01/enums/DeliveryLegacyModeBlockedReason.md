---
title: DeliveryLegacyModeBlockedReason - GraphQL Admin
description: >-
  Reasons the shop is blocked from converting to full multi-location delivery
  profiles mode.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLegacyModeBlockedReason
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLegacyModeBlockedReason.md
---

# Delivery​Legacy​Mode​Blocked​Reason

enum

Reasons the shop is blocked from converting to full multi-location delivery profiles mode.

## Valid values

* NO\_​LOCATIONS\_​FULFILLING\_​ONLINE\_​ORDERS

  There are no locations for this store that can fulfill online orders.

* MULTI\_​LOCATION\_​DISABLED

  Deprecated

***

## Fields

* [Delivery​Legacy​Mode​Blocked.reasons](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLegacyModeBlocked#field-DeliveryLegacyModeBlocked.fields.reasons)

  OBJECT

  Whether the shop is blocked from converting to full multi-location delivery profiles mode. If the shop is blocked, then the blocking reasons are also returned.

***

## Map

### Fields with this enum

* <-|[Delivery​Legacy​Mode​Blocked.reasons](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLegacyModeBlocked#field-DeliveryLegacyModeBlocked.fields.reasons)
