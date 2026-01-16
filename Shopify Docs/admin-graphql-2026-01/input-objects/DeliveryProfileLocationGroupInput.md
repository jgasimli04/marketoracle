---
title: DeliveryProfileLocationGroupInput - GraphQL Admin
description: The input fields for a location group associated to a delivery profile.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileLocationGroupInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileLocationGroupInput.md
---

# Delivery​Profile​Location​Group​Input

input\_object

The input fields for a location group associated to a delivery profile.

## Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The globally-unique ID of the delivery profile location group.

* locations

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of location IDs to be moved to this location group.

* locations​To​Add

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of location IDs to be added to this location group.

  **Note:** due to API input array limits, a maximum of 250 items can be sent per each request.

* locations​To​Remove

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of location IDs to be removed from this location group.

  **Note:** due to API input array limits, a maximum of 250 items can be sent per each request.

* zones​To​Create

  [\[Delivery​Location​Group​Zone​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationGroupZoneInput)

  The list of location group zones to create.

  **Note:** due to the potential complexity of the nested data, it is recommended to send no more than 5 zones per each request.

* zones​To​Update

  [\[Delivery​Location​Group​Zone​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationGroupZoneInput)

  The list of location group zones to update.

  **Note:** due to the potential complexity of the nested data, it is recommended to send no more than 5 zones per each request.

***

## Input objects using this input

* [Delivery​Profile​Input.profileLocationGroups](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput#fields-profileLocationGroups)

  INPUT OBJECT

  The input fields for a delivery profile.

* [Delivery​Profile​Input.locationGroupsToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput#fields-locationGroupsToCreate)

  INPUT OBJECT

  The input fields for a delivery profile.

* [Delivery​Profile​Input.locationGroupsToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput#fields-locationGroupsToUpdate)

  INPUT OBJECT

  The input fields for a delivery profile.

***

## Map

### Input objects using this input

* [Delivery​Profile​Input.profileLocationGroups](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput#fields-profileLocationGroups)
* [Delivery​Profile​Input.locationGroupsToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput#fields-locationGroupsToCreate)
* [Delivery​Profile​Input.locationGroupsToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput#fields-locationGroupsToUpdate)
