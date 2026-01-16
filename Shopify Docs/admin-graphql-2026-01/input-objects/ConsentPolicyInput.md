---
title: ConsentPolicyInput - GraphQL Admin
description: The input fields for a consent policy to be updated or created.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ConsentPolicyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ConsentPolicyInput.md
---

# Consent​Policy​Input

input\_object

The input fields for a consent policy to be updated or created.

## Fields

* consent​Required

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether consent is required for the region.

* country​Code

  [Privacy​Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyCountryCode)

  The `ISO 3166` country code for which the policy applies.

* data​Sale​Opt​Out​Required

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether data sale opt-out is required for the region.

* region​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The `ISO 3166` region code for which the policy applies.

***

## Map

No referencing types
