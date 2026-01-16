---
title: OrderInput - GraphQL Admin
description: >-
  The input fields for specifying the information to be updated on an order when
  using the orderUpdate mutation.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput.md
---

# Order​Input

input\_object

The input fields for specifying the information to be updated on an order when using the orderUpdate mutation.

## Fields

* custom​Attributes

  [\[Attribute​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AttributeInput)

  A new list of custom attributes for the order. Overwrites the existing custom attributes.

* email

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A new customer email address for the order. Overwrites the existing email address.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the order to update.

* localized​Fields

  [\[Localized​Field​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocalizedFieldInput)

  A list of new [localized fields](https://shopify.dev/api/admin-graphql/latest/objects/localizedfield) to add to the existing list of localized fields for the order.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  A list of new metafields to add to the existing metafields for the order.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The new contents for the note associated with the order. Overwrites the existing note.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A new customer phone number for the order. Overwrites the existing phone number.

* po​Number

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The new purchase order number for the order.

* shipping​Address

  [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  The new shipping address for the order. Overwrites the existing shipping address.

* tags

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A new list of tags for the order. Overwrites the existing tags.

* localization​Extensions

  [\[Localization​Extension​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocalizationExtensionInput)

  Deprecated

***

## Map

No referencing types
