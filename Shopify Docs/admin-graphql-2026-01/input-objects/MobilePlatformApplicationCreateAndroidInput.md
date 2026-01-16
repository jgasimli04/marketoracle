---
title: MobilePlatformApplicationCreateAndroidInput - GraphQL Admin
description: The input fields for an Android based mobile platform application.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationCreateAndroidInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationCreateAndroidInput.md
---

# Mobile​Platform​Application​Create​Android​Input

input\_object

The input fields for an Android based mobile platform application.

## Fields

* application​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Android application ID.

* app​Links​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether Android App Links are supported by this app.

* sha256Cert​Fingerprints

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The SHA256 fingerprints of the app’s signing certificate.

***

## Input objects using this input

* [Mobile​Platform​Application​Create​Input.android](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationCreateInput#fields-android)

  INPUT OBJECT

  The input fields for a mobile application platform type.

***

## Map

### Input objects using this input

* [Mobile​Platform​Application​Create​Input.android](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationCreateInput#fields-android)
