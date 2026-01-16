---
title: themeUpdate - GraphQL Admin
description: Updates a theme.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate.md'
---

# theme​Update

mutation

Requires The user needs write\_themes and an exemption from Shopify to modify themes. If you think that your app is eligible for an exemption and should have access to this API, then you can [submit an exception request](https://docs.google.com/forms/d/e/1FAIpQLSfZTB1vxFC5d1-GPdqYunWRGUoDcOheHQzfK2RoEFEHrknt5g/viewform).

Updates a theme.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the theme to be updated.

* input

  [Online​Store​Theme​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeInput)

  required

  The attributes of the theme to be updated.

***

## Theme​Update​Payload returns

* theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  The theme that was updated.

* user​Errors

  [\[Theme​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update the name of a theme

  #### Query

  ```graphql
  mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
    themeUpdate(id: $id, input: $input) {
      theme {
        id
        name
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
    "id": "gid://shopify/OnlineStoreTheme/908009861",
    "input": {
      "name": "Dawn - Summer Sale"
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
  "query": "mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) { themeUpdate(id: $id, input: $input) { theme { id name } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/OnlineStoreTheme/908009861",
      "input": {
        "name": "Dawn - Summer Sale"
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
    mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
      themeUpdate(id: $id, input: $input) {
        theme {
          id
          name
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/OnlineStoreTheme/908009861",
          "input": {
              "name": "Dawn - Summer Sale"
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
    mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
      themeUpdate(id: $id, input: $input) {
        theme {
          id
          name
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/OnlineStoreTheme/908009861",
    "input": {
      "name": "Dawn - Summer Sale"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
        themeUpdate(id: $id, input: $input) {
          theme {
            id
            name
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/OnlineStoreTheme/908009861",
          "input": {
              "name": "Dawn - Summer Sale"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "themeUpdate": {
      "theme": {
        "id": "gid://shopify/OnlineStoreTheme/908009861",
        "name": "Dawn - Summer Sale"
      },
      "userErrors": []
    }
  }
  ```

* ### themeUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20themeUpdate\(%24id%3A%20ID!%2C%20%24input%3A%20OnlineStoreThemeInput!\)%20%7B%0A%20%20themeUpdate\(id%3A%20%24id%2C%20input%3A%20%24input\)%20%7B%0A%20%20%20%20theme%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FOnlineStoreTheme%2F908009861%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Dawn%20-%20Summer%20Sale%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
  themeUpdate(id: $id, input: $input) {
    theme {
      id
      name
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
"query": "mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) { themeUpdate(id: $id, input: $input) { theme { id name } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/OnlineStoreTheme/908009861",
    "input": {
      "name": "Dawn - Summer Sale"
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
  mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
    themeUpdate(id: $id, input: $input) {
      theme {
        id
        name
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/OnlineStoreTheme/908009861",
        "input": {
            "name": "Dawn - Summer Sale"
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
    "query": `mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
      themeUpdate(id: $id, input: $input) {
        theme {
          id
          name
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/OnlineStoreTheme/908009861",
        "input": {
            "name": "Dawn - Summer Sale"
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
  mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
    themeUpdate(id: $id, input: $input) {
      theme {
        id
        name
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/OnlineStoreTheme/908009861",
  "input": {
    "name": "Dawn - Summer Sale"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/OnlineStoreTheme/908009861",
  "input": {
    "name": "Dawn - Summer Sale"
  }
}
```

## Response

JSON

```json
{
  "themeUpdate": {
    "theme": {
      "id": "gid://shopify/OnlineStoreTheme/908009861",
      "name": "Dawn - Summer Sale"
    },
    "userErrors": []
  }
}
```
