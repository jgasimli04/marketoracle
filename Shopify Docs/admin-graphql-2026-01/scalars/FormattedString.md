---
title: FormattedString - GraphQL Admin
description: >
  A string containing a strict subset of HTML code. Non-allowed tags will be
  stripped out.

  Allowed tags:

  * `a` (allowed attributes: `href`, `target`)

  * `b`

  * `br`

  * `em`

  * `i`

  * `strong`

  * `u`

  Use [HTML](https://shopify.dev/api/admin-graphql/latest/scalars/HTML) instead
  if you need to

  include other HTML tags.


  Example value: `"Your current domain is
  <strong>example.myshopify.com</strong>."`
api_version: 2026-01
api_name: admin
type: scalar
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString.md'
---

# Formatted​String

scalar

A string containing a strict subset of HTML code. Non-allowed tags will be stripped out. Allowed tags:

* `a` (allowed attributes: `href`, `target`)
* `b`
* `br`
* `em`
* `i`
* `strong`
* `u` Use [HTML](https://shopify.dev/api/admin-graphql/latest/scalars/HTML) instead if you need to include other HTML tags.

Example value: `"Your current domain is <strong>example.myshopify.com</strong>."`

## Map

### Fields with this scalar

* <-|[Basic​Event.message](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.message)
* <-|[Basic​Event.secondaryMessage](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.secondaryMessage)
* <-|[Comment​Event.message](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent#field-CommentEvent.fields.message)
* <-|[Currency​Formats.moneyFormat](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyFormats#field-CurrencyFormats.fields.moneyFormat)
* <-|[Currency​Formats.moneyWithCurrencyFormat](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyFormats#field-CurrencyFormats.fields.moneyWithCurrencyFormat)
* <-|[Customer​Visit.referralInfoHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.referralInfoHtml)
* <-|[Editable​Property.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/EditableProperty#field-EditableProperty.fields.reason)
