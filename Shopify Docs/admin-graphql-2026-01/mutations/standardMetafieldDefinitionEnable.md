---
title: standardMetafieldDefinitionEnable - GraphQL Admin
description: >-
  Activates the specified standard metafield definition from its template.


  Refer to the [list of standard metafield definition
  templates](https://shopify.dev/apps/metafields/definitions/standard-definitions).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable.md
---

# standard​Metafield​Definition​Enable

mutation

Requires API client to have access to the resource type associated with the metafield definition owner type.

Activates the specified standard metafield definition from its template.

Refer to the [list of standard metafield definition templates](https://shopify.dev/apps/metafields/definitions/standard-definitions).

## Arguments

* access

  [Standard​Metafield​Definition​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StandardMetafieldDefinitionAccessInput)

  The access settings that apply to each of the metafields that belong to the metafield definition.

* capabilities

  [Metafield​Capability​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldCapabilityCreateInput)

  The capabilities of the metafield definition.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the standard metafield definition template to enable.

* key

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The key of the standard metafield to enable. Used in combination with `namespace`.

* namespace

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The namespace of the standard metafield to enable. Used in combination with `key`.

* owner​Type

  [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

  required

  The resource type that the metafield definition is scoped to.

* pin

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:null

  Whether to pin the metafield definition.

### Deprecated arguments

* use​As​Collection​Condition

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  DeprecatedDefault:null

* visible​To​Storefront​Api

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  DeprecatedDefault:null

***

## Standard​Metafield​Definition​Enable​Payload returns

* created​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was created.

* user​Errors

  [\[Standard​Metafield​Definition​Enable​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionEnableUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Creates a metafield definition from an existing template

  #### Description

  Create a metafield definition from the standard templates.

  #### Query

  ```graphql
  mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
    standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
      createdDefinition {
        name
        key
        namespace
        description
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
    "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
    "ownerType": "PRODUCT",
    "pin": false,
    "visibleToStorefrontApi": true
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) { standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) { createdDefinition { name key namespace description } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
      "ownerType": "PRODUCT",
      "pin": false,
      "visibleToStorefrontApi": true
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
    mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
      standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
        createdDefinition {
          name
          key
          namespace
          description
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
          "ownerType": "PRODUCT",
          "pin": false,
          "visibleToStorefrontApi": true
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
    mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
      standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
        createdDefinition {
          name
          key
          namespace
          description
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
    "ownerType": "PRODUCT",
    "pin": false,
    "visibleToStorefrontApi": true
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
        standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
          createdDefinition {
            name
            key
            namespace
            description
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
          "ownerType": "PRODUCT",
          "pin": false,
          "visibleToStorefrontApi": true
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "standardMetafieldDefinitionEnable": {
      "createdDefinition": {
        "name": "Care guide",
        "key": "care_guide",
        "namespace": "descriptors",
        "description": "Instructions for taking care of a product or apparel"
      },
      "userErrors": []
    }
  }
  ```

* ### standardMetafieldDefinitionEnable reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20standardMetafieldDefinitionEnable\(%24id%3A%20ID!%2C%20%24ownerType%3A%20MetafieldOwnerType!%2C%20%24pin%3A%20Boolean!%2C%20%24visibleToStorefrontApi%3A%20Boolean!\)%20%7B%0A%20%20standardMetafieldDefinitionEnable\(id%3A%20%24id%2C%20ownerType%3A%20%24ownerType%2C%20pin%3A%20%24pin%2C%20visibleToStorefrontApi%3A%20%24visibleToStorefrontApi\)%20%7B%0A%20%20%20%20createdDefinition%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20description%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FStandardMetafieldDefinitionTemplate%2F2%22%2C%0A%20%20%22ownerType%22%3A%20%22PRODUCT%22%2C%0A%20%20%22pin%22%3A%20false%2C%0A%20%20%22visibleToStorefrontApi%22%3A%20true%0A%7D)

##### GQL

```graphql
mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
  standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
    createdDefinition {
      name
      key
      namespace
      description
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
"query": "mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) { standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) { createdDefinition { name key namespace description } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
    "ownerType": "PRODUCT",
    "pin": false,
    "visibleToStorefrontApi": true
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
  mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
    standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
      createdDefinition {
        name
        key
        namespace
        description
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
        "ownerType": "PRODUCT",
        "pin": false,
        "visibleToStorefrontApi": true
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
    "query": `mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
      standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
        createdDefinition {
          name
          key
          namespace
          description
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
        "ownerType": "PRODUCT",
        "pin": false,
        "visibleToStorefrontApi": true
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
  mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
    standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
      createdDefinition {
        name
        key
        namespace
        description
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
  "ownerType": "PRODUCT",
  "pin": false,
  "visibleToStorefrontApi": true
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
  "ownerType": "PRODUCT",
  "pin": false,
  "visibleToStorefrontApi": true
}
```

## Response

JSON

```json
{
  "standardMetafieldDefinitionEnable": {
    "createdDefinition": {
      "name": "Care guide",
      "key": "care_guide",
      "namespace": "descriptors",
      "description": "Instructions for taking care of a product or apparel"
    },
    "userErrors": []
  }
}
```
