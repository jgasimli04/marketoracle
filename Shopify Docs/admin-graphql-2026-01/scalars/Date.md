---
title: Date - GraphQL Admin
description: >
  Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date
  string.

  For example, September 7, 2019 is represented as `"2019-07-16"`.
api_version: 2026-01
api_name: admin
type: scalar
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date.md'
---

# Date

scalar

Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date string. For example, September 7, 2019 is represented as `"2019-07-16"`.

## Map

### Fields with this scalar

* <-|[Gift​Card.expiresOn](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard#field-GiftCard.fields.expiresOn)
* <-|[Marketing​Engagement.occurredOn](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.occurredOn)
* <-|[Shop​Policy.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy#field-ShopPolicy.fields.createdAt)
* <-|[Shop​Policy.updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy#field-ShopPolicy.fields.updatedAt)
* <-|[Shopify​Payments​Dispute.evidenceDueBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute#field-ShopifyPaymentsDispute.fields.evidenceDueBy)
* <-|[Shopify​Payments​Dispute.evidenceSentOn](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute#field-ShopifyPaymentsDispute.fields.evidenceSentOn)
* <-|[Shopify​Payments​Dispute.finalizedOn](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute#field-ShopifyPaymentsDispute.fields.finalizedOn)
* <-|[Shopify​Payments​Dispute​Fulfillment.shippingDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFulfillment#field-ShopifyPaymentsDisputeFulfillment.fields.shippingDate)

### Inputs with this scalar

* [Gift​Card​Create​Input.expiresOn](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-expiresOn)
* [Gift​Card​Update​Input.expiresOn](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardUpdateInput#fields-expiresOn)
* [Inventory​Transfer​Edit​Input.dateCreated](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferEditInput#fields-dateCreated)
* [Marketing​Engagement​Input.occurredOn](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-occurredOn)
