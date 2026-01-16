---
title: StaffMemberDefaultImage - GraphQL Admin
description: >-
  Represents the fallback avatar image for a staff member. This is used only if
  the staff member has no avatar image.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StaffMemberDefaultImage
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StaffMemberDefaultImage.md
---

# Staff​Member​Default​Image

enum

Represents the fallback avatar image for a staff member. This is used only if the staff member has no avatar image.

## Valid values

* DEFAULT

  Returns a default avatar image for the staff member.

* NOT\_​FOUND

  Returns a URL that returns a 404 error if the image is not present.

* TRANSPARENT

  Returns a transparent avatar image for the staff member.

***

## Fields

* [Staff​Member.avatar(fallback)](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember#field-StaffMember.fields.avatar.arguments.fallback)

  ARGUMENT

  A user account that can access the Shopify admin to manage store operations. Includes personal information and account status.

  You can assign staff members to [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects for [B2B operations](https://shopify.dev/docs/apps/build/b2b), limiting their actions to those locations.

***

## Map

### Arguments with this enum

* <-|[Staff​Member.avatar(fallback)](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember#field-StaffMember.fields.avatar.arguments.fallback)
