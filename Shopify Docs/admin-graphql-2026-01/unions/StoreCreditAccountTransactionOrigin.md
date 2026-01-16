---
title: StoreCreditAccountTransactionOrigin - GraphQL Admin
description: The origin of a store credit account transaction.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin.md
---

# Store​Credit​Account​Transaction​Origin

union

The origin of a store credit account transaction.

## Possible types

* [Order​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  OBJECT

  The `OrderTransaction` object represents a payment transaction that's associated with an order. An order transaction is a specific action or event that happens within the context of an order, such as a customer paying for a purchase or receiving a refund, or other payment-related activity.

  Use the `OrderTransaction` object to capture the complete lifecycle of a payment, from initial authorization to final settlement, including refunds and currency exchanges. Common use cases for using the `OrderTransaction` object include:

  * Processing new payments for orders
  * Managing payment authorizations and captures
  * Processing refunds for returned items
  * Tracking payment status and errors
  * Managing multi-currency transactions
  * Handling payment gateway integrations

  Each `OrderTransaction` object has a [`kind`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind) that defines the type of transaction and a [`status`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus) that indicates the current state of the transaction. The object stores detailed information about payment methods, gateway processing, and settlement details.

  Learn more about [payment processing](https://help.shopify.com/manual/payments) and [payment gateway integrations](https://www.shopify.com/ca/payment-gateways).

  * account​Number

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The masked account number associated with the payment method.

  * amount​Rounding​Set

    [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    The rounding adjustment applied on the cash amount in shop and presentment currencies.

  * amount​Set

    [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    non-null

    The amount and currency of the transaction in shop and presentment currencies.

  * authorization​Expires​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The time when the authorization expires. This field is available only to stores on a Shopify Plus plan.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    Date and time when the transaction was created.

  * currency​Exchange​Adjustment

    [Currency​Exchange​Adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyExchangeAdjustment)

    An adjustment on the transaction showing the amount lost or gained due to fluctuations in the currency exchange rate.

  * device

    [Point​Of​Sale​Device](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice)

    The Shopify Point of Sale device used to process the transaction.

  * error​Code

    [Order​Transaction​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionErrorCode)

    A standardized error code, independent of the payment provider.

  * fees

    [\[Transaction​Fee!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionFee)

    non-null

    The transaction fees charged on the order transaction. Only present for Shopify Payments transactions.

  * formatted​Gateway

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The human-readable payment gateway name used to process the transaction.

  * gateway

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The payment gateway used to process the transaction.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * kind

    [Order​Transaction​Kind!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind)

    non-null

    The kind of transaction.

  * location

    [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

    The physical location where the transaction was processed.

  * manually​Capturable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the transaction can be manually captured.

  * manual​Payment​Gateway

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the transaction is processed by manual payment gateway.

  * maximum​Refundable​V2

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    Specifies the available amount with currency to refund on the gateway. This value is only available for transactions of type `SuggestedRefund`.

  * multi​Capturable

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the transaction can be captured multiple times.

  * order

    [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

    The associated order.

  * parent​Transaction

    [Order​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

    The associated parent transaction, for example the authorization of a capture.

  * payment​Details

    [Payment​Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/PaymentDetails)

    The payment details for the transaction.

  * payment​Icon

    [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

    The payment icon to display for the transaction.

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

  * payment​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The payment ID associated with the transaction.

  * processed​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    Date and time when the transaction was processed.

  * receipt​Json

    [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

    The transaction receipt that the payment gateway attaches to the transaction. The value of this field depends on which payment gateway processed the transaction.

  * settlement​Currency

    [Currency​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    The settlement currency.

  * settlement​Currency​Rate

    [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

    The rate used when converting the transaction amount to settlement currency.

  * shopify​Payments​Set

    [Shopify​Payments​Transaction​Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsTransactionSet)

    Contains all Shopify Payments information related to an order transaction. This field is available only to stores on a Shopify Plus plan.

  * status

    [Order​Transaction​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus)

    non-null

    The status of this transaction.

  * test

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the transaction is a test transaction.

  * total​Unsettled​Set

    [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

    Specifies the available amount with currency to capture on the gateway in shop and presentment currencies. Only available when an amount is capturable or manually mark as paid.

  * user

    [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

    Staff member who was logged into the Shopify POS device when the transaction was processed.

  * amount

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-nullDeprecated

  * amount​V2

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-nullDeprecated

  * authorization​Code

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

  * maximum​Refundable

    [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    Deprecated

  * payment​Method

    [Payment​Methods](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentMethods)

    Deprecated

  * total​Unsettled

    [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    Deprecated

  * total​Unsettled​V2

    [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    Deprecated

***

## Fields with this union

* [Store​Credit​Account​Credit​Transaction.origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction#field-StoreCreditAccountCreditTransaction.fields.origin)

  OBJECT

  A credit transaction which increases the store credit account balance.

* [Store​Credit​Account​Debit​Revert​Transaction.origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.origin)

  OBJECT

  A debit revert transaction which increases the store credit account balance. Debit revert transactions are created automatically when a [store credit account debit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction) is reverted.

  Store credit account debit transactions are reverted when an order is cancelled, refunded or in the event of a payment failure at checkout. The amount added to the balance is equal to the amount reverted on the original credit.

* [Store​Credit​Account​Debit​Transaction.origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction#field-StoreCreditAccountDebitTransaction.fields.origin)

  OBJECT

  A debit transaction which decreases the store credit account balance.

* [Store​Credit​Account​Expiration​Transaction.origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.origin)

  OBJECT

  An expiration transaction which decreases the store credit account balance. Expiration transactions are created automatically when a [store credit account credit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction) expires.

  The amount subtracted from the balance is equal to the remaining amount of the credit transaction.

* [Store​Credit​Account​Transaction.origin](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction#fields-origin)

  INTERFACE

  Interface for a store credit account transaction.

***

```graphql
union StoreCreditAccountTransactionOrigin = OrderTransaction
```
