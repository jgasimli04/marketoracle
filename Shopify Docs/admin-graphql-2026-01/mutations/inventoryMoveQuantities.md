---
title: inventoryMoveQuantities - GraphQL Admin
description: >-
  Moves inventory quantities for a single inventory item between different
  states at a single location. Use this mutation to reallocate inventory across
  quantity states without moving it between locations.


  Each change specifies the quantity to move, the source state and location, and
  the destination state and location. The mutation returns an
  [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)
  that tracks all changes made in a single operation, providing an audit trail
  with the reason and reference document URI.


  > Caution:

  > As of version `2026-01`, this mutation supports an optional idempotency key
  using the `@idempotent` directive.

  > As of version `2026-04`, the idempotency key is required and must be
  provided using the `@idempotent` directive.

  > For more information, see the [idempotency
  documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryMoveQuantities
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryMoveQuantities.md
---

# inventory​Move​Quantities

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to move an inventory.

Moves inventory quantities for a single inventory item between different states at a single location. Use this mutation to reallocate inventory across quantity states without moving it between locations.

Each change specifies the quantity to move, the source state and location, and the destination state and location. The mutation returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that tracks all changes made in a single operation, providing an audit trail with the reason and reference document URI.

***

Caution

As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* input

  [Inventory​Move​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantitiesInput)

  required

  The information required to move inventory quantities.

***

## Inventory​Move​Quantities​Payload returns

* inventory​Adjustment​Group

  [Inventory​Adjustment​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

  The group of changes made by the operation.

* user​Errors

  [\[Inventory​Move​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryMoveQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Move 10 items from available to reserved, with reason damaged.

  #### Query

  ```graphql
  mutation inventoryMoveQuantities($input: InventoryMoveQuantitiesInput!, $quantityNames: [String!]) {
    inventoryMoveQuantities(input: $input) {
      userErrors {
        field
        message
        code
      }
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes(quantityNames: $quantityNames) {
          name
          delta
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "reason": "damaged",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "changes": [
        {
          "quantity": 10,
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "from": {
            "locationId": "gid://shopify/Location/124656943",
            "name": "available",
            "ledgerDocumentUri": null
          },
          "to": {
            "locationId": "gid://shopify/Location/124656943",
            "name": "reserved",
            "ledgerDocumentUri": "logistics://toronto.warehouse/work-orders/2023-01-04/2"
          }
        }
      ]
    },
    "quantityNames": [
      "committed",
      "reserved",
      "safety_stock",
      "quality_control",
      "damaged",
      "available",
      "on_hand",
      "incoming"
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
  "query": "mutation inventoryMoveQuantities($input: InventoryMoveQuantitiesInput!, $quantityNames: [String!]) { inventoryMoveQuantities(input: $input) { userErrors { field message code } inventoryAdjustmentGroup { createdAt reason referenceDocumentUri changes(quantityNames: $quantityNames) { name delta } } } }",
   "variables": {
      "input": {
        "reason": "damaged",
        "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
        "changes": [
          {
            "quantity": 10,
            "inventoryItemId": "gid://shopify/InventoryItem/30322695",
            "from": {
              "locationId": "gid://shopify/Location/124656943",
              "name": "available",
              "ledgerDocumentUri": null
            },
            "to": {
              "locationId": "gid://shopify/Location/124656943",
              "name": "reserved",
              "ledgerDocumentUri": "logistics://toronto.warehouse/work-orders/2023-01-04/2"
            }
          }
        ]
      },
      "quantityNames": [
        "committed",
        "reserved",
        "safety_stock",
        "quality_control",
        "damaged",
        "available",
        "on_hand",
        "incoming"
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
    mutation inventoryMoveQuantities($input: InventoryMoveQuantitiesInput!, $quantityNames: [String!]) {
      inventoryMoveQuantities(input: $input) {
        userErrors {
          field
          message
          code
        }
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes(quantityNames: $quantityNames) {
            name
            delta
          }
        }
      }
    }`,
    {
      variables: {
          "input": {
              "reason": "damaged",
              "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
              "changes": [
                  {
                      "quantity": 10,
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "from": {
                          "locationId": "gid://shopify/Location/124656943",
                          "name": "available",
                          "ledgerDocumentUri": null
                      },
                      "to": {
                          "locationId": "gid://shopify/Location/124656943",
                          "name": "reserved",
                          "ledgerDocumentUri": "logistics://toronto.warehouse/work-orders/2023-01-04/2"
                      }
                  }
              ]
          },
          "quantityNames": [
              "committed",
              "reserved",
              "safety_stock",
              "quality_control",
              "damaged",
              "available",
              "on_hand",
              "incoming"
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
    mutation inventoryMoveQuantities($input: InventoryMoveQuantitiesInput!, $quantityNames: [String!]) {
      inventoryMoveQuantities(input: $input) {
        userErrors {
          field
          message
          code
        }
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes(quantityNames: $quantityNames) {
            name
            delta
          }
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "reason": "damaged",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "changes": [
        {
          "quantity": 10,
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "from": {
            "locationId": "gid://shopify/Location/124656943",
            "name": "available",
            "ledgerDocumentUri": null
          },
          "to": {
            "locationId": "gid://shopify/Location/124656943",
            "name": "reserved",
            "ledgerDocumentUri": "logistics://toronto.warehouse/work-orders/2023-01-04/2"
          }
        }
      ]
    },
    "quantityNames": [
      "committed",
      "reserved",
      "safety_stock",
      "quality_control",
      "damaged",
      "available",
      "on_hand",
      "incoming"
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation inventoryMoveQuantities($input: InventoryMoveQuantitiesInput!, $quantityNames: [String!]) {
        inventoryMoveQuantities(input: $input) {
          userErrors {
            field
            message
            code
          }
          inventoryAdjustmentGroup {
            createdAt
            reason
            referenceDocumentUri
            changes(quantityNames: $quantityNames) {
              name
              delta
            }
          }
        }
      }`,
      "variables": {
          "input": {
              "reason": "damaged",
              "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
              "changes": [
                  {
                      "quantity": 10,
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "from": {
                          "locationId": "gid://shopify/Location/124656943",
                          "name": "available",
                          "ledgerDocumentUri": null
                      },
                      "to": {
                          "locationId": "gid://shopify/Location/124656943",
                          "name": "reserved",
                          "ledgerDocumentUri": "logistics://toronto.warehouse/work-orders/2023-01-04/2"
                      }
                  }
              ]
          },
          "quantityNames": [
              "committed",
              "reserved",
              "safety_stock",
              "quality_control",
              "damaged",
              "available",
              "on_hand",
              "incoming"
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "inventoryMoveQuantities": {
      "userErrors": [],
      "inventoryAdjustmentGroup": {
        "createdAt": "2024-09-12T01:06:28Z",
        "reason": "Damaged",
        "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
        "changes": [
          {
            "name": "available",
            "delta": -10
          },
          {
            "name": "reserved",
            "delta": 10
          }
        ]
      }
    }
  }
  ```

* ### inventoryMoveQuantities reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20inventoryMoveQuantities\(%24input%3A%20InventoryMoveQuantitiesInput!%2C%20%24quantityNames%3A%20%5BString!%5D\)%20%7B%0A%20%20inventoryMoveQuantities\(input%3A%20%24input\)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%20%20inventoryAdjustmentGroup%20%7B%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20reason%0A%20%20%20%20%20%20referenceDocumentUri%0A%20%20%20%20%20%20changes\(quantityNames%3A%20%24quantityNames\)%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20delta%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22reason%22%3A%20%22damaged%22%2C%0A%20%20%20%20%22referenceDocumentUri%22%3A%20%22logistics%3A%2F%2Fsome.warehouse%2Ftake%2F2023-01-23T13%3A14%3A15Z%22%2C%0A%20%20%20%20%22changes%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%2010%2C%0A%20%20%20%20%20%20%20%20%22inventoryItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F30322695%22%2C%0A%20%20%20%20%20%20%20%20%22from%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F124656943%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22available%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22ledgerDocumentUri%22%3A%20null%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22to%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F124656943%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22reserved%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22ledgerDocumentUri%22%3A%20%22logistics%3A%2F%2Ftoronto.warehouse%2Fwork-orders%2F2023-01-04%2F2%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22quantityNames%22%3A%20%5B%0A%20%20%20%20%22committed%22%2C%0A%20%20%20%20%22reserved%22%2C%0A%20%20%20%20%22safety_stock%22%2C%0A%20%20%20%20%22quality_control%22%2C%0A%20%20%20%20%22damaged%22%2C%0A%20%20%20%20%22available%22%2C%0A%20%20%20%20%22on_hand%22%2C%0A%20%20%20%20%22incoming%22%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation inventoryMoveQuantities($input: InventoryMoveQuantitiesInput!, $quantityNames: [String!]) {
  inventoryMoveQuantities(input: $input) {
    userErrors {
      field
      message
      code
    }
    inventoryAdjustmentGroup {
      createdAt
      reason
      referenceDocumentUri
      changes(quantityNames: $quantityNames) {
        name
        delta
      }
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
"query": "mutation inventoryMoveQuantities($input: InventoryMoveQuantitiesInput!, $quantityNames: [String!]) { inventoryMoveQuantities(input: $input) { userErrors { field message code } inventoryAdjustmentGroup { createdAt reason referenceDocumentUri changes(quantityNames: $quantityNames) { name delta } } } }",
 "variables": {
    "input": {
      "reason": "damaged",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "changes": [
        {
          "quantity": 10,
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "from": {
            "locationId": "gid://shopify/Location/124656943",
            "name": "available",
            "ledgerDocumentUri": null
          },
          "to": {
            "locationId": "gid://shopify/Location/124656943",
            "name": "reserved",
            "ledgerDocumentUri": "logistics://toronto.warehouse/work-orders/2023-01-04/2"
          }
        }
      ]
    },
    "quantityNames": [
      "committed",
      "reserved",
      "safety_stock",
      "quality_control",
      "damaged",
      "available",
      "on_hand",
      "incoming"
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
  mutation inventoryMoveQuantities($input: InventoryMoveQuantitiesInput!, $quantityNames: [String!]) {
    inventoryMoveQuantities(input: $input) {
      userErrors {
        field
        message
        code
      }
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes(quantityNames: $quantityNames) {
          name
          delta
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "reason": "damaged",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "changes": [
                {
                    "quantity": 10,
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "from": {
                        "locationId": "gid://shopify/Location/124656943",
                        "name": "available",
                        "ledgerDocumentUri": null
                    },
                    "to": {
                        "locationId": "gid://shopify/Location/124656943",
                        "name": "reserved",
                        "ledgerDocumentUri": "logistics://toronto.warehouse/work-orders/2023-01-04/2"
                    }
                }
            ]
        },
        "quantityNames": [
            "committed",
            "reserved",
            "safety_stock",
            "quality_control",
            "damaged",
            "available",
            "on_hand",
            "incoming"
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
    "query": `mutation inventoryMoveQuantities($input: InventoryMoveQuantitiesInput!, $quantityNames: [String!]) {
      inventoryMoveQuantities(input: $input) {
        userErrors {
          field
          message
          code
        }
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes(quantityNames: $quantityNames) {
            name
            delta
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "reason": "damaged",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "changes": [
                {
                    "quantity": 10,
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "from": {
                        "locationId": "gid://shopify/Location/124656943",
                        "name": "available",
                        "ledgerDocumentUri": null
                    },
                    "to": {
                        "locationId": "gid://shopify/Location/124656943",
                        "name": "reserved",
                        "ledgerDocumentUri": "logistics://toronto.warehouse/work-orders/2023-01-04/2"
                    }
                }
            ]
        },
        "quantityNames": [
            "committed",
            "reserved",
            "safety_stock",
            "quality_control",
            "damaged",
            "available",
            "on_hand",
            "incoming"
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
  mutation inventoryMoveQuantities($input: InventoryMoveQuantitiesInput!, $quantityNames: [String!]) {
    inventoryMoveQuantities(input: $input) {
      userErrors {
        field
        message
        code
      }
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes(quantityNames: $quantityNames) {
          name
          delta
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "reason": "damaged",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "changes": [
      {
        "quantity": 10,
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "from": {
          "locationId": "gid://shopify/Location/124656943",
          "name": "available",
          "ledgerDocumentUri": null
        },
        "to": {
          "locationId": "gid://shopify/Location/124656943",
          "name": "reserved",
          "ledgerDocumentUri": "logistics://toronto.warehouse/work-orders/2023-01-04/2"
        }
      }
    ]
  },
  "quantityNames": [
    "committed",
    "reserved",
    "safety_stock",
    "quality_control",
    "damaged",
    "available",
    "on_hand",
    "incoming"
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "input": {
    "reason": "damaged",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "changes": [
      {
        "quantity": 10,
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "from": {
          "locationId": "gid://shopify/Location/124656943",
          "name": "available",
          "ledgerDocumentUri": null
        },
        "to": {
          "locationId": "gid://shopify/Location/124656943",
          "name": "reserved",
          "ledgerDocumentUri": "logistics://toronto.warehouse/work-orders/2023-01-04/2"
        }
      }
    ]
  },
  "quantityNames": [
    "committed",
    "reserved",
    "safety_stock",
    "quality_control",
    "damaged",
    "available",
    "on_hand",
    "incoming"
  ]
}
```

## Response

JSON

```json
{
  "inventoryMoveQuantities": {
    "userErrors": [],
    "inventoryAdjustmentGroup": {
      "createdAt": "2024-09-12T01:06:28Z",
      "reason": "Damaged",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "changes": [
        {
          "name": "available",
          "delta": -10
        },
        {
          "name": "reserved",
          "delta": 10
        }
      ]
    }
  }
}
```
