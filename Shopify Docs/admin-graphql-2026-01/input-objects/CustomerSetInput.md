---
title: CustomerSetInput - GraphQL Admin
description: The input fields and values to use when creating or updating a customer.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetInput.md
---

# Customer​Set​Input

input\_object

The input fields and values to use when creating or updating a customer.

## Fields

* addresses

  [\[Mailing​Address​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  The addresses for a customer.

* email

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique email address of the customer.

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer's first name.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer's last name.

* locale

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customer's locale.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note about the customer.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique phone number for the customer.

* tags

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A list of tags to associate with the customer. Can be an array or a comma-separated list. Example values: `["tag1", "tag2", "tag3"]`, `"tag1, tag2, tag3"`

  Updating `tags` overwrites any existing tags that were previously added to the customer. To add new tags without overwriting existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.

* tax​Exempt

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the customer is exempt from paying taxes on their order.

* tax​Exemptions

  [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

  The list of tax exemptions to apply to the customer.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Deprecated

***

## Map

No referencing types
