---
title: scriptTagUpdate - GraphQL Admin
description: |-
  <div class="note"><h4>Theme app extensions</h4>
    <p>If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. <a href="/apps/online-store#what-integration-method-should-i-use" target="_blank">Learn more</a>.</p></div>

  <div class="note"><h4>Script tag deprecation</h4>
    <p>Script tags will be sunset for the <b>Order status</b> page on August 28, 2025. <a href="https://www.shopify.com/plus/upgrading-to-checkout-extensibility">Upgrade to Checkout Extensibility</a> before this date. <a href="/docs/api/liquid/objects#script">Shopify Scripts</a> will continue to work alongside Checkout Extensibility until August 28, 2025.</p></div>


  Updates a script tag.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagUpdate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagUpdate.md
---

# script​Tag​Update

mutation

Requires `write_script_tags` access scope.

Theme app extensions

If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

Script tag deprecation

Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

Updates a script tag.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the script tag to update.

* input

  [Script​Tag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput)

  required

  Specifies the input fields for a script tag.

***

## Script​Tag​Update​Payload returns

* script​Tag

  [Script​Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

  The script tag that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Updates a script tag

  #### Query

  ```graphql
  mutation ScriptTagUpdate($id: ID!, $input: ScriptTagInput!) {
    scriptTagUpdate(id: $id, input: $input) {
      scriptTag {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
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
    "id": "gid://shopify/ScriptTag/421379493",
    "input": {
      "src": "https://js.example.org/updated.js",
      "displayScope": "ONLINE_STORE"
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
  "query": "mutation ScriptTagUpdate($id: ID!, $input: ScriptTagInput!) { scriptTagUpdate(id: $id, input: $input) { scriptTag { id cache createdAt displayScope src updatedAt } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/ScriptTag/421379493",
      "input": {
        "src": "https://js.example.org/updated.js",
        "displayScope": "ONLINE_STORE"
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
    mutation ScriptTagUpdate($id: ID!, $input: ScriptTagInput!) {
      scriptTagUpdate(id: $id, input: $input) {
        scriptTag {
          id
          cache
          createdAt
          displayScope
          src
          updatedAt
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/ScriptTag/421379493",
          "input": {
              "src": "https://js.example.org/updated.js",
              "displayScope": "ONLINE_STORE"
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
    mutation ScriptTagUpdate($id: ID!, $input: ScriptTagInput!) {
      scriptTagUpdate(id: $id, input: $input) {
        scriptTag {
          id
          cache
          createdAt
          displayScope
          src
          updatedAt
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/ScriptTag/421379493",
    "input": {
      "src": "https://js.example.org/updated.js",
      "displayScope": "ONLINE_STORE"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ScriptTagUpdate($id: ID!, $input: ScriptTagInput!) {
        scriptTagUpdate(id: $id, input: $input) {
          scriptTag {
            id
            cache
            createdAt
            displayScope
            src
            updatedAt
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/ScriptTag/421379493",
          "input": {
              "src": "https://js.example.org/updated.js",
              "displayScope": "ONLINE_STORE"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "scriptTagUpdate": {
      "scriptTag": {
        "id": "gid://shopify/ScriptTag/421379493",
        "cache": false,
        "createdAt": "2024-12-18T11:35:33Z",
        "displayScope": "ONLINE_STORE",
        "src": "https://js.example.org/updated.js",
        "updatedAt": "2024-12-18T11:37:33Z"
      },
      "userErrors": []
    }
  }
  ```

* ### scriptTagUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ScriptTagUpdate\(%24id%3A%20ID!%2C%20%24input%3A%20ScriptTagInput!\)%20%7B%0A%20%20scriptTagUpdate\(id%3A%20%24id%2C%20input%3A%20%24input\)%20%7B%0A%20%20%20%20scriptTag%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20cache%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20displayScope%0A%20%20%20%20%20%20src%0A%20%20%20%20%20%20updatedAt%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FScriptTag%2F421379493%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22src%22%3A%20%22https%3A%2F%2Fjs.example.org%2Fupdated.js%22%2C%0A%20%20%20%20%22displayScope%22%3A%20%22ONLINE_STORE%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation ScriptTagUpdate($id: ID!, $input: ScriptTagInput!) {
  scriptTagUpdate(id: $id, input: $input) {
    scriptTag {
      id
      cache
      createdAt
      displayScope
      src
      updatedAt
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
"query": "mutation ScriptTagUpdate($id: ID!, $input: ScriptTagInput!) { scriptTagUpdate(id: $id, input: $input) { scriptTag { id cache createdAt displayScope src updatedAt } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/ScriptTag/421379493",
    "input": {
      "src": "https://js.example.org/updated.js",
      "displayScope": "ONLINE_STORE"
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
  mutation ScriptTagUpdate($id: ID!, $input: ScriptTagInput!) {
    scriptTagUpdate(id: $id, input: $input) {
      scriptTag {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/ScriptTag/421379493",
        "input": {
            "src": "https://js.example.org/updated.js",
            "displayScope": "ONLINE_STORE"
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
    "query": `mutation ScriptTagUpdate($id: ID!, $input: ScriptTagInput!) {
      scriptTagUpdate(id: $id, input: $input) {
        scriptTag {
          id
          cache
          createdAt
          displayScope
          src
          updatedAt
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/ScriptTag/421379493",
        "input": {
            "src": "https://js.example.org/updated.js",
            "displayScope": "ONLINE_STORE"
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
  mutation ScriptTagUpdate($id: ID!, $input: ScriptTagInput!) {
    scriptTagUpdate(id: $id, input: $input) {
      scriptTag {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/ScriptTag/421379493",
  "input": {
    "src": "https://js.example.org/updated.js",
    "displayScope": "ONLINE_STORE"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/ScriptTag/421379493",
  "input": {
    "src": "https://js.example.org/updated.js",
    "displayScope": "ONLINE_STORE"
  }
}
```

## Response

JSON

```json
{
  "scriptTagUpdate": {
    "scriptTag": {
      "id": "gid://shopify/ScriptTag/421379493",
      "cache": false,
      "createdAt": "2024-12-18T11:35:33Z",
      "displayScope": "ONLINE_STORE",
      "src": "https://js.example.org/updated.js",
      "updatedAt": "2024-12-18T11:37:33Z"
    },
    "userErrors": []
  }
}
```
