---
title: FilesErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `FilesUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/FilesErrorCode'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/FilesErrorCode.md'
---

# Files​Error​Code

enum

Possible error codes that can be returned by `FilesUserError`.

## Valid values

* ALT\_​VALUE\_​LIMIT\_​EXCEEDED

  The alt value exceeds the maximum limit of 512 characters.

* BLANK\_​SEARCH

  The search term must not be blank.

* FILE\_​DOES\_​NOT\_​EXIST

  File does not exist.

* FILE\_​LOCKED

  File has a pending operation.

* FILENAME\_​ALREADY\_​EXISTS

  The provided filename already exists.

* INVALID

  The input value is invalid.

* INVALID\_​DUPLICATE\_​MODE\_​FOR\_​TYPE

  Duplicate resolution mode is not supported for this file type.

* INVALID\_​DUPLICATE\_​RESOLUTION\_​MODE

  Invalid duplicate resolution mode provided.

* INVALID\_​FAILED\_​MEDIA\_​STATE

  File cannot be updated in a failed state.

* INVALID\_​FILENAME

  The provided filename is invalid.

* INVALID\_​FILENAME\_​EXTENSION

  Invalid filename extension.

* INVALID\_​IMAGE\_​SOURCE\_​URL

  Invalid image source url value provided.

* INVALID\_​QUERY

  Search query isn't supported.

* MISMATCHED\_​FILENAME\_​AND\_​ORIGINAL\_​SOURCE

  Cannot create file with custom filename which does not match original source extension.

* MISSING\_​ARGUMENTS

  At least one argument is required.

* MISSING\_​FILENAME\_​FOR\_​DUPLICATE\_​MODE\_​REPLACE

  Duplicate resolution mode REPLACE cannot be used without specifying filename.

* NON\_​IMAGE\_​MEDIA\_​PER\_​SHOP\_​LIMIT\_​EXCEEDED

  Exceeded the limit of non-image media per shop.

* NON\_​READY\_​STATE

  The file is not in the READY state.

* PRODUCT\_​MEDIA\_​LIMIT\_​EXCEEDED

  Exceeded the limit of media per product.

* PRODUCT\_​SUSPENDED

  One or more associated products are suspended.

* REFERENCE\_​TARGET\_​DOES\_​NOT\_​EXIST

  The target resource does not exist.

* TOO\_​MANY\_​ARGUMENTS

  Specify one argument: search, IDs, or deleteAll.

* TOO\_​MANY\_​FILE\_​REFERENCE

  Cannot add more than 10000 references to a file.

* UNACCEPTABLE\_​ASSET

  The file type is not supported.

* UNACCEPTABLE\_​TRIAL\_​ASSET

  The file is not supported on trial accounts. Select a plan to upload this file.

* UNACCEPTABLE\_​UNVERIFIED\_​TRIAL\_​ASSET

  The file is not supported on trial accounts that have not validated their email. Either select a plan or verify the shop owner email to upload this file.

* UNSUPPORTED\_​FILE\_​REFERENCE

  The file type is not supported for referencing.

* UNSUPPORTED\_​MEDIA\_​TYPE\_​FOR\_​FILENAME\_​UPDATE

  Filename update is only supported on Image and GenericFile.

***

## Fields

* [Files​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError#field-FilesUserError.fields.code)

  OBJECT

  An error that happens during the execution of a Files API query or mutation.

***

## Map

### Fields with this enum

* <-|[Files​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError#field-FilesUserError.fields.code)
