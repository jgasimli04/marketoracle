---
title: DisputeEvidenceUpdateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `DisputeEvidenceUpdateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeEvidenceUpdateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeEvidenceUpdateUserErrorCode.md
---

# Dispute​Evidence​Update​User​Error​Code

enum

Possible error codes that can be returned by `DisputeEvidenceUpdateUserError`.

## Valid values

* DISPUTE\_​EVIDENCE\_​NOT\_​FOUND

  Dispute evidence could not be found.

* EVIDENCE\_​ALREADY\_​ACCEPTED

  Evidence already accepted.

* EVIDENCE\_​PAST\_​DUE\_​DATE

  Evidence past due date.

* FILE\_​NOT\_​FOUND

  File upload failed. Please try again.

* FILES\_​SIZE\_​EXCEEDED\_​LIMIT

  Combined files size is too large.

* INVALID

  The input value is invalid.

* TOO\_​LARGE

  Individual file size is too large.

***

## Fields

* [Dispute​Evidence​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DisputeEvidenceUpdateUserError#field-DisputeEvidenceUpdateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `DisputeEvidenceUpdate`.

***

## Map

### Fields with this enum

* <-|[Dispute​Evidence​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DisputeEvidenceUpdateUserError#field-DisputeEvidenceUpdateUserError.fields.code)
