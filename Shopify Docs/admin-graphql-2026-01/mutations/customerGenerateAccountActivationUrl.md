---
title: customerGenerateAccountActivationUrl - GraphQL Admin
description: >-
  Generates a one-time activation URL for a
  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)
  whose legacy customer account isn't yet enabled. Use this after importing
  customers or creating accounts that need activation.


  The generated URL expires after 30 days and becomes invalid if you generate a
  new one.


  > Note: The generated URL only works when legacy customer accounts are enabled
  on the shop. It only works for customers with disabled or invited [`account
  states`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.state).
  Attempting to generate a URL for an already-enabled customer returns an error.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerGenerateAccountActivationUrl
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerGenerateAccountActivationUrl.md
---

# customer​Generate​Account​Activation​Url

mutation

Requires `write_customers` access scope.

Generates a one-time activation URL for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) whose legacy customer account isn't yet enabled. Use this after importing customers or creating accounts that need activation.

The generated URL expires after 30 days and becomes invalid if you generate a new one.

***

Note

The generated URL only works when legacy customer accounts are enabled on the shop. It only works for customers with disabled or invited [`account states`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.state). Attempting to generate a URL for an already-enabled customer returns an error.

***

## Arguments

* customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the customer that the URL is generated for.

***

## Customer​Generate​Account​Activation​Url​Payload returns

* account​Activation​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The generated account activation URL.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Creates an account activation URL for a customer

  #### Query

  ```graphql
  mutation customerGenerateAccountActivationUrl($customerId: ID!) {
    customerGenerateAccountActivationUrl(customerId: $customerId) {
      accountActivationUrl
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
    "customerId": "gid://shopify/Customer/105906728"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation customerGenerateAccountActivationUrl($customerId: ID!) { customerGenerateAccountActivationUrl(customerId: $customerId) { accountActivationUrl userErrors { field message } } }",
   "variables": {
      "customerId": "gid://shopify/Customer/105906728"
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
    mutation customerGenerateAccountActivationUrl($customerId: ID!) {
      customerGenerateAccountActivationUrl(customerId: $customerId) {
        accountActivationUrl
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "customerId": "gid://shopify/Customer/105906728"
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
    mutation customerGenerateAccountActivationUrl($customerId: ID!) {
      customerGenerateAccountActivationUrl(customerId: $customerId) {
        accountActivationUrl
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "customerId": "gid://shopify/Customer/105906728"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation customerGenerateAccountActivationUrl($customerId: ID!) {
        customerGenerateAccountActivationUrl(customerId: $customerId) {
          accountActivationUrl
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "customerId": "gid://shopify/Customer/105906728"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "customerGenerateAccountActivationUrl": {
      "accountActivationUrl": "https://activation.example.com",
      "userErrors": []
    }
  }
  ```

* ### customerGenerateAccountActivationUrl reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20customerGenerateAccountActivationUrl\(%24customerId%3A%20ID!\)%20%7B%0A%20%20customerGenerateAccountActivationUrl\(customerId%3A%20%24customerId\)%20%7B%0A%20%20%20%20accountActivationUrl%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F105906728%22%0A%7D)

##### GQL

```graphql
mutation customerGenerateAccountActivationUrl($customerId: ID!) {
  customerGenerateAccountActivationUrl(customerId: $customerId) {
    accountActivationUrl
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
"query": "mutation customerGenerateAccountActivationUrl($customerId: ID!) { customerGenerateAccountActivationUrl(customerId: $customerId) { accountActivationUrl userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/105906728"
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
  mutation customerGenerateAccountActivationUrl($customerId: ID!) {
    customerGenerateAccountActivationUrl(customerId: $customerId) {
      accountActivationUrl
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "customerId": "gid://shopify/Customer/105906728"
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
    "query": `mutation customerGenerateAccountActivationUrl($customerId: ID!) {
      customerGenerateAccountActivationUrl(customerId: $customerId) {
        accountActivationUrl
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "customerId": "gid://shopify/Customer/105906728"
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
  mutation customerGenerateAccountActivationUrl($customerId: ID!) {
    customerGenerateAccountActivationUrl(customerId: $customerId) {
      accountActivationUrl
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "customerId": "gid://shopify/Customer/105906728"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "customerId": "gid://shopify/Customer/105906728"
}
```

## Response

JSON

```json
{
  "customerGenerateAccountActivationUrl": {
    "accountActivationUrl": "https://activation.example.com",
    "userErrors": []
  }
}
```
