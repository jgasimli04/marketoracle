---
title: MailingAddressEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one MailingAddress and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddressEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddressEdge.md
---

# Mailing​Address​Edge

object

An auto-generated type which holds one MailingAddress and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Mailing​Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  non-null

  The item at the end of MailingAddressEdge.

***

## Map

### Connections with this object

* <->[MailingAddressConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection#returns-edges)
