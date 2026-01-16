---
title: DateTime - GraphQL Admin
description: >
  Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date
  and time string.

  For example, 3:50 pm on September 7, 2019 in the time zone of UTC (Coordinated
  Universal Time) is

  represented as `"2019-09-07T15:50:00Z`".
api_version: 2026-01
api_name: admin
type: scalar
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime.md'
---

# Date​Time

scalar

Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date and time string. For example, 3:50 pm on September 7, 2019 in the time zone of UTC (Coordinated Universal Time) is represented as `"2019-09-07T15:50:00Z`".

## Map

### Fields with this scalar

* <-|[Abandoned​Checkout.completedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.completedAt)
* <-|[Abandoned​Checkout.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.createdAt)
* <-|[Abandoned​Checkout.updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.updatedAt)
* <-|[Abandonment.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.createdAt)
* <-|[Abandonment.emailSentAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.emailSentAt)
* <-|[Abandonment.lastBrowseAbandonmentDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.lastBrowseAbandonmentDate)
* <-|[Abandonment.lastCartAbandonmentDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.lastCartAbandonmentDate)
* <-|[Abandonment.lastCheckoutAbandonmentDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.lastCheckoutAbandonmentDate)
* <-|[Abandonment.visitStartedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.visitStartedAt)
* <-|[App​Credit.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit#field-AppCredit.fields.createdAt)
* <-|[App​Feedback.feedbackGeneratedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback#field-AppFeedback.fields.feedbackGeneratedAt)
* <-|[App​Purchase​One​Time.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.createdAt)
* <-|[App​Revenue​Attribution​Record.capturedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord#field-AppRevenueAttributionRecord.fields.capturedAt)
* <-|[App​Revenue​Attribution​Record.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord#field-AppRevenueAttributionRecord.fields.createdAt)
* <-|[App​Subscription.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.createdAt)
* <-|[App​Subscription.currentPeriodEnd](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.currentPeriodEnd)
* <-|[App​Usage​Record.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord#field-AppUsageRecord.fields.createdAt)
* <-|[Article.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.createdAt)
* <-|[Article.publishedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt)
* <-|[Article.updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.updatedAt)
* <-|[Basic​Event.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.createdAt)
* <-|[Blog.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.createdAt)
* <-|[Blog.updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.updatedAt)
* <-|[Bulk​Operation.completedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.completedAt)
* <-|[Bulk​Operation.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.createdAt)
* <-|[Cash​Tracking​Adjustment.time](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustment#field-CashTrackingAdjustment.fields.time)
* <-|[Cash​Tracking​Session.closingTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.closingTime)
* <-|[Cash​Tracking​Session.openingTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.openingTime)
* <-|[Checkout​Profile.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile#field-CheckoutProfile.fields.createdAt)
* <-|[Checkout​Profile.editedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile#field-CheckoutProfile.fields.editedAt)

### Inputs with this scalar

* [Article​Create​Input.publishDate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-publishDate)
* [Article​Update​Input.publishDate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-publishDate)
* [Company​Input.customerSince](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyInput#fields-customerSince)
* [Customer​Email​Marketing​Consent​Input.consentUpdatedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentInput#fields-consentUpdatedAt)
* [Customer​Sms​Marketing​Consent​Input.consentUpdatedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentInput#fields-consentUpdatedAt)
* [Discount​Automatic​App​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-startsAt)
* [Discount​Automatic​App​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-endsAt)
* [Discount​Automatic​Basic​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-startsAt)
* [Discount​Automatic​Basic​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-endsAt)
* [Discount​Automatic​Bxgy​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-startsAt)
* [Discount​Automatic​Bxgy​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-endsAt)
* [Discount​Automatic​Free​Shipping​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-startsAt)
* [Discount​Automatic​Free​Shipping​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-endsAt)
* [Discount​Code​App​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-startsAt)
* [Discount​Code​App​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-endsAt)
* [Discount​Code​Basic​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-startsAt)
* [Discount​Code​Basic​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-endsAt)
* [Discount​Code​Bxgy​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-startsAt)
* [Discount​Code​Bxgy​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-endsAt)
* [Discount​Code​Free​Shipping​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-startsAt)
* [Discount​Code​Free​Shipping​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-endsAt)
* [Draft​Order​Input.reserveInventoryUntil](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-reserveInventoryUntil)
* [Fulfillment​Event​Input.estimatedDeliveryAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput#fields-estimatedDeliveryAt)
* [Fulfillment​Event​Input.happenedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput#fields-happenedAt)
* [Gift​Card​Credit​Input.processedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreditInput#fields-processedAt)
* [Gift​Card​Debit​Input.processedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput#fields-processedAt)
* [Gift​Card​Recipient​Input.sendNotificationAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardRecipientInput#fields-sendNotificationAt)
* [Inventory​Scheduled​Change​Input.expectedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeInput#fields-expectedAt)
* [Inventory​Shipment​Create​Input.dateCreated](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput#fields-dateCreated)
* [Inventory​Shipment​Tracking​Input.arrivesAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput#fields-arrivesAt)

### Arguments with this scalar

* <-|[abandonment​Email​State​Update.emailSentAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentEmailStateUpdate#arguments-emailSentAt)
* <-|[abandonment​Update​Activities​Delivery​Statuses.deliveredAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentUpdateActivitiesDeliveryStatuses#arguments-deliveredAt)
* <-|[fulfillment​Order​Accept​Fulfillment​Request.estimatedShippedAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest#arguments-estimatedShippedAt)
* <-|[fulfillment​Order​Reschedule.fulfillAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule#arguments-fulfillAt)
* <-|[fulfillment​Orders​Set​Fulfillment​Deadline.fulfillmentDeadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersSetFulfillmentDeadline#arguments-fulfillmentDeadline)
* <-|[inventory​Shipment​Mark​In​Transit.dateShipped](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit#arguments-dateShipped)
* <-|[inventory​Shipment​Receive.dateReceived](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive#arguments-dateReceived)
* <-|[order​Create​Manual​Payment.processedAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-processedAt)
* <-|[product​Full​Sync.beforeUpdatedAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFullSync#arguments-beforeUpdatedAt)
* <-|[product​Full​Sync.updatedAtSince](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFullSync#arguments-updatedAtSince)
* <-|[subscription​Contract​Set​Next​Billing​Date.date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate#arguments-date)
* <-|[tax​Summary​Create.startTime](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxSummaryCreate#arguments-startTime)
* <-|[tax​Summary​Create.endTime](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxSummaryCreate#arguments-endTime)
