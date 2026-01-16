---
title: MetaobjectUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `MetaobjectUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetaobjectUserErrorCode.md
---

# Metaobject​User​Error​Code

enum

Possible error codes that can be returned by `MetaobjectUserError`.

## Valid values

* ADMIN\_​ACCESS\_​INPUT\_​NOT\_​ALLOWED

  Admin access can only be specified on metaobject definitions that have an app-reserved type.

* APP\_​CONFIG\_​MANAGED

  Definition is managed by app configuration and cannot be modified through the API.

* BLANK

  The input value is blank.

* CAPABILITY\_​NOT\_​ENABLED

  The capability you are using is not enabled.

* DISPLAY\_​NAME\_​CONFLICT

  The display name cannot be the same when using the metaobject as a product option.

* DUPLICATE\_​FIELD\_​INPUT

  Duplicate inputs were provided for this field key.

* FIELD\_​TYPE\_​INVALID

  Renderable data input is referencing an invalid field.

* IMMUTABLE

  The targeted object cannot be modified.

* INCLUSION

  The input value isn't included in the list.

* INPUT\_​LIMIT\_​EXCEEDED

  The maximum number of input metaobjects has been exceeded.

* INTERNAL\_​ERROR

  An unexpected error occurred.

* INVALID

  The input value is invalid.

* INVALID\_​OPTION

  The value for the metafield definition option was invalid.

* INVALID\_​TYPE

  The metafield type is invalid.

* INVALID\_​VALUE

  The value is invalid for the metafield type or the definition options.

* MAX\_​DEFINITIONS\_​EXCEEDED

  The maximum number of metaobjects definitions has been exceeded.

* MAX\_​OBJECTS\_​EXCEEDED

  The maximum number of metaobjects per shop has been exceeded.

* MISSING\_​REQUIRED\_​KEYS

  The input is missing required keys.

* NOT\_​AUTHORIZED

  Not authorized.

* OBJECT\_​FIELD\_​REQUIRED

  Missing required fields were found for this object.

* OBJECT\_​FIELD\_​TAKEN

  The specified field key is already in use.

* PRESENT

  The input value needs to be blank.

* RECORD\_​NOT\_​FOUND

  The requested record couldn't be found.

* REFERENCE\_​EXISTS\_​ERROR

  The action cannot be completed because associated metaobjects are referenced by another resource.

* RESERVED\_​NAME

  The provided name is reserved for system use.

* STANDARD\_​METAOBJECT\_​DEFINITION\_​DEPENDENT\_​ON\_​APP

  Definition is required by an installed app and cannot be deleted.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* UNDEFINED\_​OBJECT\_​FIELD

  No field definition found for this key.

* UNDEFINED\_​OBJECT\_​TYPE

  No metaobject definition found for this type.

* URL\_​HANDLE\_​BLANK

  The Online Store URL handle cannot be blank.

* URL\_​HANDLE\_​INVALID

  The Online Store URL handle is invalid.

* URL\_​HANDLE\_​TAKEN

  The Online Store URL handle is already taken.

***

## Fields

* [Metaobject​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError#field-MetaobjectUserError.fields.code)

  OBJECT

  Defines errors encountered while managing metaobject resources.

***

## Map

### Fields with this enum

* <-|[Metaobject​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError#field-MetaobjectUserError.fields.code)
