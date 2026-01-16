---
title: MobilePlatformApplication - GraphQL Admin
description: >-
  You can use the `MobilePlatformApplication` resource to enable

  [shared web
  credentials](https://developer.apple.com/documentation/security/shared_web_credentials)
  for Shopify iOS apps,

  as well as to create [iOS universal
  link](https://developer.apple.com/ios/universal-links/)

  or [Android app link](https://developer.android.com/training/app-links/)
  verification endpoints for merchant Shopify iOS or Android apps.

  Shared web credentials let iOS users access a native app after logging into
  the respective website in Safari without re-entering

  their username and password. If a user changes their credentials in the app,
  then those changes are reflected in Safari.

  You must use a custom domain to integrate shared web credentials with Shopify.
  With each platform's link system,

  users can tap a link to a shop's website and get seamlessly redirected to a
  merchant's installed app without going

  through a browser or manually selecting an app.


  For full configuration instructions on iOS shared web credentials,

  see the [associated domains
  setup](https://developer.apple.com/documentation/security/password_autofill/setting_up_an_app_s_associated_domains)
  technical documentation.


  For full configuration instructions on iOS universal links or Android App
  Links,

  see the respective [iOS universal
  link](https://developer.apple.com/documentation/uikit/core_app/allowing_apps_and_websites_to_link_to_your_content)

  or [Android app link](https://developer.android.com/training/app-links)
  technical documentation.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication.md
---

# Mobile​Platform​Application

union

Requires `read_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

You can use the `MobilePlatformApplication` resource to enable [shared web credentials](https://developer.apple.com/documentation/security/shared_web_credentials) for Shopify iOS apps, as well as to create [iOS universal link](https://developer.apple.com/ios/universal-links/) or [Android app link](https://developer.android.com/training/app-links/) verification endpoints for merchant Shopify iOS or Android apps. Shared web credentials let iOS users access a native app after logging into the respective website in Safari without re-entering their username and password. If a user changes their credentials in the app, then those changes are reflected in Safari. You must use a custom domain to integrate shared web credentials with Shopify. With each platform's link system, users can tap a link to a shop's website and get seamlessly redirected to a merchant's installed app without going through a browser or manually selecting an app.

For full configuration instructions on iOS shared web credentials, see the [associated domains setup](https://developer.apple.com/documentation/security/password_autofill/setting_up_an_app_s_associated_domains) technical documentation.

For full configuration instructions on iOS universal links or Android App Links, see the respective [iOS universal link](https://developer.apple.com/documentation/uikit/core_app/allowing_apps_and_websites_to_link_to_your_content) or [Android app link](https://developer.android.com/training/app-links) technical documentation.

## Possible types

* [Android​Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/AndroidApplication)

  OBJECT

  The Android mobile platform application.

  * application​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The Android application ID.

  * app​Links​Enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether Android App Links are supported by this app.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * sha256Cert​Fingerprints

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The SHA256 fingerprints of the app's signing certificate.

* [Apple​Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppleApplication)

  OBJECT

  The Apple mobile platform application.

  * app​Clip​Application​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The iOS App Clip application ID.

  * app​Clips​Enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether iOS App Clips are enabled for this app.

  * app​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The iOS App ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * shared​Web​Credentials​Enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether iOS shared web credentials are enabled for this app.

  * universal​Links​Enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether iOS Universal Links are supported by this app.

***

## Fields with this union

* [Mobile​Platform​Application​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple MobilePlatformApplications.

* [Mobile​Platform​Application​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationEdge#field-MobilePlatformApplicationEdge.fields.node)

  OBJECT

  An auto-generated type which holds one MobilePlatformApplication and a cursor during pagination.

***

```graphql
union MobilePlatformApplication = AndroidApplication | AppleApplication
```
