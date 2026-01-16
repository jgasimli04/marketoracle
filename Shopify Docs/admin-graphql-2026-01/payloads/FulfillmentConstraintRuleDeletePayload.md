---
title: FulfillmentConstraintRuleDeletePayload - GraphQL Admin
description: Return type for `fulfillmentConstraintRuleDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentConstraintRuleDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/FulfillmentConstraintRuleDeletePayload.md
---

# Fulfillment​Constraint​Rule​Delete​Payload

payload

Return type for `fulfillmentConstraintRuleDelete` mutation.

## Fields

* success

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not the fulfillment constraint rule was successfully deleted.

* user​Errors

  [\[Fulfillment​Constraint​Rule​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [fulfillment​Constraint​Rule​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleDelete)

  mutation

  Deletes a fulfillment constraint rule and its metafields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the fulfillment constraint rule.

  ***

***

## Map

### Mutations with this payload

* [fulfillment​Constraint​Rule​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/fulfillmentConstraintRuleDelete)
