---
title: CustomerPaymentMethodRevocationReason - GraphQL Admin
description: The revocation reason types for a customer payment method.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodRevocationReason
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodRevocationReason.md
---

# Customer​Payment​Method​Revocation​Reason

enum

The revocation reason types for a customer payment method.

## Valid values

* AUTHORIZE\_​NET\_​GATEWAY\_​NOT\_​ENABLED

  The Authorize.net payment gateway is not enabled.

* AUTHORIZE\_​NET\_​RETURNED\_​NO\_​PAYMENT\_​METHOD

  Authorize.net did not return any payment methods. Make sure that the correct Authorize.net account is linked.

* BRAINTREE\_​API\_​AUTHENTICATION\_​ERROR

  Failed to contact Braintree API.

* BRAINTREE\_​GATEWAY\_​NOT\_​ENABLED

  The Braintree payment gateway is not enabled.

* BRAINTREE\_​PAYMENT\_​METHOD\_​NOT\_​CARD

  The Braintree payment method type should be a credit card or Apple Pay card.

* BRAINTREE\_​RETURNED\_​NO\_​PAYMENT\_​METHOD

  Braintree returned no payment methods. Make sure the correct Braintree account is linked.

* CUSTOMER\_​REDACTED

  The customer redacted their payment method.

* CVV\_​ATTEMPTS\_​LIMIT\_​EXCEEDED

  CVV attempts limit exceeded.

* FAILED\_​TO\_​RETRIEVE\_​BILLING\_​ADDRESS

  The billing address failed to retrieve.

* FAILED\_​TO\_​UPDATE\_​CREDIT\_​CARD

  The credit card failed to update.

* MANUALLY\_​REVOKED

  The payment method was manually revoked.

* MERGED

  The payment method was replaced with an existing payment method. The associated contracts have been migrated to the other payment method.

* PAYMENT\_​METHOD\_​VERIFICATION\_​FAILED

  Verification of payment method failed.

* STRIPE\_​API\_​AUTHENTICATION\_​ERROR

  Failed to contact the Stripe API.

* STRIPE\_​API\_​INVALID\_​REQUEST\_​ERROR

  Invalid request. Failed to retrieve payment method from Stripe.

* STRIPE\_​GATEWAY\_​NOT\_​ENABLED

  The Stripe payment gateway is not enabled.

* STRIPE\_​PAYMENT\_​METHOD\_​NOT\_​CARD

  The Stripe payment method type should be card.

* STRIPE\_​RETURNED\_​NO\_​PAYMENT\_​METHOD

  Stripe did not return any payment methods. Make sure that the correct Stripe account is linked.

* THREE\_​D\_​SECURE\_​FLOW\_​IN\_​VERIFICATION\_​NOT\_​IMPLEMENTED

  Verification of the payment method failed due to 3DS not being supported.

* TOO\_​MANY\_​CONSECUTIVE\_​FAILURES

  Too many consecutive failed attempts.

***

## Fields

* [Customer​Payment​Method.revokedReason](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.revokedReason)

  OBJECT

  A customer's saved payment method. Stores the payment instrument details and billing information for recurring charges.

  The payment method supports types included in the [`CustomerPaymentInstrument`](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument) union.

***

## Map

### Fields with this enum

* <-|[Customer​Payment​Method.revokedReason](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.revokedReason)
