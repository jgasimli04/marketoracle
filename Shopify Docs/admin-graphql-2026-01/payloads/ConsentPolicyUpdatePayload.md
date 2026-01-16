---
title: ConsentPolicyUpdatePayload - GraphQL Admin
description: Return type for `consentPolicyUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ConsentPolicyUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ConsentPolicyUpdatePayload.md
---

# Consent​Policy​Update​Payload

payload

Return type for `consentPolicyUpdate` mutation.

## Fields

* updated​Policies

  [\[Consent​Policy!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicy)

  All updated and created consent policies. The consent policies that haven't been modified as part of the mutation aren't returned.

* user​Errors

  [\[Consent​Policy​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [consent​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentPolicyUpdate)

  mutation

  Update or create consent policies in bulk.

  * consent​Policies

    [\[Consent​Policy​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ConsentPolicyInput)

    required

    ### Arguments

    The consent policies to update or create. If the country and region matches an existing consent policy, then the consent policy is updated. Otherwise, a new consent policy is created.

  ***

***

## Map

### Mutations with this payload

* [consent​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/consentPolicyUpdate)
