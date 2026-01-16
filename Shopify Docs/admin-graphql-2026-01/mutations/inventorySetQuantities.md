---
title: inventorySetQuantities - GraphQL Admin
description: >-
  Set quantities of specified name using absolute values. This mutation supports
  compare-and-set functionality to handle

  concurrent requests properly. If `ignoreCompareQuantity` is not set to true,

  the mutation will only update the quantity if the persisted quantity matches
  the `compareQuantity` value.

  If the `compareQuantity` value does not match the persisted value, the
  mutation will return an error. In order to opt out

  of the `compareQuantity` check, the `ignoreCompareQuantity` argument can be
  set to true.


  > Note:

  > Only use this mutation if calling on behalf of a system that acts as the
  source of truth for inventory quantities,

  > otherwise please consider using the
  [inventoryAdjustQuantities](https://shopify.dev/api/admin-graphql/latest/mutations/inventoryAdjustQuantities)
  mutation.

  >

  >

  > Opting out of the `compareQuantity` check can lead to inaccurate inventory
  quantities if multiple requests are made concurrently.

  > It is recommended to always include the `compareQuantity` value to ensure
  the accuracy of the inventory quantities and to opt out

  > of the check using `ignoreCompareQuantity` only when necessary.


  > Caution:

  > As of 2026-01, this mutation supports an optional idempotency key using the
  `@idempotent` directive.

  > As of 2026-04, the idempotency key is required and must be provided using
  the `@idempotent` directive.

  > For more information, see the [idempotency
  documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities.md
---

# inventory​Set​Quantities

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to update an inventory.

Set quantities of specified name using absolute values. This mutation supports compare-and-set functionality to handle concurrent requests properly. If `ignoreCompareQuantity` is not set to true, the mutation will only update the quantity if the persisted quantity matches the `compareQuantity` value. If the `compareQuantity` value does not match the persisted value, the mutation will return an error. In order to opt out of the `compareQuantity` check, the `ignoreCompareQuantity` argument can be set to true.

***

Note

Only use this mutation if calling on behalf of a system that acts as the source of truth for inventory quantities, otherwise please consider using the [inventoryAdjustQuantities](https://shopify.dev/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) mutation.

Opting out of the `compareQuantity` check can lead to inaccurate inventory quantities if multiple requests are made concurrently. It is recommended to always include the `compareQuantity` value to ensure the accuracy of the inventory quantities and to opt out of the check using `ignoreCompareQuantity` only when necessary.

***

***

Caution

As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* input

  [Inventory​Set​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantitiesInput)

  required

  The information required to set inventory quantities.

***

## Inventory​Set​Quantities​Payload returns

* inventory​Adjustment​Group

  [Inventory​Adjustment​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

  The group of changes made by the operation.

* user​Errors

  [\[Inventory​Set​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Sets the inventory level for an inventory item at a location

  #### Query

  ```graphql
  mutation InventorySet($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
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
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 11,
          "compareQuantity": 1
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
  "query": "mutation InventorySet($input: InventorySetQuantitiesInput!) { inventorySetQuantities(input: $input) { inventoryAdjustmentGroup { createdAt reason referenceDocumentUri changes { name delta } } userErrors { field message } } }",
   "variables": {
      "input": {
        "name": "available",
        "reason": "correction",
        "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
        "quantities": [
          {
            "inventoryItemId": "gid://shopify/InventoryItem/30322695",
            "locationId": "gid://shopify/Location/124656943",
            "quantity": 11,
            "compareQuantity": 1
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
    mutation InventorySet($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes {
            name
            delta
          }
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
              "name": "available",
              "reason": "correction",
              "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
              "quantities": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "locationId": "gid://shopify/Location/124656943",
                      "quantity": 11,
                      "compareQuantity": 1
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
    mutation InventorySet($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes {
            name
            delta
          }
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
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 11,
          "compareQuantity": 1
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
      "query": `mutation InventorySet($input: InventorySetQuantitiesInput!) {
        inventorySetQuantities(input: $input) {
          inventoryAdjustmentGroup {
            createdAt
            reason
            referenceDocumentUri
            changes {
              name
              delta
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "name": "available",
              "reason": "correction",
              "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
              "quantities": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "locationId": "gid://shopify/Location/124656943",
                      "quantity": 11,
                      "compareQuantity": 1
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
    "inventorySetQuantities": {
      "inventoryAdjustmentGroup": {
        "createdAt": "2024-11-07T22:03:12Z",
        "reason": "Inventory correction",
        "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
        "changes": [
          {
            "name": "available",
            "delta": 10
          },
          {
            "name": "on_hand",
            "delta": 10
          }
        ]
      },
      "userErrors": []
    }
  }
  ```

* ### Setting available quantity at a location with compare-and-swap (CAS) enabled

  #### Query

  ```graphql
  mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        reason
        referenceDocumentUri
        changes {
          name
          delta
          quantityAfterChange
        }
      }
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
    "input": {
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 11,
          "compareQuantity": 1
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
  "query": "mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) { inventorySetQuantities(input: $input) { inventoryAdjustmentGroup { reason referenceDocumentUri changes { name delta quantityAfterChange } } userErrors { code field message } } }",
   "variables": {
      "input": {
        "name": "available",
        "reason": "correction",
        "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
        "quantities": [
          {
            "inventoryItemId": "gid://shopify/InventoryItem/30322695",
            "locationId": "gid://shopify/Location/124656943",
            "quantity": 11,
            "compareQuantity": 1
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
    mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          reason
          referenceDocumentUri
          changes {
            name
            delta
            quantityAfterChange
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "name": "available",
              "reason": "correction",
              "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
              "quantities": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "locationId": "gid://shopify/Location/124656943",
                      "quantity": 11,
                      "compareQuantity": 1
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
    mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          reason
          referenceDocumentUri
          changes {
            name
            delta
            quantityAfterChange
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 11,
          "compareQuantity": 1
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
      "query": `mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
        inventorySetQuantities(input: $input) {
          inventoryAdjustmentGroup {
            reason
            referenceDocumentUri
            changes {
              name
              delta
              quantityAfterChange
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "name": "available",
              "reason": "correction",
              "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
              "quantities": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "locationId": "gid://shopify/Location/124656943",
                      "quantity": 11,
                      "compareQuantity": 1
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
    "inventorySetQuantities": {
      "inventoryAdjustmentGroup": {
        "reason": "Inventory correction",
        "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
        "changes": [
          {
            "name": "available",
            "delta": 10,
            "quantityAfterChange": null
          },
          {
            "name": "on_hand",
            "delta": 10,
            "quantityAfterChange": null
          }
        ]
      },
      "userErrors": []
    }
  }
  ```

* ### Setting available quantity at a location without compare-and-swap (CAS) enabled

  #### Query

  ```graphql
  mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        reason
        referenceDocumentUri
        changes {
          name
          delta
          quantityAfterChange
        }
      }
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
    "input": {
      "ignoreCompareQuantity": true,
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 42,
          "compareQuantity": null
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
  "query": "mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) { inventorySetQuantities(input: $input) { inventoryAdjustmentGroup { reason referenceDocumentUri changes { name delta quantityAfterChange } } userErrors { code field message } } }",
   "variables": {
      "input": {
        "ignoreCompareQuantity": true,
        "name": "available",
        "reason": "correction",
        "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
        "quantities": [
          {
            "inventoryItemId": "gid://shopify/InventoryItem/30322695",
            "locationId": "gid://shopify/Location/124656943",
            "quantity": 42,
            "compareQuantity": null
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
    mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          reason
          referenceDocumentUri
          changes {
            name
            delta
            quantityAfterChange
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "ignoreCompareQuantity": true,
              "name": "available",
              "reason": "correction",
              "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
              "quantities": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "locationId": "gid://shopify/Location/124656943",
                      "quantity": 42,
                      "compareQuantity": null
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
    mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          reason
          referenceDocumentUri
          changes {
            name
            delta
            quantityAfterChange
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "ignoreCompareQuantity": true,
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 42,
          "compareQuantity": null
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
      "query": `mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
        inventorySetQuantities(input: $input) {
          inventoryAdjustmentGroup {
            reason
            referenceDocumentUri
            changes {
              name
              delta
              quantityAfterChange
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "ignoreCompareQuantity": true,
              "name": "available",
              "reason": "correction",
              "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
              "quantities": [
                  {
                      "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                      "locationId": "gid://shopify/Location/124656943",
                      "quantity": 42,
                      "compareQuantity": null
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
    "inventorySetQuantities": {
      "inventoryAdjustmentGroup": {
        "reason": "Inventory correction",
        "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
        "changes": [
          {
            "name": "available",
            "delta": 41,
            "quantityAfterChange": null
          },
          {
            "name": "on_hand",
            "delta": 41,
            "quantityAfterChange": null
          }
        ]
      },
      "userErrors": []
    }
  }
  ```

* ### inventorySetQuantities reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20InventorySet\(%24input%3A%20InventorySetQuantitiesInput!\)%20%7B%0A%20%20inventorySetQuantities\(input%3A%20%24input\)%20%7B%0A%20%20%20%20inventoryAdjustmentGroup%20%7B%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20reason%0A%20%20%20%20%20%20referenceDocumentUri%0A%20%20%20%20%20%20changes%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20delta%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22available%22%2C%0A%20%20%20%20%22reason%22%3A%20%22correction%22%2C%0A%20%20%20%20%22referenceDocumentUri%22%3A%20%22logistics%3A%2F%2Fsome.warehouse%2Ftake%2F2023-01-23T13%3A14%3A15Z%22%2C%0A%20%20%20%20%22quantities%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22inventoryItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F30322695%22%2C%0A%20%20%20%20%20%20%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F124656943%22%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%2011%2C%0A%20%20%20%20%20%20%20%20%22compareQuantity%22%3A%201%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation InventorySet($input: InventorySetQuantitiesInput!) {
  inventorySetQuantities(input: $input) {
    inventoryAdjustmentGroup {
      createdAt
      reason
      referenceDocumentUri
      changes {
        name
        delta
      }
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
"query": "mutation InventorySet($input: InventorySetQuantitiesInput!) { inventorySetQuantities(input: $input) { inventoryAdjustmentGroup { createdAt reason referenceDocumentUri changes { name delta } } userErrors { field message } } }",
 "variables": {
    "input": {
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 11,
          "compareQuantity": 1
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
  mutation InventorySet($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
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
            "name": "available",
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "quantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 11,
                    "compareQuantity": 1
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
    "query": `mutation InventorySet($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes {
            name
            delta
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "available",
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "quantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 11,
                    "compareQuantity": 1
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
  mutation InventorySet($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
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
    "name": "available",
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "quantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 11,
        "compareQuantity": 1
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
    "name": "available",
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "quantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 11,
        "compareQuantity": 1
      }
    ]
  }
}
```

## Response

JSON

```json
{
  "inventorySetQuantities": {
    "inventoryAdjustmentGroup": {
      "createdAt": "2024-11-07T22:03:12Z",
      "reason": "Inventory correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "changes": [
        {
          "name": "available",
          "delta": 10
        },
        {
          "name": "on_hand",
          "delta": 10
        }
      ]
    },
    "userErrors": []
  }
}
```
