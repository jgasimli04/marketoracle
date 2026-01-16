---
title: ResourceAlertSeverity - GraphQL Admin
description: The possible severity levels for a resource alert.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceAlertSeverity
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceAlertSeverity.md
---

# Resource​Alert​Severity

enum

The possible severity levels for a resource alert.

## Valid values

* CRITICAL

  Indicates a critical alert. For example, a blocked app.

* DEFAULT

  Indicates a neutral alert. For example, an accepted dispute.

* INFO

  Indicates an informative alert. For example, an escalated dispute.

* SUCCESS

  Indicates a success alert. For example, a winning a dispute.

* WARNING

  Indicates an informative alert. For example, a new dispute.

* ERROR

  Deprecated

***

## Fields

* [Resource​Alert.severity](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert#field-ResourceAlert.fields.severity)

  OBJECT

  An alert message that appears in the Shopify admin about a problem with a store resource, with 1 or more actions to take. For example, you could use an alert to indicate that you're not charging taxes on some product variants. They can optionally have a specific icon and be dismissed by merchants.

***

## Map

### Fields with this enum

* <-|[Resource​Alert.severity](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert#field-ResourceAlert.fields.severity)
