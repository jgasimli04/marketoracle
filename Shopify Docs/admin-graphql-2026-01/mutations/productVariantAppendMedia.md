---
title: productVariantAppendMedia - GraphQL Admin
description: >-
  Appends existing media from a product to specific variants of that product,
  creating associations between media files and particular product options. This
  allows different variants to showcase relevant images or videos.


  For example, a t-shirt product might have color variants where each color
  variant displays only the images showing that specific color, helping
  customers see exactly what they're purchasing.


  Use `ProductVariantAppendMedia` to:

  - Associate specific images with product variants for accurate display

  - Build variant-specific media management in product interfaces

  - Implement automated media assignment based on variant attributes


  The operation links existing product media to variants without duplicating
  files, maintaining efficient media storage while enabling variant-specific
  displays.


  Learn more about [product
  variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantAppendMedia
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantAppendMedia.md
---

# product​Variant​Append​Media

mutation

Requires `write_products` access scope. Also: The user must have a permission to append media to variants.

Appends existing media from a product to specific variants of that product, creating associations between media files and particular product options. This allows different variants to showcase relevant images or videos.

For example, a t-shirt product might have color variants where each color variant displays only the images showing that specific color, helping customers see exactly what they're purchasing.

Use `ProductVariantAppendMedia` to:

* Associate specific images with product variants for accurate display
* Build variant-specific media management in product interfaces
* Implement automated media assignment based on variant attributes

The operation links existing product media to variants without duplicating files, maintaining efficient media storage while enabling variant-specific displays.

Learn more about [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

## Arguments

* product​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  Specifies the product associated to the media.

* variant​Media

  [\[Product​Variant​Append​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantAppendMediaInput)

  required

  A list of pairs of variants and media to be attached to the variants.

***

## Product​Variant​Append​Media​Payload returns

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

* ### Append a product's media to variants of the product

  #### Description

  Append media of a product to the product's variants

  #### Query

  ```graphql
  mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
    productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
      product {
        id
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "productId": "gid://shopify/Product/1072481072",
    "variantMedia": [
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273216"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325119"
      },
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273217"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325120"
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
  "query": "mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) { productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) { product { id } } }",
   "variables": {
      "productId": "gid://shopify/Product/1072481072",
      "variantMedia": [
        {
          "mediaIds": [
            "gid://shopify/MediaImage/1072273216"
          ],
          "variantId": "gid://shopify/ProductVariant/1070325119"
        },
        {
          "mediaIds": [
            "gid://shopify/MediaImage/1072273217"
          ],
          "variantId": "gid://shopify/ProductVariant/1070325120"
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
    mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
      productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
        product {
          id
        }
      }
    }`,
    {
      variables: {
          "productId": "gid://shopify/Product/1072481072",
          "variantMedia": [
              {
                  "mediaIds": [
                      "gid://shopify/MediaImage/1072273216"
                  ],
                  "variantId": "gid://shopify/ProductVariant/1070325119"
              },
              {
                  "mediaIds": [
                      "gid://shopify/MediaImage/1072273217"
                  ],
                  "variantId": "gid://shopify/ProductVariant/1070325120"
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
    mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
      productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
        product {
          id
        }
      }
    }
  QUERY

  variables = {
    "productId": "gid://shopify/Product/1072481072",
    "variantMedia": [
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273216"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325119"
      },
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273217"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325120"
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
      "query": `mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
        productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
          product {
            id
          }
        }
      }`,
      "variables": {
          "productId": "gid://shopify/Product/1072481072",
          "variantMedia": [
              {
                  "mediaIds": [
                      "gid://shopify/MediaImage/1072273216"
                  ],
                  "variantId": "gid://shopify/ProductVariant/1070325119"
              },
              {
                  "mediaIds": [
                      "gid://shopify/MediaImage/1072273217"
                  ],
                  "variantId": "gid://shopify/ProductVariant/1070325120"
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productVariantAppendMedia": {
      "product": {
        "id": "gid://shopify/Product/1072481072"
      }
    }
  }
  ```

* ### productVariantAppendMedia reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20productVariantAppendMedia\(%24productId%3A%20ID!%2C%20%24variantMedia%3A%20%5BProductVariantAppendMediaInput!%5D!\)%20%7B%0A%20%20productVariantAppendMedia\(productId%3A%20%24productId%2C%20variantMedia%3A%20%24variantMedia\)%20%7B%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F1072481072%22%2C%0A%20%20%22variantMedia%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22mediaIds%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F1072273216%22%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F1070325119%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22mediaIds%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F1072273217%22%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F1070325120%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
  productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
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
"query": "mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) { productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) { product { id } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481072",
    "variantMedia": [
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273216"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325119"
      },
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273217"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325120"
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
  mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
    productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
      product {
        id
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481072",
        "variantMedia": [
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273216"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325119"
            },
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273217"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325120"
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
    "query": `mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
      productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
        product {
          id
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481072",
        "variantMedia": [
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273216"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325119"
            },
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273217"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325120"
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
  mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
    productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
      product {
        id
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481072",
  "variantMedia": [
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273216"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325119"
    },
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273217"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325120"
    }
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "productId": "gid://shopify/Product/1072481072",
  "variantMedia": [
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273216"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325119"
    },
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273217"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325120"
    }
  ]
}
```

## Response

JSON

```json
{
  "productVariantAppendMedia": {
    "product": {
      "id": "gid://shopify/Product/1072481072"
    }
  }
}
```
