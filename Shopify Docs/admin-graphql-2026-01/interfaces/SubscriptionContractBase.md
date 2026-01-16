---
title: SubscriptionContractBase - GraphQL Admin
description: Represents subscription contract common fields.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase.md
---

# Subscription​Contract​Base

interface

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents subscription contract common fields.

## Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The subscription app that the subscription contract is registered to.

* app​Admin​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL of the subscription contract page on the subscription app.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The currency that's used for the subscription contract.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  A list of the custom attributes to be added to the generated orders.

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer to whom the subscription contract belongs.

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method that's used for the subscription contract.

  * show​Revoked

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to show the customer's revoked payment method.

  ***

* delivery​Method

  [Subscription​Delivery​Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)

  The delivery method for each billing of the subscription contract.

* delivery​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The delivery price for each billing of the subscription contract.

* discounts

  [Subscription​Manual​Discount​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection)

  non-null

  The list of subscription discounts associated with the subscription contract.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* lines

  [Subscription​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

  non-null

  The list of subscription lines associated with the subscription contract.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* lines​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of lines associated with the subscription contract.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note field that will be applied to the generated orders.

* orders

  [Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

  non-null

  A list of the subscription contract's orders.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the subscription contract was updated.

* line​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

***

## Types implemented in

* [Subscription​Billing​Cycle​Edited​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract)

  OBJECT

  Represents a subscription contract with billing cycles.

  * app

    [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

    The subscription app that the subscription contract is registered to.

  * app​Admin​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The URL of the subscription contract page on the subscription app.

  * billing​Cycles

    [Subscription​Billing​Cycle​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection)

    non-null

    The billing cycles that the edited contract belongs to.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Subscription​Billing​Cycles​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesSortKeys)

      Default:CYCLE\_INDEX

      Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

    ***

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the subscription contract was created.

  * currency​Code

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    non-null

    The currency that's used for the subscription contract.

  * custom​Attributes

    [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

    non-null

    A list of the custom attributes to be added to the generated orders.

  * customer

    [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

    The customer to whom the subscription contract belongs.

  * customer​Payment​Method

    [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

    The customer payment method that's used for the subscription contract.

    * show​Revoked

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      ### Arguments

      Whether to show the customer's revoked payment method.

    ***

  * delivery​Method

    [Subscription​Delivery​Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)

    The delivery method for each billing of the subscription contract.

  * delivery​Price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The delivery price for each billing of the subscription contract.

  * discounts

    [Subscription​Manual​Discount​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection)

    non-null

    The list of subscription discounts associated with the subscription contract.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * lines

    [Subscription​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

    non-null

    The list of subscription lines associated with the subscription contract.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * lines​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of lines associated with the subscription contract.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note field that will be applied to the generated orders.

  * orders

    [Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

    non-null

    A list of the subscription contract's orders.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the subscription contract was updated.

  * line​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-nullDeprecated

* [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

  * app

    [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

    The subscription app that the subscription contract is registered to.

  * app​Admin​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The URL of the subscription contract page on the subscription app.

  * billing​Attempts

    [Subscription​Billing​Attempt​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection)

    non-null

    The list of billing attempts associated with the subscription contract.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * billing​Policy

    [Subscription​Billing​Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy)

    non-null

    The billing policy associated with the subscription contract.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the subscription contract was created.

  * currency​Code

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    non-null

    The currency that's used for the subscription contract.

  * custom​Attributes

    [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

    non-null

    A list of the custom attributes to be added to the generated orders.

  * customer

    [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

    The customer to whom the subscription contract belongs.

  * customer​Payment​Method

    [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

    The customer payment method that's used for the subscription contract.

    * show​Revoked

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      ### Arguments

      Whether to show the customer's revoked payment method.

    ***

  * delivery​Method

    [Subscription​Delivery​Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)

    The delivery method for each billing of the subscription contract.

  * delivery​Policy

    [Subscription​Delivery​Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy)

    non-null

    The delivery policy associated with the subscription contract.

  * delivery​Price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The delivery price for each billing of the subscription contract.

  * discounts

    [Subscription​Manual​Discount​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection)

    non-null

    The list of subscription discounts associated with the subscription contract.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * last​Billing​Attempt​Error​Type

    [Subscription​Contract​Last​Billing​Error​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractLastBillingErrorType)

    The last billing error type of the contract.

  * last​Payment​Status

    [Subscription​Contract​Last​Payment​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractLastPaymentStatus)

    The current status of the last payment.

  * lines

    [Subscription​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

    non-null

    The list of subscription lines associated with the subscription contract.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * lines​Count

    [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

    The number of lines associated with the subscription contract.

  * next​Billing​Date

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The next billing date for the subscription contract. This field is managed by the apps. Alternatively you can utilize our [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles), which provide auto-computed billing dates and additional functionalities.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note field that will be applied to the generated orders.

  * orders

    [Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

    non-null

    A list of the subscription contract's orders.

    * first

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      ### Arguments

      The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * after

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * last

      [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

      The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

    * before

      [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

    * reverse

      [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * origin​Order

    [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

    The order from which this contract originated.

  * revision​Id

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The revision id of the contract.

  * status

    [Subscription​Contract​Subscription​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractSubscriptionStatus)

    non-null

    The current status of the subscription contract.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the subscription contract was updated.

  * line​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-nullDeprecated

***

##### Variables

```json
{
	"app": "",
	"appAdminUrl": "",
	"currencyCode": "",
	"customAttributes": "",
	"customer": "",
	"customerPaymentMethod": {
		"showRevoked": ""
	},
	"deliveryMethod": "",
	"deliveryPrice": "",
	"discounts": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"lineCount": "",
	"lines": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"linesCount": "",
	"note": "",
	"orders": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"updatedAt": ""
}
```

##### Schema

```graphql
interface SubscriptionContractBase {
  app: App
  appAdminUrl: URL
  currencyCode: CurrencyCode!
  customAttributes: [Attribute!]!
  customer: Customer
  customerPaymentMethod: CustomerPaymentMethod
  deliveryMethod: SubscriptionDeliveryMethod
  deliveryPrice: MoneyV2!
  discounts: SubscriptionManualDiscountConnection!
  lineCount: Int!
  lines: SubscriptionLineConnection!
  linesCount: Count
  note: String
  orders: OrderConnection!
  updatedAt: DateTime!
}
```
