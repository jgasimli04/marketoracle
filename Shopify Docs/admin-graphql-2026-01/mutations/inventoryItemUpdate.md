---
title: inventoryItemUpdate - GraphQL Admin
description: >-
  Updates an
  [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)'s
  properties including whether inventory is tracked, cost, SKU, and whether
  shipping is required. Inventory items represent the goods available to be
  shipped to customers.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryItemUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryItemUpdate.md
---

# inventory​Item​Update

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to update an inventory item.

Updates an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)'s properties including whether inventory is tracked, cost, SKU, and whether shipping is required. Inventory items represent the goods available to be shipped to customers.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory item to update.

* input

  [Inventory​Item​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput)

  required

  The input fields that update an [`inventoryItem`](https://shopify.dev/api/admin-graphql/latest/queries/inventoryitem).

***

## Inventory​Item​Update​Payload returns

* inventory​Item

  [Inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  The inventory item that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Updates an existing inventory item

  #### Query

  ```graphql
  mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
    inventoryItemUpdate(id: $id, input: $input) {
      inventoryItem {
        id
        unitCost {
          amount
        }
        tracked
        countryCodeOfOrigin
        provinceCodeOfOrigin
        harmonizedSystemCode
        countryHarmonizedSystemCodes(first: 1) {
          edges {
            node {
              harmonizedSystemCode
              countryCode
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/InventoryItem/43729076",
    "input": {
      "cost": 145.89,
      "tracked": false,
      "countryCodeOfOrigin": "US",
      "provinceCodeOfOrigin": "OR",
      "harmonizedSystemCode": "621710",
      "countryHarmonizedSystemCodes": [
        {
          "harmonizedSystemCode": "6217109510",
          "countryCode": "CA"
        }
      ]
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
  "query": "mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) { inventoryItemUpdate(id: $id, input: $input) { inventoryItem { id unitCost { amount } tracked countryCodeOfOrigin provinceCodeOfOrigin harmonizedSystemCode countryHarmonizedSystemCodes(first: 1) { edges { node { harmonizedSystemCode countryCode } } } } userErrors { message } } }",
   "variables": {
      "id": "gid://shopify/InventoryItem/43729076",
      "input": {
        "cost": 145.89,
        "tracked": false,
        "countryCodeOfOrigin": "US",
        "provinceCodeOfOrigin": "OR",
        "harmonizedSystemCode": "621710",
        "countryHarmonizedSystemCodes": [
          {
            "harmonizedSystemCode": "6217109510",
            "countryCode": "CA"
          }
        ]
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
    mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
      inventoryItemUpdate(id: $id, input: $input) {
        inventoryItem {
          id
          unitCost {
            amount
          }
          tracked
          countryCodeOfOrigin
          provinceCodeOfOrigin
          harmonizedSystemCode
          countryHarmonizedSystemCodes(first: 1) {
            edges {
              node {
                harmonizedSystemCode
                countryCode
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/InventoryItem/43729076",
          "input": {
              "cost": 145.89,
              "tracked": false,
              "countryCodeOfOrigin": "US",
              "provinceCodeOfOrigin": "OR",
              "harmonizedSystemCode": "621710",
              "countryHarmonizedSystemCodes": [
                  {
                      "harmonizedSystemCode": "6217109510",
                      "countryCode": "CA"
                  }
              ]
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
    mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
      inventoryItemUpdate(id: $id, input: $input) {
        inventoryItem {
          id
          unitCost {
            amount
          }
          tracked
          countryCodeOfOrigin
          provinceCodeOfOrigin
          harmonizedSystemCode
          countryHarmonizedSystemCodes(first: 1) {
            edges {
              node {
                harmonizedSystemCode
                countryCode
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/InventoryItem/43729076",
    "input": {
      "cost": 145.89,
      "tracked": false,
      "countryCodeOfOrigin": "US",
      "provinceCodeOfOrigin": "OR",
      "harmonizedSystemCode": "621710",
      "countryHarmonizedSystemCodes": [
        {
          "harmonizedSystemCode": "6217109510",
          "countryCode": "CA"
        }
      ]
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
        inventoryItemUpdate(id: $id, input: $input) {
          inventoryItem {
            id
            unitCost {
              amount
            }
            tracked
            countryCodeOfOrigin
            provinceCodeOfOrigin
            harmonizedSystemCode
            countryHarmonizedSystemCodes(first: 1) {
              edges {
                node {
                  harmonizedSystemCode
                  countryCode
                }
              }
            }
          }
          userErrors {
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/InventoryItem/43729076",
          "input": {
              "cost": 145.89,
              "tracked": false,
              "countryCodeOfOrigin": "US",
              "provinceCodeOfOrigin": "OR",
              "harmonizedSystemCode": "621710",
              "countryHarmonizedSystemCodes": [
                  {
                      "harmonizedSystemCode": "6217109510",
                      "countryCode": "CA"
                  }
              ]
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "inventoryItemUpdate": {
      "inventoryItem": {
        "id": "gid://shopify/InventoryItem/43729076",
        "unitCost": {
          "amount": "145.89"
        },
        "tracked": false,
        "countryCodeOfOrigin": "US",
        "provinceCodeOfOrigin": "OR",
        "harmonizedSystemCode": "621710",
        "countryHarmonizedSystemCodes": {
          "edges": [
            {
              "node": {
                "harmonizedSystemCode": "6217109510",
                "countryCode": "CA"
              }
            }
          ]
        }
      },
      "userErrors": []
    }
  }
  ```

* ### inventoryItemUpdate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20inventoryItemUpdate\(%24id%3A%20ID!%2C%20%24input%3A%20InventoryItemInput!\)%20%7B%0A%20%20inventoryItemUpdate\(id%3A%20%24id%2C%20input%3A%20%24input\)%20%7B%0A%20%20%20%20inventoryItem%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20unitCost%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20tracked%0A%20%20%20%20%20%20countryCodeOfOrigin%0A%20%20%20%20%20%20provinceCodeOfOrigin%0A%20%20%20%20%20%20harmonizedSystemCode%0A%20%20%20%20%20%20countryHarmonizedSystemCodes\(first%3A%201\)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20harmonizedSystemCode%0A%20%20%20%20%20%20%20%20%20%20%20%20countryCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F43729076%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22cost%22%3A%20145.89%2C%0A%20%20%20%20%22tracked%22%3A%20false%2C%0A%20%20%20%20%22countryCodeOfOrigin%22%3A%20%22US%22%2C%0A%20%20%20%20%22provinceCodeOfOrigin%22%3A%20%22OR%22%2C%0A%20%20%20%20%22harmonizedSystemCode%22%3A%20%22621710%22%2C%0A%20%20%20%20%22countryHarmonizedSystemCodes%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22harmonizedSystemCode%22%3A%20%226217109510%22%2C%0A%20%20%20%20%20%20%20%20%22countryCode%22%3A%20%22CA%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
  inventoryItemUpdate(id: $id, input: $input) {
    inventoryItem {
      id
      unitCost {
        amount
      }
      tracked
      countryCodeOfOrigin
      provinceCodeOfOrigin
      harmonizedSystemCode
      countryHarmonizedSystemCodes(first: 1) {
        edges {
          node {
            harmonizedSystemCode
            countryCode
          }
        }
      }
    }
    userErrors {
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
"query": "mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) { inventoryItemUpdate(id: $id, input: $input) { inventoryItem { id unitCost { amount } tracked countryCodeOfOrigin provinceCodeOfOrigin harmonizedSystemCode countryHarmonizedSystemCodes(first: 1) { edges { node { harmonizedSystemCode countryCode } } } } userErrors { message } } }",
 "variables": {
    "id": "gid://shopify/InventoryItem/43729076",
    "input": {
      "cost": 145.89,
      "tracked": false,
      "countryCodeOfOrigin": "US",
      "provinceCodeOfOrigin": "OR",
      "harmonizedSystemCode": "621710",
      "countryHarmonizedSystemCodes": [
        {
          "harmonizedSystemCode": "6217109510",
          "countryCode": "CA"
        }
      ]
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
  mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
    inventoryItemUpdate(id: $id, input: $input) {
      inventoryItem {
        id
        unitCost {
          amount
        }
        tracked
        countryCodeOfOrigin
        provinceCodeOfOrigin
        harmonizedSystemCode
        countryHarmonizedSystemCodes(first: 1) {
          edges {
            node {
              harmonizedSystemCode
              countryCode
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/InventoryItem/43729076",
        "input": {
            "cost": 145.89,
            "tracked": false,
            "countryCodeOfOrigin": "US",
            "provinceCodeOfOrigin": "OR",
            "harmonizedSystemCode": "621710",
            "countryHarmonizedSystemCodes": [
                {
                    "harmonizedSystemCode": "6217109510",
                    "countryCode": "CA"
                }
            ]
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
    "query": `mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
      inventoryItemUpdate(id: $id, input: $input) {
        inventoryItem {
          id
          unitCost {
            amount
          }
          tracked
          countryCodeOfOrigin
          provinceCodeOfOrigin
          harmonizedSystemCode
          countryHarmonizedSystemCodes(first: 1) {
            edges {
              node {
                harmonizedSystemCode
                countryCode
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/InventoryItem/43729076",
        "input": {
            "cost": 145.89,
            "tracked": false,
            "countryCodeOfOrigin": "US",
            "provinceCodeOfOrigin": "OR",
            "harmonizedSystemCode": "621710",
            "countryHarmonizedSystemCodes": [
                {
                    "harmonizedSystemCode": "6217109510",
                    "countryCode": "CA"
                }
            ]
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
  mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
    inventoryItemUpdate(id: $id, input: $input) {
      inventoryItem {
        id
        unitCost {
          amount
        }
        tracked
        countryCodeOfOrigin
        provinceCodeOfOrigin
        harmonizedSystemCode
        countryHarmonizedSystemCodes(first: 1) {
          edges {
            node {
              harmonizedSystemCode
              countryCode
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/InventoryItem/43729076",
  "input": {
    "cost": 145.89,
    "tracked": false,
    "countryCodeOfOrigin": "US",
    "provinceCodeOfOrigin": "OR",
    "harmonizedSystemCode": "621710",
    "countryHarmonizedSystemCodes": [
      {
        "harmonizedSystemCode": "6217109510",
        "countryCode": "CA"
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/InventoryItem/43729076",
  "input": {
    "cost": 145.89,
    "tracked": false,
    "countryCodeOfOrigin": "US",
    "provinceCodeOfOrigin": "OR",
    "harmonizedSystemCode": "621710",
    "countryHarmonizedSystemCodes": [
      {
        "harmonizedSystemCode": "6217109510",
        "countryCode": "CA"
      }
    ]
  }
}
```

## Response

JSON

```json
{
  "inventoryItemUpdate": {
    "inventoryItem": {
      "id": "gid://shopify/InventoryItem/43729076",
      "unitCost": {
        "amount": "145.89"
      },
      "tracked": false,
      "countryCodeOfOrigin": "US",
      "provinceCodeOfOrigin": "OR",
      "harmonizedSystemCode": "621710",
      "countryHarmonizedSystemCodes": {
        "edges": [
          {
            "node": {
              "harmonizedSystemCode": "6217109510",
              "countryCode": "CA"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
```
