---
title: metafieldDefinitionPin - GraphQL Admin
description: >-
  You can organize your metafields in your Shopify admin by pinning/unpinning
  metafield definitions.

  The order of your pinned metafield definitions determines the order in which
  your metafields are displayed

  on the corresponding pages in your Shopify admin. By default, only pinned
  metafields are automatically displayed.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionPin
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionPin.md
---

# metafield​Definition​Pin

mutation

Requires API client to have access to the namespace and the resource type associated with the metafield definition.

You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

## Arguments

* definition​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The id of the metafield definition to pin. Using `identifier` is preferred.

* identifier

  [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

  The identifier of the metafield definition to pin.

***

## Metafield​Definition​Pin​Payload returns

* pinned​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was pinned.

* user​Errors

  [\[Metafield​Definition​Pin​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionPinUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Pin a metafield definition

  #### Description

  Pin a metafield definition so it's automatically displayed in the Shopify admin for the corresponding resource.

  #### Query

  ```graphql
  mutation metafieldDefinitionPin($definitionId: ID!) {
    metafieldDefinitionPin(definitionId: $definitionId) {
      pinnedDefinition {
        name
        key
        namespace
        pinnedPosition
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
    "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation metafieldDefinitionPin($definitionId: ID!) { metafieldDefinitionPin(definitionId: $definitionId) { pinnedDefinition { name key namespace pinnedPosition } userErrors { field message } } }",
   "variables": {
      "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
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
    mutation metafieldDefinitionPin($definitionId: ID!) {
      metafieldDefinitionPin(definitionId: $definitionId) {
        pinnedDefinition {
          name
          key
          namespace
          pinnedPosition
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
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
    mutation metafieldDefinitionPin($definitionId: ID!) {
      metafieldDefinitionPin(definitionId: $definitionId) {
        pinnedDefinition {
          name
          key
          namespace
          pinnedPosition
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation metafieldDefinitionPin($definitionId: ID!) {
        metafieldDefinitionPin(definitionId: $definitionId) {
          pinnedDefinition {
            name
            key
            namespace
            pinnedPosition
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "metafieldDefinitionPin": {
      "pinnedDefinition": {
        "name": "Instructions to wash your product",
        "key": "wash",
        "namespace": "instructions",
        "pinnedPosition": 1
      },
      "userErrors": []
    }
  }
  ```

* ### metafieldDefinitionPin reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20metafieldDefinitionPin\(%24definitionId%3A%20ID!\)%20%7B%0A%20%20metafieldDefinitionPin\(definitionId%3A%20%24definitionId\)%20%7B%0A%20%20%20%20pinnedDefinition%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20pinnedPosition%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22definitionId%22%3A%20%22gid%3A%2F%2Fshopify%2FMetafieldDefinition%2F1071456171%22%0A%7D)

##### GQL

```graphql
mutation metafieldDefinitionPin($definitionId: ID!) {
  metafieldDefinitionPin(definitionId: $definitionId) {
    pinnedDefinition {
      name
      key
      namespace
      pinnedPosition
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
"query": "mutation metafieldDefinitionPin($definitionId: ID!) { metafieldDefinitionPin(definitionId: $definitionId) { pinnedDefinition { name key namespace pinnedPosition } userErrors { field message } } }",
 "variables": {
    "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
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
  mutation metafieldDefinitionPin($definitionId: ID!) {
    metafieldDefinitionPin(definitionId: $definitionId) {
      pinnedDefinition {
        name
        key
        namespace
        pinnedPosition
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
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
    "query": `mutation metafieldDefinitionPin($definitionId: ID!) {
      metafieldDefinitionPin(definitionId: $definitionId) {
        pinnedDefinition {
          name
          key
          namespace
          pinnedPosition
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
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
  mutation metafieldDefinitionPin($definitionId: ID!) {
    metafieldDefinitionPin(definitionId: $definitionId) {
      pinnedDefinition {
        name
        key
        namespace
        pinnedPosition
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
}
```

## Response

JSON

```json
{
  "metafieldDefinitionPin": {
    "pinnedDefinition": {
      "name": "Instructions to wash your product",
      "key": "wash",
      "namespace": "instructions",
      "pinnedPosition": 1
    },
    "userErrors": []
  }
}
```
