---
title: DraftOrderAvailableDeliveryOptionsInput - GraphQL Admin
description: >-
  The input fields used to determine available delivery options for a draft
  order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput.md
---

# Draft​Order​Available​Delivery​Options​Input

input\_object

The input fields used to determine available delivery options for a draft order.

## Fields

* accept​Automatic​Discounts

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not to accept automatic discounts on the draft order during calculation. If false, only discount codes and custom draft order discounts (see `appliedDiscount`) will be applied. If true, eligible automatic discounts will be applied in addition to discount codes and custom draft order discounts.

* applied​Discount

  [Draft​Order​Applied​Discount​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput)

  The discount that will be applied to the draft order. A draft order line item can have one discount. A draft order can also have one order-level discount.

* discount​Codes

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Discount codes that will be attempted to be applied to the draft order. If the draft isn't eligible for any given discount code it will be skipped during calculation.

* line​Items

  [\[Draft​Order​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput)

  Product variant line item or custom line item associated to the draft order. Each draft order must include at least one line item.

* market​Region​Country​Code

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The selected country code that determines the pricing of the draft order.

* purchasing​Entity

  [Purchasing​Entity​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PurchasingEntityInput)

  The purchasing entity for the draft order.

* shipping​Address

  [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  The mailing address to where the order will be shipped.

***

## Map

No referencing types
