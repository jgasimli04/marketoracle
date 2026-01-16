---
title: OrderCreateLineItemInput - GraphQL Admin
description: The input fields for a line item to create for an order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateLineItemInput.md
---

# Order​Create​Line​Item​Input

input\_object

The input fields for a line item to create for an order.

## Fields

* fulfillment​Service

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The handle of a fulfillment service that stocks the product variant belonging to a line item.

  This is a third-party fulfillment service in the following scenarios:

  **Scenario 1**

  * The product variant is stocked by a single fulfillment service.
  * The [FulfillmentService](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) is a third-party fulfillment service. Third-party fulfillment services don't have a handle with the value `manual`.

  **Scenario 2**

  * Multiple fulfillment services stock the product variant.
  * The last time that the line item was unfulfilled, it was awaiting fulfillment by a third-party fulfillment service. Third-party fulfillment services don't have a handle with the value `manual`.

  If none of the above conditions are met, then the fulfillment service has the `manual` handle.

* gift​Card

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the item is a gift card. If true, then the item is not taxed or considered for shipping charges.

* price​Set

  [Money​Bag​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput)

  The price of the item before discounts have been applied in the shop currency.

* product​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the product that the line item belongs to. Can be `null` if the original product associated with the order is deleted at a later date.

* properties

  [\[Order​Create​Line​Item​Property​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateLineItemPropertyInput)

  An array of custom information for the item that has been added to the cart. Often used to provide product customization options.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of items that were purchased.

* requires​Shipping

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the item requires shipping.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The item's SKU (stock keeping unit).

* taxable

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:true

  Whether the item was taxable.

* tax​Lines

  [\[Order​Create​Tax​Line​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateTaxLineInput)

  A list of tax line objects, each of which details a tax applied to the item.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the product.

* variant​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the product variant. If both `productId` and `variantId` are provided, then the product ID that corresponds to the `variantId` is used.

* variant​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the product variant.

* vendor

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the item's supplier.

* weight

  [Weight​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WeightInput)

  The weight of the line item. This will take precedence over the weight of the product variant, if one was specified.

***

## Input objects using this input

* [Order​Create​Order​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-lineItems)

  INPUT OBJECT

  The input fields for creating an order.

***

## Map

### Input objects using this input

* [Order​Create​Order​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-lineItems)
