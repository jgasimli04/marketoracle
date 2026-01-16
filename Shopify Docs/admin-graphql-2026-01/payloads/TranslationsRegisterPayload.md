---
title: TranslationsRegisterPayload - GraphQL Admin
description: Return type for `translationsRegister` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TranslationsRegisterPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/TranslationsRegisterPayload.md
---

# Translations​Register​Payload

payload

Return type for `translationsRegister` mutation.

## Fields

* translations

  [\[Translation!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  The translations that were created or updated.

* user​Errors

  [\[Translation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [translations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister)

  mutation

  Creates or updates translations for a resource's [translatable content](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent).

  Each translation requires a digest value from the resource's translatable content. Use the [`translatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResource) query to get a resource's translatable content and digest values before creating translations. You can optionally scope translations to specific markets using the `marketId` field in each translation input.

  Learn more about [managing translations](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the resource that is being translated.

  * translations

    [\[Translation​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/TranslationInput)

    required

    Specifies the input fields for a translation.

  ***

***

## Map

### Mutations with this payload

* [translations​Register](https://shopify.dev/docs/api/admin-graphql/latest/types/translationsRegister)
