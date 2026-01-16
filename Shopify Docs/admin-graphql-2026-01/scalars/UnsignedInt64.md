---
title: UnsignedInt64 - GraphQL Admin
description: >
  An unsigned 64-bit integer. Represents whole numeric values between 0 and 2^64
  - 1 encoded as a string of base-10 digits.


  Example value: `"50"`.
api_version: 2026-01
api_name: admin
type: scalar
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64.md'
---

# Unsigned​Int64

scalar

An unsigned 64-bit integer. Represents whole numeric values between 0 and 2^64 - 1 encoded as a string of base-10 digits.

Example value: `"50"`.

## Map

### Fields with this scalar

* <-|[Bulk​Operation.fileSize](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.fileSize)
* <-|[Bulk​Operation.objectCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.objectCount)
* <-|[Bulk​Operation.rootObjectCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.rootObjectCount)
* <-|[Collection.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.legacyResourceId)
* <-|[Customer.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.legacyResourceId)
* <-|[Customer.numberOfOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.numberOfOrders)
* <-|[Customer​Merge​Preview​Default​Fields.discountNodeCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.discountNodeCount)
* <-|[Customer​Merge​Preview​Default​Fields.draftOrderCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.draftOrderCount)
* <-|[Customer​Merge​Preview​Default​Fields.giftCardCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.giftCardCount)
* <-|[Customer​Merge​Preview​Default​Fields.metafieldCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.metafieldCount)
* <-|[Customer​Merge​Preview​Default​Fields.orderCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.orderCount)
* <-|[Customer​Segment​Member.numberOfOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.numberOfOrders)
* <-|[Discount​Minimum​Quantity.greaterThanOrEqualToQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMinimumQuantity#field-DiscountMinimumQuantity.fields.greaterThanOrEqualToQuantity)
* <-|[Discount​Quantity.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountQuantity#field-DiscountQuantity.fields.quantity)
* <-|[Draft​Order.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.legacyResourceId)
* <-|[Draft​Order.totalWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.totalWeight)
* <-|[Fulfillment.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.legacyResourceId)
* <-|[Inventory​Item.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.legacyResourceId)
* <-|[Location.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.legacyResourceId)
* <-|[Marketing​Event.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent#field-MarketingEvent.fields.legacyResourceId)
* <-|[Metafield.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.legacyResourceId)
* <-|[Online​Store​Theme​File.size](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFile#field-OnlineStoreThemeFile.fields.size)
* <-|[Online​Store​Theme​File​Operation​Result.size](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult#field-OnlineStoreThemeFileOperationResult.fields.size)
* <-|[Order.currentTotalWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.currentTotalWeight)
* <-|[Order.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.legacyResourceId)
* <-|[Order.totalWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.totalWeight)
* <-|[Price​Rule.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.legacyResourceId)
* <-|[Product.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.legacyResourceId)
* <-|[Product​Variant.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.legacyResourceId)
* <-|[Refund.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.legacyResourceId)

### Inputs with this scalar

* [Discount​Automatic​Bxgy​Input.usesPerOrderLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-usesPerOrderLimit)
* [Discount​Customer​Buys​Value​Input.quantity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysValueInput#fields-quantity)
* [Discount​Minimum​Quantity​Input.greaterThanOrEqualToQuantity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountMinimumQuantityInput#fields-greaterThanOrEqualToQuantity)
* [Discount​On​Quantity​Input.quantity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountOnQuantityInput#fields-quantity)
* [Move​Input.newPosition](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput#fields-newPosition)
* [Staged​Upload​Input.fileSize](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput#fields-fileSize)
* [Staged​Upload​Target​Generate​Input.fileSize](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput#fields-fileSize)
