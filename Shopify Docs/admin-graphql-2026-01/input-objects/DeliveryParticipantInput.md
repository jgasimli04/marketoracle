---
title: DeliveryParticipantInput - GraphQL Admin
description: The input fields for a participant.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryParticipantInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryParticipantInput.md
---

# Delivery​Participant​Input

input\_object

The input fields for a participant.

## Fields

* adapt​To​New​Services

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to automatically display new shipping services to the customer when a service becomes available.

* carrier​Service​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the carrier service for this participant.

* fixed​Fee

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  The fixed feed that's defined by the merchant for this participant.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the participant.

* participant​Services

  [\[Delivery​Participant​Service​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryParticipantServiceInput)

  The list of shipping services offered by the participant.

* percentage​Of​Rate​Fee

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The merchant-defined percentage-of-rate fee for this participant.

***

## Input objects using this input

* [Delivery​Method​Definition​Input.participant](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput#fields-participant)

  INPUT OBJECT

  The input fields for a method definition.

***

## Map

### Input objects using this input

* [Delivery​Method​Definition​Input.participant](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryMethodDefinitionInput#fields-participant)
