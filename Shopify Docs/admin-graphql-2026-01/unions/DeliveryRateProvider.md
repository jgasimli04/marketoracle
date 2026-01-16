---
title: DeliveryRateProvider - GraphQL Admin
description: A rate provided by a merchant-defined rate or a participant.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryRateProvider
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryRateProvider.md
---

# Delivery​Rate​Provider

union

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

A rate provided by a merchant-defined rate or a participant.

## Possible types

* [Delivery​Participant](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryParticipant)

  OBJECT

  A participant defines carrier-calculated rates for shipping services with a possible merchant-defined fixed fee or a percentage-of-rate fee.

  * adapt​To​New​Services​Flag

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether to display new shipping services automatically to the customer when the service becomes available.

  * carrier​Service

    [Delivery​Carrier​Service!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

    non-null

    The carrier used for this participant.

  * fixed​Fee

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The merchant-defined fixed fee for this participant.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * participant​Services

    [\[Delivery​Participant​Service!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryParticipantService)

    non-null

    The carrier-specific services offered by the participant, and whether each service is active.

  * percentage​Of​Rate​Fee

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The merchant-defined percentage-of-rate fee for this participant.

* [Delivery​Rate​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateDefinition)

  OBJECT

  The merchant-defined rate of the [DeliveryMethodDefinition](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryMethodDefinition).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The price of this rate.

***

## Fields with this union

* [Delivery​Method​Definition.rateProvider](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition#field-DeliveryMethodDefinition.fields.rateProvider)

  OBJECT

  A method definition contains the delivery rate and the conditions that must be met for the method to be applied.

***

```graphql
union DeliveryRateProvider = DeliveryParticipant | DeliveryRateDefinition
```
