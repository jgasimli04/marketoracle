---
title: ReverseFulfillmentOrderDispositionType - GraphQL Admin
description: The final arrangement of an item from a reverse fulfillment order.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ReverseFulfillmentOrderDispositionType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ReverseFulfillmentOrderDispositionType.md
---

# Reverse​Fulfillment​Order​Disposition​Type

enum

The final arrangement of an item from a reverse fulfillment order.

## Valid values

* MISSING

  An item that was expected but absent.

* NOT\_​RESTOCKED

  An item that wasn't restocked.

* PROCESSING\_​REQUIRED

  An item that requires further processing before being restocked or discarded.

* RESTOCKED

  An item that was restocked.

***

## Fields

* [Reverse​Fulfillment​Order​Dispose​Input.dispositionType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput#fields-dispositionType)

  INPUT OBJECT

  The input fields to dispose a reverse fulfillment order line item.

* [Reverse​Fulfillment​Order​Disposition.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderDisposition#field-ReverseFulfillmentOrderDisposition.fields.type)

  OBJECT

  The details of the arrangement of an item.

***

## Map

### Fields with this enum

* <-|[Reverse​Fulfillment​Order​Disposition.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderDisposition#field-ReverseFulfillmentOrderDisposition.fields.type)

### Inputs with this enum

* [Reverse​Fulfillment​Order​Dispose​Input.dispositionType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput#fields-dispositionType)
