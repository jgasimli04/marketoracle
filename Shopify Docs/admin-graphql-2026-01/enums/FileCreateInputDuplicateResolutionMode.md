---
title: FileCreateInputDuplicateResolutionMode - GraphQL Admin
description: The input fields for handling if filename is already in use.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FileCreateInputDuplicateResolutionMode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FileCreateInputDuplicateResolutionMode.md
---

# File​Create​Input​Duplicate​Resolution​Mode

enum

The input fields for handling if filename is already in use.

## Valid values

* APPEND\_​UUID

  Append a UUID if filename is already in use.

* RAISE\_​ERROR

  Raise an error if filename is already in use.

* REPLACE

  Replace the existing file if filename is already in use.

***

## Fields

* [File​Create​Input.duplicateResolutionMode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileCreateInput#fields-duplicateResolutionMode)

  INPUT OBJECT

  The input fields that are required to create a file object.

* [File​Set​Input.duplicateResolutionMode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileSetInput#fields-duplicateResolutionMode)

  INPUT OBJECT

  The input fields required to create or update a file object.

***

## Map

### Inputs with this enum

* [File​Create​Input.duplicateResolutionMode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileCreateInput#fields-duplicateResolutionMode)
* [File​Set​Input.duplicateResolutionMode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileSetInput#fields-duplicateResolutionMode)
