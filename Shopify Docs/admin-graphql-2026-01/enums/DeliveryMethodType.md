---
title: DeliveryMethodType - GraphQL Admin
description: Possible method types that a delivery method can have.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType.md
---

# Delivery​Method​Type

enum

Possible method types that a delivery method can have.

## Valid values

* LOCAL

  The order is delivered using a local delivery service.

* NONE

  Non-physical items, no delivery needed.

* PICK\_​UP

  The order is picked up by the customer.

* PICKUP\_​POINT

  The order is delivered to a pickup point.

* RETAIL

  In-store sale, no delivery needed.

* SHIPPING

  The order is shipped.

***

## Fields

* [Delivery​Method.methodType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethod#field-DeliveryMethod.fields.methodType)

  OBJECT

  Information about the delivery method selected for a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder). Includes the method type, expected delivery timeframe, and any additional information needed for delivery.

  The delivery method stores details from checkout such as the carrier, branded promises like Shop Promise, and the delivery option name shown to the buyer. Additional information like delivery instructions or contact phone numbers helps fulfill the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) correctly.

* [Fulfillment​Constraint​Rule.deliveryMethodTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-FulfillmentConstraintRule.fields.deliveryMethodTypes)

  OBJECT

  A fulfillment constraint rule.

* [fulfillment​Constraint​Rule​Create.deliveryMethodTypes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleCreate#arguments-deliveryMethodTypes)

  ARGUMENT

* [fulfillment​Constraint​Rule​Update.deliveryMethodTypes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleUpdate#arguments-deliveryMethodTypes)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Delivery​Method.methodType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethod#field-DeliveryMethod.fields.methodType)
* <-|[Fulfillment​Constraint​Rule.deliveryMethodTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-FulfillmentConstraintRule.fields.deliveryMethodTypes)

### Arguments with this enum

* <-|[fulfillment​Constraint​Rule​Create.deliveryMethodTypes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleCreate#arguments-deliveryMethodTypes)
* <-|[fulfillment​Constraint​Rule​Update.deliveryMethodTypes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleUpdate#arguments-deliveryMethodTypes)
