---
title: MoneyInput - GraphQL Admin
description: The input fields for a monetary value with currency.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput.md
---

# Money​Input

input\_object

The input fields for a monetary value with currency.

## Fields

* amount

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  Decimal money amount.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  Currency of the money.

***

## Input objects using this input

* [App​Recurring​Pricing​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppRecurringPricingInput#fields-price)

  INPUT OBJECT

  Instructs the app subscription to generate a fixed charge on a recurring basis. The frequency is specified by the billing interval.

* [App​Usage​Pricing​Input.cappedAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppUsagePricingInput#fields-cappedAmount)

  INPUT OBJECT

  The input fields to issue arbitrary charges for app usage associated with a subscription.

* [Delivery​Participant​Input.fixedFee](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryParticipantInput#fields-fixedFee)

  INPUT OBJECT

  The input fields for a participant.

* [Delivery​Price​Condition​Input.criteria](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryPriceConditionInput#fields-criteria)

  INPUT OBJECT

  The input fields for a price-based condition of a delivery method definition.

* [Delivery​Rate​Definition​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryRateDefinitionInput#fields-price)

  INPUT OBJECT

  The input fields for a rate definition.

* [Draft​Order​Applied​Discount​Input.amountWithCurrency](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput#fields-amountWithCurrency)

  INPUT OBJECT

  The input fields for applying an order-level discount to a draft order.

* [Draft​Order​Line​Item​Input.originalUnitPriceWithCurrency](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-originalUnitPriceWithCurrency)

  INPUT OBJECT

  The input fields for a line item included in a draft order.

* [Draft​Order​Line​Item​Input.priceOverride](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-priceOverride)

  INPUT OBJECT

  The input fields for a line item included in a draft order.

* [Exchange​Line​Item​Applied​Discount​Value​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemAppliedDiscountValueInput#fields-amount)

  INPUT OBJECT

  The input value for an applied discount on a calculated exchange line item. Can either specify the value as a fixed amount or a percentage.

* [Gift​Card​Credit​Input.creditAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreditInput#fields-creditAmount)

  INPUT OBJECT

  The input fields for a gift card credit transaction.

* [Gift​Card​Debit​Input.debitAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput#fields-debitAmount)

  INPUT OBJECT

  The input fields for a gift card debit transaction.

* [Marketing​Activity​Budget​Input.total](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityBudgetInput#fields-total)

  INPUT OBJECT

  The input fields combining budget amount and its marketing budget type.

* [Marketing​Activity​Create​External​Input.adSpend](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-adSpend)

  INPUT OBJECT

  The input fields for creating an externally-managed marketing activity.

* [Marketing​Activity​Update​External​Input.adSpend](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-adSpend)

  INPUT OBJECT

  The input fields required to update an externally managed marketing activity.

* [Marketing​Activity​Update​Input.adSpend](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput#fields-adSpend)

  INPUT OBJECT

  The input fields required to update a marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

* [Marketing​Activity​Upsert​External​Input.adSpend](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-adSpend)

  INPUT OBJECT

  The input fields for creating or updating an externally-managed marketing activity.

* [Marketing​Engagement​Input.adSpend](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-adSpend)

  INPUT OBJECT

  The input fields for a marketing engagement.

* [Marketing​Engagement​Input.sales](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-sales)

  INPUT OBJECT

  The input fields for a marketing engagement.

* [Money​Bag​Input.shopMoney](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput#fields-shopMoney)

  INPUT OBJECT

  An input collection of monetary values in their respective currencies. Represents an amount in the shop's currency and the amount as converted to the customer's currency of choice (the presentment currency).

* [Money​Bag​Input.presentmentMoney](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput#fields-presentmentMoney)

  INPUT OBJECT

  An input collection of monetary values in their respective currencies. Represents an amount in the shop's currency and the amount as converted to the customer's currency of choice (the presentment currency).

* [Order​Edit​Add​Shipping​Line​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAddShippingLineInput#fields-price)

  INPUT OBJECT

  The input fields used to add a shipping line.

* [Order​Edit​Applied​Discount​Input.fixedValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput#fields-fixedValue)

  INPUT OBJECT

  The input fields used to add a discount during an order edit.

* [Order​Edit​Update​Shipping​Line​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditUpdateShippingLineInput#fields-price)

  INPUT OBJECT

  The input fields used to update a shipping line.

* [Price​List​Price​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput#fields-price)

  INPUT OBJECT

  The input fields for providing the fields and values to use when creating or updating a fixed price list price.

* [Price​List​Price​Input.compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput#fields-compareAtPrice)

  INPUT OBJECT

  The input fields for providing the fields and values to use when creating or updating a fixed price list price.

* [Price​List​Product​Price​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListProductPriceInput#fields-price)

  INPUT OBJECT

  The input fields representing the price for all variants of a product.

* [Price​List​Product​Price​Input.compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListProductPriceInput#fields-compareAtPrice)

  INPUT OBJECT

  The input fields representing the price for all variants of a product.

* [Quantity​Price​Break​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPriceBreakInput#fields-price)

  INPUT OBJECT

  The input fields and values to use when creating quantity price breaks.

* [Refund​Shipping​Input.shippingRefundAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundShippingInput#fields-shippingRefundAmount)

  INPUT OBJECT

  The input fields for the shipping cost to refund.

* [Return​Refund​Order​Transaction​Input.transactionAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundOrderTransactionInput#fields-transactionAmount)

  INPUT OBJECT

  The input fields to create order transactions when refunding a return.

* [Return​Shipping​Fee​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnShippingFeeInput#fields-amount)

  INPUT OBJECT

  The input fields for a return shipping fee.

* [Shipping​Line​Input.priceWithCurrency](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingLineInput#fields-priceWithCurrency)

  INPUT OBJECT

  The input fields for specifying the shipping details for the draft order.

  ***

  Note

  A custom shipping line includes a title and price with `shippingRateHandle` set to `nil`. A shipping line with a carrier-provided shipping rate (currently set via the Shopify admin) includes the shipping rate handle.

  ***

* [Store​Credit​Account​Credit​Input.creditAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountCreditInput#fields-creditAmount)

  INPUT OBJECT

  The input fields for a store credit account credit transaction.

* [Store​Credit​Account​Debit​Input.debitAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountDebitInput#fields-debitAmount)

  INPUT OBJECT

  The input fields for a store credit account debit transaction.

* [Store​Credit​Refund​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditRefundInput#fields-amount)

  INPUT OBJECT

  The input fields to process a refund to store credit.

***

## Map

### Input objects using this input

* [App​Recurring​Pricing​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppRecurringPricingInput#fields-price)
* [App​Usage​Pricing​Input.cappedAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppUsagePricingInput#fields-cappedAmount)
* [Delivery​Participant​Input.fixedFee](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryParticipantInput#fields-fixedFee)
* [Delivery​Price​Condition​Input.criteria](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryPriceConditionInput#fields-criteria)
* [Delivery​Rate​Definition​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryRateDefinitionInput#fields-price)
* [Draft​Order​Applied​Discount​Input.amountWithCurrency](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput#fields-amountWithCurrency)
* [Draft​Order​Line​Item​Input.originalUnitPriceWithCurrency](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-originalUnitPriceWithCurrency)
* [Draft​Order​Line​Item​Input.priceOverride](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-priceOverride)
* [Exchange​Line​Item​Applied​Discount​Value​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemAppliedDiscountValueInput#fields-amount)
* [Gift​Card​Credit​Input.creditAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreditInput#fields-creditAmount)
* [Gift​Card​Debit​Input.debitAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput#fields-debitAmount)
* [Marketing​Activity​Budget​Input.total](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityBudgetInput#fields-total)
* [Marketing​Activity​Create​External​Input.adSpend](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-adSpend)
* [Marketing​Activity​Update​External​Input.adSpend](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-adSpend)
* [Marketing​Activity​Update​Input.adSpend](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput#fields-adSpend)
* [Marketing​Activity​Upsert​External​Input.adSpend](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-adSpend)
* [Marketing​Engagement​Input.adSpend](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-adSpend)
* [Marketing​Engagement​Input.sales](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-sales)
* [Money​Bag​Input.shopMoney](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput#fields-shopMoney)
* [Money​Bag​Input.presentmentMoney](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput#fields-presentmentMoney)
* [Order​Edit​Add​Shipping​Line​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAddShippingLineInput#fields-price)
* [Order​Edit​Applied​Discount​Input.fixedValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput#fields-fixedValue)
* [Order​Edit​Update​Shipping​Line​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditUpdateShippingLineInput#fields-price)
* [Price​List​Price​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput#fields-price)
* [Price​List​Price​Input.compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput#fields-compareAtPrice)
* [Price​List​Product​Price​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListProductPriceInput#fields-price)
* [Price​List​Product​Price​Input.compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListProductPriceInput#fields-compareAtPrice)
* [Quantity​Price​Break​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPriceBreakInput#fields-price)
* [Refund​Shipping​Input.shippingRefundAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundShippingInput#fields-shippingRefundAmount)
* [Return​Refund​Order​Transaction​Input.transactionAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundOrderTransactionInput#fields-transactionAmount)
