---
title: productVariantDetachMedia - GraphQL Admin
description: Detaches media from product variants.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantDetachMedia
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantDetachMedia.md
---

# product​Variant​Detach​Media

mutation

Requires `write_products` access scope. Also: The user must have a permission to detach media from product variants.

Detaches media from product variants.

## Arguments

* product​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  Specifies the product to which the variants and media are associated.

* variant​Media

  [\[Product​Variant​Detach​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantDetachMediaInput)

  required

  A list of pairs of variants and media to be deleted from the variants.

***

## Product​Variant​Detach​Media​Payload returns

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product associated with the variants and media.

* product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variants that were updated.

* user​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Detach a product variant's media from a product

  #### Description

  Detach media of a product from the product's variants

  #### Query

  ```graphql
  mutation productVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) {
    productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) {
      product {
        id
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "productId": "gid://shopify/Product/1072481079",
    "variantMedia": [
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273220"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325128"
      },
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273221"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325129"
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
  "query": "mutation productVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) { productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) { product { id } } }",
   "variables": {
      "productId": "gid://shopify/Product/1072481079",
      "variantMedia": [
        {
          "mediaIds": [
            "gid://shopify/MediaImage/1072273220"
          ],
          "variantId": "gid://shopify/ProductVariant/1070325128"
        },
        {
          "mediaIds": [
            "gid://shopify/MediaImage/1072273221"
          ],
          "variantId": "gid://shopify/ProductVariant/1070325129"
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
    mutation productVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) {
      productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) {
        product {
          id
        }
      }
    }`,
    {
      variables: {
          "productId": "gid://shopify/Product/1072481079",
          "variantMedia": [
              {
                  "mediaIds": [
                      "gid://shopify/MediaImage/1072273220"
                  ],
                  "variantId": "gid://shopify/ProductVariant/1070325128"
              },
              {
                  "mediaIds": [
                      "gid://shopify/MediaImage/1072273221"
                  ],
                  "variantId": "gid://shopify/ProductVariant/1070325129"
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
    mutation productVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) {
      productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) {
        product {
          id
        }
      }
    }
  QUERY

  variables = {
    "productId": "gid://shopify/Product/1072481079",
    "variantMedia": [
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273220"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325128"
      },
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273221"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325129"
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
      "query": `mutation productVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) {
        productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) {
          product {
            id
          }
        }
      }`,
      "variables": {
          "productId": "gid://shopify/Product/1072481079",
          "variantMedia": [
              {
                  "mediaIds": [
                      "gid://shopify/MediaImage/1072273220"
                  ],
                  "variantId": "gid://shopify/ProductVariant/1070325128"
              },
              {
                  "mediaIds": [
                      "gid://shopify/MediaImage/1072273221"
                  ],
                  "variantId": "gid://shopify/ProductVariant/1070325129"
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productVariantDetachMedia": {
      "product": {
        "id": "gid://shopify/Product/1072481079"
      }
    }
  }
  ```

* ### productVariantDetachMedia reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20productVariantDetachMedia\(%24productId%3A%20ID!%2C%20%24variantMedia%3A%20%5BProductVariantDetachMediaInput!%5D!\)%20%7B%0A%20%20productVariantDetachMedia\(productId%3A%20%24productId%2C%20variantMedia%3A%20%24variantMedia\)%20%7B%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F1072481079%22%2C%0A%20%20%22variantMedia%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22mediaIds%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F1072273220%22%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F1070325128%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22mediaIds%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F1072273221%22%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F1070325129%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation productVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) {
  productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) {
    product {
      id
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
"query": "mutation productVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) { productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) { product { id } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481079",
    "variantMedia": [
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273220"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325128"
      },
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273221"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325129"
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
  mutation productVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) {
    productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) {
      product {
        id
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481079",
        "variantMedia": [
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273220"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325128"
            },
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273221"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325129"
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
    "query": `mutation productVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) {
      productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) {
        product {
          id
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481079",
        "variantMedia": [
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273220"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325128"
            },
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273221"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325129"
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
  mutation productVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) {
    productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) {
      product {
        id
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481079",
  "variantMedia": [
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273220"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325128"
    },
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273221"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325129"
    }
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "productId": "gid://shopify/Product/1072481079",
  "variantMedia": [
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273220"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325128"
    },
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273221"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325129"
    }
  ]
}
```

## Response

JSON

```json
{
  "productVariantDetachMedia": {
    "product": {
      "id": "gid://shopify/Product/1072481079"
    }
  }
}
```
