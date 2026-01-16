---
title: menuDelete - GraphQL Admin
description: Deletes a menu.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuDelete'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuDelete.md'
---

# menu​Delete

mutation

Requires `write_online_store_navigation` access scope.

Deletes a menu.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the menu to be deleted.

***

## Menu​Delete​Payload returns

* deleted​Menu​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted menu.

* user​Errors

  [\[Menu​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Failing to delete the main menu

  #### Description

  Deleting the main menu returns an error

  #### Query

  ```graphql
  mutation DeleteMenu($id: ID!) {
    menuDelete(id: $id) {
      deletedMenuId
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
    "id": "gid://shopify/Menu/166235728"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation DeleteMenu($id: ID!) { menuDelete(id: $id) { deletedMenuId userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Menu/166235728"
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
    mutation DeleteMenu($id: ID!) {
      menuDelete(id: $id) {
        deletedMenuId
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Menu/166235728"
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
    mutation DeleteMenu($id: ID!) {
      menuDelete(id: $id) {
        deletedMenuId
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Menu/166235728"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation DeleteMenu($id: ID!) {
        menuDelete(id: $id) {
          deletedMenuId
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Menu/166235728"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "menuDelete": {
      "deletedMenuId": null,
      "userErrors": [
        {
          "field": [
            "id"
          ],
          "message": "Default menu cannot be deleted."
        }
      ]
    }
  }
  ```

* ### Successfully deleting a menu

  #### Description

  Delete a menu by its ID

  #### Query

  ```graphql
  mutation DeleteMenu($id: ID!) {
    menuDelete(id: $id) {
      deletedMenuId
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Menu/166235728"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation DeleteMenu($id: ID!) { menuDelete(id: $id) { deletedMenuId } }",
   "variables": {
      "id": "gid://shopify/Menu/166235728"
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
    mutation DeleteMenu($id: ID!) {
      menuDelete(id: $id) {
        deletedMenuId
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Menu/166235728"
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
    mutation DeleteMenu($id: ID!) {
      menuDelete(id: $id) {
        deletedMenuId
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Menu/166235728"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation DeleteMenu($id: ID!) {
        menuDelete(id: $id) {
          deletedMenuId
        }
      }`,
      "variables": {
          "id": "gid://shopify/Menu/166235728"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "menuDelete": {
      "deletedMenuId": "gid://shopify/Menu/166235728"
    }
  }
  ```

* ### menuDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20DeleteMenu\(%24id%3A%20ID!\)%20%7B%0A%20%20menuDelete\(id%3A%20%24id\)%20%7B%0A%20%20%20%20deletedMenuId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenu%2F166235728%22%0A%7D)

##### GQL

```graphql
mutation DeleteMenu($id: ID!) {
  menuDelete(id: $id) {
    deletedMenuId
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
"query": "mutation DeleteMenu($id: ID!) { menuDelete(id: $id) { deletedMenuId userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Menu/166235728"
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
  mutation DeleteMenu($id: ID!) {
    menuDelete(id: $id) {
      deletedMenuId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Menu/166235728"
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
    "query": `mutation DeleteMenu($id: ID!) {
      menuDelete(id: $id) {
        deletedMenuId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Menu/166235728"
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
  mutation DeleteMenu($id: ID!) {
    menuDelete(id: $id) {
      deletedMenuId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Menu/166235728"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/Menu/166235728"
}
```

## Response

JSON

```json
{
  "menuDelete": {
    "deletedMenuId": null,
    "userErrors": [
      {
        "field": [
          "id"
        ],
        "message": "Default menu cannot be deleted."
      }
    ]
  }
}
```
