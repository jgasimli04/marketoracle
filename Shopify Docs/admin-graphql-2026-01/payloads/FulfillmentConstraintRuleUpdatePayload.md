---
title: FulfillmentConstraintRuleUpdatePayload - GraphQL Admin
description: Return type for `fulfillmentConstraintRuleUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentConstraintRuleUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentConstraintRuleUpdatePayload.md
---

# Fulfillment​Constraint​Rule​Update​Payload

payload

Return type for `fulfillmentConstraintRuleUpdate` mutation.

## Fields

* fulfillment​Constraint​Rule

  [Fulfillment​Constraint​Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule)

  The updated fulfillment constraint rule.

* user​Errors

  [\[Fulfillment​Constraint​Rule​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Constraint​Rule​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleUpdate)

  mutation

  Update a fulfillment constraint rule.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the fulfillment constraint rule.

  * delivery​Method​Types

    [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

    required

    Specifies the delivery method types to be updated. If not provided or providing an empty list will associate the function with all delivery methods.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Constraint​Rule​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentConstraintRuleUpdate)
