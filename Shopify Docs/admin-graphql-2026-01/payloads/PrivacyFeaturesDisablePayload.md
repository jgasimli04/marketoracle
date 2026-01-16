---
title: PrivacyFeaturesDisablePayload - GraphQL Admin
description: Return type for `privacyFeaturesDisable` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PrivacyFeaturesDisablePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PrivacyFeaturesDisablePayload.md
---

# Privacy​Features​Disable​Payload

payload

Return type for `privacyFeaturesDisable` mutation.

## Fields

* features​Disabled

  [\[Privacy​Features​Enum!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesEnum)

  The privacy features that were disabled.

* user​Errors

  [\[Privacy​Features​Disable​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacyFeaturesDisableUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [privacy​Features​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyFeaturesDisable)

  mutation

  Disable a shop's privacy features.

  * features​To​Disable

    [\[Privacy​Features​Enum!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesEnum)

    required

    ### Arguments

    The list of privacy features to disable.

  ***

***

## Map

### Mutations with this payload

* [privacy​Features​Disable](https://shopify.dev/docs/api/admin-graphql/latest/types/privacyFeaturesDisable)
