---
title: StoreCreditAccountTransaction - GraphQL Admin
description: Interface for a store credit account transaction.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction.md
---

# Store​Credit​Account​Transaction

interface

Requires `read_store_credit_account_transactions` access scope.

Interface for a store credit account transaction.

## Fields

* account

  [Store​Credit​Account!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

  non-null

  The store credit account that the transaction belongs to.

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of the transaction.

* balance​After​Transaction

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The balance of the account after the transaction.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was created.

* event

  [Store​Credit​System​Event!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditSystemEvent)

  non-null

  The event that caused the store credit account transaction.

* origin

  [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin)

  The origin of the store credit account transaction.

***

## Types implemented in

* [Store​Credit​Account​Credit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction)

  OBJECT

  A credit transaction which increases the store credit account balance.

  * account

    [Store​Credit​Account!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

    non-null

    The store credit account that the transaction belongs to.

  * amount

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The amount of the transaction.

  * balance​After​Transaction

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The balance of the account after the transaction.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the transaction was created.

  * event

    [Store​Credit​System​Event!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditSystemEvent)

    non-null

    The event that caused the store credit account transaction.

  * expires​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The time at which the transaction expires. Debit transactions will always spend the soonest expiring credit first.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * origin

    [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin)

    The origin of the store credit account transaction.

  * remaining​Amount

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The remaining amount of the credit. The remaining amount will decrease when a debit spends this credit. It may also increase if that debit is subsequently reverted. In the event that the credit expires, the remaining amount will represent the amount that remained as the expiry ocurred.

* [Store​Credit​Account​Debit​Revert​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitRevertTransaction)

  OBJECT

  A debit revert transaction which increases the store credit account balance. Debit revert transactions are created automatically when a [store credit account debit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction) is reverted.

  Store credit account debit transactions are reverted when an order is cancelled, refunded or in the event of a payment failure at checkout. The amount added to the balance is equal to the amount reverted on the original credit.

  * account

    [Store​Credit​Account!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

    non-null

    The store credit account that the transaction belongs to.

  * amount

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The amount of the transaction.

  * balance​After​Transaction

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The balance of the account after the transaction.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the transaction was created.

  * debit​Transaction

    [Store​Credit​Account​Debit​Transaction!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction)

    non-null

    The reverted debit transaction.

  * event

    [Store​Credit​System​Event!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditSystemEvent)

    non-null

    The event that caused the store credit account transaction.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * origin

    [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin)

    The origin of the store credit account transaction.

* [Store​Credit​Account​Debit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction)

  OBJECT

  A debit transaction which decreases the store credit account balance.

  * account

    [Store​Credit​Account!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

    non-null

    The store credit account that the transaction belongs to.

  * amount

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The amount of the transaction.

  * balance​After​Transaction

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The balance of the account after the transaction.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the transaction was created.

  * event

    [Store​Credit​System​Event!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditSystemEvent)

    non-null

    The event that caused the store credit account transaction.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * origin

    [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin)

    The origin of the store credit account transaction.

* [Store​Credit​Account​Expiration​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountExpirationTransaction)

  OBJECT

  An expiration transaction which decreases the store credit account balance. Expiration transactions are created automatically when a [store credit account credit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction) expires.

  The amount subtracted from the balance is equal to the remaining amount of the credit transaction.

  * account

    [Store​Credit​Account!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

    non-null

    The store credit account that the transaction belongs to.

  * amount

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The amount of the transaction.

  * balance​After​Transaction

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The balance of the account after the transaction.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the transaction was created.

  * credit​Transaction

    [Store​Credit​Account​Credit​Transaction!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction)

    non-null

    The credit transaction which expired.

  * event

    [Store​Credit​System​Event!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditSystemEvent)

    non-null

    The event that caused the store credit account transaction.

  * origin

    [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin)

    The origin of the store credit account transaction.

***

##### Variables

```json
{
	"account": "",
	"amount": "",
	"balanceAfterTransaction": "",
	"createdAt": "",
	"event": "",
	"origin": ""
}
```

##### Schema

```graphql
interface StoreCreditAccountTransaction {
  account: StoreCreditAccount!
  amount: MoneyV2!
  balanceAfterTransaction: MoneyV2!
  createdAt: DateTime!
  event: StoreCreditSystemEvent!
  origin: StoreCreditAccountTransactionOrigin
}
```
