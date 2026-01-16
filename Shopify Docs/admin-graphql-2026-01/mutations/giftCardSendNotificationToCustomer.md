---
title: giftCardSendNotificationToCustomer - GraphQL Admin
description: Send notification to the customer of a gift card.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToCustomer
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToCustomer.md
---

# gift​Card​Send​Notification​To​Customer

mutation

Requires `write_gift_cards` access scope.

Send notification to the customer of a gift card.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the gift card to send.

***

## Gift​Card​Send​Notification​To​Customer​Payload returns

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The gift card that was sent.

* user​Errors

  [\[Gift​Card​Send​Notification​To​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSendNotificationToCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Send a notification to a gift card's customer

  #### Query

  ```graphql
  mutation giftCardSendNotificationToCustomer($id: ID!) {
    giftCardSendNotificationToCustomer(id: $id) {
      giftCard {
        id
        customer {
          id
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/GiftCard/698360200"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation giftCardSendNotificationToCustomer($id: ID!) { giftCardSendNotificationToCustomer(id: $id) { giftCard { id customer { id } } userErrors { message field code } } }",
   "variables": {
      "id": "gid://shopify/GiftCard/698360200"
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
    mutation giftCardSendNotificationToCustomer($id: ID!) {
      giftCardSendNotificationToCustomer(id: $id) {
        giftCard {
          id
          customer {
            id
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/GiftCard/698360200"
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
    mutation giftCardSendNotificationToCustomer($id: ID!) {
      giftCardSendNotificationToCustomer(id: $id) {
        giftCard {
          id
          customer {
            id
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/GiftCard/698360200"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation giftCardSendNotificationToCustomer($id: ID!) {
        giftCardSendNotificationToCustomer(id: $id) {
          giftCard {
            id
            customer {
              id
            }
          }
          userErrors {
            message
            field
            code
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/GiftCard/698360200"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "giftCardSendNotificationToCustomer": {
      "giftCard": {
        "id": "gid://shopify/GiftCard/698360200",
        "customer": {
          "id": "gid://shopify/Customer/649509010"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### giftCardSendNotificationToCustomer reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20giftCardSendNotificationToCustomer\(%24id%3A%20ID!\)%20%7B%0A%20%20giftCardSendNotificationToCustomer\(id%3A%20%24id\)%20%7B%0A%20%20%20%20giftCard%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FGiftCard%2F698360200%22%0A%7D)

##### GQL

```graphql
mutation giftCardSendNotificationToCustomer($id: ID!) {
  giftCardSendNotificationToCustomer(id: $id) {
    giftCard {
      id
      customer {
        id
      }
    }
    userErrors {
      message
      field
      code
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
"query": "mutation giftCardSendNotificationToCustomer($id: ID!) { giftCardSendNotificationToCustomer(id: $id) { giftCard { id customer { id } } userErrors { message field code } } }",
 "variables": {
    "id": "gid://shopify/GiftCard/698360200"
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
  mutation giftCardSendNotificationToCustomer($id: ID!) {
    giftCardSendNotificationToCustomer(id: $id) {
      giftCard {
        id
        customer {
          id
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/GiftCard/698360200"
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
    "query": `mutation giftCardSendNotificationToCustomer($id: ID!) {
      giftCardSendNotificationToCustomer(id: $id) {
        giftCard {
          id
          customer {
            id
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/GiftCard/698360200"
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
  mutation giftCardSendNotificationToCustomer($id: ID!) {
    giftCardSendNotificationToCustomer(id: $id) {
      giftCard {
        id
        customer {
          id
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/GiftCard/698360200"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/GiftCard/698360200"
}
```

## Response

JSON

```json
{
  "giftCardSendNotificationToCustomer": {
    "giftCard": {
      "id": "gid://shopify/GiftCard/698360200",
      "customer": {
        "id": "gid://shopify/Customer/649509010"
      }
    },
    "userErrors": []
  }
}
```
