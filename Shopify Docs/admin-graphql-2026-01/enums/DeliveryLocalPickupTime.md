---
title: DeliveryLocalPickupTime - GraphQL Admin
description: Possible pickup time values that a location enabled for local pickup can have.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLocalPickupTime
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryLocalPickupTime.md
---

# Delivery​Local​Pickup​Time

enum

Possible pickup time values that a location enabled for local pickup can have.

## Valid values

* FIVE\_​OR\_​MORE\_​DAYS

  Usually ready in 5+ days.

* FOUR\_​HOURS

  Usually ready in 4 hours.

* ONE\_​HOUR

  Usually ready in 1 hour.

* TWENTY\_​FOUR\_​HOURS

  Usually ready in 24 hours.

* TWO\_​HOURS

  Usually ready in 2 hours.

* TWO\_​TO\_​FOUR\_​DAYS

  Usually ready in 2-4 days.

* CUSTOM

  Deprecated

***

## Fields

* [Delivery​Local​Pickup​Settings.pickupTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocalPickupSettings#field-DeliveryLocalPickupSettings.fields.pickupTime)

  OBJECT

  Local pickup settings associated with a location.

* [Delivery​Location​Local​Pickup​Enable​Input.pickupTime](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationLocalPickupEnableInput#fields-pickupTime)

  INPUT OBJECT

  The input fields for a local pickup setting associated with a location.

***

## Map

### Fields with this enum

* <-|[Delivery​Local​Pickup​Settings.pickupTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocalPickupSettings#field-DeliveryLocalPickupSettings.fields.pickupTime)

### Inputs with this enum

* [Delivery​Location​Local​Pickup​Enable​Input.pickupTime](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationLocalPickupEnableInput#fields-pickupTime)
