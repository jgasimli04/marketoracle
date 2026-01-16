---
title: orderUpdate - GraphQL Admin
description: >-
  Updates the attributes of an order, such as the customer's email, the shipping
  address for the order,

  tags, and [metafields](https://shopify.dev/docs/apps/build/custom-data)
  associated with the order.


  If you need to make significant updates to an order, such as adding or
  removing line items, changing

  quantities, or modifying discounts, then use

  the
  [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin)

  mutation instead. The `orderEditBegin` mutation initiates an order editing
  session,

  allowing you to make multiple changes before finalizing them. Learn more about
  using the `orderEditBegin`

  mutation to [edit existing
  orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).


  If you need to remove a customer from an order, then use the
  [`orderCustomerRemove`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove)

  mutation instead.


  Learn how to build apps that integrate with

  [order management and fulfillment
  processes](https://shopify.dev/docs/apps/build/orders-fulfillment).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate.md'
---

# order​Update

mutation

Requires `write_orders` access scope, `write_marketplace_orders` access scope or `write_quick_sale` access scope. Also: The app must have the `write_pos_staff_member_event_attribution_overrides` access scope to assign events to another staff member.

Updates the attributes of an order, such as the customer's email, the shipping address for the order, tags, and [metafields](https://shopify.dev/docs/apps/build/custom-data) associated with the order.

If you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts, then use the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation instead. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

If you need to remove a customer from an order, then use the [`orderCustomerRemove`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove) mutation instead.

Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

## Arguments

* input

  [Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput)

  required

  The attributes of the updated order.

***

## Order​Update​Payload returns

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The updated order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update an order's shipping address and note

  #### Description

  This mutation updates the shipping address and note of an existing order, identified by its ID. The response includes the order's updated shipping address and note.

  #### Query

  ```graphql
  mutation OrderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        id
        note
        shippingAddress {
          address1
          city
          province
          zip
          country
        }
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "id": "gid://shopify/Order/148977776",
      "shippingAddress": {
        "address1": "190 MacLaren",
        "city": "Sudbury",
        "province": "Ontario",
        "zip": "K2P0V6",
        "country": "Canada"
      },
      "note": "Please gift wrap the snowboard."
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation OrderUpdate($input: OrderInput!) { orderUpdate(input: $input) { order { id note shippingAddress { address1 city province zip country } } userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Order/148977776",
        "shippingAddress": {
          "address1": "190 MacLaren",
          "city": "Sudbury",
          "province": "Ontario",
          "zip": "K2P0V6",
          "country": "Canada"
        },
        "note": "Please gift wrap the snowboard."
      }
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation OrderUpdate($input: OrderInput!) {
      orderUpdate(input: $input) {
        order {
          id
          note
          shippingAddress {
            address1
            city
            province
            zip
            country
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/Order/148977776",
              "shippingAddress": {
                  "address1": "190 MacLaren",
                  "city": "Sudbury",
                  "province": "Ontario",
                  "zip": "K2P0V6",
                  "country": "Canada"
              },
              "note": "Please gift wrap the snowboard."
          }
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    mutation OrderUpdate($input: OrderInput!) {
      orderUpdate(input: $input) {
        order {
          id
          note
          shippingAddress {
            address1
            city
            province
            zip
            country
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/Order/148977776",
      "shippingAddress": {
        "address1": "190 MacLaren",
        "city": "Sudbury",
        "province": "Ontario",
        "zip": "K2P0V6",
        "country": "Canada"
      },
      "note": "Please gift wrap the snowboard."
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation OrderUpdate($input: OrderInput!) {
        orderUpdate(input: $input) {
          order {
            id
            note
            shippingAddress {
              address1
              city
              province
              zip
              country
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/Order/148977776",
              "shippingAddress": {
                  "address1": "190 MacLaren",
                  "city": "Sudbury",
                  "province": "Ontario",
                  "zip": "K2P0V6",
                  "country": "Canada"
              },
              "note": "Please gift wrap the snowboard."
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "orderUpdate": {
      "order": {
        "id": "gid://shopify/Order/148977776",
        "note": "Please gift wrap the snowboard.",
        "shippingAddress": {
          "address1": "190 MacLaren",
          "city": "Sudbury",
          "province": "Ontario",
          "zip": "K2P0V6",
          "country": "Canada"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Update an order's tags and customer email address

  #### Description

  This mutation updates an existing order by its ID, adding new tags and changing the customer's email address. The response includes details about the order's payment status, cancellation status, customer information, and applied discount codes.

  #### Query

  ```graphql
  mutation OrderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        canMarkAsPaid
        cancelReason
        cancelledAt
        clientIp
        confirmed
        customer {
          displayName
          email
        }
        discountCodes
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "id": "gid://shopify/Order/148977776",
      "email": "bob@example.com",
      "tags": [
        "foo",
        "bar"
      ]
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation OrderUpdate($input: OrderInput!) { orderUpdate(input: $input) { order { canMarkAsPaid cancelReason cancelledAt clientIp confirmed customer { displayName email } discountCodes } userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Order/148977776",
        "email": "bob@example.com",
        "tags": [
          "foo",
          "bar"
        ]
      }
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation OrderUpdate($input: OrderInput!) {
      orderUpdate(input: $input) {
        order {
          canMarkAsPaid
          cancelReason
          cancelledAt
          clientIp
          confirmed
          customer {
            displayName
            email
          }
          discountCodes
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "id": "gid://shopify/Order/148977776",
              "email": "bob@example.com",
              "tags": [
                  "foo",
                  "bar"
              ]
          }
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    mutation OrderUpdate($input: OrderInput!) {
      orderUpdate(input: $input) {
        order {
          canMarkAsPaid
          cancelReason
          cancelledAt
          clientIp
          confirmed
          customer {
            displayName
            email
          }
          discountCodes
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "id": "gid://shopify/Order/148977776",
      "email": "bob@example.com",
      "tags": [
        "foo",
        "bar"
      ]
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation OrderUpdate($input: OrderInput!) {
        orderUpdate(input: $input) {
          order {
            canMarkAsPaid
            cancelReason
            cancelledAt
            clientIp
            confirmed
            customer {
              displayName
              email
            }
            discountCodes
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/Order/148977776",
              "email": "bob@example.com",
              "tags": [
                  "foo",
                  "bar"
              ]
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "orderUpdate": {
      "order": {
        "canMarkAsPaid": false,
        "cancelReason": null,
        "cancelledAt": null,
        "clientIp": "216.191.105.144",
        "confirmed": true,
        "customer": {
          "displayName": "Bob Bobsen",
          "email": "bob@example.com"
        },
        "discountCodes": []
      },
      "userErrors": []
    }
  }
  ```

* ### orderUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20OrderUpdate\(%24input%3A%20OrderInput!\)%20%7B%0A%20%20orderUpdate\(input%3A%20%24input\)%20%7B%0A%20%20%20%20order%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20note%0A%20%20%20%20%20%20shippingAddress%20%7B%0A%20%20%20%20%20%20%20%20address1%0A%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%20%20province%0A%20%20%20%20%20%20%20%20zip%0A%20%20%20%20%20%20%20%20country%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F148977776%22%2C%0A%20%20%20%20%22shippingAddress%22%3A%20%7B%0A%20%20%20%20%20%20%22address1%22%3A%20%22190%20MacLaren%22%2C%0A%20%20%20%20%20%20%22city%22%3A%20%22Sudbury%22%2C%0A%20%20%20%20%20%20%22province%22%3A%20%22Ontario%22%2C%0A%20%20%20%20%20%20%22zip%22%3A%20%22K2P0V6%22%2C%0A%20%20%20%20%20%20%22country%22%3A%20%22Canada%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22note%22%3A%20%22Please%20gift%20wrap%20the%20snowboard.%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation OrderUpdate($input: OrderInput!) {
  orderUpdate(input: $input) {
    order {
      id
      note
      shippingAddress {
        address1
        city
        province
        zip
        country
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

##### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation OrderUpdate($input: OrderInput!) { orderUpdate(input: $input) { order { id note shippingAddress { address1 city province zip country } } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/148977776",
      "shippingAddress": {
        "address1": "190 MacLaren",
        "city": "Sudbury",
        "province": "Ontario",
        "zip": "K2P0V6",
        "country": "Canada"
      },
      "note": "Please gift wrap the snowboard."
    }
  }
}'
```

##### React Router

```javascript
import { authenticate } from "../shopify.server";

export const loader = async ({request}) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
  mutation OrderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        id
        note
        shippingAddress {
          address1
          city
          province
          zip
          country
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Order/148977776",
            "shippingAddress": {
                "address1": "190 MacLaren",
                "city": "Sudbury",
                "province": "Ontario",
                "zip": "K2P0V6",
                "country": "Canada"
            },
            "note": "Please gift wrap the snowboard."
        }
    },
  },
  );
  const json = await response.json();
  return json.data;
}
```

##### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation OrderUpdate($input: OrderInput!) {
      orderUpdate(input: $input) {
        order {
          id
          note
          shippingAddress {
            address1
            city
            province
            zip
            country
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Order/148977776",
            "shippingAddress": {
                "address1": "190 MacLaren",
                "city": "Sudbury",
                "province": "Ontario",
                "zip": "K2P0V6",
                "country": "Canada"
            },
            "note": "Please gift wrap the snowboard."
        }
    },
  },
});
```

##### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  mutation OrderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        id
        note
        shippingAddress {
          address1
          city
          province
          zip
          country
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Order/148977776",
    "shippingAddress": {
      "address1": "190 MacLaren",
      "city": "Sudbury",
      "province": "Ontario",
      "zip": "K2P0V6",
      "country": "Canada"
    },
    "note": "Please gift wrap the snowboard."
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "id": "gid://shopify/Order/148977776",
    "shippingAddress": {
      "address1": "190 MacLaren",
      "city": "Sudbury",
      "province": "Ontario",
      "zip": "K2P0V6",
      "country": "Canada"
    },
    "note": "Please gift wrap the snowboard."
  }
}
```

## Response

JSON

```json
{
  "orderUpdate": {
    "order": {
      "id": "gid://shopify/Order/148977776",
      "note": "Please gift wrap the snowboard.",
      "shippingAddress": {
        "address1": "190 MacLaren",
        "city": "Sudbury",
        "province": "Ontario",
        "zip": "K2P0V6",
        "country": "Canada"
      }
    },
    "userErrors": []
  }
}
```
