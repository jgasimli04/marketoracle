---
title: inventoryAdjustQuantities - GraphQL Admin
description: >-
  Adjusts quantities for inventory items by applying incremental changes at
  specific locations. Each adjustment modifies the quantity by a delta value
  rather than setting an absolute amount.


  The mutation tracks adjustments with a reason code and optional reference URI
  for audit trails. Returns an
  [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)
  that records all changes made in the operation.


  Learn more about [managing inventory quantities and
  states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#adjust-inventory-quantities).


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
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities.md
---

# inventory​Adjust​Quantities

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to apply changes to inventory quantities.

Adjusts quantities for inventory items by applying incremental changes at specific locations. Each adjustment modifies the quantity by a delta value rather than setting an absolute amount.

The mutation tracks adjustments with a reason code and optional reference URI for audit trails. Returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that records all changes made in the operation.

Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#adjust-inventory-quantities).

***

Caution

As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* input

  [Inventory​Adjust​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryAdjustQuantitiesInput)

  required

  The information required to adjust inventory quantities.

***

## Inventory​Adjust​Quantities​Payload returns

* inventory​Adjustment​Group

  [Inventory​Adjustment​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

  The group of changes made by the operation.

* user​Errors

  [\[Inventory​Adjust​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Adjusts the inventory level of an inventory item at a location

  #### Query

  ```graphql
  mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
    inventoryAdjustQuantities(input: $input) {
      userErrors {
        field
        message
      }
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
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
      "reason": "correction",
      "name": "available",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
      "changes": [
        {
          "delta": -4,
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943"
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
  "query": "mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) { inventoryAdjustQuantities(input: $input) { userErrors { field message } inventoryAdjustmentGroup { createdAt reason referenceDocumentUri changes { name delta } } } }",
   "variables": {
      "input": {
        "reason": "correction",
        "name": "available",
        "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
        "changes": [
          {
            "delta": -4,
            "inventoryItemId": "gid://shopify/InventoryItem/30322695",
            "locationId": "gid://shopify/Location/124656943"
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
    mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
      inventoryAdjustQuantities(input: $input) {
        userErrors {
          field
          message
        }
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes {
            name
            delta
          }
        }
      }
    }`,
    {
      variables: {
          "input": {
              "reason": "correction",
              "name": "available",
              "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
              "changes": [
                  {
                      "delta": -4,
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "locationId": "gid://shopify/Location/124656943"
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
    mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
      inventoryAdjustQuantities(input: $input) {
        userErrors {
          field
          message
        }
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes {
            name
            delta
          }
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "reason": "correction",
      "name": "available",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
      "changes": [
        {
          "delta": -4,
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943"
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
      "query": `mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
        inventoryAdjustQuantities(input: $input) {
          userErrors {
            field
            message
          }
          inventoryAdjustmentGroup {
            createdAt
            reason
            referenceDocumentUri
            changes {
              name
              delta
            }
          }
        }
      }`,
      "variables": {
          "input": {
              "reason": "correction",
              "name": "available",
              "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
              "changes": [
                  {
                      "delta": -4,
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "locationId": "gid://shopify/Location/124656943"
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
    "inventoryAdjustQuantities": {
      "userErrors": [],
      "inventoryAdjustmentGroup": {
        "createdAt": "2024-11-07T21:47:12Z",
        "reason": "Inventory correction",
        "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
        "changes": [
          {
            "name": "available",
            "delta": -4
          },
          {
            "name": "on_hand",
            "delta": -4
          }
        ]
      }
    }
  }
  ```

* ### inventoryAdjustQuantities reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20inventoryAdjustQuantities\(%24input%3A%20InventoryAdjustQuantitiesInput!\)%20%7B%0A%20%20inventoryAdjustQuantities\(input%3A%20%24input\)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20inventoryAdjustmentGroup%20%7B%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20reason%0A%20%20%20%20%20%20referenceDocumentUri%0A%20%20%20%20%20%20changes%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20delta%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22reason%22%3A%20%22correction%22%2C%0A%20%20%20%20%22name%22%3A%20%22available%22%2C%0A%20%20%20%20%22referenceDocumentUri%22%3A%20%22logistics%3A%2F%2Fsome.warehouse%2Ftake%2F2023-01%2F13%22%2C%0A%20%20%20%20%22changes%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22delta%22%3A%20-4%2C%0A%20%20%20%20%20%20%20%20%22inventoryItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F30322695%22%2C%0A%20%20%20%20%20%20%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F124656943%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
  inventoryAdjustQuantities(input: $input) {
    userErrors {
      field
      message
    }
    inventoryAdjustmentGroup {
      createdAt
      reason
      referenceDocumentUri
      changes {
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
"query": "mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) { inventoryAdjustQuantities(input: $input) { userErrors { field message } inventoryAdjustmentGroup { createdAt reason referenceDocumentUri changes { name delta } } } }",
 "variables": {
    "input": {
      "reason": "correction",
      "name": "available",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
      "changes": [
        {
          "delta": -4,
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943"
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
  mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
    inventoryAdjustQuantities(input: $input) {
      userErrors {
        field
        message
      }
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "reason": "correction",
            "name": "available",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
            "changes": [
                {
                    "delta": -4,
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943"
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
    "query": `mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
      inventoryAdjustQuantities(input: $input) {
        userErrors {
          field
          message
        }
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes {
            name
            delta
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "reason": "correction",
            "name": "available",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
            "changes": [
                {
                    "delta": -4,
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943"
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
  mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
    inventoryAdjustQuantities(input: $input) {
      userErrors {
        field
        message
      }
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "reason": "correction",
    "name": "available",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
    "changes": [
      {
        "delta": -4,
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943"
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
  "input": {
    "reason": "correction",
    "name": "available",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
    "changes": [
      {
        "delta": -4,
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943"
      }
    ]
  }
}
```

## Response

JSON

```json
{
  "inventoryAdjustQuantities": {
    "userErrors": [],
    "inventoryAdjustmentGroup": {
      "createdAt": "2024-11-07T21:47:12Z",
      "reason": "Inventory correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01/13",
      "changes": [
        {
          "name": "available",
          "delta": -4
        },
        {
          "name": "on_hand",
          "delta": -4
        }
      ]
    }
  }
}
```
