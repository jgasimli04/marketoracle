---
title: SubscriptionDraftInput - GraphQL Admin
description: The input fields required to create a Subscription Draft.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput.md
---

# Subscription​Draft​Input

input\_object

The input fields required to create a Subscription Draft.

## Fields

* billing​Policy

  [Subscription​Billing​Policy​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingPolicyInput)

  The billing policy for the subscription contract.

* custom​Attributes

  [\[Attribute​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AttributeInput)

  A list of the custom attributes added to the subscription contract.

* delivery​Method

  [Subscription​Delivery​Method​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodInput)

  The delivery method for the subscription contract.

* delivery​Policy

  [Subscription​Delivery​Policy​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryPolicyInput)

  The delivery policy for the subscription contract.

* delivery​Price

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The shipping price for each renewal the subscription contract.

* next​Billing​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The next billing date for the subscription contract.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note field that will be applied to the generated orders.

* payment​Method​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the payment method to be used for the subscription contract.

* status

  [Subscription​Contract​Subscription​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractSubscriptionStatus)

  The current status of the subscription contract.

***

## Input objects using this input

* [Subscription​Contract​Atomic​Create​Input.contract](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput#fields-contract)

  INPUT OBJECT

  The input fields required to create a Subscription Contract.

* [Subscription​Contract​Create​Input.contract](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractCreateInput#fields-contract)

  INPUT OBJECT

  The input fields required to create a Subscription Contract.

***

## Map

### Input objects using this input

* [Subscription​Contract​Atomic​Create​Input.contract](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput#fields-contract)
* [Subscription​Contract​Create​Input.contract](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractCreateInput#fields-contract)
