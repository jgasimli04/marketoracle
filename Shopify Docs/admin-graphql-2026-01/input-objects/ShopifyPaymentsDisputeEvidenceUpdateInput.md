---
title: ShopifyPaymentsDisputeEvidenceUpdateInput - GraphQL Admin
description: The input fields required to update a dispute evidence object.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeEvidenceUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeEvidenceUpdateInput.md
---

# Shopify​Payments​Dispute​Evidence​Update​Input

input\_object

The input fields required to update a dispute evidence object.

## Fields

* access​Activity​Log

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Activity logs.

* cancellation​Policy​Disclosure

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Cancellation policy disclosure.

* cancellation​Policy​File

  [Shopify​Payments​Dispute​File​Upload​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeFileUploadUpdateInput)

  Cancellation policy file.

* cancellation​Rebuttal

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Cancellation rebuttal.

* customer​Communication​File

  [Shopify​Payments​Dispute​File​Upload​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeFileUploadUpdateInput)

  Customer communication file.

* customer​Email​Address

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Customer email address.

* customer​First​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Customer first name.

* customer​Last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Customer last name.

* refund​Policy​Disclosure

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Refund policy disclosure.

* refund​Policy​File

  [Shopify​Payments​Dispute​File​Upload​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeFileUploadUpdateInput)

  Refund policy file.

* refund​Refusal​Explanation

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Refund refusal explanation.

* service​Documentation​File

  [Shopify​Payments​Dispute​File​Upload​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeFileUploadUpdateInput)

  Service documentation file.

* shipping​Address

  [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  The shipping address associated with the dispute evidence.

* shipping​Documentation​File

  [Shopify​Payments​Dispute​File​Upload​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeFileUploadUpdateInput)

  Shipping documentation file.

* submit​Evidence

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to submit the evidence.

* uncategorized​File

  [Shopify​Payments​Dispute​File​Upload​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeFileUploadUpdateInput)

  Uncategorized file.

* uncategorized​Text

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Uncategorized text.

***

## Map

No referencing types
