---
title: DraftOrderLineItemInput - GraphQL Admin
description: The input fields for a line item included in a draft order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput.md
---

# Draft​Order​Line​Item​Input

input\_object

The input fields for a line item included in a draft order.

## Fields

* applied​Discount

  [Draft​Order​Applied​Discount​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput)

  The custom discount to be applied.

* components

  [\[Draft​Order​Line​Item​Component​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemComponentInput)

  The components of the draft order line item.

* custom​Attributes

  [\[Attribute​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AttributeInput)

  A generic custom attribute using a key value pair.

* generate​Price​Override

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  If the line item doesn't already have a price override input, setting `generatePriceOverride` to `true` will create a price override from the current price.

* original​Unit​Price​With​Currency

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  The price in presentment currency, without any discounts applied, for a custom line item. If this value is provided, `original_unit_price` will be ignored. This field is ignored when `variantId` is provided. Note: All presentment currencies for a single draft should be the same and match the presentment currency of the draft order.

* price​Override

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  The price override for the line item. Should be set in presentment currency.

  This price will be used in place of the product variant's catalog price in this draft order.

  If the override's presentment currency doesn't match the draft order's presentment currency, it will be converted over to match the draft order's presentment currency. This will occur if the input is defined in a differing currency, or if some other event causes the draft order's currency to change.

  Price overrides can't be applied to bundle components. If this line item becomes part of a bundle the price override will be removed. In the case of a cart transform, this may mean that a price override is applied to this line item earlier in its lifecycle, and is removed later when the transform occurs.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The line item quantity.

* requires​Shipping

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether physical shipping is required for a custom line item. This field is ignored when `variantId` is provided.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The SKU number for custom line items only. This field is ignored when `variantId` is provided.

* taxable

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the custom line item is taxable. This field is ignored when `variantId` is provided.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Title of the line item. This field is ignored when `variantId` is provided.

* uuid

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The UUID of the draft order line item. Must be unique and consistent across requests. This field is mandatory in order to manipulate drafts with bundles.

* variant​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the product variant corresponding to the line item. Must be null for custom line items, otherwise required.

* weight

  [Weight​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WeightInput)

  The weight unit and value inputs for custom line items only. This field is ignored when `variantId` is provided.

### Deprecated fields

* bundle​Components

  [\[Bundles​Draft​Order​Bundle​Line​Item​Component​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BundlesDraftOrderBundleLineItemComponentInput)

  Deprecated

* grams

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Deprecated

* original​Unit​Price

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  Deprecated

***

## Input objects using this input

* [Draft​Order​Available​Delivery​Options​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput#fields-lineItems)

  INPUT OBJECT

  The input fields used to determine available delivery options for a draft order.

* [Draft​Order​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-lineItems)

  INPUT OBJECT

  The input fields used to create or update a draft order.

***

## Map

### Input objects using this input

* [Draft​Order​Available​Delivery​Options​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput#fields-lineItems)
* [Draft​Order​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-lineItems)
