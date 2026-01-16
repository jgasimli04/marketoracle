---
title: subscriptionDraftUpdate - GraphQL Admin
description: Updates a Subscription Draft.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate.md
---

# subscription​Draft​Update

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Updates a Subscription Draft.

## Arguments

* draft​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The gid of the Subscription Draft to update.

* input

  [Subscription​Draft​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput)

  required

  The properties of the new Subscription Contract.

***

## Subscription​Draft​Update​Payload returns

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionDraftUpdate reference

## Mutation Reference

```graphql
mutation subscriptionDraftUpdate($draftId: ID!, $input: SubscriptionDraftInput!) {
  subscriptionDraftUpdate(draftId: $draftId, input: $input) {
    draft {
      # SubscriptionDraft fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "draftId": "gid://shopify/<objectName>/10079785100",
  "input": {
    "status": "ACTIVE",
    "paymentMethodId": "gid://shopify/<objectName>/10079785100",
    "nextBillingDate": "2019-09-07T15:50:00Z",
    "billingPolicy": {
      "interval": "DAY",
      "intervalCount": 1,
      "minCycles": 1,
      "maxCycles": 1,
      "anchors": [
        {}
      ]
    },
    "deliveryPolicy": {
      "interval": "DAY",
      "intervalCount": 1,
      "anchors": [
        {}
      ]
    },
    "deliveryPrice": "29.99",
    "deliveryMethod": {
      "shipping": {},
      "localDelivery": {},
      "pickup": {}
    },
    "note": "<your-note>",
    "customAttributes": [
      {
        "key": "<your-key>",
        "value": "<your-value>"
      }
    ]
  }
}
```

##### Schema

```graphql
input SubscriptionDraftInput {
  status: SubscriptionContractSubscriptionStatus
  paymentMethodId: ID
  nextBillingDate: DateTime
  billingPolicy: SubscriptionBillingPolicyInput
  deliveryPolicy: SubscriptionDeliveryPolicyInput
  deliveryPrice: Decimal
  deliveryMethod: SubscriptionDeliveryMethodInput
  note: String
  customAttributes: [AttributeInput!]
}

input SubscriptionBillingPolicyInput {
  interval: SellingPlanInterval!
  intervalCount: Int!
  minCycles: Int
  maxCycles: Int
  anchors: [SellingPlanAnchorInput!]
}

input SubscriptionDeliveryPolicyInput {
  interval: SellingPlanInterval!
  intervalCount: Int!
  anchors: [SellingPlanAnchorInput!]
}

input SubscriptionDeliveryMethodInput {
  shipping: SubscriptionDeliveryMethodShippingInput
  localDelivery: SubscriptionDeliveryMethodLocalDeliveryInput
  pickup: SubscriptionDeliveryMethodPickupInput
}

input AttributeInput {
  key: String!
  value: String!
}
```
