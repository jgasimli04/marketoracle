---
title: OrderStagedChange - GraphQL Admin
description: A change that has been applied to an order.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange.md
---

# Order​Staged​Change

union

Requires `read_order_edits` access scope.

A change that has been applied to an order.

## Possible types

* [Order​Staged​Change​Add​Custom​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddCustomItem)

  OBJECT

  A change to the order representing the addition of a custom line item. For example, you might want to add gift wrapping service as a custom line item.

  * original​Unit​Price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The price of an individual item without any discounts applied. This value can't be negative.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The quantity of the custom item to add to the order. This value must be greater than zero.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The title of the custom item.

* [Order​Staged​Change​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddLineItemDiscount)

  OBJECT

  The discount applied to an item that was added during the current order edit.

  * description

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The description of the discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * value

    [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

    non-null

    The pricing value of the discount.

* [Order​Staged​Change​Add​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddShippingLine)

  OBJECT

  A new [shipping line](https://shopify.dev/api/admin-graphql/latest/objects/shippingline) added as part of an order edit.

  * phone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The phone number at the shipping address.

  * presentment​Title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The shipping line's title that's shown to the buyer.

  * price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The price that applies to the shipping line.

  * title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The title of the shipping line.

* [Order​Staged​Change​Add​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddVariant)

  OBJECT

  A change to the order representing the addition of an existing product variant.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The quantity of the product variant that was added.

  * variant

    [Product​Variant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

    non-null

    The product variant that was added.

* [Order​Staged​Change​Decrement​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeDecrementItem)

  OBJECT

  An removal of items from an existing line item on the order.

  * delta

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of items removed.

  * line​Item

    [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

    non-null

    The original line item.

  * restock

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    The intention to restock the removed items.

* [Order​Staged​Change​Increment​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeIncrementItem)

  OBJECT

  An addition of items to an existing line item on the order.

  * delta

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of items added.

  * line​Item

    [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

    non-null

    The original line item.

* [Order​Staged​Change​Remove​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeRemoveDiscount)

  OBJECT

  A discount application removed during an order edit.

  * discount​Application

    [Discount​Application!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication)

    non-null

    The removed discount application.

* [Order​Staged​Change​Remove​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeRemoveShippingLine)

  OBJECT

  A shipping line removed during an order edit.

  * shipping​Line

    [Shipping​Line!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

    non-null

    The removed shipping line.

***

## Fields with this union

* [Calculated​Line​Item.stagedChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem#field-CalculatedLineItem.fields.stagedChanges)

  OBJECT

  A line item involved in order editing that may be newly added or have new changes applied.

* [Calculated​Order.stagedChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.stagedChanges)

  OBJECT

  An order during an active edit session with all proposed changes applied but not yet committed. When you begin editing an order with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation, the system creates a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) that shows how the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) will look after your changes. The calculated order tracks the original order state and all staged modifications (added or removed [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, quantity adjustments, discount changes, and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) updates). Use the calculated order to preview the financial impact of edits before committing them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

* [Order​Staged​Change​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderStagedChangeConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple OrderStagedChanges.

* [Order​Staged​Change​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeEdge#field-OrderStagedChangeEdge.fields.node)

  OBJECT

  An auto-generated type which holds one OrderStagedChange and a cursor during pagination.

***

```graphql
union OrderStagedChange = OrderStagedChangeAddCustomItem | OrderStagedChangeAddLineItemDiscount | OrderStagedChangeAddShippingLine | OrderStagedChangeAddVariant | OrderStagedChangeDecrementItem | OrderStagedChangeIncrementItem | OrderStagedChangeRemoveDiscount | OrderStagedChangeRemoveShippingLine
```
