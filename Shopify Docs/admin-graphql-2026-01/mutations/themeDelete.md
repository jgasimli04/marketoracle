---
title: themeDelete - GraphQL Admin
description: Deletes a theme.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDelete'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDelete.md'
---

# theme​Delete

mutation

Requires The user needs write\_themes and an exemption from Shopify to modify themes. If you think that your app is eligible for an exemption and should have access to this API, then you can [submit an exception request](https://docs.google.com/forms/d/e/1FAIpQLSfZTB1vxFC5d1-GPdqYunWRGUoDcOheHQzfK2RoEFEHrknt5g/viewform).

Deletes a theme.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the theme to be deleted.

***

## Theme​Delete​Payload returns

* deleted​Theme​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted theme.

* user​Errors

  [\[Theme​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete a theme by its ID

  #### Description

  Delete a theme by its ID

  #### Query

  ```graphql
  mutation themeDelete($id: ID!) {
    themeDelete(id: $id) {
      deletedThemeId
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
    "id": "gid://shopify/OnlineStoreTheme/908009861"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation themeDelete($id: ID!) { themeDelete(id: $id) { deletedThemeId userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/OnlineStoreTheme/908009861"
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
    mutation themeDelete($id: ID!) {
      themeDelete(id: $id) {
        deletedThemeId
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/OnlineStoreTheme/908009861"
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
    mutation themeDelete($id: ID!) {
      themeDelete(id: $id) {
        deletedThemeId
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/OnlineStoreTheme/908009861"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation themeDelete($id: ID!) {
        themeDelete(id: $id) {
          deletedThemeId
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/OnlineStoreTheme/908009861"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "themeDelete": {
      "deletedThemeId": "gid://shopify/OnlineStoreTheme/908009861",
      "userErrors": []
    }
  }
  ```

* ### Remove an existing Theme

  #### Query

  ```graphql
  mutation ThemeUpdate($id: ID!) {
    themeDelete(id: $id) {
      deletedThemeId
      userErrors {
        code
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/OnlineStoreTheme/908009861"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation ThemeUpdate($id: ID!) { themeDelete(id: $id) { deletedThemeId userErrors { code field message } } }",
   "variables": {
      "id": "gid://shopify/OnlineStoreTheme/908009861"
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
    mutation ThemeUpdate($id: ID!) {
      themeDelete(id: $id) {
        deletedThemeId
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/OnlineStoreTheme/908009861"
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
    mutation ThemeUpdate($id: ID!) {
      themeDelete(id: $id) {
        deletedThemeId
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/OnlineStoreTheme/908009861"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation ThemeUpdate($id: ID!) {
        themeDelete(id: $id) {
          deletedThemeId
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/OnlineStoreTheme/908009861"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "themeDelete": {
      "deletedThemeId": "gid://shopify/OnlineStoreTheme/908009861",
      "userErrors": []
    }
  }
  ```

* ### themeDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20themeDelete\(%24id%3A%20ID!\)%20%7B%0A%20%20themeDelete\(id%3A%20%24id\)%20%7B%0A%20%20%20%20deletedThemeId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FOnlineStoreTheme%2F908009861%22%0A%7D)

##### GQL

```graphql
mutation themeDelete($id: ID!) {
  themeDelete(id: $id) {
    deletedThemeId
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
"query": "mutation themeDelete($id: ID!) { themeDelete(id: $id) { deletedThemeId userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/OnlineStoreTheme/908009861"
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
  mutation themeDelete($id: ID!) {
    themeDelete(id: $id) {
      deletedThemeId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/OnlineStoreTheme/908009861"
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
    "query": `mutation themeDelete($id: ID!) {
      themeDelete(id: $id) {
        deletedThemeId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/OnlineStoreTheme/908009861"
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
  mutation themeDelete($id: ID!) {
    themeDelete(id: $id) {
      deletedThemeId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/OnlineStoreTheme/908009861"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/OnlineStoreTheme/908009861"
}
```

## Response

JSON

```json
{
  "themeDelete": {
    "deletedThemeId": "gid://shopify/OnlineStoreTheme/908009861",
    "userErrors": []
  }
}
```
