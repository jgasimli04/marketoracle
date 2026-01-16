---
title: DraftOrderInput - GraphQL Admin
description: The input fields used to create or update a draft order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput.md
---

# Draft​Order​Input

input\_object

The input fields used to create or update a draft order.

## Fields

* accept​Automatic​Discounts

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not to accept automatic discounts on the draft order during calculation. If false, only discount codes and custom draft order discounts (see `appliedDiscount`) will be applied. If true, eligible automatic discounts will be applied in addition to discount codes and custom draft order discounts.

* allow​Discount​Codes​In​Checkout

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether discount codes are allowed during checkout of this draft order.

* applied​Discount

  [Draft​Order​Applied​Discount​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput)

  The discount that will be applied to the draft order. A draft order line item can have one discount. A draft order can also have one order-level discount.

* billing​Address

  [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  The mailing address associated with the payment method.

* custom​Attributes

  [\[Attribute​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AttributeInput)

  The extra information added to the draft order on behalf of the customer.

* discount​Codes

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The list of discount codes that will be attempted to be applied to the draft order. If the draft isn't eligible for any given discount code it will be skipped during calculation.

* email

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer's email address.

* line​Items

  [\[Draft​Order​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput)

  The list of product variant or custom line item. Each draft order must include at least one line item. Accepts a maximum of 499 line items.

  NOTE: Draft orders don't currently support subscriptions.

* localized​Fields

  [\[Localized​Field​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocalizedFieldInput)

  The localized fields attached to the draft order. For example, Tax IDs.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  The list of metafields attached to the draft order. An existing metafield can not be used when creating a draft order.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The text of an optional note that a shop owner can attach to the draft order.

* payment​Terms

  [Payment​Terms​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsInput)

  The fields used to create payment terms.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer's phone number.

* po​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The purchase order number.

* presentment​Currency​Code

  [Currency​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  The payment currency of the customer for this draft order.

* purchasing​Entity

  [Purchasing​Entity​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PurchasingEntityInput)

  The purchasing entity for the draft order.

* reserve​Inventory​Until

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The time after which inventory reservation will expire.

* session​Token

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique token identifying the draft order.

* shipping​Address

  [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  The mailing address to where the order will be shipped.

* shipping​Line

  [Shipping​Line​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingLineInput)

  The shipping line object, which details the shipping method used.

* source​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The source of the checkout. To use this field for sales attribution, you must register the channels that your app is managing. You can register the channels that your app is managing by completing [this Google Form](https://docs.google.com/forms/d/e/1FAIpQLScmVTZRQNjOJ7RD738mL1lGeFjqKVe_FM2tO9xsm21QEo5Ozg/viewform?usp=sf_link). After you've submitted your request, you need to wait for your request to be processed by Shopify. You can find a list of your channels in the Partner Dashboard, in your app's Marketplace extension. You need to specify the handle as the `source_name` value in your request. The handle is the channel that the order was placed from.

* tags

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A comma separated list of tags that have been added to the draft order.

* tax​Exempt

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not taxes are exempt for the draft order. If false, then Shopify will refer to the taxable field for each line item. If a customer is applied to the draft order, then Shopify will use the customer's tax exempt field instead.

* transformer​Fingerprint

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Fingerprint to guarantee bundles are handled correctly.

* use​Customer​Default​Address

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether to use the customer's default address.

* visible​To​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the draft order will be visible to the customer on the self-serve portal.

### Deprecated fields

* customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Deprecated

* localization​Extensions

  [\[Localization​Extension​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocalizationExtensionInput)

  Deprecated

* market​Region​Country​Code

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  Deprecated

***

## Map

No referencing types
