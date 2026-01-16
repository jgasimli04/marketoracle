---
title: DeliveryLocationGroupZoneInput - GraphQL Admin
description: >-
  The input fields for a delivery zone associated to a location group and
  profile.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationGroupZoneInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationGroupZoneInput.md
---

# Delivery​Location​Group​Zone​Input

input\_object

The input fields for a delivery zone associated to a location group and profile.

## Fields

* countries

  [\[Delivery​Country​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCountryInput)

  A list of countries to associate with the zone.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A globally-unique ID of the zone.

* method​Definitions​To​Create

  [\[Delivery​Method​Definition​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput)

  A list of method definitions to create.

* method​Definitions​To​Update

  [\[Delivery​Method​Definition​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput)

  A list of method definitions to update.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the zone.

***

## Input objects using this input

* [Delivery​Profile​Location​Group​Input.zonesToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileLocationGroupInput#fields-zonesToCreate)

  INPUT OBJECT

  The input fields for a location group associated to a delivery profile.

* [Delivery​Profile​Location​Group​Input.zonesToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileLocationGroupInput#fields-zonesToUpdate)

  INPUT OBJECT

  The input fields for a location group associated to a delivery profile.

***

## Map

### Input objects using this input

* [Delivery​Profile​Location​Group​Input.zonesToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileLocationGroupInput#fields-zonesToCreate)
* [Delivery​Profile​Location​Group​Input.zonesToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileLocationGroupInput#fields-zonesToUpdate)
