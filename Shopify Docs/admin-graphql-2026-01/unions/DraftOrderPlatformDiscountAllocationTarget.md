---
title: DraftOrderPlatformDiscountAllocationTarget - GraphQL Admin
description: The element of the draft being discounted.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DraftOrderPlatformDiscountAllocationTarget
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DraftOrderPlatformDiscountAllocationTarget.md
---

# Draft​Order​Platform​Discount​Allocation​Target

union

Requires `read_draft_orders` access scope.

The element of the draft being discounted.

## Possible types

* [Calculated​Draft​Order​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem)

  OBJECT

  The calculated line item for a draft order.

  * applied​Discount

    [Draft​Order​Applied​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount)

    The custom applied discount.

  * approximate​Discounted​Unit​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The `discountedTotal` divided by `quantity`, equal to the average value of the line item price per unit after discounts are applied. This value doesn't include discounts applied to the entire draft order.

  * components

    [\[Calculated​Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem)

    non-null

    The components of the draft order line item.

  * custom

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the line item is custom (`true`) or contains a product variant (`false`).

  * custom​Attributes

    [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

    non-null

    A list of attributes that represent custom features or special requests.

  * custom​Attributes​V2

    [\[Typed​Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TypedAttribute)

    non-null

    The list of additional information (metafields) with the associated types.

  * discounted​Total

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total price with discounts applied.

  * discounted​Total​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total price with discounts applied.

  * fulfillment​Service

    [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

    Name of the service provider who fulfilled the order.

    Valid values are either **manual** or the name of the provider. For example, **amazon**, **shipwire**.

    Deleted fulfillment services will return null.

  * image

    [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

    The image associated with the draft order line item.

  * is​Gift​Card

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the line item represents the purchase of a gift card.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the product.

  * original​Total

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total price, excluding discounts, equal to the original unit price multiplied by quantity.

  * original​Total​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total price excluding discounts, equal to the original unit price multiplied by quantity.

  * original​Unit​Price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The line item price without any discounts applied.

  * original​Unit​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The price without any discounts applied.

  * original​Unit​Price​With​Currency

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The original custom line item input price.

  * price​Override

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The price override for the line item.

  * product

    [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

    The product for the line item.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The quantity of items. For a bundle item, this is the quantity of bundles, not the quantity of items contained in the bundles themselves.

  * requires​Shipping

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether physical shipping is required for the variant.

  * sku

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The SKU number of the product variant.

  * taxable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the variant is taxable.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the product or variant. This field only applies to custom line items.

  * total​Discount

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total value of the discount.

  * total​Discount​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discount amount.

  * uuid

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The UUID of the draft order line item. Must be unique and consistent across requests. This field is mandatory in order to manipulate drafts with bundles.

  * variant

    [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

    The product variant for the line item.

  * variant​Title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the variant.

  * vendor

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the vendor who created the product variant.

  * weight

    [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

    The weight unit and value.

  * bundle​Components

    [\[Calculated​Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem)

    non-nullDeprecated

  * discounted​Unit​Price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-nullDeprecated

  * discounted​Unit​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-nullDeprecated

* [Draft​Order​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem)

  OBJECT

  A line item in a draft order. Line items are either [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects or custom items created manually with specific pricing and attributes.

  Each line item includes [quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.quantity), [pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.originalUnitPrice), [discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.discountedTotal), [tax information](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.taxLines), and [custom attributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.customAttributes). For [bundle products](https://shopify.dev/docs/apps/build/products/bundles), the line item includes components that define the individual products within the bundle.

  * applied​Discount

    [Draft​Order​Applied​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount)

    The custom applied discount.

  * approximate​Discounted​Unit​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The `discountedTotal` divided by `quantity`, equal to the average value of the line item price per unit after discounts are applied. This value doesn't include discounts applied to the entire draft order.

  * components

    [\[Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem)

    non-null

    The components of the draft order line item.

  * custom

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the line item is custom (`true`) or contains a product variant (`false`).

  * custom​Attributes

    [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

    non-null

    A list of attributes that represent custom features or special requests.

  * custom​Attributes​V2

    [\[Typed​Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TypedAttribute)

    non-null

    The list of additional information (metafields) with the associated types.

  * discounted​Total​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total price with discounts applied.

  * fulfillment​Service

    [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

    Name of the service provider who fulfilled the order.

    Valid values are either **manual** or the name of the provider. For example, **amazon**, **shipwire**.

    Deleted fulfillment services will return null.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * image

    [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

    The image of the product variant.

    * max​Width

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      Deprecated

      ### Arguments

    * max​Height

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      Deprecated

    * crop

      [Crop​Region](https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion)

      Deprecated

    * scale

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      DeprecatedDefault:1

    ***

  * is​Gift​Card

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the line item represents the purchase of a gift card.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The name of the product.

  * original​Total​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total price excluding discounts, equal to the original unit price multiplied by quantity.

  * original​Unit​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The price without any discounts applied.

  * original​Unit​Price​With​Currency

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The original custom line item input price.

  * price​Override

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    The price override for the line item.

  * product

    [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

    The product for the line item.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The quantity of items. For a bundle item, this is the quantity of bundles, not the quantity of items contained in the bundles themselves.

  * requires​Shipping

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether physical shipping is required for the variant.

  * sku

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The SKU number of the product variant.

  * taxable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the variant is taxable.

  * tax​Lines

    [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

    non-null

    A list of tax lines.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the product or variant. This field only applies to custom line items.

  * total​Discount​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discount amount.

  * uuid

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The UUID of the draft order line item. Must be unique and consistent across requests. This field is mandatory in order to manipulate drafts with bundles.

  * variant

    [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

    The product variant for the line item.

  * variant​Title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the variant.

  * vendor

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the vendor who created the product variant.

  * weight

    [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

    The weight unit and value.

  * bundle​Components

    [\[Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem)

    non-nullDeprecated

  * discounted​Total

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * discounted​Unit​Price

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * discounted​Unit​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-nullDeprecated

  * grams

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  * original​Total

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * original​Unit​Price

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * total​Discount

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

* [Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

  OBJECT

  The shipping method that customers select for an order. Includes pricing details, carrier information, and any applied discounts or taxes.

  * carrier​Identifier

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A reference to the carrier service that provided the rate. Present when the rate was computed by a third-party carrier service.

  * code

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A reference to the shipping method.

  * current​Discounted​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The current shipping price after applying refunds, after applying discounts. If the parent \`order.taxesIncluded\`\` field is true, then this price includes taxes. Otherwise, this field is the pre-tax price.

  * custom

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the shipping line is custom or not.

  * delivery​Category

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The general classification of the delivery method.

  * discount​Allocations

    [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation)

    non-null

    The discounts that have been allocated to the shipping line.

  * discounted​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The shipping price after applying discounts. If the parent order.taxesIncluded field is true, then this price includes taxes. If not, it's the pre-tax price. As of API version 2024-07, this will be calculated including cart level discounts, such as the free shipping discount.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    A globally-unique ID.

  * is​Removed

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the shipping line has been removed.

  * original​Price​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The pre-tax shipping price without any discounts applied.

  * phone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The phone number at the shipping address.

  * shipping​Rate​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A unique identifier for the shipping rate. The format can change without notice and isn't meant to be shown to users.

  * source

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Returns the rate source for the shipping line.

  * tax​Lines

    [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

    non-null

    The TaxLine objects connected to this shipping line.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    Returns the title of the shipping line.

  * discounted​Price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-nullDeprecated

  * original​Price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-nullDeprecated

  * price

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * requested​Fulfillment​Service

    [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

    Deprecated

***

## Fields with this union

* [Draft​Order​Platform​Discount​Allocation.target](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscountAllocation#field-DraftOrderPlatformDiscountAllocation.fields.target)

  OBJECT

  Price reduction allocations across the draft order's lines.

***

```graphql
union DraftOrderPlatformDiscountAllocationTarget = CalculatedDraftOrderLineItem | DraftOrderLineItem | ShippingLine
```
