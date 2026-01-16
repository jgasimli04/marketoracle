---
title: OrderCreateCustomerAddressInput - GraphQL Admin
description: The input fields for creating a customer's mailing address.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateCustomerAddressInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateCustomerAddressInput.md
---

# Order​Create​Customer​Address​Input

input\_object

The input fields for creating a customer's mailing address.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first line of the address. Typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address. Typically the number of the apartment, suite, or unit.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the city, district, village, or town.

* company

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the customer's company or organization.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the country.

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first name of the customer.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The last name of the customer.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique phone number for the customer. Formatted using E.164 standard. For example, *+16135551111*.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip or postal code of the address.

***

## Input objects using this input

* [Order​Create​Upsert​Customer​Attributes​Input.addresses](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateUpsertCustomerAttributesInput#fields-addresses)

  INPUT OBJECT

  The input fields for creating a new customer object or identifying an existing customer to update & associate with the order.

***

## Map

### Input objects using this input

* [Order​Create​Upsert​Customer​Attributes​Input.addresses](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateUpsertCustomerAttributesInput#fields-addresses)
