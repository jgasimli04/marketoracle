---
title: StoreCreditSystemEvent - GraphQL Admin
description: The event that caused the store credit account transaction.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditSystemEvent
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditSystemEvent.md
---

# Store​Credit​System​Event

enum

The event that caused the store credit account transaction.

## Valid values

* ADJUSTMENT

  An adjustment was made to the store credit account.

* ORDER\_​CANCELLATION

  Store credit was returned when an authorized payment was voided.

* ORDER\_​PAYMENT

  Store credit was used as payment for an order.

* ORDER\_​REFUND

  Store credit was refunded from an order.

* PAYMENT\_​FAILURE

  A store credit payment was reverted due to another payment method failing.

* PAYMENT\_​RETURNED

  A smaller amount of store credit was captured than was originally authorized.

* TAX\_​FINALIZATION

  Tax finalization affected the store credit payment.

***

## Fields

* [Store​Credit​Account​Credit​Transaction.event](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction#field-StoreCreditAccountCreditTransaction.fields.event)

  OBJECT

  A credit transaction which increases the store credit account balance.

* [Store​Credit​Account​Debit​Revert​Transaction.event](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.event)

  OBJECT

  A debit revert transaction which increases the store credit account balance. Debit revert transactions are created automatically when a [store credit account debit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction) is reverted.

  Store credit account debit transactions are reverted when an order is cancelled, refunded or in the event of a payment failure at checkout. The amount added to the balance is equal to the amount reverted on the original credit.

* [Store​Credit​Account​Debit​Transaction.event](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction#field-StoreCreditAccountDebitTransaction.fields.event)

  OBJECT

  A debit transaction which decreases the store credit account balance.

* [Store​Credit​Account​Expiration​Transaction.event](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.event)

  OBJECT

  An expiration transaction which decreases the store credit account balance. Expiration transactions are created automatically when a [store credit account credit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction) expires.

  The amount subtracted from the balance is equal to the remaining amount of the credit transaction.

* [Store​Credit​Account​Transaction.event](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction#fields-event)

  INTERFACE

  Interface for a store credit account transaction.

***

## Map

### Fields with this enum

* <-|[Store​Credit​Account​Credit​Transaction.event](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction#field-StoreCreditAccountCreditTransaction.fields.event)
* <-|[Store​Credit​Account​Debit​Revert​Transaction.event](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.event)
* <-|[Store​Credit​Account​Debit​Transaction.event](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction#field-StoreCreditAccountDebitTransaction.fields.event)
* <-|[Store​Credit​Account​Expiration​Transaction.event](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.event)
