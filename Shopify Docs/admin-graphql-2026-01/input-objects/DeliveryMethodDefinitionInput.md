---
title: DeliveryMethodDefinitionInput - GraphQL Admin
description: The input fields for a method definition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput.md
---

# Delivery​Method​Definition​Input

input\_object

The input fields for a method definition.

## Fields

* active

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to use this method definition during rate calculation.

* conditions​To​Update

  [\[Delivery​Update​Condition​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryUpdateConditionInput)

  A list of conditions to update on the method definition.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the method definition.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A globally-unique ID of the method definition. Use only when updating a method definition.

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the method definition.

* participant

  [Delivery​Participant​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryParticipantInput)

  A participant to apply to the method definition.

* price​Conditions​To​Create

  [\[Delivery​Price​Condition​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryPriceConditionInput)

  A list of price conditions on the method definition.

* rate​Definition

  [Delivery​Rate​Definition​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryRateDefinitionInput)

  A rate definition to apply to the method definition.

* weight​Conditions​To​Create

  [\[Delivery​Weight​Condition​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryWeightConditionInput)

  A list of weight conditions on the method definition.

***

## Input objects using this input

* [Delivery​Location​Group​Zone​Input.methodDefinitionsToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationGroupZoneInput#fields-methodDefinitionsToCreate)

  INPUT OBJECT

  The input fields for a delivery zone associated to a location group and profile.

* [Delivery​Location​Group​Zone​Input.methodDefinitionsToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationGroupZoneInput#fields-methodDefinitionsToUpdate)

  INPUT OBJECT

  The input fields for a delivery zone associated to a location group and profile.

***

## Map

### Input objects using this input

* [Delivery​Location​Group​Zone​Input.methodDefinitionsToCreate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationGroupZoneInput#fields-methodDefinitionsToCreate)
* [Delivery​Location​Group​Zone​Input.methodDefinitionsToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationGroupZoneInput#fields-methodDefinitionsToUpdate)
