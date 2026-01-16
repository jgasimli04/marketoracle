---
title: URL - GraphQL Admin
description: >
  Represents an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and

  [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI
  string.


  For example, `"https://example.myshopify.com"` is a valid URL. It includes a
  scheme (`https`) and a host

  (`example.myshopify.com`).
api_version: 2026-01
api_name: admin
type: scalar
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL.md'
---

# URL

scalar

Represents an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.

For example, `"https://example.myshopify.com"` is a valid URL. It includes a scheme (`https`) and a host (`example.myshopify.com`).

## Map

### Fields with this scalar

* <-|[Abandoned​Checkout.abandonedCheckoutUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.abandonedCheckoutUrl)
* <-|[Abandonment.cartUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.cartUrl)
* <-|[App.appStoreAppUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.appStoreAppUrl)
* <-|[App.appStoreDeveloperUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.appStoreDeveloperUrl)
* <-|[App.installUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.installUrl)
* <-|[App.privacyPolicyUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.privacyPolicyUrl)
* <-|[App​Installation.launchUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.launchUrl)
* <-|[App​Installation.uninstallUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.uninstallUrl)
* <-|[App​Subscription.returnUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.returnUrl)
* <-|[Blog​Feed.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogFeed#field-BlogFeed.fields.location)
* <-|[Bulk​Operation.partialDataUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.partialDataUrl)
* <-|[Bulk​Operation.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.url)
* <-|[Comment​Event​Attachment.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEventAttachment#field-CommentEventAttachment.fields.url)
* <-|[Customer​Accounts​V2.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-CustomerAccountsV2.fields.url)
* <-|[Customer​Email​Address.marketingUnsubscribeUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.marketingUnsubscribeUrl)
* <-|[Customer​Email​Address.openTrackingUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.openTrackingUrl)
* <-|[Customer​Visit.landingPage](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.landingPage)
* <-|[Customer​Visit.referrerUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.referrerUrl)
* <-|[Delivery​Carrier​Service.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService#field-DeliveryCarrierService.fields.callbackUrl)
* <-|[Discount​Shareable​Url.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl#field-DiscountShareableUrl.fields.url)
* <-|[Domain.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain#field-Domain.fields.url)
* <-|[Draft​Order.invoiceUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.invoiceUrl)
* <-|[External​Video.embedUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.embedUrl)
* <-|[External​Video.originUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.originUrl)
* <-|[Fulfillment​Order​Supported​Action.externalUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSupportedAction#field-FulfillmentOrderSupportedAction.fields.externalUrl)
* <-|[Fulfillment​Service.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService#field-FulfillmentService.fields.callbackUrl)
* <-|[Fulfillment​Tracking​Info.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#field-FulfillmentTrackingInfo.fields.url)
* <-|[Generic​File.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/GenericFile#field-GenericFile.fields.url)
* <-|[Image.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.url)
* <-|[Inventory​Item.inventoryHistoryUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.inventoryHistoryUrl)

### Inputs with this scalar

* [Delivery​Carrier​Service​Create​Input.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput#fields-callbackUrl)
* [Delivery​Carrier​Service​Update​Input.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput#fields-callbackUrl)
* [Fulfillment​Tracking​Input.url](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput#fields-url)
* [Fulfillment​Tracking​Input.urls](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput#fields-urls)
* [Inventory​Scheduled​Change​Item​Input.ledgerDocumentUri](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeItemInput#fields-ledgerDocumentUri)
* [Inventory​Set​Scheduled​Changes​Input.referenceDocumentUri](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetScheduledChangesInput#fields-referenceDocumentUri)
* [Inventory​Shipment​Tracking​Input.trackingUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput#fields-trackingUrl)
* [Marketing​Activity​Create​External​Input.remoteUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-remoteUrl)
* [Marketing​Activity​Create​External​Input.remotePreviewImageUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-remotePreviewImageUrl)
* [Marketing​Activity​Update​External​Input.remoteUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-remoteUrl)
* [Marketing​Activity​Update​External​Input.remotePreviewImageUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-remotePreviewImageUrl)
* [Marketing​Activity​Upsert​External​Input.remoteUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-remoteUrl)
* [Marketing​Activity​Upsert​External​Input.remotePreviewImageUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-remotePreviewImageUrl)
* [Order​Create​Order​Input.referringSite](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-referringSite)
* [Order​Create​Order​Input.sourceUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-sourceUrl)
* [Reverse​Delivery​Label​Input.fileUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLabelInput#fields-fileUrl)
* [Reverse​Delivery​Tracking​Input.url](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryTrackingInput#fields-url)
* [Script​Tag​Input.src](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput#fields-src)
* [Webhook​Subscription​Input.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput#fields-callbackUrl)

### Arguments with this scalar

* <-|[Query​Root.scriptTags(src)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.scriptTags.arguments.src)
* <-|[app​Purchase​One​Time​Create.returnUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate#arguments-returnUrl)
* <-|[app​Subscription​Create.returnUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#arguments-returnUrl)
* <-|[fulfillment​Service​Create.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceCreate#arguments-callbackUrl)
* <-|[fulfillment​Service​Update.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate#arguments-callbackUrl)
* <-|[theme​Create.source](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate#arguments-source)
* <-|[url​Redirect​Import​Create.url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportCreate#arguments-url)
* <-|[script​Tags.src](https://shopify.dev/docs/api/admin-graphql/latest/queries/scriptTags#arguments-src)
