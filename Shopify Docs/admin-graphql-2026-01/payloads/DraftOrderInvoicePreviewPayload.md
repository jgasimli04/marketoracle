---
title: DraftOrderInvoicePreviewPayload - GraphQL Admin
description: Return type for `draftOrderInvoicePreview` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderInvoicePreviewPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderInvoicePreviewPayload.md
---

# Draft​Order​Invoice​Preview​Payload

payload

Return type for `draftOrderInvoicePreview` mutation.

## Fields

* preview​Html

  [HTML](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  The draft order invoice email rendered as HTML to allow previewing.

* preview​Subject

  [HTML](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  The subject preview for the draft order invoice email.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Invoice​Preview](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoicePreview)

  mutation

  Previews a draft order invoice email.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the draft order invoice email to preview.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the draft order invoice email fields.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Invoice​Preview](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderInvoicePreview)
