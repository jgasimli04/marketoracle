---
title: WebhookSubscriptionTopic - GraphQL Admin
description: >-
  The supported topics for webhook subscriptions. You can use webhook
  subscriptions to receive

  notifications about particular events in a shop.


  You create [mandatory
  webhooks](https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks#mandatory-compliance-webhooks)
  either via the

  [Partner
  Dashboard](https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks#subscribe-to-privacy-webhooks)

  or by updating the [app configuration
  file](https://shopify.dev/apps/tools/cli/configuration#app-configuration-file-example).


  > Tip: 

  >To configure your subscription using the app configuration file, refer to the
  [full list of topic
  names](https://shopify.dev/docs/api/webhooks?reference=graphql).
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic.md
---

# Webhook​Subscription​Topic

enum

The supported topics for webhook subscriptions. You can use webhook subscriptions to receive notifications about particular events in a shop.

You create [mandatory webhooks](https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks#mandatory-compliance-webhooks) either via the [Partner Dashboard](https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks#subscribe-to-privacy-webhooks) or by updating the [app configuration file](https://shopify.dev/apps/tools/cli/configuration#app-configuration-file-example).

***

Tip

To configure your subscription using the app configuration file, refer to the [full list of topic names](https://shopify.dev/docs/api/webhooks?reference=graphql).

***

## Valid values

* APP\_​PURCHASES\_​ONE\_​TIME\_​UPDATE

  The webhook topic for `app_purchases_one_time/update` events. Occurs whenever a one-time app charge is updated.

* APP\_​SCOPES\_​UPDATE

  The webhook topic for `app/scopes_update` events. Occurs whenever the access scopes of any installation are modified. Allows apps to keep track of the granted access scopes of their installations.

* APP\_​SUBSCRIPTIONS\_​APPROACHING\_​CAPPED\_​AMOUNT

  The webhook topic for `app_subscriptions/approaching_capped_amount` events. Occurs when the balance used on an app subscription crosses 90% of the capped amount.

* APP\_​SUBSCRIPTIONS\_​UPDATE

  The webhook topic for `app_subscriptions/update` events. Occurs whenever an app subscription is updated.

* APP\_​UNINSTALLED

  The webhook topic for `app/uninstalled` events. Occurs whenever a shop has uninstalled the app.

* AUDIT\_​EVENTS\_​ADMIN\_​API\_​ACTIVITY

  The webhook topic for `audit_events/admin_api_activity` events. Triggers for each auditable Admin API request. This topic is limited to one active subscription per Plus store and requires the use of Google Cloud Pub/Sub or AWS EventBridge. Requires the `read_audit_events` scope.

* BULK\_​OPERATIONS\_​FINISH

  The webhook topic for `bulk_operations/finish` events. Notifies when a Bulk Operation finishes.

* CARTS\_​CREATE

  The webhook topic for `carts/create` events. Occurs when a cart is created in the online store. Other types of carts aren't supported. For example, the webhook doesn't support carts that are created in a custom storefront. Requires the `read_orders` scope.

* CARTS\_​UPDATE

  The webhook topic for `carts/update` events. Occurs when a cart is updated in the online store. Other types of carts aren't supported. For example, the webhook doesn't support carts that are updated in a custom storefront. Requires the `read_orders` scope.

* CHANNELS\_​DELETE

  The webhook topic for `channels/delete` events. Occurs whenever a channel is deleted. Requires the `read_publications` scope.

* CHECKOUTS\_​CREATE

  The webhook topic for `checkouts/create` events. Occurs whenever a checkout is created. Requires the `read_orders` scope.

* CHECKOUTS\_​DELETE

  The webhook topic for `checkouts/delete` events. Occurs whenever a checkout is deleted. Requires the `read_orders` scope.

* CHECKOUTS\_​UPDATE

  The webhook topic for `checkouts/update` events. Occurs whenever a checkout is updated. Requires the `read_orders` scope.

* COLLECTION\_​LISTINGS\_​ADD

  The webhook topic for `collection_listings/add` events. Occurs whenever a collection listing is added. Requires the `read_product_listings` scope.

* COLLECTION\_​LISTINGS\_​REMOVE

  The webhook topic for `collection_listings/remove` events. Occurs whenever a collection listing is removed. Requires the `read_product_listings` scope.

* COLLECTION\_​LISTINGS\_​UPDATE

  The webhook topic for `collection_listings/update` events. Occurs whenever a collection listing is updated. Requires the `read_product_listings` scope.

* COLLECTION\_​PUBLICATIONS\_​CREATE

  The webhook topic for `collection_publications/create` events. Occurs whenever a collection publication listing is created. Requires the `read_publications` scope.

* COLLECTION\_​PUBLICATIONS\_​DELETE

  The webhook topic for `collection_publications/delete` events. Occurs whenever a collection publication listing is deleted. Requires the `read_publications` scope.

* COLLECTION\_​PUBLICATIONS\_​UPDATE

  The webhook topic for `collection_publications/update` events. Occurs whenever a collection publication listing is updated. Requires the `read_publications` scope.

* COLLECTIONS\_​CREATE

  The webhook topic for `collections/create` events. Occurs whenever a collection is created. Requires the `read_products` scope.

* COLLECTIONS\_​DELETE

  The webhook topic for `collections/delete` events. Occurs whenever a collection is deleted. Requires the `read_products` scope.

* COLLECTIONS\_​UPDATE

  The webhook topic for `collections/update` events. Occurs whenever a collection is updated, including whenever products are added or removed from the collection. Occurs once if multiple products are added or removed from a collection at the same time. Requires the `read_products` scope.

* COMPANIES\_​CREATE

  The webhook topic for `companies/create` events. Occurs whenever a company is created. Requires at least one of the following scopes: read\_customers, read\_companies.

* COMPANIES\_​DELETE

  The webhook topic for `companies/delete` events. Occurs whenever a company is deleted. Requires at least one of the following scopes: read\_customers, read\_companies.

* COMPANIES\_​UPDATE

  The webhook topic for `companies/update` events. Occurs whenever a company is updated. Requires at least one of the following scopes: read\_customers, read\_companies.

* COMPANY\_​CONTACT\_​ROLES\_​ASSIGN

  The webhook topic for `company_contact_roles/assign` events. Occurs whenever a role is assigned to a contact at a location. Requires at least one of the following scopes: read\_customers, read\_companies.

* COMPANY\_​CONTACT\_​ROLES\_​REVOKE

  The webhook topic for `company_contact_roles/revoke` events. Occurs whenever a role is revoked from a contact at a location. Requires at least one of the following scopes: read\_customers, read\_companies.

* COMPANY\_​CONTACTS\_​CREATE

  The webhook topic for `company_contacts/create` events. Occurs whenever a company contact is created. Requires at least one of the following scopes: read\_customers, read\_companies.

* COMPANY\_​CONTACTS\_​DELETE

  The webhook topic for `company_contacts/delete` events. Occurs whenever a company contact is deleted. Requires at least one of the following scopes: read\_customers, read\_companies.

* COMPANY\_​CONTACTS\_​UPDATE

  The webhook topic for `company_contacts/update` events. Occurs whenever a company contact is updated. Requires at least one of the following scopes: read\_customers, read\_companies.

* COMPANY\_​LOCATIONS\_​CREATE

  The webhook topic for `company_locations/create` events. Occurs whenever a company location is created. Requires at least one of the following scopes: read\_customers, read\_companies.

* COMPANY\_​LOCATIONS\_​DELETE

  The webhook topic for `company_locations/delete` events. Occurs whenever a company location is deleted. Requires at least one of the following scopes: read\_customers, read\_companies.

* COMPANY\_​LOCATIONS\_​UPDATE

  The webhook topic for `company_locations/update` events. Occurs whenever a company location is updated. Requires at least one of the following scopes: read\_customers, read\_companies.

* CUSTOMER\_​ACCOUNT\_​SETTINGS\_​UPDATE

  The webhook topic for `customer_account_settings/update` events. Triggers when merchants change customer account setting.

* CUSTOMER\_​GROUPS\_​CREATE

  The webhook topic for `customer_groups/create` events. Occurs whenever a customer saved search is created. Requires the `read_customers` scope.

* CUSTOMER\_​GROUPS\_​DELETE

  The webhook topic for `customer_groups/delete` events. Occurs whenever a customer saved search is deleted. Requires the `read_customers` scope.

* CUSTOMER\_​GROUPS\_​UPDATE

  The webhook topic for `customer_groups/update` events. Occurs whenever a customer saved search is updated. Requires the `read_customers` scope.

* CUSTOMER\_​JOINED\_​SEGMENT

  The webhook topic for `customer.joined_segment` events. Triggers when a customer joins a segment. Requires the `read_customers` scope.

* CUSTOMER\_​LEFT\_​SEGMENT

  The webhook topic for `customer.left_segment` events. Triggers when a customer leaves a segment. Requires the `read_customers` scope.

* CUSTOMER\_​PAYMENT\_​METHODS\_​CREATE

  The webhook topic for `customer_payment_methods/create` events. Occurs whenever a customer payment method is created. Requires the `read_customer_payment_methods` scope.

* CUSTOMER\_​PAYMENT\_​METHODS\_​REVOKE

  The webhook topic for `customer_payment_methods/revoke` events. Occurs whenever a customer payment method is revoked. Requires the `read_customer_payment_methods` scope.

* CUSTOMER\_​PAYMENT\_​METHODS\_​UPDATE

  The webhook topic for `customer_payment_methods/update` events. Occurs whenever a customer payment method is updated. Requires the `read_customer_payment_methods` scope.

* CUSTOMER\_​TAGS\_​ADDED

  The webhook topic for `customer.tags_added` events. Triggers when tags are added to a customer. Requires the `read_customers` scope.

* CUSTOMER\_​TAGS\_​REMOVED

  The webhook topic for `customer.tags_removed` events. Triggers when tags are removed from a customer. Requires the `read_customers` scope.

* CUSTOMERS\_​CREATE

  The webhook topic for `customers/create` events. Occurs whenever a customer is created. Requires the `read_customers` scope.

* CUSTOMERS\_​DELETE

  The webhook topic for `customers/delete` events. Occurs whenever a customer is deleted. Requires the `read_customers` scope.

* CUSTOMERS\_​DISABLE

  The webhook topic for `customers/disable` events. Occurs whenever a customer account is disabled. Requires the `read_customers` scope.

* CUSTOMERS\_​EMAIL\_​MARKETING\_​CONSENT\_​UPDATE

  The webhook topic for `customers_email_marketing_consent/update` events. Occurs whenever a customer's email marketing consent is updated. Requires the `read_customers` scope.

* CUSTOMERS\_​ENABLE

  The webhook topic for `customers/enable` events. Occurs whenever a customer account is enabled. Requires the `read_customers` scope.

* CUSTOMERS\_​MARKETING\_​CONSENT\_​UPDATE

  The webhook topic for `customers_marketing_consent/update` events. Occurs whenever a customer's SMS marketing consent is updated. Requires the `read_customers` scope.

* CUSTOMERS\_​MERGE

  The webhook topic for `customers/merge` events. Triggers when two customers are merged Requires the `read_customer_merge` scope.

* CUSTOMERS\_​PURCHASING\_​SUMMARY

  The webhook topic for `customers/purchasing_summary` events. Occurs when a customer sales history change. Requires the `read_customers` scope.

* CUSTOMERS\_​UPDATE

  The webhook topic for `customers/update` events. Occurs whenever a customer is updated. Requires the `read_customers` scope.

* DELIVERY\_​PROMISE\_​SETTINGS\_​UPDATE

  The webhook topic for `delivery_promise_settings/update` events. Occurs when a promise setting is updated. Requires the `read_shipping` scope.

* DISCOUNTS\_​CREATE

  The webhook topic for `discounts/create` events. Occurs whenever a discount is created. Requires the `read_discounts` scope.

* DISCOUNTS\_​DELETE

  The webhook topic for `discounts/delete` events. Occurs whenever a discount is deleted. Requires the `read_discounts` scope.

* DISCOUNTS\_​REDEEMCODE\_​ADDED

  The webhook topic for `discounts/redeemcode_added` events. Occurs whenever a redeem code is added to a code discount. Requires the `read_discounts` scope.

* DISCOUNTS\_​REDEEMCODE\_​REMOVED

  The webhook topic for `discounts/redeemcode_removed` events. Occurs whenever a redeem code on a code discount is deleted. Requires the `read_discounts` scope.

* DISCOUNTS\_​UPDATE

  The webhook topic for `discounts/update` events. Occurs whenever a discount is updated. Requires the `read_discounts` scope.

* DISPUTES\_​CREATE

  The webhook topic for `disputes/create` events. Occurs whenever a dispute is created. Requires the `read_shopify_payments_disputes` scope.

* DISPUTES\_​UPDATE

  The webhook topic for `disputes/update` events. Occurs whenever a dispute is updated. Requires the `read_shopify_payments_disputes` scope.

* DOMAINS\_​CREATE

  The webhook topic for `domains/create` events. Occurs whenever a domain is created.

* DOMAINS\_​DESTROY

  The webhook topic for `domains/destroy` events. Occurs whenever a domain is destroyed.

* DOMAINS\_​UPDATE

  The webhook topic for `domains/update` events. Occurs whenever a domain is updated.

* DRAFT\_​ORDERS\_​CREATE

  The webhook topic for `draft_orders/create` events. Occurs whenever a draft order is created. Requires the `read_draft_orders` scope.

* DRAFT\_​ORDERS\_​DELETE

  The webhook topic for `draft_orders/delete` events. Occurs whenever a draft order is deleted. Requires the `read_draft_orders` scope.

* DRAFT\_​ORDERS\_​UPDATE

  The webhook topic for `draft_orders/update` events. Occurs whenever a draft order is updated. Requires the `read_draft_orders` scope.

* FINANCE\_​APP\_​STAFF\_​MEMBER\_​DELETE

  The webhook topic for `finance_app_staff_member/delete` events. Triggers when a staff with access to all or some finance app has been removed. Requires the `read_financial_kyc_information` scope.

* FINANCE\_​APP\_​STAFF\_​MEMBER\_​GRANT

  The webhook topic for `finance_app_staff_member/grant` events. Triggers when a staff is granted access to all or some finance app. Requires the `read_financial_kyc_information` scope.

* FINANCE\_​APP\_​STAFF\_​MEMBER\_​REVOKE

  The webhook topic for `finance_app_staff_member/revoke` events. Triggers when a staff's access to all or some finance app has been revoked. Requires the `read_financial_kyc_information` scope.

* FINANCE\_​APP\_​STAFF\_​MEMBER\_​UPDATE

  The webhook topic for `finance_app_staff_member/update` events. Triggers when a staff's information has been updated. Requires the `read_financial_kyc_information` scope.

* FINANCE\_​KYC\_​INFORMATION\_​UPDATE

  The webhook topic for `finance_kyc_information/update` events. Occurs whenever shop's finance KYC information was updated Requires the `read_financial_kyc_information` scope.

* FULFILLMENT\_​EVENTS\_​CREATE

  The webhook topic for `fulfillment_events/create` events. Occurs whenever a fulfillment event is created. Requires the `read_fulfillments` scope.

* FULFILLMENT\_​EVENTS\_​DELETE

  The webhook topic for `fulfillment_events/delete` events. Occurs whenever a fulfillment event is deleted. Requires the `read_fulfillments` scope.

* FULFILLMENT\_​HOLDS\_​ADDED

  The webhook topic for `fulfillment_holds/added` events. Occurs each time that a hold is added to a fulfillment order.

  For cases where multiple holds are applied to a fulfillment order, this webhook will trigger after each hold is applied. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​HOLDS\_​RELEASED

  The webhook topic for `fulfillment_holds/released` events. Occurs each time that a hold is released from a fulfillment order. For cases where multiple holds are released from a fulfillment order a the same time, this webhook will trigger for each released hold. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​CANCELLATION\_​REQUEST\_​ACCEPTED

  The webhook topic for `fulfillment_orders/cancellation_request_accepted` events. Occurs when a 3PL accepts a fulfillment cancellation request, received from a merchant. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​CANCELLATION\_​REQUEST\_​REJECTED

  The webhook topic for `fulfillment_orders/cancellation_request_rejected` events. Occurs when a 3PL rejects a fulfillment cancellation request, received from a merchant. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​CANCELLATION\_​REQUEST\_​SUBMITTED

  The webhook topic for `fulfillment_orders/cancellation_request_submitted` events. Occurs when a merchant requests a fulfillment request to be cancelled after that request was approved by a 3PL. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​CANCELLED

  The webhook topic for `fulfillment_orders/cancelled` events. Occurs when a fulfillment order is cancelled. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​FULFILLMENT\_​REQUEST\_​ACCEPTED

  The webhook topic for `fulfillment_orders/fulfillment_request_accepted` events. Occurs when a fulfillment service accepts a request to fulfill a fulfillment order. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​FULFILLMENT\_​REQUEST\_​REJECTED

  The webhook topic for `fulfillment_orders/fulfillment_request_rejected` events. Occurs when a 3PL rejects a fulfillment request that was sent by a merchant. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​FULFILLMENT\_​REQUEST\_​SUBMITTED

  The webhook topic for `fulfillment_orders/fulfillment_request_submitted` events. Occurs when a merchant submits a fulfillment request to a 3PL. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​FULFILLMENT\_​SERVICE\_​FAILED\_​TO\_​COMPLETE

  The webhook topic for `fulfillment_orders/fulfillment_service_failed_to_complete` events. Occurs when a fulfillment service intends to close an in\_progress fulfillment order. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​HOLD\_​RELEASED

  The webhook topic for `fulfillment_orders/hold_released` events. Occurs when a fulfillment order is released and is no longer on hold.

  If a fulfillment order has multiple holds then this webhook will only be triggered once when the last hold is released and the status of the fulfillment order is no longer `ON_HOLD`. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​LINE\_​ITEMS\_​PREPARED\_​FOR\_​LOCAL\_​DELIVERY

  The webhook topic for `fulfillment_orders/line_items_prepared_for_local_delivery` events. Occurs whenever a fulfillment order's line items are prepared for local delivery. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​LINE\_​ITEMS\_​PREPARED\_​FOR\_​PICKUP

  The webhook topic for `fulfillment_orders/line_items_prepared_for_pickup` events. Triggers when one or more of the line items for a fulfillment order are prepared for pickup Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​MERGED

  The webhook topic for `fulfillment_orders/merged` events. Occurs when multiple fulfillment orders are merged into a single fulfillment order. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​MOVED

  The webhook topic for `fulfillment_orders/moved` events. Occurs whenever the location which is assigned to fulfill one or more fulfillment order line items is changed.

  * `original_fulfillment_order` - The final state of the original fulfillment order.
  * `moved_fulfillment_order` - The fulfillment order which now contains the re-assigned line items.
  * `source_location` - The original location which was assigned to fulfill the line items (available as of the `2023-04` API version).
  * `destination_location_id` - The ID of the location which is now responsible for fulfilling the line items.

  **Note:** The [assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-fulfillmentorder-assignedlocation) of the `original_fulfillment_order` might be changed by the move operation. If you need to determine the originally assigned location, then you should refer to the `source_location`.

  [Learn more about moving line items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMove). Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​ORDER\_​ROUTING\_​COMPLETE

  The webhook topic for `fulfillment_orders/order_routing_complete` events. Occurs when an order has finished being routed and it's fulfillment orders assigned to a fulfillment service's location. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_buyer\_membership\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​PLACED\_​ON\_​HOLD

  The webhook topic for `fulfillment_orders/placed_on_hold` events. Occurs when a fulfillment order transitions to the `ON_HOLD` status

  For cases where multiple holds are applied to a fulfillment order, this webhook will only trigger once when the first hold is applied and the fulfillment order status changes to `ON_HOLD`. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​RESCHEDULED

  The webhook topic for `fulfillment_orders/rescheduled` events. Triggers when a fulfillment order is rescheduled.

  Fulfillment orders may be merged if they have the same `fulfillAt` datetime. If the fulfillment order is merged then the resulting fulfillment order will be indicated in the webhook body. Otherwise it will be the original fulfillment order with an updated `fulfill_at` datetime. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​SCHEDULED\_​FULFILLMENT\_​ORDER\_​READY

  The webhook topic for `fulfillment_orders/scheduled_fulfillment_order_ready` events. Occurs whenever a fulfillment order which was scheduled becomes due. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders, read\_marketplace\_fulfillment\_orders.

* FULFILLMENT\_​ORDERS\_​SPLIT

  The webhook topic for `fulfillment_orders/split` events. Occurs when a fulfillment order is split into multiple fulfillment orders. Requires at least one of the following scopes: read\_merchant\_managed\_fulfillment\_orders, read\_assigned\_fulfillment\_orders, read\_third\_party\_fulfillment\_orders.

* FULFILLMENTS\_​CREATE

  The webhook topic for `fulfillments/create` events. Occurs whenever a fulfillment is created. Requires at least one of the following scopes: read\_fulfillments, read\_marketplace\_orders.

* FULFILLMENTS\_​UPDATE

  The webhook topic for `fulfillments/update` events. Occurs whenever a fulfillment is updated. Requires at least one of the following scopes: read\_fulfillments, read\_marketplace\_orders.

* INVENTORY\_​ITEMS\_​CREATE

  The webhook topic for `inventory_items/create` events. Occurs whenever an inventory item is created. Requires at least one of the following scopes: read\_inventory, read\_products.

* INVENTORY\_​ITEMS\_​DELETE

  The webhook topic for `inventory_items/delete` events. Occurs whenever an inventory item is deleted. Requires at least one of the following scopes: read\_inventory, read\_products.

* INVENTORY\_​ITEMS\_​UPDATE

  The webhook topic for `inventory_items/update` events. Occurs whenever an inventory item is updated. Requires at least one of the following scopes: read\_inventory, read\_products.

* INVENTORY\_​LEVELS\_​CONNECT

  The webhook topic for `inventory_levels/connect` events. Occurs whenever an inventory level is connected. Requires the `read_inventory` scope.

* INVENTORY\_​LEVELS\_​DISCONNECT

  The webhook topic for `inventory_levels/disconnect` events. Occurs whenever an inventory level is disconnected. Requires the `read_inventory` scope.

* INVENTORY\_​LEVELS\_​UPDATE

  The webhook topic for `inventory_levels/update` events. Occurs whenever an inventory level is updated. Requires the `read_inventory` scope.

* INVENTORY\_​SHIPMENTS\_​ADD\_​ITEMS

  The webhook topic for `inventory_shipments/add_items` events. Occurs whenever items are added to a shipment. Requires the `read_inventory_shipments` scope.

* INVENTORY\_​SHIPMENTS\_​CREATE

  The webhook topic for `inventory_shipments/create` events. Triggers when a shipment is created. Requires the `read_inventory_shipments` scope.

* INVENTORY\_​SHIPMENTS\_​DELETE

  The webhook topic for `inventory_shipments/delete` events. Triggers when a shipment is deleted. Requires the `read_inventory_shipments` scope.

* INVENTORY\_​SHIPMENTS\_​MARK\_​IN\_​TRANSIT

  The webhook topic for `inventory_shipments/mark_in_transit` events. Triggers when a shipment is marked as in transit. Requires the `read_inventory_shipments` scope.

* INVENTORY\_​SHIPMENTS\_​RECEIVE\_​ITEMS

  The webhook topic for `inventory_shipments/receive_items` events. Triggers when items on a shipment are received. Requires the `read_inventory_shipments_received_items` scope.

* INVENTORY\_​SHIPMENTS\_​REMOVE\_​ITEMS

  The webhook topic for `inventory_shipments/remove_items` events. Occurs whenever items are removed from a shipment. Requires the `read_inventory_shipments` scope.

* INVENTORY\_​SHIPMENTS\_​UPDATE\_​ITEM\_​QUANTITIES

  The webhook topic for `inventory_shipments/update_item_quantities` events. Occurs whenever quantities change on a shipment. Requires the `read_inventory_shipments` scope.

* INVENTORY\_​SHIPMENTS\_​UPDATE\_​TRACKING

  The webhook topic for `inventory_shipments/update_tracking` events. Triggers when tracking info on a shipment is updated. Requires the `read_inventory_shipments` scope.

* INVENTORY\_​TRANSFERS\_​ADD\_​ITEMS

  The webhook topic for `inventory_transfers/add_items` events. Occurs any time items are added to a transfer. Requires the `read_inventory_transfers` scope.

* INVENTORY\_​TRANSFERS\_​CANCEL

  The webhook topic for `inventory_transfers/cancel` events. Triggers when a transfer is canceled. Requires the `read_inventory_transfers` scope.

* INVENTORY\_​TRANSFERS\_​COMPLETE

  The webhook topic for `inventory_transfers/complete` events. Triggers when a transfer is completed. Requires the `read_inventory_transfers` scope.

* INVENTORY\_​TRANSFERS\_​READY\_​TO\_​SHIP

  The webhook topic for `inventory_transfers/ready_to_ship` events. Triggers when a transfer is marked as ready to ship. Requires the `read_inventory_transfers` scope.

* INVENTORY\_​TRANSFERS\_​REMOVE\_​ITEMS

  The webhook topic for `inventory_transfers/remove_items` events. Occurs any time items are removed from a transfer. Requires the `read_inventory_transfers` scope.

* INVENTORY\_​TRANSFERS\_​UPDATE\_​ITEM\_​QUANTITIES

  The webhook topic for `inventory_transfers/update_item_quantities` events. Occurs whenever the quantity of transfer line items changes. Requires the `read_inventory_transfers` scope.

* LOCALES\_​CREATE

  The webhook topic for `locales/create` events. Occurs whenever a shop locale is created Requires the `read_locales` scope.

* LOCALES\_​DESTROY

  The webhook topic for `locales/destroy` events. Occurs whenever a shop locale is destroyed Requires the `read_locales` scope.

* LOCALES\_​UPDATE

  The webhook topic for `locales/update` events. Occurs whenever a shop locale is updated, such as published or unpublished Requires the `read_locales` scope.

* LOCATIONS\_​ACTIVATE

  The webhook topic for `locations/activate` events. Occurs whenever a deactivated location is re-activated. Requires the `read_locations` scope.

* LOCATIONS\_​CREATE

  The webhook topic for `locations/create` events. Occurs whenever a location is created. Requires the `read_locations` scope.

* LOCATIONS\_​DEACTIVATE

  The webhook topic for `locations/deactivate` events. Occurs whenever a location is deactivated. Requires the `read_locations` scope.

* LOCATIONS\_​DELETE

  The webhook topic for `locations/delete` events. Occurs whenever a location is deleted. Requires the `read_locations` scope.

* LOCATIONS\_​UPDATE

  The webhook topic for `locations/update` events. Occurs whenever a location is updated. Requires the `read_locations` scope.

* MARKETS\_​BACKUP\_​REGION\_​UPDATE

  The webhook topic for `markets_backup_region/update` events. Occurs when a backup region is updated. Requires the `read_markets` scope.

* MARKETS\_​CREATE

  The webhook topic for `markets/create` events. Occurs when a new market is created. Requires the `read_markets` scope.

* MARKETS\_​DELETE

  The webhook topic for `markets/delete` events. Occurs when a market is deleted. Requires the `read_markets` scope.

* MARKETS\_​UPDATE

  The webhook topic for `markets/update` events. Occurs when a market is updated. Requires the `read_markets` scope.

* METAFIELD\_​DEFINITIONS\_​CREATE

  The webhook topic for `metafield_definitions/create` events. Occurs when a metafield definition is created. Requires the `read_content` scope.

* METAFIELD\_​DEFINITIONS\_​DELETE

  The webhook topic for `metafield_definitions/delete` events. Occurs when a metafield definition is deleted. Requires the `read_content` scope.

* METAFIELD\_​DEFINITIONS\_​UPDATE

  The webhook topic for `metafield_definitions/update` events. Occurs when a metafield definition is updated. Requires the `read_content` scope.

* METAOBJECTS\_​CREATE

  The webhook topic for `metaobjects/create` events. Occurs when a metaobject is created. Requires the `read_metaobjects` scope.

* METAOBJECTS\_​DELETE

  The webhook topic for `metaobjects/delete` events. Occurs when a metaobject is deleted. Requires the `read_metaobjects` scope.

* METAOBJECTS\_​UPDATE

  The webhook topic for `metaobjects/update` events. Occurs when a metaobject is updated. Requires the `read_metaobjects` scope.

* ORDER\_​TRANSACTIONS\_​CREATE

  The webhook topic for `order_transactions/create` events. Occurs when a order transaction is created or when it's status is updated. Only occurs for transactions with a status of success, failure or error. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders, read\_buyer\_membership\_orders.

* ORDERS\_​CANCELLED

  The webhook topic for `orders/cancelled` events. Occurs whenever an order is cancelled. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders, read\_buyer\_membership\_orders.

* ORDERS\_​CREATE

  The webhook topic for `orders/create` events. Occurs whenever an order is created. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders.

* ORDERS\_​DELETE

  The webhook topic for `orders/delete` events. Occurs whenever an order is deleted. Requires the `read_orders` scope.

* ORDERS\_​EDITED

  The webhook topic for `orders/edited` events. Occurs whenever an order is edited. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders, read\_buyer\_membership\_orders.

* ORDERS\_​FULFILLED

  The webhook topic for `orders/fulfilled` events. Occurs whenever an order is fulfilled. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders.

* ORDERS\_​LINK\_​REQUESTED

  The webhook topic for `orders/link_requested` events. Occurs whenever a customer requests a new order link from the expired order status page. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders, read\_buyer\_membership\_orders.

* ORDERS\_​PAID

  The webhook topic for `orders/paid` events. Occurs whenever an order is paid. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders.

* ORDERS\_​PARTIALLY\_​FULFILLED

  The webhook topic for `orders/partially_fulfilled` events. Occurs whenever an order is partially fulfilled. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders.

* ORDERS\_​RISK\_​ASSESSMENT\_​CHANGED

  The webhook topic for `orders/risk_assessment_changed` events. Triggers when a new risk assessment is available on the order. This can be the first or a subsequent risk assessment. New risk assessments can be provided until the order is marked as fulfilled. Includes the risk level, risk facts, the provider and the order ID. When the provider is Shopify, that field is null. Does not include the risk recommendation for the order. The Shop ID is available in the headers. Requires the `read_orders` scope.

* ORDERS\_​SHOPIFY\_​PROTECT\_​ELIGIBILITY\_​CHANGED

  The webhook topic for `orders/shopify_protect_eligibility_changed` events. Occurs whenever Shopify Protect's eligibility for an order is changed. Requires the `read_orders` scope.

* ORDERS\_​UPDATED

  The webhook topic for `orders/updated` events. Occurs whenever an order is updated. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders, read\_buyer\_membership\_orders.

* PAYMENT\_​SCHEDULES\_​DUE

  The webhook topic for `payment_schedules/due` events. Occurs whenever payment schedules are due. Requires the `read_payment_terms` scope.

* PAYMENT\_​TERMS\_​CREATE

  The webhook topic for `payment_terms/create` events. Occurs whenever payment terms are created. Requires the `read_payment_terms` scope.

* PAYMENT\_​TERMS\_​DELETE

  The webhook topic for `payment_terms/delete` events. Occurs whenever payment terms are deleted. Requires the `read_payment_terms` scope.

* PAYMENT\_​TERMS\_​UPDATE

  The webhook topic for `payment_terms/update` events. Occurs whenever payment terms are updated. Requires the `read_payment_terms` scope.

* PRODUCT\_​FEEDS\_​CREATE

  The webhook topic for `product_feeds/create` events. Triggers when product feed is created Requires the `read_product_listings` scope.

* PRODUCT\_​FEEDS\_​FULL\_​SYNC

  The webhook topic for `product_feeds/full_sync` events. Triggers when a full sync for a product feed is performed Requires the `read_product_listings` scope.

* PRODUCT\_​FEEDS\_​FULL\_​SYNC\_​FINISH

  The webhook topic for `product_feeds/full_sync_finish` events. Triggers when a full sync finishes Requires the `read_product_listings` scope.

* PRODUCT\_​FEEDS\_​INCREMENTAL\_​SYNC

  The webhook topic for `product_feeds/incremental_sync` events. Occurs whenever a product publication is created, updated or removed for a product feed Requires the `read_product_listings` scope.

* PRODUCT\_​FEEDS\_​UPDATE

  The webhook topic for `product_feeds/update` events. Triggers when product feed is updated Requires the `read_product_listings` scope.

* PRODUCT\_​LISTINGS\_​ADD

  The webhook topic for `product_listings/add` events. Occurs whenever an active product is listed on a channel. Requires the `read_product_listings` scope.

* PRODUCT\_​LISTINGS\_​REMOVE

  The webhook topic for `product_listings/remove` events. Occurs whenever a product listing is removed from the channel. Requires the `read_product_listings` scope.

* PRODUCT\_​LISTINGS\_​UPDATE

  The webhook topic for `product_listings/update` events. Occurs whenever a product publication is updated. Requires the `read_product_listings` scope.

* PRODUCT\_​PUBLICATIONS\_​CREATE

  The webhook topic for `product_publications/create` events. Occurs whenever a product publication for an active product is created, or whenever an existing product publication is published on the app that is subscribed to this webhook topic. Note that a webhook is only emitted when there are publishing changes to the app that is subscribed to the topic (ie. no webhook will be emitted if there is a publishing change to the online store and the webhook subscriber of the topic is a third-party app). Requires the `read_publications` scope.

* PRODUCT\_​PUBLICATIONS\_​DELETE

  The webhook topic for `product_publications/delete` events. Occurs whenever a product publication for an active product is removed, or whenever an existing product publication is unpublished from the app that is subscribed to this webhook topic. Note that a webhook is only emitted when there are publishing changes to the app that is subscribed to the topic (ie. no webhook will be emitted if there is a publishing change to the online store and the webhook subscriber of the topic is a third-party app). Requires the `read_publications` scope.

* PRODUCT\_​PUBLICATIONS\_​UPDATE

  The webhook topic for `product_publications/update` events. Occurs whenever a product publication is updated from the app that is subscribed to this webhook topic. Note that a webhook is only emitted when there are publishing changes to the app that is subscribed to the topic (ie. no webhook will be emitted if there is a publishing change to the online store and the webhook subscriber of the topic is a third-party app). Requires the `read_publications` scope.

* PRODUCTS\_​CREATE

  The webhook topic for `products/create` events. Occurs whenever a product is created. Requires the `read_products` scope.

* PRODUCTS\_​DELETE

  The webhook topic for `products/delete` events. Occurs whenever a product is deleted. Requires the `read_products` scope.

* PRODUCTS\_​UPDATE

  The webhook topic for `products/update` events. Occurs whenever a product is updated, ordered, or variants are added, removed or updated. Requires the `read_products` scope.

* PROFILES\_​CREATE

  The webhook topic for `profiles/create` events. Occurs whenever a delivery profile is created Requires at least one of the following scopes: read\_shipping, read\_assigned\_shipping.

* PROFILES\_​DELETE

  The webhook topic for `profiles/delete` events. Occurs whenever a delivery profile is deleted Requires at least one of the following scopes: read\_shipping, read\_assigned\_shipping.

* PROFILES\_​UPDATE

  The webhook topic for `profiles/update` events. Occurs whenever a delivery profile is updated Requires at least one of the following scopes: read\_shipping, read\_assigned\_shipping.

* REFUNDS\_​CREATE

  The webhook topic for `refunds/create` events. Occurs whenever a new refund is created without errors on an order, independent from the movement of money. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders, read\_buyer\_membership\_orders.

* RETURNS\_​APPROVE

  The webhook topic for `returns/approve` events. Occurs whenever a return is approved. This means `Return.status` is `OPEN`. Requires at least one of the following scopes: read\_returns, read\_marketplace\_returns, read\_buyer\_membership\_orders.

* RETURNS\_​CANCEL

  The webhook topic for `returns/cancel` events. Occurs whenever a return is canceled. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders, read\_returns, read\_marketplace\_returns, read\_buyer\_membership\_orders.

* RETURNS\_​CLOSE

  The webhook topic for `returns/close` events. Occurs whenever a return is closed. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders, read\_returns, read\_marketplace\_returns, read\_buyer\_membership\_orders.

* RETURNS\_​DECLINE

  The webhook topic for `returns/decline` events. Occurs whenever a return is declined. This means `Return.status` is `DECLINED`. Requires at least one of the following scopes: read\_returns, read\_marketplace\_returns, read\_buyer\_membership\_orders.

* RETURNS\_​PROCESS

  The webhook topic for `returns/process` events. Occurs whenever a return is processed. Requires at least one of the following scopes: read\_returns, read\_marketplace\_returns, read\_buyer\_membership\_orders.

* RETURNS\_​REOPEN

  The webhook topic for `returns/reopen` events. Occurs whenever a closed return is reopened. Requires at least one of the following scopes: read\_orders, read\_marketplace\_orders, read\_returns, read\_marketplace\_returns, read\_buyer\_membership\_orders.

* RETURNS\_​REQUEST

  The webhook topic for `returns/request` events. Occurs whenever a return is requested. This means `Return.status` is `REQUESTED`. Requires at least one of the following scopes: read\_returns, read\_marketplace\_returns, read\_buyer\_membership\_orders.

* RETURNS\_​UPDATE

  The webhook topic for `returns/update` events. Occurs whenever a return is updated. Requires at least one of the following scopes: read\_returns, read\_marketplace\_returns, read\_buyer\_membership\_orders.

* REVERSE\_​DELIVERIES\_​ATTACH\_​DELIVERABLE

  The webhook topic for `reverse_deliveries/attach_deliverable` events. Occurs whenever a deliverable is attached to a reverse delivery. This occurs when a reverse delivery is created or updated with delivery metadata. Metadata includes the delivery method, label, and tracking information associated with a reverse delivery. Requires at least one of the following scopes: read\_returns, read\_marketplace\_returns.

* REVERSE\_​FULFILLMENT\_​ORDERS\_​DISPOSE

  The webhook topic for `reverse_fulfillment_orders/dispose` events. Occurs whenever a disposition is made on a reverse fulfillment order. This includes dispositions made on reverse deliveries that are associated with the reverse fulfillment order. Requires at least one of the following scopes: read\_returns, read\_marketplace\_returns.

* SCHEDULED\_​PRODUCT\_​LISTINGS\_​ADD

  The webhook topic for `scheduled_product_listings/add` events. Occurs whenever a product is scheduled to be published. Requires the `read_product_listings` scope.

* SCHEDULED\_​PRODUCT\_​LISTINGS\_​REMOVE

  The webhook topic for `scheduled_product_listings/remove` events. Occurs whenever a product is no longer scheduled to be published. Requires the `read_product_listings` scope.

* SCHEDULED\_​PRODUCT\_​LISTINGS\_​UPDATE

  The webhook topic for `scheduled_product_listings/update` events. Occurs whenever a product's scheduled availability date changes. Requires the `read_product_listings` scope.

* SEGMENTS\_​CREATE

  The webhook topic for `segments/create` events. Occurs whenever a segment is created. Requires the `read_customers` scope.

* SEGMENTS\_​DELETE

  The webhook topic for `segments/delete` events. Occurs whenever a segment is deleted. Requires the `read_customers` scope.

* SEGMENTS\_​UPDATE

  The webhook topic for `segments/update` events. Occurs whenever a segment is updated. Requires the `read_customers` scope.

* SELLING\_​PLAN\_​GROUPS\_​CREATE

  The webhook topic for `selling_plan_groups/create` events. Notifies when a SellingPlanGroup is created. Requires the `read_products` scope.

* SELLING\_​PLAN\_​GROUPS\_​DELETE

  The webhook topic for `selling_plan_groups/delete` events. Notifies when a SellingPlanGroup is deleted. Requires the `read_products` scope.

* SELLING\_​PLAN\_​GROUPS\_​UPDATE

  The webhook topic for `selling_plan_groups/update` events. Notifies when a SellingPlanGroup is updated. Requires the `read_products` scope.

* SHIPPING\_​ADDRESSES\_​CREATE

  The webhook topic for `shipping_addresses/create` events. Occurs whenever a shipping address is created. Requires the `read_shipping` scope.

* SHIPPING\_​ADDRESSES\_​UPDATE

  The webhook topic for `shipping_addresses/update` events. Occurs whenever a shipping address is updated. Requires the `read_shipping` scope.

* SHOP\_​UPDATE

  The webhook topic for `shop/update` events. Occurs whenever a shop is updated.

* SUBSCRIPTION\_​BILLING\_​ATTEMPTS\_​CHALLENGED

  The webhook topic for `subscription_billing_attempts/challenged` events. Occurs when the financial instutition challenges the subscripttion billing attempt charge as per 3D Secure. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​BILLING\_​ATTEMPTS\_​FAILURE

  The webhook topic for `subscription_billing_attempts/failure` events. Occurs whenever a subscription billing attempt fails. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​BILLING\_​ATTEMPTS\_​SUCCESS

  The webhook topic for `subscription_billing_attempts/success` events. Occurs whenever a subscription billing attempt succeeds. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​BILLING\_​CYCLE\_​EDITS\_​CREATE

  The webhook topic for `subscription_billing_cycle_edits/create` events. Occurs whenever a subscription contract billing cycle is edited. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​BILLING\_​CYCLE\_​EDITS\_​DELETE

  The webhook topic for `subscription_billing_cycle_edits/delete` events. Occurs whenever a subscription contract billing cycle edit is deleted. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​BILLING\_​CYCLE\_​EDITS\_​UPDATE

  The webhook topic for `subscription_billing_cycle_edits/update` events. Occurs whenever a subscription contract billing cycle edit is updated. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​BILLING\_​CYCLES\_​SKIP

  The webhook topic for `subscription_billing_cycles/skip` events. Occurs whenever a subscription contract billing cycle is skipped. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​BILLING\_​CYCLES\_​UNSKIP

  The webhook topic for `subscription_billing_cycles/unskip` events. Occurs whenever a subscription contract billing cycle is unskipped. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​CONTRACTS\_​ACTIVATE

  The webhook topic for `subscription_contracts/activate` events. Occurs when a subscription contract is activated. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​CONTRACTS\_​CANCEL

  The webhook topic for `subscription_contracts/cancel` events. Occurs when a subscription contract is canceled. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​CONTRACTS\_​CREATE

  The webhook topic for `subscription_contracts/create` events. Occurs whenever a subscription contract is created. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​CONTRACTS\_​EXPIRE

  The webhook topic for `subscription_contracts/expire` events. Occurs when a subscription contract expires. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​CONTRACTS\_​FAIL

  The webhook topic for `subscription_contracts/fail` events. Occurs when a subscription contract is failed. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​CONTRACTS\_​PAUSE

  The webhook topic for `subscription_contracts/pause` events. Occurs when a subscription contract is paused. Requires the `read_own_subscription_contracts` scope.

* SUBSCRIPTION\_​CONTRACTS\_​UPDATE

  The webhook topic for `subscription_contracts/update` events. Occurs whenever a subscription contract is updated. Requires the `read_own_subscription_contracts` scope.

* TAX\_​SERVICES\_​CREATE

  The webhook topic for `tax_services/create` events. Occurs whenever a tax service is created. Requires the `read_taxes` scope.

* TAX\_​SERVICES\_​UPDATE

  The webhook topic for `tax_services/update` events. Occurs whenver a tax service is updated. Requires the `read_taxes` scope.

* TENDER\_​TRANSACTIONS\_​CREATE

  The webhook topic for `tender_transactions/create` events. Occurs when a tender transaction is created. Requires the `read_orders` scope.

* THEMES\_​CREATE

  The webhook topic for `themes/create` events. Occurs whenever a theme is created. Does not occur when theme files are created. Requires the `read_themes` scope.

* THEMES\_​DELETE

  The webhook topic for `themes/delete` events. Occurs whenever a theme is deleted. Does not occur when theme files are deleted. Requires the `read_themes` scope.

* THEMES\_​PUBLISH

  The webhook topic for `themes/publish` events. Occurs whenever a theme with the main or mobile (deprecated) role is published. Requires the `read_themes` scope.

* THEMES\_​UPDATE

  The webhook topic for `themes/update` events. Occurs whenever a theme is updated. Does not occur when theme files are updated. Requires the `read_themes` scope.

* VARIANTS\_​IN\_​STOCK

  The webhook topic for `variants/in_stock` events. Occurs whenever a variant becomes in stock. Online channels receive this webhook only when the variant becomes in stock online. Requires the `read_products` scope.

* VARIANTS\_​OUT\_​OF\_​STOCK

  The webhook topic for `variants/out_of_stock` events. Occurs whenever a variant becomes out of stock. Online channels receive this webhook only when the variant becomes out of stock online. Requires the `read_products` scope.

***

## Fields

* [Webhook​Subscription.topic](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription#field-WebhookSubscription.fields.topic)

  OBJECT

  A webhook subscription is a persisted data object created by an app using the REST Admin API or GraphQL Admin API. It describes the topic that the app wants to receive, and a destination where Shopify should send webhooks of the specified topic. When an event for a given topic occurs, the webhook subscription sends a relevant payload to the destination. Learn more about the [webhooks system](https://shopify.dev/apps/webhooks).

* [Query​Root.webhookSubscriptions(topics)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.webhookSubscriptions.arguments.topics)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [event​Bridge​Webhook​Subscription​Create.topic](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionCreate#arguments-topic)

  ARGUMENT

* [pub​Sub​Webhook​Subscription​Create.topic](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionCreate#arguments-topic)

  ARGUMENT

* [webhook​Subscription​Create.topic](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate#arguments-topic)

  ARGUMENT

* [webhook​Subscriptions.topics](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions#arguments-topics)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Webhook​Subscription.topic](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription#field-WebhookSubscription.fields.topic)

### Arguments with this enum

* <-|[Query​Root.webhookSubscriptions(topics)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.webhookSubscriptions.arguments.topics)
* <-|[event​Bridge​Webhook​Subscription​Create.topic](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionCreate#arguments-topic)
* <-|[pub​Sub​Webhook​Subscription​Create.topic](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionCreate#arguments-topic)
* <-|[webhook​Subscription​Create.topic](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate#arguments-topic)
* <-|[webhook​Subscriptions.topics](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions#arguments-topics)
