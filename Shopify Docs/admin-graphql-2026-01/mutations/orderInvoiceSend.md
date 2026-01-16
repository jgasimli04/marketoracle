---
title: orderInvoiceSend - GraphQL Admin
description: >-
  Sends an email invoice for an
  [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).


  You can customize the email recipient, sender, and subject line using the
  [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email)
  argument.


  > Note:

  > Use store or staff account email addresses for the
  [`from`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.from)
  and
  [`bcc`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.bcc)
  input fields.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend.md
---

# order​Invoice​Send

mutation

Requires `write_orders` access scope. Also: The user must have access to orders and manage orders information.

Sends an email invoice for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

You can customize the email recipient, sender, and subject line using the [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email) argument.

***

Note

Use store or staff account email addresses for the [`from`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.from) and [`bcc`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.bcc) input fields.

***

## Arguments

* email

  [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

  The email input fields for the order invoice. The `bcc` and `from` fields should be store or staff account emails.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The order associated with the invoice.

***

## Order​Invoice​Send​Payload returns

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order associated with the invoice email.

* user​Errors

  [\[Order​Invoice​Send​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderInvoiceSendUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Send invoice

  #### Description

  Send an order invoice to a customer.

  #### Query

  ```graphql
  mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
    orderInvoiceSend(id: $orderId, email: $email) {
      order {
        id
      }
      userErrors {
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "orderId": "gid://shopify/Order/17181286",
    "email": {
      "to": "test@example.net",
      "from": "Sales Modyl <salesmodel@example.com>",
      "subject": "Invoice #1001",
      "customMessage": "Thank you for your order"
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
  "query": "mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) { orderInvoiceSend(id: $orderId, email: $email) { order { id } userErrors { message } } }",
   "variables": {
      "orderId": "gid://shopify/Order/17181286",
      "email": {
        "to": "test@example.net",
        "from": "Sales Modyl <salesmodel@example.com>",
        "subject": "Invoice #1001",
        "customMessage": "Thank you for your order"
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
    mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
      orderInvoiceSend(id: $orderId, email: $email) {
        order {
          id
        }
        userErrors {
          message
        }
      }
    }`,
    {
      variables: {
          "orderId": "gid://shopify/Order/17181286",
          "email": {
              "to": "test@example.net",
              "from": "Sales Modyl <salesmodel@example.com>",
              "subject": "Invoice #1001",
              "customMessage": "Thank you for your order"
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
    mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
      orderInvoiceSend(id: $orderId, email: $email) {
        order {
          id
        }
        userErrors {
          message
        }
      }
    }
  QUERY

  variables = {
    "orderId": "gid://shopify/Order/17181286",
    "email": {
      "to": "test@example.net",
      "from": "Sales Modyl <salesmodel@example.com>",
      "subject": "Invoice #1001",
      "customMessage": "Thank you for your order"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
        orderInvoiceSend(id: $orderId, email: $email) {
          order {
            id
          }
          userErrors {
            message
          }
        }
      }`,
      "variables": {
          "orderId": "gid://shopify/Order/17181286",
          "email": {
              "to": "test@example.net",
              "from": "Sales Modyl <salesmodel@example.com>",
              "subject": "Invoice #1001",
              "customMessage": "Thank you for your order"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "orderInvoiceSend": {
      "order": {
        "id": "gid://shopify/Order/17181286"
      },
      "userErrors": []
    }
  }
  ```

* ### orderInvoiceSend reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20OrderInvoiceSend\(%24orderId%3A%20ID!%2C%20%24email%3A%20EmailInput\)%20%7B%0A%20%20orderInvoiceSend\(id%3A%20%24orderId%2C%20email%3A%20%24email\)%20%7B%0A%20%20%20%20order%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22orderId%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F17181286%22%2C%0A%20%20%22email%22%3A%20%7B%0A%20%20%20%20%22to%22%3A%20%22test%40example.net%22%2C%0A%20%20%20%20%22from%22%3A%20%22Sales%20Modyl%20%3Csalesmodel%40example.com%3E%22%2C%0A%20%20%20%20%22subject%22%3A%20%22Invoice%20%231001%22%2C%0A%20%20%20%20%22customMessage%22%3A%20%22Thank%20you%20for%20your%20order%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
  orderInvoiceSend(id: $orderId, email: $email) {
    order {
      id
    }
    userErrors {
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
"query": "mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) { orderInvoiceSend(id: $orderId, email: $email) { order { id } userErrors { message } } }",
 "variables": {
    "orderId": "gid://shopify/Order/17181286",
    "email": {
      "to": "test@example.net",
      "from": "Sales Modyl <salesmodel@example.com>",
      "subject": "Invoice #1001",
      "customMessage": "Thank you for your order"
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
  mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
    orderInvoiceSend(id: $orderId, email: $email) {
      order {
        id
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/17181286",
        "email": {
            "to": "test@example.net",
            "from": "Sales Modyl <salesmodel@example.com>",
            "subject": "Invoice #1001",
            "customMessage": "Thank you for your order"
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
    "query": `mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
      orderInvoiceSend(id: $orderId, email: $email) {
        order {
          id
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/17181286",
        "email": {
            "to": "test@example.net",
            "from": "Sales Modyl <salesmodel@example.com>",
            "subject": "Invoice #1001",
            "customMessage": "Thank you for your order"
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
  mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
    orderInvoiceSend(id: $orderId, email: $email) {
      order {
        id
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/17181286",
  "email": {
    "to": "test@example.net",
    "from": "Sales Modyl <salesmodel@example.com>",
    "subject": "Invoice #1001",
    "customMessage": "Thank you for your order"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "orderId": "gid://shopify/Order/17181286",
  "email": {
    "to": "test@example.net",
    "from": "Sales Modyl <salesmodel@example.com>",
    "subject": "Invoice #1001",
    "customMessage": "Thank you for your order"
  }
}
```

## Response

JSON

```json
{
  "orderInvoiceSend": {
    "order": {
      "id": "gid://shopify/Order/17181286"
    },
    "userErrors": []
  }
}
```
