---
title: MailingAddressConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple MailingAddresses.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection.md
---

# Mailing​Address​Connection

connection

An auto-generated type for paginating through multiple MailingAddresses.

## Fields with this connection

* [Customer.addressesV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.addressesV2)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  Caution

  Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  ***

* [Customer​Merge​Preview​Default​Fields.addresses](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.addresses)

  OBJECT

  The fields that will be kept as part of a customer merge preview.

***

## Possible returns

* edges

  [\[Mailing​Address​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddressEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Mailing​Address!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  non-null

  A list of nodes that are contained in MailingAddressEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Customer.addressesV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.addressesV2)
* {}[Customer​Merge​Preview​Default​Fields.addresses](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.addresses)

### Possible returns

* <->[Mailing​Address​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection#returns-edges)
* <->[Mailing​Address​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection#returns-nodes)
* <->[Mailing​Address​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection#returns-pageInfo)
