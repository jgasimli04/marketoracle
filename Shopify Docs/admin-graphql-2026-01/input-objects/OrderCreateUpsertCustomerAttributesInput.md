---
title: OrderCreateUpsertCustomerAttributesInput - GraphQL Admin
description: >-
  The input fields for creating a new customer object or identifying an existing
  customer to update & associate with the order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateUpsertCustomerAttributesInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateUpsertCustomerAttributesInput.md
---

# Order​Create​Upsert​Customer​Attributes​Input

input\_object

The input fields for creating a new customer object or identifying an existing customer to update & associate with the order.

## Fields

* addresses

  [\[Order​Create​Customer​Address​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateCustomerAddressInput)

  A list of addresses to associate with the customer.

* email

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The email address to update the customer with. If no `id` is provided, this is used to uniquely identify the customer.

  ***

  Note

  If both this email input field and the email on `OrderCreateOrderInput` are provided, this field will take precedence.

  ***

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first name of the customer.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The id of the customer to associate to the order.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The last name of the customer.

* multipass​Identifier

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique identifier for the customer that's used with [Multipass login](https://shopify.dev/api/multipass).

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note about the customer.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The unique phone number ([E.164 format](https://en.wikipedia.org/wiki/E.164)) for this customer. Attempting to assign the same phone number to multiple customers returns an error. The property can be set using different formats, but each format must represent a number that can be dialed from anywhere in the world. The following formats are all valid:

  * 6135551212
  * +16135551212
  * (613)555-1212
  * +1 613-555-1212

* tags

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Tags that the shop owner has attached to the customer. A customer can have up to 250 tags. Each tag can have up to 255 characters.

* tax​Exempt

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the customer is exempt from paying taxes on their order. If `true`, then taxes won't be applied to an order at checkout. If `false`, then taxes will be applied at checkout.

***

## Input objects using this input

* [Order​Create​Customer​Input.toUpsert](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateCustomerInput#fields-toUpsert)

  INPUT OBJECT

  The input fields for a customer to associate with an order. Allows creation of a new customer or specifying an existing one.

***

## Map

### Input objects using this input

* [Order​Create​Customer​Input.toUpsert](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateCustomerInput#fields-toUpsert)
