---
title: PageCreatePayload - GraphQL Admin
description: Return type for `pageCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/PageCreatePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PageCreatePayload.md
---

# Page​Create​Payload

payload

Return type for `pageCreate` mutation.

## Fields

* page

  [Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page)

  The page that was created.

* user​Errors

  [\[Page​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [page​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate)

  mutation

  Creates a [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) for the online store.

  Pages contain custom content like "About Us" or "Contact" information that merchants display outside their product catalog. The page requires a [`title`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.title) and can include HTML content, publishing settings, and custom [template suffixes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.templateSuffix). You can control visibility through the [`isPublished`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.isPublished) flag or schedule publication with a specific date.

  The mutation returns the complete page object upon successful creation or validation errors if the input is invalid.

  * page

    [Page​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageCreateInput)

    required

    ### Arguments

    The properties of the new page.

  ***

***

## Map

### Mutations with this payload

* [page​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/pageCreate)
