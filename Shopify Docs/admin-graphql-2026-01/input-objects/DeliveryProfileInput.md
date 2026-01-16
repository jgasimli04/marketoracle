---
title: DeliveryProfileInput - GraphQL Admin
description: The input fields for a delivery profile.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput.md
---

# Delivery​Profile​Input

input\_object

The input fields for a delivery profile.

## Fields

* conditions​To​Delete

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of condition IDs to delete.

* location​Groups​To​Create

  [\[Delivery​Profile​Location​Group​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileLocationGroupInput)

  The list of location groups to be created in the delivery profile.

  **Note:** due to the potential complexity of the nested data, it is recommended to send no more than 5 location groups per each request.

* location​Groups​To​Delete

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of location groups to be deleted from the delivery profile.

* location​Groups​To​Update

  [\[Delivery​Profile​Location​Group​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileLocationGroupInput)

  The list of location groups to be updated in the delivery profile.

  **Note:** due to the potential complexity of the nested data, it is recommended to send no more than 5 location groups per each request.

* method​Definitions​To​Delete

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of method definition IDs to delete.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the delivery profile.

* profile​Location​Groups

  [\[Delivery​Profile​Location​Group​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileLocationGroupInput)

  The list of location groups associated with the delivery profile.

* selling​Plan​Groups​To​Associate

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of selling plan groups to be associated with the delivery profile.

* selling​Plan​Groups​To​Dissociate

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of selling plan groups to be dissociated with the delivery profile.

* variants​To​Associate

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of product variant IDs to be associated with the delivery profile.

* variants​To​Dissociate

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of product variant IDs to be dissociated from the delivery profile. The dissociated product variants are moved back to the default delivery profile.

* zones​To​Delete

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of zone IDs to delete.

***

## Map

No referencing types
