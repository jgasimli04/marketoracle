---
title: FulfillmentOrderAssignmentStatus - GraphQL Admin
description: The assigment status to be used to filter fulfillment orders.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderAssignmentStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderAssignmentStatus.md
---

# Fulfillment​Order​Assignment​Status

enum

The assigment status to be used to filter fulfillment orders.

## Valid values

* CANCELLATION\_​REQUESTED

  Fulfillment orders for which the merchant has requested cancellation of the previously accepted fulfillment request.

* FULFILLMENT\_​ACCEPTED

  Fulfillment orders for which the merchant's fulfillment request has been accepted. Any number of fulfillments can be created on these fulfillment orders to completely fulfill the requested items.

* FULFILLMENT\_​REQUESTED

  Fulfillment orders for which the merchant has requested fulfillment.

* FULFILLMENT\_​UNSUBMITTED

  Fulfillment orders for which the merchant hasn't yet requested fulfillment.

***

## Fields

* [Shop.assignedFulfillmentOrders(assignmentStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.assignedFulfillmentOrders.arguments.assignmentStatus)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Query​Root.assignedFulfillmentOrders(assignmentStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.assignedFulfillmentOrders.arguments.assignmentStatus)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [assigned​Fulfillment​Orders.assignmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedFulfillmentOrders#arguments-assignmentStatus)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Shop.assignedFulfillmentOrders(assignmentStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.assignedFulfillmentOrders.arguments.assignmentStatus)
* <-|[Query​Root.assignedFulfillmentOrders(assignmentStatus)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.assignedFulfillmentOrders.arguments.assignmentStatus)
* <-|[assigned​Fulfillment​Orders.assignmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedFulfillmentOrders#arguments-assignmentStatus)
