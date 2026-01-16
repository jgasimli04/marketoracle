---
title: Event - GraphQL Admin
description: >-
  Events chronicle resource activities such as the creation of an article, the
  fulfillment of an order, or the

  addition of a product.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event.md'
---

# Event

interface

Events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the addition of a product.

## Fields

* action

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The action that occured.

* app​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the app that created the event.

* attribute​To​App

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event was created by an app.

* attribute​To​User

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event was caused by an admin user.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the event was created.

* critical​Alert

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event is critical.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* message

  [Formatted​String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

  non-null

  Human readable text that describes the event.

***

## Types implemented in

* [Basic​Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent)

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

  * action

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The action that occured.

  * additional​Content

    [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

    Provides additional content for collapsible timeline events.

  * additional​Data

    [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

    Provides additional data for event consumers.

  * app​Title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the app that created the event.

  * arguments

    [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

    Refers to a certain event and its resources.

  * attribute​To​App

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the event was created by an app.

  * attribute​To​User

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the event was caused by an admin user.

  * author

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The entity which performed the action that generated the event.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the event was created.

  * critical​Alert

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the event is critical.

  * has​Additional​Content

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether this event has additional content.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * message

    [Formatted​String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

    non-null

    Human readable text that describes the event.

  * secondary​Message

    [Formatted​String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

    Human readable text that supports the event message.

  * subject

    [Has​Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

    The resource that generated the event. To see a list of possible types, refer to [HasEvents](https://shopify.dev/docs/api/admin-graphql/unstable/interfaces/HasEvents#implemented-in).

  * subject​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The ID of the resource that generated the event.

  * subject​Type

    [Event​Subject​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSubjectType)

    non-null

    The type of the resource that generated the event.

* [Comment​Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent)

  OBJECT

  A comment that staff members add to the timeline of [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer), [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company), [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation), or [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) objects. Staff use comments to document internal notes, communicate with team members, and track important information about these types.

  The comment includes information like the [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) who authored it, when it was created, and whether it's editable or deletable. Comments can have file attachments and reference related objects like [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects through embeds.

  * action

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The action that occured.

  * app​Title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the app that created the event.

  * attachments

    [\[Comment​Event​Attachment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEventAttachment)

    non-null

    The attachments associated with the comment event.

  * attribute​To​App

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the event was created by an app.

  * attribute​To​User

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the event was caused by an admin user.

  * author

    [Staff​Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

    non-null

    The name of the user that authored the comment event.

  * can​Delete

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the comment event can be deleted. If true, then the comment event can be deleted.

  * can​Edit

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the comment event can be edited. If true, then the comment event can be edited.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the event was created.

  * critical​Alert

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the event is critical.

  * edited

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the comment event has been edited. If true, then the comment event has been edited.

  * embed

    [Comment​Event​Embed](https://shopify.dev/docs/api/admin-graphql/latest/unions/CommentEventEmbed)

    The object reference associated with the comment event. For example, a product or discount).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * message

    [Formatted​String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

    non-null

    Human readable text that describes the event.

  * raw​Message

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The raw body of the comment event.

  * subject

    [Comment​Event​Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

    The parent subject to which the comment event belongs.

***

##### Variables

```json
{
	"action": "",
	"appTitle": "",
	"attributeToApp": "",
	"attributeToUser": "",
	"createdAt": "",
	"criticalAlert": "",
	"id": "",
	"message": ""
}
```

##### Schema

```graphql
interface Event {
  action: String!
  appTitle: String
  attributeToApp: Boolean!
  attributeToUser: Boolean!
  createdAt: DateTime!
  criticalAlert: Boolean!
  id: ID!
  message: FormattedString!
}
```
