---
title: EventSubjectType - GraphQL Admin
description: The type of the resource that generated the event.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSubjectType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSubjectType.md'
---

# Event​Subject​Type

enum

The type of the resource that generated the event.

## Valid values

* ARTICLE

  A Article resource generated the event.

* BLOG

  A Blog resource generated the event.

* COLLECTION

  A Collection resource generated the event.

* COMMENT

  A Comment resource generated the event.

* COMPANY

  A Company resource generated the event.

* COMPANY\_​LOCATION

  A CompanyLocation resource generated the event.

* CUSTOMER

  A Customer resource generated the event.

* DISCOUNT\_​AUTOMATIC\_​BXGY

  A DiscountAutomaticBxgy resource generated the event.

* DISCOUNT\_​AUTOMATIC\_​NODE

  A DiscountAutomaticNode resource generated the event.

* DISCOUNT\_​CODE\_​NODE

  A DiscountCodeNode resource generated the event.

* DISCOUNT\_​NODE

  A DiscountNode resource generated the event.

* DRAFT\_​ORDER

  A DraftOrder resource generated the event.

* INVENTORY\_​TRANSFER

  A InventoryTransfer resource generated the event.

* ORDER

  A Order resource generated the event.

* PAGE

  A Page resource generated the event.

* PRICE\_​RULE

  A PriceRule resource generated the event.

* PRODUCT

  A Product resource generated the event.

* PRODUCT\_​VARIANT

  A ProductVariant resource generated the event.

* UNKNOWN

  Subject type is not available. This usually means that the subject isn't available in the current version of the API, using a newer API version may resolve this.

***

## Fields

* [Basic​Event.subjectType](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.subjectType)

  OBJECT

  Basic events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the addition of a product.

  ### General events

  | Action | Description |
  | - | - |
  | `create` | The item was created. |
  | `destroy` | The item was destroyed. |
  | `published` | The item was published. |
  | `unpublished` | The item was unpublished. |
  | `update` | The item was updated. |

  ### Order events

  Order events can be divided into the following categories:

  * *Authorization*: Includes whether the authorization succeeded, failed, or is pending.
  * *Capture*: Includes whether the capture succeeded, failed, or is pending.
  * *Email*: Includes confirmation or cancellation of the order, as well as shipping.
  * *Fulfillment*: Includes whether the fulfillment succeeded, failed, or is pending. Also includes cancellation, restocking, and fulfillment updates.
  * *Order*: Includess the placement, confirmation, closing, re-opening, and cancellation of the order.
  * *Refund*: Includes whether the refund succeeded, failed, or is pending.
  * *Sale*: Includes whether the sale succeeded, failed, or is pending.
  * *Void*: Includes whether the void succeeded, failed, or is pending.

  | Action | Message | Description |
  | - | - | - |
  | `authorization_failure` | The customer, unsuccessfully, tried to authorize: `{money_amount}`. | Authorization failed. The funds cannot be captured. |
  | `authorization_pending` | Authorization for `{money_amount}` is pending. | Authorization pending. |
  | `authorization_success` | The customer successfully authorized us to capture: `{money_amount}`. | Authorization was successful and the funds are available for capture. |
  | `cancelled` | Order was cancelled by `{shop_staff_name}`. | The order was cancelled. |
  | `capture_failure` | We failed to capture: `{money_amount}`. | The capture failed. The funds cannot be transferred to the shop. |
  | `capture_pending` | Capture for `{money_amount}` is pending. | The capture is in process. The funds are not yet available to the shop. |
  | `capture_success` | We successfully captured: `{money_amount}` | The capture was successful and the funds are now available to the shop. |
  | `closed` | Order was closed. | The order was closed. |
  | `confirmed` | Received a new order: `{order_number}` by `{customer_name}`. | The order was confirmed. |
  | `fulfillment_cancelled` | We cancelled `{number_of_line_items}` from being fulfilled by the third party fulfillment service. | Fulfillment for one or more of the line\_items failed. |
  | `fulfillment_pending` | We submitted `{number_of_line_items}` to the third party service. | One or more of the line\_items has been assigned to a third party service for fulfillment. |
  | `fulfillment_success` | We successfully fulfilled line\_items. | Fulfillment was successful for one or more line\_items. |
  | `mail_sent` | `{message_type}` email was sent to the customer. | An email was sent to the customer. |
  | `placed` | Order was placed. | An order was placed by the customer. |
  | `re_opened` | Order was re-opened. | An order was re-opened. |
  | `refund_failure` | We failed to refund `{money_amount}`. | The refund failed. The funds are still with the shop. |
  | `refund_pending` | Refund of `{money_amount}` is still pending. | The refund is in process. The funds are still with shop. |
  | `refund_success` | We successfully refunded `{money_amount}`. | The refund was successful. The funds have been transferred to the customer. |
  | `restock_line_items` | We restocked `{number_of_line_items}`. | One or more of the order's line items have been restocked. |
  | `sale_failure` | The customer failed to pay `{money_amount}`. | The sale failed. The funds are not available to the shop. |
  | `sale_pending` | The `{money_amount}` is pending. | The sale is in process. The funds are not yet available to the shop. |
  | `sale_success` | We successfully captured `{money_amount}`. | The sale was successful. The funds are now with the shop. |
  | `update` | `{order_number}` was updated. | The order was updated. |
  | `void_failure` | We failed to void the authorization. | Voiding the authorization failed. The authorization is still valid. |
  | `void_pending` | Authorization void is pending. | Voiding the authorization is in process. The authorization is still valid. |
  | `void_success` | We successfully voided the authorization. | Voiding the authorization was successful. The authorization is no longer valid. |

***

## Map

### Fields with this enum

* <-|[Basic​Event.subjectType](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.subjectType)
