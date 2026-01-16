---
title: Sale - GraphQL Admin
description: >-
  An individual sale record associated with a sales agreement. Every money value
  in an order's sales data is represented in the currency's smallest unit. When
  amounts are divided across multiple line items, such as taxes or order
  discounts, the amounts might not divide evenly across all of the line items on
  the order. To address this, the remaining currency units that couldn't be
  divided evenly are allocated one at a time, starting with the first line item,
  until they are all accounted for. In aggregate, the values sum up correctly.
  In isolation, one line item might have a different tax or discount amount than
  another line item of the same price, before taxes and discounts. This is
  because the amount could not be divided evenly across the items. The
  allocation of currency units across line items is immutable. After they are
  allocated, currency units are never reallocated or redistributed among the
  line items.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale.md'
---

# Sale

interface

Requires `read_orders` access scope.

An individual sale record associated with a sales agreement. Every money value in an order's sales data is represented in the currency's smallest unit. When amounts are divided across multiple line items, such as taxes or order discounts, the amounts might not divide evenly across all of the line items on the order. To address this, the remaining currency units that couldn't be divided evenly are allocated one at a time, starting with the first line item, until they are all accounted for. In aggregate, the values sum up correctly. In isolation, one line item might have a different tax or discount amount than another line item of the same price, before taxes and discounts. This is because the amount could not be divided evenly across the items. The allocation of currency units across line items is immutable. After they are allocated, currency units are never reallocated or redistributed among the line items.

## Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

  non-null

  The type of order action that the sale represents.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

  non-null

  The line type assocated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of units either ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

  non-null

  All individual taxes associated with the sale.

* total​Amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total amount of taxes for the sale.

***

## Types implemented in

* [Additional​Fee​Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale)

  OBJECT

  A sale associated with an additional fee charge.

  * action​Type

    [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

    non-null

    The type of order action that the sale represents.

  * additional​Fee

    [Sale​Additional​Fee!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleAdditionalFee)

    non-null

    The additional fees for the associated sale.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the sale.

  * line​Type

    [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

    non-null

    The line type assocated with the sale.

  * quantity

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of units either ordered or intended to be returned.

  * taxes

    [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

    non-null

    All individual taxes associated with the sale.

  * total​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total sale amount after taxes and discounts.

  * total​Discount​Amount​After​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale after taxes.

  * total​Discount​Amount​Before​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale before taxes.

  * total​Tax​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount of taxes for the sale.

* [Adjustment​Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale)

  OBJECT

  A sale associated with an order price adjustment.

  * action​Type

    [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

    non-null

    The type of order action that the sale represents.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the sale.

  * line​Type

    [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

    non-null

    The line type assocated with the sale.

  * quantity

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of units either ordered or intended to be returned.

  * taxes

    [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

    non-null

    All individual taxes associated with the sale.

  * total​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total sale amount after taxes and discounts.

  * total​Discount​Amount​After​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale after taxes.

  * total​Discount​Amount​Before​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale before taxes.

  * total​Tax​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount of taxes for the sale.

* [Duty​Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/DutySale)

  OBJECT

  A sale associated with a duty charge.

  * action​Type

    [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

    non-null

    The type of order action that the sale represents.

  * duty

    [Duty!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Duty)

    non-null

    The duty for the associated sale.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the sale.

  * line​Type

    [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

    non-null

    The line type assocated with the sale.

  * quantity

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of units either ordered or intended to be returned.

  * taxes

    [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

    non-null

    All individual taxes associated with the sale.

  * total​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total sale amount after taxes and discounts.

  * total​Discount​Amount​After​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale after taxes.

  * total​Discount​Amount​Before​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale before taxes.

  * total​Tax​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount of taxes for the sale.

* [Fee​Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/FeeSale)

  OBJECT

  A sale associated with a fee.

  * action​Type

    [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

    non-null

    The type of order action that the sale represents.

  * fee

    [Fee](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Fee)

    The fee associated with the sale. It can be null if the fee was deleted.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the sale.

  * line​Type

    [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

    non-null

    The line type assocated with the sale.

  * quantity

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of units either ordered or intended to be returned.

  * taxes

    [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

    non-null

    All individual taxes associated with the sale.

  * total​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total sale amount after taxes and discounts.

  * total​Discount​Amount​After​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale after taxes.

  * total​Discount​Amount​Before​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale before taxes.

  * total​Tax​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount of taxes for the sale.

* [Gift​Card​Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSale)

  OBJECT

  A sale associated with a gift card.

  * action​Type

    [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

    non-null

    The type of order action that the sale represents.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the sale.

  * line​Item

    [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

    non-null

    The line item for the associated sale.

  * line​Type

    [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

    non-null

    The line type assocated with the sale.

  * quantity

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of units either ordered or intended to be returned.

  * taxes

    [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

    non-null

    All individual taxes associated with the sale.

  * total​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total sale amount after taxes and discounts.

  * total​Discount​Amount​After​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale after taxes.

  * total​Discount​Amount​Before​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale before taxes.

  * total​Tax​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount of taxes for the sale.

* [Product​Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSale)

  OBJECT

  A sale associated with a product.

  * action​Type

    [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

    non-null

    The type of order action that the sale represents.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the sale.

  * line​Item

    [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

    non-null

    The line item for the associated sale.

  * line​Type

    [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

    non-null

    The line type assocated with the sale.

  * quantity

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of units either ordered or intended to be returned.

  * taxes

    [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

    non-null

    All individual taxes associated with the sale.

  * total​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total sale amount after taxes and discounts.

  * total​Discount​Amount​After​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale after taxes.

  * total​Discount​Amount​Before​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale before taxes.

  * total​Tax​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount of taxes for the sale.

* [Shipping​Line​Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineSale)

  OBJECT

  A sale associated with a shipping charge.

  * action​Type

    [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

    non-null

    The type of order action that the sale represents.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the sale.

  * line​Type

    [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

    non-null

    The line type assocated with the sale.

  * quantity

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of units either ordered or intended to be returned.

  * shipping​Line

    [Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

    The shipping line item for the associated sale. `shippingLine` is not available if the `SaleActionType` is a return.

  * taxes

    [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

    non-null

    All individual taxes associated with the sale.

  * total​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total sale amount after taxes and discounts.

  * total​Discount​Amount​After​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale after taxes.

  * total​Discount​Amount​Before​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale before taxes.

  * total​Tax​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount of taxes for the sale.

* [Tip​Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/TipSale)

  OBJECT

  A sale associated with a tip.

  * action​Type

    [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

    non-null

    The type of order action that the sale represents.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the sale.

  * line​Item

    [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

    non-null

    The line item for the associated sale.

  * line​Type

    [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

    non-null

    The line type assocated with the sale.

  * quantity

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of units either ordered or intended to be returned.

  * taxes

    [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

    non-null

    All individual taxes associated with the sale.

  * total​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total sale amount after taxes and discounts.

  * total​Discount​Amount​After​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale after taxes.

  * total​Discount​Amount​Before​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale before taxes.

  * total​Tax​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount of taxes for the sale.

* [Unknown​Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnknownSale)

  OBJECT

  This is represents new sale types that have been added in future API versions. You may update to a more recent API version to receive additional details about this sale.

  * action​Type

    [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

    non-null

    The type of order action that the sale represents.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID for the sale.

  * line​Type

    [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

    non-null

    The line type assocated with the sale.

  * quantity

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of units either ordered or intended to be returned.

  * taxes

    [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

    non-null

    All individual taxes associated with the sale.

  * total​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total sale amount after taxes and discounts.

  * total​Discount​Amount​After​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale after taxes.

  * total​Discount​Amount​Before​Taxes

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total discounts allocated to the sale before taxes.

  * total​Tax​Amount

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The total amount of taxes for the sale.

***

##### Variables

```json
{
	"actionType": "",
	"id": "",
	"lineType": "",
	"quantity": "",
	"taxes": "",
	"totalAmount": "",
	"totalDiscountAmountAfterTaxes": "",
	"totalDiscountAmountBeforeTaxes": "",
	"totalTaxAmount": ""
}
```

##### Schema

```graphql
interface Sale {
  actionType: SaleActionType!
  id: ID!
  lineType: SaleLineType!
  quantity: Int
  taxes: [SaleTax!]!
  totalAmount: MoneyBag!
  totalDiscountAmountAfterTaxes: MoneyBag!
  totalDiscountAmountBeforeTaxes: MoneyBag!
  totalTaxAmount: MoneyBag!
}
```
