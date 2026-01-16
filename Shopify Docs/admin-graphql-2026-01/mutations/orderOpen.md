---
title: orderOpen - GraphQL Admin
description: Opens a closed order.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderOpen'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderOpen.md'
---

# order​Open

mutation

Requires `write_orders` access scope. Also: User needs manage\_orders\_information permission.

Opens a closed order.

## Arguments

* input

  [Order​Open​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderOpenInput)

  required

  The input for the mutation.

***

## Order​Open​Payload returns

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The opened order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Re-open a closed order

  #### Query

  ```graphql
  mutation OrderOpen($input: OrderOpenInput!) {
    orderOpen(input: $input) {
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
      "id": "gid://shopify/Order/235240302"
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
  "query": "mutation OrderOpen($input: OrderOpenInput!) { orderOpen(input: $input) { order { canMarkAsPaid cancelReason cancelledAt clientIp confirmed customer { displayName email } discountCodes } userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Order/235240302"
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
    mutation OrderOpen($input: OrderOpenInput!) {
      orderOpen(input: $input) {
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
              "id": "gid://shopify/Order/235240302"
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
    mutation OrderOpen($input: OrderOpenInput!) {
      orderOpen(input: $input) {
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
      "id": "gid://shopify/Order/235240302"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation OrderOpen($input: OrderOpenInput!) {
        orderOpen(input: $input) {
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
              "id": "gid://shopify/Order/235240302"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "orderOpen": {
      "order": {
        "canMarkAsPaid": false,
        "cancelReason": null,
        "cancelledAt": null,
        "clientIp": null,
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

* ### orderOpen reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20OrderOpen\(%24input%3A%20OrderOpenInput!\)%20%7B%0A%20%20orderOpen\(input%3A%20%24input\)%20%7B%0A%20%20%20%20order%20%7B%0A%20%20%20%20%20%20canMarkAsPaid%0A%20%20%20%20%20%20cancelReason%0A%20%20%20%20%20%20cancelledAt%0A%20%20%20%20%20%20clientIp%0A%20%20%20%20%20%20confirmed%0A%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20discountCodes%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F235240302%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation OrderOpen($input: OrderOpenInput!) {
  orderOpen(input: $input) {
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

##### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation OrderOpen($input: OrderOpenInput!) { orderOpen(input: $input) { order { canMarkAsPaid cancelReason cancelledAt clientIp confirmed customer { displayName email } discountCodes } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/235240302"
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
  mutation OrderOpen($input: OrderOpenInput!) {
    orderOpen(input: $input) {
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
            "id": "gid://shopify/Order/235240302"
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
    "query": `mutation OrderOpen($input: OrderOpenInput!) {
      orderOpen(input: $input) {
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
            "id": "gid://shopify/Order/235240302"
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
  mutation OrderOpen($input: OrderOpenInput!) {
    orderOpen(input: $input) {
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
    "id": "gid://shopify/Order/235240302"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "id": "gid://shopify/Order/235240302"
  }
}
```

## Response

JSON

```json
{
  "orderOpen": {
    "order": {
      "canMarkAsPaid": false,
      "cancelReason": null,
      "cancelledAt": null,
      "clientIp": null,
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
