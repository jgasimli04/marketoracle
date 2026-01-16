---
title: priceListFixedPricesDelete - GraphQL Admin
description: >-
  Deletes specific fixed prices from a price list using a product variant ID.
  You can use the `priceListFixedPricesDelete` mutation to delete a set of fixed
  prices from a price list. After deleting the set of fixed prices from the
  price list, the price of each product variant reverts to the original price
  that was determined by the price list adjustment.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesDelete.md
---

# price​List​Fixed​Prices​Delete

mutation

Requires `write_products` access scope. Also: The user must have permission to delete catalogs.

Deletes specific fixed prices from a price list using a product variant ID. You can use the `priceListFixedPricesDelete` mutation to delete a set of fixed prices from a price list. After deleting the set of fixed prices from the price list, the price of each product variant reverts to the original price that was determined by the price list adjustment.

## Arguments

* price​List​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the price list from which the fixed prices will be removed.

* variant​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  A list of product variant IDs whose fixed prices will be removed from the price list.

***

## Price​List​Fixed​Prices​Delete​Payload returns

* deleted​Fixed​Price​Variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of product variant IDs whose fixed prices were removed from the price list.

* user​Errors

  [\[Price​List​Price​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete multiple fixed prices from a price list

  #### Description

  Delete fixed prices for two product variants.

  #### Query

  ```graphql
  mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
    priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
      deletedFixedPriceVariantIds
      userErrors {
        field
        code
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "priceListId": "gid://shopify/PriceList/294167858",
    "variantIds": [
      "gid://shopify/ProductVariant/498744621",
      "gid://shopify/ProductVariant/113711323"
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
  "query": "mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) { priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) { deletedFixedPriceVariantIds userErrors { field code message } } }",
   "variables": {
      "priceListId": "gid://shopify/PriceList/294167858",
      "variantIds": [
        "gid://shopify/ProductVariant/498744621",
        "gid://shopify/ProductVariant/113711323"
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
    mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
      priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
        deletedFixedPriceVariantIds
        userErrors {
          field
          code
          message
        }
      }
    }`,
    {
      variables: {
          "priceListId": "gid://shopify/PriceList/294167858",
          "variantIds": [
              "gid://shopify/ProductVariant/498744621",
              "gid://shopify/ProductVariant/113711323"
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
    mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
      priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
        deletedFixedPriceVariantIds
        userErrors {
          field
          code
          message
        }
      }
    }
  QUERY

  variables = {
    "priceListId": "gid://shopify/PriceList/294167858",
    "variantIds": [
      "gid://shopify/ProductVariant/498744621",
      "gid://shopify/ProductVariant/113711323"
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
        priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
          deletedFixedPriceVariantIds
          userErrors {
            field
            code
            message
          }
        }
      }`,
      "variables": {
          "priceListId": "gid://shopify/PriceList/294167858",
          "variantIds": [
              "gid://shopify/ProductVariant/498744621",
              "gid://shopify/ProductVariant/113711323"
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "priceListFixedPricesDelete": {
      "deletedFixedPriceVariantIds": [
        "gid://shopify/ProductVariant/113711323",
        "gid://shopify/ProductVariant/498744621"
      ],
      "userErrors": []
    }
  }
  ```

* ### priceListFixedPricesDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20priceListFixedPricesDelete\(%24priceListId%3A%20ID!%2C%20%24variantIds%3A%20%5BID!%5D!\)%20%7B%0A%20%20priceListFixedPricesDelete\(priceListId%3A%20%24priceListId%2C%20variantIds%3A%20%24variantIds\)%20%7B%0A%20%20%20%20deletedFixedPriceVariantIds%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22priceListId%22%3A%20%22gid%3A%2F%2Fshopify%2FPriceList%2F294167858%22%2C%0A%20%20%22variantIds%22%3A%20%5B%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F498744621%22%2C%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F113711323%22%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
  priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
    deletedFixedPriceVariantIds
    userErrors {
      field
      code
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
"query": "mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) { priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) { deletedFixedPriceVariantIds userErrors { field code message } } }",
 "variables": {
    "priceListId": "gid://shopify/PriceList/294167858",
    "variantIds": [
      "gid://shopify/ProductVariant/498744621",
      "gid://shopify/ProductVariant/113711323"
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
  mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
    priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
      deletedFixedPriceVariantIds
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "priceListId": "gid://shopify/PriceList/294167858",
        "variantIds": [
            "gid://shopify/ProductVariant/498744621",
            "gid://shopify/ProductVariant/113711323"
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
    "query": `mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
      priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
        deletedFixedPriceVariantIds
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "priceListId": "gid://shopify/PriceList/294167858",
        "variantIds": [
            "gid://shopify/ProductVariant/498744621",
            "gid://shopify/ProductVariant/113711323"
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
  mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
    priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
      deletedFixedPriceVariantIds
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "priceListId": "gid://shopify/PriceList/294167858",
  "variantIds": [
    "gid://shopify/ProductVariant/498744621",
    "gid://shopify/ProductVariant/113711323"
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "priceListId": "gid://shopify/PriceList/294167858",
  "variantIds": [
    "gid://shopify/ProductVariant/498744621",
    "gid://shopify/ProductVariant/113711323"
  ]
}
```

## Response

JSON

```json
{
  "priceListFixedPricesDelete": {
    "deletedFixedPriceVariantIds": [
      "gid://shopify/ProductVariant/113711323",
      "gid://shopify/ProductVariant/498744621"
    ],
    "userErrors": []
  }
}
```
