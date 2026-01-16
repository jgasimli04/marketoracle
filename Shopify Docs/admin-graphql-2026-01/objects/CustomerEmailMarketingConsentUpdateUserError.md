---
title: CustomerEmailMarketingConsentUpdateUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `CustomerEmailMarketingConsentUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentUpdateUserError.md
---

# Customer​Email​Marketing​Consent​Update​User​Error

object

An error that occurs during the execution of `CustomerEmailMarketingConsentUpdate`.

## Fields

* code

  [Customer​Email​Marketing​Consent​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailMarketingConsentUpdateUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [customer​Email​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerEmailMarketingConsentUpdate)

  mutation

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s email marketing consent information. The customer must have an email address to update their consent. Records the [marketing state](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingState) (such as subscribed, pending, unsubscribed), [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingOptInLevel), and when and where the customer gave or withdrew consent.

  * input

    [Customer​Email​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentUpdateInput)

    required

    ### Arguments

    Specifies the input fields to update a customer's email marketing consent information.

  ***

***

## <\~> CustomerEmailMarketingConsentUpdateUserError Mutations

### Mutated by

* <\~>[customer​Email​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerEmailMarketingConsentUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CustomerEmailMarketingConsentUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
