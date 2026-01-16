---
title: Decimal - GraphQL Admin
description: >
  A signed decimal number, which supports arbitrary precision and is serialized
  as a string.


  Example values: `"29.99"`, `"29.999"`.
api_version: 2026-01
api_name: admin
type: scalar
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal.md'
---

# Decimal

scalar

A signed decimal number, which supports arbitrary precision and is serialized as a string.

Example values: `"29.99"`, `"29.999"`.

## Map

### Fields with this scalar

* <-|[Currency​Setting.manualRate](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting#field-CurrencySetting.fields.manualRate)
* <-|[Discount​Purchase​Amount.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountPurchaseAmount#field-DiscountPurchaseAmount.fields.amount)
* <-|[Marketing​Engagement.allConversions](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.allConversions)
* <-|[Marketing​Engagement.firstTimeCustomers](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.firstTimeCustomers)
* <-|[Marketing​Engagement.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.orders)
* <-|[Marketing​Engagement.primaryConversions](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.primaryConversions)
* <-|[Marketing​Engagement.returningCustomers](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.returningCustomers)
* <-|[Money​V2.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2#field-MoneyV2.fields.amount)
* <-|[Order​Transaction.settlementCurrencyRate](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.settlementCurrencyRate)
* <-|[Transaction​Fee.rate](https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionFee#field-TransactionFee.fields.rate)

### Inputs with this scalar

* [App​Subscription​Discount​Value​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionDiscountValueInput#fields-amount)
* [Discount​Amount​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAmountInput#fields-amount)
* [Discount​Automatic​Free​Shipping​Input.maximumShippingPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-maximumShippingPrice)
* [Discount​Code​Free​Shipping​Input.maximumShippingPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-maximumShippingPrice)
* [Discount​Customer​Buys​Value​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysValueInput#fields-amount)
* [Discount​Effect​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountEffectInput#fields-amount)
* [Discount​Minimum​Subtotal​Input.greaterThanOrEqualToSubtotal](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountMinimumSubtotalInput#fields-greaterThanOrEqualToSubtotal)
* [Gift​Card​Create​Input.initialValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-initialValue)
* [Inventory​Item​Input.cost](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput#fields-cost)
* [Market​Currency​Settings​Update​Input.baseCurrencyManualRate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCurrencySettingsUpdateInput#fields-baseCurrencyManualRate)
* [Marketing​Engagement​Input.orders](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-orders)
* [Marketing​Engagement​Input.firstTimeCustomers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-firstTimeCustomers)
* [Marketing​Engagement​Input.returningCustomers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-returningCustomers)
* [Marketing​Engagement​Input.primaryConversions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-primaryConversions)
* [Marketing​Engagement​Input.allConversions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-allConversions)
* [Money​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput#fields-amount)
* [Order​Create​Tax​Line​Input.rate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateTaxLineInput#fields-rate)
* [Selling​Plan​Checkout​Charge​Value​Input.fixedValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanCheckoutChargeValueInput#fields-fixedValue)
* [Selling​Plan​Pricing​Policy​Value​Input.fixedValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanPricingPolicyValueInput#fields-fixedValue)
* [Subscription​Contract​Product​Change​Input.currentPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractProductChangeInput#fields-currentPrice)
* [Subscription​Draft​Input.deliveryPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput#fields-deliveryPrice)
* [Subscription​Line​Input.currentPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput#fields-currentPrice)
* [Subscription​Line​Update​Input.currentPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineUpdateInput#fields-currentPrice)
* [Subscription​Pricing​Policy​Cycle​Discounts​Input.computedPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyCycleDiscountsInput#fields-computedPrice)
* [Subscription​Pricing​Policy​Input.basePrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyInput#fields-basePrice)
