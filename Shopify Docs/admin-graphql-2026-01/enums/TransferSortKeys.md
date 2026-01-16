---
title: TransferSortKeys - GraphQL Admin
description: The set of valid sort keys for the Transfer query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/TransferSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/TransferSortKeys.md'
---

# Transfer​Sort​Keys

enum

The set of valid sort keys for the Transfer query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* DESTINATION\_​NAME

  Sort by the `destination_name` value.

* EXPECTED\_​SHIPMENT\_​ARRIVAL

  Sort by the `expected_shipment_arrival` value.

* ID

  Sort by the `id` value.

* NAME

  Sort by the `name` value.

* ORIGIN\_​NAME

  Sort by the `origin_name` value.

* SOURCE\_​NAME

  Sort by the `source_name` value.

* STATUS

  Sort by the `status` value.

***

## Fields

* [Query​Root.inventoryTransfers(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.inventoryTransfers.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [inventory​Transfers.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryTransfers#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Query​Root.inventoryTransfers(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.inventoryTransfers.arguments.sortKey)
* <-|[inventory​Transfers.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryTransfers#arguments-sortKey)
