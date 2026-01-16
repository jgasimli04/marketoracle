---
title: scriptTagCreate - GraphQL Admin
description: |-
  <div class="note"><h4>Theme app extensions</h4>
    <p>If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. <a href="/apps/online-store#what-integration-method-should-i-use" target="_blank">Learn more</a>.</p></div>

  <div class="note"><h4>Script tag deprecation</h4>
    <p>Script tags will be sunset for the <b>Order status</b> page on August 28, 2025. <a href="https://www.shopify.com/plus/upgrading-to-checkout-extensibility">Upgrade to Checkout Extensibility</a> before this date. <a href="/docs/api/liquid/objects#script">Shopify Scripts</a> will continue to work alongside Checkout Extensibility until August 28, 2025.</p></div>


  Creates a new script tag.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagCreate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagCreate.md
---

# script​Tag​Create

mutation

Requires `write_script_tags` access scope.

Theme app extensions

If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

Script tag deprecation

Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

Creates a new script tag.

## Arguments

* input

  [Script​Tag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput)

  required

  The input fields for a script tag.

***

## Script​Tag​Create​Payload returns

* script​Tag

  [Script​Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

  The script tag that was created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Creates a new script tag

  #### Query

  ```graphql
  mutation ScriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
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
    "input": {
      "src": "https://js.example.org/bar.js",
      "displayScope": "ONLINE_STORE",
      "cache": true
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
  "query": "mutation ScriptTagCreate($input: ScriptTagInput!) { scriptTagCreate(input: $input) { scriptTag { id cache createdAt displayScope src updatedAt } userErrors { field message } } }",
   "variables": {
      "input": {
        "src": "https://js.example.org/bar.js",
        "displayScope": "ONLINE_STORE",
        "cache": true
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
    mutation ScriptTagCreate($input: ScriptTagInput!) {
      scriptTagCreate(input: $input) {
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
          "input": {
              "src": "https://js.example.org/bar.js",
              "displayScope": "ONLINE_STORE",
              "cache": true
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
    mutation ScriptTagCreate($input: ScriptTagInput!) {
      scriptTagCreate(input: $input) {
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
    "input": {
      "src": "https://js.example.org/bar.js",
      "displayScope": "ONLINE_STORE",
      "cache": true
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ScriptTagCreate($input: ScriptTagInput!) {
        scriptTagCreate(input: $input) {
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
          "input": {
              "src": "https://js.example.org/bar.js",
              "displayScope": "ONLINE_STORE",
              "cache": true
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "scriptTagCreate": {
      "scriptTag": {
        "id": "gid://shopify/ScriptTag/870402687",
        "cache": true,
        "createdAt": "2024-12-18T11:36:28Z",
        "displayScope": "ONLINE_STORE",
        "src": "https://js.example.org/bar.js",
        "updatedAt": "2024-12-18T11:36:28Z"
      },
      "userErrors": []
    }
  }
  ```

* ### scriptTagCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ScriptTagCreate\(%24input%3A%20ScriptTagInput!\)%20%7B%0A%20%20scriptTagCreate\(input%3A%20%24input\)%20%7B%0A%20%20%20%20scriptTag%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20cache%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20displayScope%0A%20%20%20%20%20%20src%0A%20%20%20%20%20%20updatedAt%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22src%22%3A%20%22https%3A%2F%2Fjs.example.org%2Fbar.js%22%2C%0A%20%20%20%20%22displayScope%22%3A%20%22ONLINE_STORE%22%2C%0A%20%20%20%20%22cache%22%3A%20true%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation ScriptTagCreate($input: ScriptTagInput!) {
  scriptTagCreate(input: $input) {
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
"query": "mutation ScriptTagCreate($input: ScriptTagInput!) { scriptTagCreate(input: $input) { scriptTag { id cache createdAt displayScope src updatedAt } userErrors { field message } } }",
 "variables": {
    "input": {
      "src": "https://js.example.org/bar.js",
      "displayScope": "ONLINE_STORE",
      "cache": true
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
  mutation ScriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
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
        "input": {
            "src": "https://js.example.org/bar.js",
            "displayScope": "ONLINE_STORE",
            "cache": true
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
    "query": `mutation ScriptTagCreate($input: ScriptTagInput!) {
      scriptTagCreate(input: $input) {
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
        "input": {
            "src": "https://js.example.org/bar.js",
            "displayScope": "ONLINE_STORE",
            "cache": true
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
  mutation ScriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
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
  "input": {
    "src": "https://js.example.org/bar.js",
    "displayScope": "ONLINE_STORE",
    "cache": true
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "src": "https://js.example.org/bar.js",
    "displayScope": "ONLINE_STORE",
    "cache": true
  }
}
```

## Response

JSON

```json
{
  "scriptTagCreate": {
    "scriptTag": {
      "id": "gid://shopify/ScriptTag/870402687",
      "cache": true,
      "createdAt": "2024-12-18T11:36:28Z",
      "displayScope": "ONLINE_STORE",
      "src": "https://js.example.org/bar.js",
      "updatedAt": "2024-12-18T11:36:28Z"
    },
    "userErrors": []
  }
}
```
