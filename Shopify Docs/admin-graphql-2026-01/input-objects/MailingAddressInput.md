---
title: MailingAddressInput - GraphQL Admin
description: The input fields to create or update a mailing address.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput.md
---

# Mailing​Address​Input

input\_object

The input fields to create or update a mailing address.

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

* country​Code

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The two-letter code for the country of the address.

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first name of the customer.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The last name of the customer.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique phone number for the customer.

  Formatted using E.164 standard. For example, *+16135551111*.

* province​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The code for the region of the address, such as the province, state, or district. For example QC for Quebec, Canada.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip or postal code of the address.

### Deprecated fields

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Deprecated

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Input objects using this input

* [Customer​Input.addresses](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput#fields-addresses)

  INPUT OBJECT

  The input fields and values to use when creating or updating a customer.

* [Customer​Set​Input.addresses](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetInput#fields-addresses)

  INPUT OBJECT

  The input fields and values to use when creating or updating a customer.

* [Draft​Order​Available​Delivery​Options​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput#fields-shippingAddress)

  INPUT OBJECT

  The input fields used to determine available delivery options for a draft order.

* [Draft​Order​Input.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-billingAddress)

  INPUT OBJECT

  The input fields used to create or update a draft order.

* [Draft​Order​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-shippingAddress)

  INPUT OBJECT

  The input fields used to create or update a draft order.

* [Order​Create​Order​Input.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-billingAddress)

  INPUT OBJECT

  The input fields for creating an order.

* [Order​Create​Order​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-shippingAddress)

  INPUT OBJECT

  The input fields for creating an order.

* [Order​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput#fields-shippingAddress)

  INPUT OBJECT

  The input fields for specifying the information to be updated on an order when using the orderUpdate mutation.

* [Shopify​Payments​Dispute​Evidence​Update​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeEvidenceUpdateInput#fields-shippingAddress)

  INPUT OBJECT

  The input fields required to update a dispute evidence object.

* [Subscription​Delivery​Method​Local​Delivery​Input.address](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryInput#fields-address)

  INPUT OBJECT

  The input fields for a local delivery method.

  This input accepts partial input. When a field is not provided, its prior value is left unchanged.

* [Subscription​Delivery​Method​Shipping​Input.address](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodShippingInput#fields-address)

  INPUT OBJECT

  Specifies shipping delivery method fields.

  This input accepts partial input. When a field is not provided, its prior value is left unchanged.

***

## Map

### Input objects using this input

* [Customer​Input.addresses](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput#fields-addresses)
* [Customer​Set​Input.addresses](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetInput#fields-addresses)
* [Draft​Order​Available​Delivery​Options​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput#fields-shippingAddress)
* [Draft​Order​Input.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-billingAddress)
* [Draft​Order​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-shippingAddress)
* [Order​Create​Order​Input.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-billingAddress)
* [Order​Create​Order​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-shippingAddress)
* [Order​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput#fields-shippingAddress)
* [Shopify​Payments​Dispute​Evidence​Update​Input.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeEvidenceUpdateInput#fields-shippingAddress)
* [Subscription​Delivery​Method​Local​Delivery​Input.address](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryInput#fields-address)
* [Subscription​Delivery​Method​Shipping​Input.address](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodShippingInput#fields-address)
