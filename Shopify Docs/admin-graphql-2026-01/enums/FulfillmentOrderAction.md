---
title: FulfillmentOrderAction - GraphQL Admin
description: The actions that can be taken on a fulfillment order.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderAction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderAction.md
---

# Fulfillment​Order​Action

enum

The actions that can be taken on a fulfillment order.

## Valid values

* CANCEL\_​FULFILLMENT\_​ORDER

  Cancels a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderCancel`.

* CREATE\_​FULFILLMENT

  Creates a fulfillment for selected line items in the fulfillment order. The corresponding mutation for this action is `fulfillmentCreateV2`.

* EXTERNAL

  Opens an external URL to initiate the fulfillment process outside Shopify. This action should be paired with `FulfillmentOrderSupportedAction.externalUrl`.

* HOLD

  Applies a fulfillment hold on the fulfillment order. The corresponding mutation for this action is `fulfillmentOrderHold`.

* MARK\_​AS\_​OPEN

  Marks the fulfillment order as open. The corresponding mutation for this action is `fulfillmentOrderOpen`.

* MERGE

  Merges a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderMerge`.

* MOVE

  Moves a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderMove`.

* RELEASE\_​HOLD

  Releases the fulfillment hold on the fulfillment order. The corresponding mutation for this action is `fulfillmentOrderReleaseHold`.

* REQUEST\_​CANCELLATION

  Sends a cancellation request to the fulfillment service of a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderSubmitCancellationRequest`.

* REQUEST\_​FULFILLMENT

  Sends a request for fulfilling selected line items in a fulfillment order to a fulfillment service. The corresponding mutation for this action is `fulfillmentOrderSubmitFulfillmentRequest`.

* SPLIT

  Splits a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderSplit`.

***

## Fields

* [Fulfillment​Order​Supported​Action.action](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSupportedAction#field-FulfillmentOrderSupportedAction.fields.action)

  OBJECT

  One of the actions that the fulfillment order supports in its current state.

***

## Map

### Fields with this enum

* <-|[Fulfillment​Order​Supported​Action.action](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSupportedAction#field-FulfillmentOrderSupportedAction.fields.action)
