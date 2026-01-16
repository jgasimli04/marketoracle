---
title: ShopifyPaymentsDisputeReason - GraphQL Admin
description: The reason for the dispute provided by the cardholder's bank.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsDisputeReason
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsDisputeReason.md
---

# Shopify​Payments​Dispute​Reason

enum

The reason for the dispute provided by the cardholder's bank.

## Valid values

* BANK\_​CANNOT\_​PROCESS

  The customer's bank can't process the charge.

* CREDIT\_​NOT\_​PROCESSED

  The customer claims that the purchased product was returned or the transaction was otherwise canceled, but you haven't yet provided a refund or credit.

* CUSTOMER\_​INITIATED

  The customer initiated the dispute. Contact the customer for additional details on why the payment was disputed.

* DEBIT\_​NOT\_​AUTHORIZED

  The customer's bank can't proceed with the debit since it hasn't been authorized.

* DUPLICATE

  The customer claims they were charged multiple times for the same product or service.

* FRAUDULENT

  The cardholder claims that they didn’t authorize the payment.

* GENERAL

  The dispute is uncategorized, so you should contact the customer for additional details to find out why the payment was disputed.

* INCORRECT\_​ACCOUNT\_​DETAILS

  The customer account associated with the purchase is incorrect.

* INSUFFICIENT\_​FUNDS

  The customer's bank account has insufficient funds.

* NONCOMPLIANT

  The card issuer believes the disputed transaction doesn't conform to the network rules. These disputes occur when transactions don't meet card network requirements and may incur additional network fees if escalated for resolution.

* PRODUCT\_​NOT\_​RECEIVED

  The customer claims they did not receive the products or services purchased.

* PRODUCT\_​UNACCEPTABLE

  The product or service was received but was defective, damaged, or not as described.

* SUBSCRIPTION\_​CANCELLED

  The customer claims that you continued to charge them after a subscription was canceled.

* UNRECOGNIZED

  The customer doesn’t recognize the payment appearing on their card statement.

***

## Fields

* [Shopify​Payments​Dispute​Reason​Details.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeReasonDetails#field-ShopifyPaymentsDisputeReasonDetails.fields.reason)

  OBJECT

  Details regarding a dispute reason.

***

## Map

### Fields with this enum

* <-|[Shopify​Payments​Dispute​Reason​Details.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeReasonDetails#field-ShopifyPaymentsDisputeReasonDetails.fields.reason)
