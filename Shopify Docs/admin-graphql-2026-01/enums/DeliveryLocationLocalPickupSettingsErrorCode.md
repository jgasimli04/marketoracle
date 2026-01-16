---
title: DeliveryLocationLocalPickupSettingsErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `DeliveryLocationLocalPickupSettingsError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLocationLocalPickupSettingsErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLocationLocalPickupSettingsErrorCode.md
---

# Delivery​Location​Local​Pickup​Settings​Error​Code

enum

Possible error codes that can be returned by `DeliveryLocationLocalPickupSettingsError`.

## Valid values

* ACTIVE\_​LOCATION\_​NOT\_​FOUND

  Provided locationId is not for an active location belonging to this store.

* CUSTOM\_​PICKUP\_​TIME\_​NOT\_​ALLOWED

  Custom pickup time is not allowed for local pickup settings.

* GENERIC\_​ERROR

  An error occurred while changing the local pickup settings.

***

## Fields

* [Delivery​Location​Local​Pickup​Settings​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError#field-DeliveryLocationLocalPickupSettingsError.fields.code)

  OBJECT

  Represents an error that happened when changing local pickup settings for a location.

***

## Map

### Fields with this enum

* <-|[Delivery​Location​Local​Pickup​Settings​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError#field-DeliveryLocationLocalPickupSettingsError.fields.code)
