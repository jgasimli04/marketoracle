---
title: InventoryShipmentTrackingInput - GraphQL Admin
description: The input fields for an inventory shipment's tracking information.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput.md
---

# Inventory​Shipment​Tracking​Input

input\_object

The input fields for an inventory shipment's tracking information.

## Fields

* arrives​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The estimated date and time that the shipment will arrive.

* company

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the shipping carrier company.

  Given a shipping carrier company name from [the list](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#field-company), Shopify can build a tracking URL for a provided tracking number.

* tracking​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The tracking number for the shipment.

* tracking​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL to track the shipment.

  Use this field to specify a custom tracking URL. If no custom tracking URL is set, Shopify will automatically provide this field on query for a tracking number and a supported shipping carrier company from [the list](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#field-company).

***

## Input objects using this input

* [Inventory​Shipment​Create​Input.trackingInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput#fields-trackingInput)

  INPUT OBJECT

  The input fields to add a shipment.

***

## Map

### Input objects using this input

* [Inventory​Shipment​Create​Input.trackingInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput#fields-trackingInput)
