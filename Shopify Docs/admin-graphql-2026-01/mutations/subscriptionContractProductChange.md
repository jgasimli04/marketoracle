---
title: subscriptionContractProductChange - GraphQL Admin
description: >-
  Allows for the easy change of a Product in a Contract or a Product price
  change.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange.md
---

# subscription​Contract​Product​Change

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Allows for the easy change of a Product in a Contract or a Product price change.

## Arguments

* input

  [Subscription​Contract​Product​Change​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractProductChangeInput)

  required

  The properties of the Product changes.

* line​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The gid of the Subscription Line to update.

* subscription​Contract​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the subscription contract.

***

## Subscription​Contract​Product​Change​Payload returns

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* line​Updated

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The updated Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Update both product and price in a subscription contract

  #### Description

  Swaps a product and changes the price of a line in a subscription contract.

  #### Query

  ```graphql
  mutation($contractId: ID!, $lineId: ID!, $variantId: ID!) {
    subscriptionContractProductChange(subscriptionContractId: $contractId, lineId: $lineId, input: {productVariantId: $variantId, currentPrice: 500}) {
      contract {
        id
        updatedAt
      }
      lineUpdated {
        id
        currentPrice {
          amount
        }
        variantId
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
    "contractId": "gid://shopify/SubscriptionContract/593791907",
    "lineId": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
    "variantId": "gid://shopify/ProductVariant/30322695"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation($contractId: ID!, $lineId: ID!, $variantId: ID!) { subscriptionContractProductChange(subscriptionContractId: $contractId, lineId: $lineId, input: {productVariantId: $variantId, currentPrice: 500}) { contract { id updatedAt } lineUpdated { id currentPrice { amount } variantId } userErrors { field message code } } }",
   "variables": {
      "contractId": "gid://shopify/SubscriptionContract/593791907",
      "lineId": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
      "variantId": "gid://shopify/ProductVariant/30322695"
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
    mutation($contractId: ID!, $lineId: ID!, $variantId: ID!) {
      subscriptionContractProductChange(subscriptionContractId: $contractId, lineId: $lineId, input: {productVariantId: $variantId, currentPrice: 500}) {
        contract {
          id
          updatedAt
        }
        lineUpdated {
          id
          currentPrice {
            amount
          }
          variantId
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
          "contractId": "gid://shopify/SubscriptionContract/593791907",
          "lineId": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
          "variantId": "gid://shopify/ProductVariant/30322695"
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
    mutation($contractId: ID!, $lineId: ID!, $variantId: ID!) {
      subscriptionContractProductChange(subscriptionContractId: $contractId, lineId: $lineId, input: {productVariantId: $variantId, currentPrice: 500}) {
        contract {
          id
          updatedAt
        }
        lineUpdated {
          id
          currentPrice {
            amount
          }
          variantId
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
    "contractId": "gid://shopify/SubscriptionContract/593791907",
    "lineId": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
    "variantId": "gid://shopify/ProductVariant/30322695"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation($contractId: ID!, $lineId: ID!, $variantId: ID!) {
        subscriptionContractProductChange(subscriptionContractId: $contractId, lineId: $lineId, input: {productVariantId: $variantId, currentPrice: 500}) {
          contract {
            id
            updatedAt
          }
          lineUpdated {
            id
            currentPrice {
              amount
            }
            variantId
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "contractId": "gid://shopify/SubscriptionContract/593791907",
          "lineId": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
          "variantId": "gid://shopify/ProductVariant/30322695"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "subscriptionContractProductChange": {
      "contract": {
        "id": "gid://shopify/SubscriptionContract/593791907",
        "updatedAt": "2024-09-12T01:09:12Z"
      },
      "lineUpdated": {
        "id": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
        "currentPrice": {
          "amount": "500.0"
        },
        "variantId": "gid://shopify/ProductVariant/30322695"
      },
      "userErrors": []
    }
  }
  ```

* ### subscriptionContractProductChange reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation\(%24contractId%3A%20ID!%2C%20%24lineId%3A%20ID!%2C%20%24variantId%3A%20ID!\)%20%7B%0A%20%20subscriptionContractProductChange\(subscriptionContractId%3A%20%24contractId%2C%20lineId%3A%20%24lineId%2C%20input%3A%20%7BproductVariantId%3A%20%24variantId%2C%20currentPrice%3A%20500%7D\)%20%7B%0A%20%20%20%20contract%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20updatedAt%0A%20%20%20%20%7D%0A%20%20%20%20lineUpdated%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20currentPrice%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20variantId%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22contractId%22%3A%20%22gid%3A%2F%2Fshopify%2FSubscriptionContract%2F593791907%22%2C%0A%20%20%22lineId%22%3A%20%22gid%3A%2F%2Fshopify%2FSubscriptionLine%2F25476bfc-b794-4ff5-b41f-7a00eb252d55%22%2C%0A%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F30322695%22%0A%7D)

##### GQL

```graphql
mutation($contractId: ID!, $lineId: ID!, $variantId: ID!) {
  subscriptionContractProductChange(subscriptionContractId: $contractId, lineId: $lineId, input: {productVariantId: $variantId, currentPrice: 500}) {
    contract {
      id
      updatedAt
    }
    lineUpdated {
      id
      currentPrice {
        amount
      }
      variantId
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
"query": "mutation($contractId: ID!, $lineId: ID!, $variantId: ID!) { subscriptionContractProductChange(subscriptionContractId: $contractId, lineId: $lineId, input: {productVariantId: $variantId, currentPrice: 500}) { contract { id updatedAt } lineUpdated { id currentPrice { amount } variantId } userErrors { field message code } } }",
 "variables": {
    "contractId": "gid://shopify/SubscriptionContract/593791907",
    "lineId": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
    "variantId": "gid://shopify/ProductVariant/30322695"
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
  mutation($contractId: ID!, $lineId: ID!, $variantId: ID!) {
    subscriptionContractProductChange(subscriptionContractId: $contractId, lineId: $lineId, input: {productVariantId: $variantId, currentPrice: 500}) {
      contract {
        id
        updatedAt
      }
      lineUpdated {
        id
        currentPrice {
          amount
        }
        variantId
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
        "contractId": "gid://shopify/SubscriptionContract/593791907",
        "lineId": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
        "variantId": "gid://shopify/ProductVariant/30322695"
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
    "query": `mutation($contractId: ID!, $lineId: ID!, $variantId: ID!) {
      subscriptionContractProductChange(subscriptionContractId: $contractId, lineId: $lineId, input: {productVariantId: $variantId, currentPrice: 500}) {
        contract {
          id
          updatedAt
        }
        lineUpdated {
          id
          currentPrice {
            amount
          }
          variantId
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "contractId": "gid://shopify/SubscriptionContract/593791907",
        "lineId": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
        "variantId": "gid://shopify/ProductVariant/30322695"
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
  mutation($contractId: ID!, $lineId: ID!, $variantId: ID!) {
    subscriptionContractProductChange(subscriptionContractId: $contractId, lineId: $lineId, input: {productVariantId: $variantId, currentPrice: 500}) {
      contract {
        id
        updatedAt
      }
      lineUpdated {
        id
        currentPrice {
          amount
        }
        variantId
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
  "contractId": "gid://shopify/SubscriptionContract/593791907",
  "lineId": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
  "variantId": "gid://shopify/ProductVariant/30322695"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "contractId": "gid://shopify/SubscriptionContract/593791907",
  "lineId": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
  "variantId": "gid://shopify/ProductVariant/30322695"
}
```

## Response

JSON

```json
{
  "subscriptionContractProductChange": {
    "contract": {
      "id": "gid://shopify/SubscriptionContract/593791907",
      "updatedAt": "2024-09-12T01:09:12Z"
    },
    "lineUpdated": {
      "id": "gid://shopify/SubscriptionLine/25476bfc-b794-4ff5-b41f-7a00eb252d55",
      "currentPrice": {
        "amount": "500.0"
      },
      "variantId": "gid://shopify/ProductVariant/30322695"
    },
    "userErrors": []
  }
}
```
