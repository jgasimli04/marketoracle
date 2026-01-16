---
title: ServerPixelStatus - GraphQL Admin
description: The current state of a server pixel.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ServerPixelStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ServerPixelStatus.md'
---

# Server​Pixel​Status

enum

The current state of a server pixel.

## Valid values

* CONNECTED

  This server pixel is connected: it will stream customer events to the endpoint if it is configured properly.

* DISCONNECTED\_​CONFIGURED

  This server pixel is disconnected: it does not stream events to the endpoint and an endpoint address has been added to the server pixel.

* DISCONNECTED\_​UNCONFIGURED

  This server pixel is disconnected and unconfigured: it does not stream events to the endpoint and no endpoint address had been added to the server pixel.

***

## Fields

* [Server​Pixel.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ServerPixel#field-ServerPixel.fields.status)

  OBJECT

  A server pixel stores configuration for streaming customer interactions to an EventBridge or PubSub endpoint.

***

## Map

### Fields with this enum

* <-|[Server​Pixel.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ServerPixel#field-ServerPixel.fields.status)
