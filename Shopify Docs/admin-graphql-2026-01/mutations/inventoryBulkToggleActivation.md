---
title: inventoryBulkToggleActivation - GraphQL Admin
description: >-
  Activates or deactivates an inventory item at multiple locations. When you
  activate an
  [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)
  at a
  [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location),
  that location can stock and track quantities for that item. When you
  deactivate an inventory item at a location, the inventory item is no longer
  stocked at that location.


  The mutation accepts an inventory item ID and a list of location-specific
  activation settings. It returns the updated inventory item and any activated
  [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)
  objects.


  Learn more about [managing inventory quantities and
  states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation.md
---

# inventory​Bulk​Toggle​Activation

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to update the activation status of an inventory.

Activates or deactivates an inventory item at multiple locations. When you activate an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), that location can stock and track quantities for that item. When you deactivate an inventory item at a location, the inventory item is no longer stocked at that location.

The mutation accepts an inventory item ID and a list of location-specific activation settings. It returns the updated inventory item and any activated [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) objects.

Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

## Arguments

* inventory​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory item to modify the activation status locations for.

* inventory​Item​Updates

  [\[Inventory​Bulk​Toggle​Activation​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryBulkToggleActivationInput)

  required

  A list of pairs of locations and activate status to update for the specified inventory item.

***

## Inventory​Bulk​Toggle​Activation​Payload returns

* inventory​Item

  [Inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  The inventory item that was updated.

* inventory​Levels

  [\[Inventory​Level!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  The activated inventory levels.

* user​Errors

  [\[Inventory​Bulk​Toggle​Activation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryBulkToggleActivationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Activate an inventory item at a location

  #### Query

  ```graphql
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        location {
          id
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/648019273",
        "activate": true
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) { inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) { inventoryItem { id } inventoryLevels { id quantities(names: [\"available\"]) { name quantity } location { id } } userErrors { field message code } } }",
   "variables": {
      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
      "inventoryItemUpdates": [
        {
          "locationId": "gid://shopify/Location/648019273",
          "activate": true
        }
      ]
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
    mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          location {
            id
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "inventoryItemUpdates": [
              {
                  "locationId": "gid://shopify/Location/648019273",
                  "activate": true
              }
          ]
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
    mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          location {
            id
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/648019273",
        "activate": true
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
        inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
          inventoryItem {
            id
          }
          inventoryLevels {
            id
            quantities(names: ["available"]) {
              name
              quantity
            }
            location {
              id
            }
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "inventoryItemUpdates": [
              {
                  "locationId": "gid://shopify/Location/648019273",
                  "activate": true
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "inventoryBulkToggleActivation": {
      "inventoryItem": {
        "id": "gid://shopify/InventoryItem/30322695"
      },
      "inventoryLevels": [
        {
          "id": "gid://shopify/InventoryLevel/30691503?inventory_item_id=30322695",
          "quantities": [
            {
              "name": "available",
              "quantity": 0
            }
          ],
          "location": {
            "id": "gid://shopify/Location/648019273"
          }
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### Deactivate an inventory item at a location

  #### Query

  ```graphql
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/124656943",
        "activate": false
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) { inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) { inventoryItem { id } inventoryLevels { id } userErrors { field message code } } }",
   "variables": {
      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
      "inventoryItemUpdates": [
        {
          "locationId": "gid://shopify/Location/124656943",
          "activate": false
        }
      ]
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
    mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "inventoryItemUpdates": [
              {
                  "locationId": "gid://shopify/Location/124656943",
                  "activate": false
              }
          ]
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
    mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/124656943",
        "activate": false
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
        inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
          inventoryItem {
            id
          }
          inventoryLevels {
            id
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "inventoryItemUpdates": [
              {
                  "locationId": "gid://shopify/Location/124656943",
                  "activate": false
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "inventoryBulkToggleActivation": {
      "inventoryItem": {
        "id": "gid://shopify/InventoryItem/30322695"
      },
      "inventoryLevels": [],
      "userErrors": []
    }
  }
  ```

* ### Toggle an inventory item's activation at two locations

  #### Query

  ```graphql
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        location {
          id
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/124656943",
        "activate": false
      },
      {
        "locationId": "gid://shopify/Location/648019273",
        "activate": true
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) { inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) { inventoryItem { id } inventoryLevels { id quantities(names: [\"available\"]) { name quantity } location { id } } userErrors { field message code } } }",
   "variables": {
      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
      "inventoryItemUpdates": [
        {
          "locationId": "gid://shopify/Location/124656943",
          "activate": false
        },
        {
          "locationId": "gid://shopify/Location/648019273",
          "activate": true
        }
      ]
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
    mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          location {
            id
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "inventoryItemUpdates": [
              {
                  "locationId": "gid://shopify/Location/124656943",
                  "activate": false
              },
              {
                  "locationId": "gid://shopify/Location/648019273",
                  "activate": true
              }
          ]
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
    mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          location {
            id
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/124656943",
        "activate": false
      },
      {
        "locationId": "gid://shopify/Location/648019273",
        "activate": true
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
        inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
          inventoryItem {
            id
          }
          inventoryLevels {
            id
            quantities(names: ["available"]) {
              name
              quantity
            }
            location {
              id
            }
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "inventoryItemUpdates": [
              {
                  "locationId": "gid://shopify/Location/124656943",
                  "activate": false
              },
              {
                  "locationId": "gid://shopify/Location/648019273",
                  "activate": true
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "inventoryBulkToggleActivation": {
      "inventoryItem": {
        "id": "gid://shopify/InventoryItem/30322695"
      },
      "inventoryLevels": [
        {
          "id": "gid://shopify/InventoryLevel/30691503?inventory_item_id=30322695",
          "quantities": [
            {
              "name": "available",
              "quantity": 0
            }
          ],
          "location": {
            "id": "gid://shopify/Location/648019273"
          }
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### inventoryBulkToggleActivation reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20inventoryBulkToggleActivation\(%24inventoryItemId%3A%20ID!%2C%20%24inventoryItemUpdates%3A%20%5BInventoryBulkToggleActivationInput!%5D!\)%20%7B%0A%20%20inventoryBulkToggleActivation\(inventoryItemId%3A%20%24inventoryItemId%2C%20inventoryItemUpdates%3A%20%24inventoryItemUpdates\)%20%7B%0A%20%20%20%20inventoryItem%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20inventoryLevels%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20quantities\(names%3A%20%5B%22available%22%5D\)%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20location%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22inventoryItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F30322695%22%2C%0A%20%20%22inventoryItemUpdates%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F648019273%22%2C%0A%20%20%20%20%20%20%22activate%22%3A%20true%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
  inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
    inventoryItem {
      id
    }
    inventoryLevels {
      id
      quantities(names: ["available"]) {
        name
        quantity
      }
      location {
        id
      }
    }
    userErrors {
      field
      message
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
"query": "mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) { inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) { inventoryItem { id } inventoryLevels { id quantities(names: [\"available\"]) { name quantity } location { id } } userErrors { field message code } } }",
 "variables": {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/648019273",
        "activate": true
      }
    ]
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
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        location {
          id
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "inventoryItemUpdates": [
            {
                "locationId": "gid://shopify/Location/648019273",
                "activate": true
            }
        ]
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
    "query": `mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          location {
            id
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "inventoryItemUpdates": [
            {
                "locationId": "gid://shopify/Location/648019273",
                "activate": true
            }
        ]
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
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        location {
          id
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "inventoryItemId": "gid://shopify/InventoryItem/30322695",
  "inventoryItemUpdates": [
    {
      "locationId": "gid://shopify/Location/648019273",
      "activate": true
    }
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "inventoryItemId": "gid://shopify/InventoryItem/30322695",
  "inventoryItemUpdates": [
    {
      "locationId": "gid://shopify/Location/648019273",
      "activate": true
    }
  ]
}
```

## Response

JSON

```json
{
  "inventoryBulkToggleActivation": {
    "inventoryItem": {
      "id": "gid://shopify/InventoryItem/30322695"
    },
    "inventoryLevels": [
      {
        "id": "gid://shopify/InventoryLevel/30691503?inventory_item_id=30322695",
        "quantities": [
          {
            "name": "available",
            "quantity": 0
          }
        ],
        "location": {
          "id": "gid://shopify/Location/648019273"
        }
      }
    ],
    "userErrors": []
  }
}
```
