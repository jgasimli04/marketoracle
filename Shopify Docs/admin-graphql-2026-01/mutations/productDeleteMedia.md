---
title: productDeleteMedia - GraphQL Admin
description: >-
  Deletes media from a
  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product),
  such as images, videos, and 3D models.


  When you delete media images, the mutation also removes any corresponding
  product images. The mutation returns the IDs of both the deleted media and any
  product images that the deletion removed.


  > Caution:

  > This action is irreversible. You can't recover deleted media.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDeleteMedia
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDeleteMedia.md
---

# product​Delete​Media

mutation

Requires `write_products` access scope. Also: The user must have a permission to delete media from a product.

Deprecated. Use [fileUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate) instead.

Deletes media from a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as images, videos, and 3D models.

When you delete media images, the mutation also removes any corresponding product images. The mutation returns the IDs of both the deleted media and any product images that the deletion removed.

***

Caution

This action is irreversible. You can't recover deleted media.

***

## Arguments

* media​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The media IDs to be deleted.

* product​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  Specifies the product ID from which the media will be deleted.

***

## Product​Delete​Media​Payload returns

* deleted​Media​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  List of media IDs which were deleted.

* deleted​Product​Image​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  List of product image IDs which were deleted.

* media​User​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product associated with the deleted media.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Delete existing and non-existing media from a product

  #### Description

  Trying to delete both existing and non-existing media from a product returns an error and the existing media is not deleted.

  #### Query

  ```graphql
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "mediaIds": [
      "gid://shopify/Video/-1",
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/108828309"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) { productDeleteMedia(mediaIds: $mediaIds, productId: $productId) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } product { id title media(first: 5) { nodes { alt mediaContentType status } } } } }",
   "variables": {
      "mediaIds": [
        "gid://shopify/Video/-1",
        "gid://shopify/Video/723685877"
      ],
      "productId": "gid://shopify/Product/108828309"
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
    mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }`,
    {
      variables: {
          "mediaIds": [
              "gid://shopify/Video/-1",
              "gid://shopify/Video/723685877"
          ],
          "productId": "gid://shopify/Product/108828309"
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
    mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "mediaIds": [
      "gid://shopify/Video/-1",
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/108828309"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
        productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
          deletedMediaIds
          deletedProductImageIds
          mediaUserErrors {
            field
            message
          }
          product {
            id
            title
            media(first: 5) {
              nodes {
                alt
                mediaContentType
                status
              }
            }
          }
        }
      }`,
      "variables": {
          "mediaIds": [
              "gid://shopify/Video/-1",
              "gid://shopify/Video/723685877"
          ],
          "productId": "gid://shopify/Product/108828309"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productDeleteMedia": {
      "deletedMediaIds": null,
      "deletedProductImageIds": null,
      "mediaUserErrors": [
        {
          "field": [
            "mediaIds"
          ],
          "message": "Media id gid://shopify/Video/-1 does not exist"
        }
      ],
      "product": {
        "id": "gid://shopify/Product/108828309",
        "title": "Draft",
        "media": {
          "nodes": [
            {
              "alt": "This is a video",
              "mediaContentType": "EXTERNAL_VIDEO",
              "status": "READY"
            },
            {
              "alt": "This is a video",
              "mediaContentType": "VIDEO",
              "status": "READY"
            },
            {
              "alt": "This is a 3d Model",
              "mediaContentType": "MODEL_3D",
              "status": "READY"
            },
            {
              "alt": "",
              "mediaContentType": "IMAGE",
              "status": "READY"
            },
            {
              "alt": "",
              "mediaContentType": "IMAGE",
              "status": "READY"
            }
          ]
        }
      }
    }
  }
  ```

* ### Delete media from a non-existent product

  #### Description

  Trying to delete media from a non-existent product returns an error.

  #### Query

  ```graphql
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "mediaIds": [
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/0"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) { productDeleteMedia(mediaIds: $mediaIds, productId: $productId) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } product { id title media(first: 5) { nodes { alt mediaContentType status } } } } }",
   "variables": {
      "mediaIds": [
        "gid://shopify/Video/723685877"
      ],
      "productId": "gid://shopify/Product/0"
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
    mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }`,
    {
      variables: {
          "mediaIds": [
              "gid://shopify/Video/723685877"
          ],
          "productId": "gid://shopify/Product/0"
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
    mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "mediaIds": [
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/0"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
        productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
          deletedMediaIds
          deletedProductImageIds
          mediaUserErrors {
            field
            message
          }
          product {
            id
            title
            media(first: 5) {
              nodes {
                alt
                mediaContentType
                status
              }
            }
          }
        }
      }`,
      "variables": {
          "mediaIds": [
              "gid://shopify/Video/723685877"
          ],
          "productId": "gid://shopify/Product/0"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productDeleteMedia": {
      "deletedMediaIds": null,
      "deletedProductImageIds": null,
      "mediaUserErrors": [
        {
          "field": [
            "productId"
          ],
          "message": "Product does not exist"
        }
      ],
      "product": null
    }
  }
  ```

* ### Delete media from an existing product

  #### Query

  ```graphql
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "mediaIds": [
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/108828309"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) { productDeleteMedia(mediaIds: $mediaIds, productId: $productId) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } product { id title media(first: 5) { nodes { alt mediaContentType status } } } } }",
   "variables": {
      "mediaIds": [
        "gid://shopify/Video/723685877"
      ],
      "productId": "gid://shopify/Product/108828309"
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
    mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }`,
    {
      variables: {
          "mediaIds": [
              "gid://shopify/Video/723685877"
          ],
          "productId": "gid://shopify/Product/108828309"
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
    mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "mediaIds": [
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/108828309"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
        productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
          deletedMediaIds
          deletedProductImageIds
          mediaUserErrors {
            field
            message
          }
          product {
            id
            title
            media(first: 5) {
              nodes {
                alt
                mediaContentType
                status
              }
            }
          }
        }
      }`,
      "variables": {
          "mediaIds": [
              "gid://shopify/Video/723685877"
          ],
          "productId": "gid://shopify/Product/108828309"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productDeleteMedia": {
      "deletedMediaIds": [
        "gid://shopify/Video/723685877"
      ],
      "deletedProductImageIds": [],
      "mediaUserErrors": [],
      "product": {
        "id": "gid://shopify/Product/108828309",
        "title": "Draft",
        "media": {
          "nodes": [
            {
              "alt": "This is a video",
              "mediaContentType": "EXTERNAL_VIDEO",
              "status": "READY"
            },
            {
              "alt": "This is a 3d Model",
              "mediaContentType": "MODEL_3D",
              "status": "READY"
            },
            {
              "alt": "",
              "mediaContentType": "IMAGE",
              "status": "READY"
            },
            {
              "alt": "",
              "mediaContentType": "IMAGE",
              "status": "READY"
            }
          ]
        }
      }
    }
  }
  ```

* ### Delete non-existing media from an existing product

  #### Description

  Trying to delete non-existing media from a product returns an error.

  #### Query

  ```graphql
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "mediaIds": [
      "gid://shopify/Video/-1"
    ],
    "productId": "gid://shopify/Product/108828309"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) { productDeleteMedia(mediaIds: $mediaIds, productId: $productId) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } product { id title media(first: 5) { nodes { alt mediaContentType status } } } } }",
   "variables": {
      "mediaIds": [
        "gid://shopify/Video/-1"
      ],
      "productId": "gid://shopify/Product/108828309"
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
    mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }`,
    {
      variables: {
          "mediaIds": [
              "gid://shopify/Video/-1"
          ],
          "productId": "gid://shopify/Product/108828309"
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
    mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "mediaIds": [
      "gid://shopify/Video/-1"
    ],
    "productId": "gid://shopify/Product/108828309"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
        productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
          deletedMediaIds
          deletedProductImageIds
          mediaUserErrors {
            field
            message
          }
          product {
            id
            title
            media(first: 5) {
              nodes {
                alt
                mediaContentType
                status
              }
            }
          }
        }
      }`,
      "variables": {
          "mediaIds": [
              "gid://shopify/Video/-1"
          ],
          "productId": "gid://shopify/Product/108828309"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productDeleteMedia": {
      "deletedMediaIds": null,
      "deletedProductImageIds": null,
      "mediaUserErrors": [
        {
          "field": [
            "mediaIds"
          ],
          "message": "Media id gid://shopify/Video/-1 does not exist"
        }
      ],
      "product": {
        "id": "gid://shopify/Product/108828309",
        "title": "Draft",
        "media": {
          "nodes": [
            {
              "alt": "This is a video",
              "mediaContentType": "EXTERNAL_VIDEO",
              "status": "READY"
            },
            {
              "alt": "This is a video",
              "mediaContentType": "VIDEO",
              "status": "READY"
            },
            {
              "alt": "This is a 3d Model",
              "mediaContentType": "MODEL_3D",
              "status": "READY"
            },
            {
              "alt": "",
              "mediaContentType": "IMAGE",
              "status": "READY"
            },
            {
              "alt": "",
              "mediaContentType": "IMAGE",
              "status": "READY"
            }
          ]
        }
      }
    }
  }
  ```

* ### Remove an existing Product Image

  #### Query

  ```graphql
  mutation productDeleteMedia($productId: ID!, $mediaIds: [ID!]!) {
    productDeleteMedia(productId: $productId, mediaIds: $mediaIds) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "productId": "gid://shopify/Product/20995642",
    "mediaIds": [
      "gid://shopify/MediaImage/730211239"
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
  "query": "mutation productDeleteMedia($productId: ID!, $mediaIds: [ID!]!) { productDeleteMedia(productId: $productId, mediaIds: $mediaIds) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } } }",
   "variables": {
      "productId": "gid://shopify/Product/20995642",
      "mediaIds": [
        "gid://shopify/MediaImage/730211239"
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
    mutation productDeleteMedia($productId: ID!, $mediaIds: [ID!]!) {
      productDeleteMedia(productId: $productId, mediaIds: $mediaIds) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "productId": "gid://shopify/Product/20995642",
          "mediaIds": [
              "gid://shopify/MediaImage/730211239"
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
    mutation productDeleteMedia($productId: ID!, $mediaIds: [ID!]!) {
      productDeleteMedia(productId: $productId, mediaIds: $mediaIds) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "productId": "gid://shopify/Product/20995642",
    "mediaIds": [
      "gid://shopify/MediaImage/730211239"
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation productDeleteMedia($productId: ID!, $mediaIds: [ID!]!) {
        productDeleteMedia(productId: $productId, mediaIds: $mediaIds) {
          deletedMediaIds
          deletedProductImageIds
          mediaUserErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "productId": "gid://shopify/Product/20995642",
          "mediaIds": [
              "gid://shopify/MediaImage/730211239"
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productDeleteMedia": {
      "deletedMediaIds": [
        "gid://shopify/MediaImage/730211239"
      ],
      "deletedProductImageIds": [
        "gid://shopify/ProductImage/916933471"
      ],
      "mediaUserErrors": []
    }
  }
  ```

* ### productDeleteMedia reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20productDeleteMedia\(%24mediaIds%3A%20%5BID!%5D!%2C%20%24productId%3A%20ID!\)%20%7B%0A%20%20productDeleteMedia\(mediaIds%3A%20%24mediaIds%2C%20productId%3A%20%24productId\)%20%7B%0A%20%20%20%20deletedMediaIds%0A%20%20%20%20deletedProductImageIds%0A%20%20%20%20mediaUserErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20media\(first%3A%205\)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20alt%0A%20%20%20%20%20%20%20%20%20%20mediaContentType%0A%20%20%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22mediaIds%22%3A%20%5B%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FVideo%2F-1%22%2C%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FVideo%2F723685877%22%0A%20%20%5D%2C%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F108828309%22%0A%7D)

##### GQL

```graphql
mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
  productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
    deletedMediaIds
    deletedProductImageIds
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
      media(first: 5) {
        nodes {
          alt
          mediaContentType
          status
        }
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
"query": "mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) { productDeleteMedia(mediaIds: $mediaIds, productId: $productId) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } product { id title media(first: 5) { nodes { alt mediaContentType status } } } } }",
 "variables": {
    "mediaIds": [
      "gid://shopify/Video/-1",
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/108828309"
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
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }`,
  {
    variables: {
        "mediaIds": [
            "gid://shopify/Video/-1",
            "gid://shopify/Video/723685877"
        ],
        "productId": "gid://shopify/Product/108828309"
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
    "query": `mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }`,
    "variables": {
        "mediaIds": [
            "gid://shopify/Video/-1",
            "gid://shopify/Video/723685877"
        ],
        "productId": "gid://shopify/Product/108828309"
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
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }
QUERY

variables = {
  "mediaIds": [
    "gid://shopify/Video/-1",
    "gid://shopify/Video/723685877"
  ],
  "productId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "mediaIds": [
    "gid://shopify/Video/-1",
    "gid://shopify/Video/723685877"
  ],
  "productId": "gid://shopify/Product/108828309"
}
```

## Response

JSON

```json
{
  "productDeleteMedia": {
    "deletedMediaIds": null,
    "deletedProductImageIds": null,
    "mediaUserErrors": [
      {
        "field": [
          "mediaIds"
        ],
        "message": "Media id gid://shopify/Video/-1 does not exist"
      }
    ],
    "product": {
      "id": "gid://shopify/Product/108828309",
      "title": "Draft",
      "media": {
        "nodes": [
          {
            "alt": "This is a video",
            "mediaContentType": "EXTERNAL_VIDEO",
            "status": "READY"
          },
          {
            "alt": "This is a video",
            "mediaContentType": "VIDEO",
            "status": "READY"
          },
          {
            "alt": "This is a 3d Model",
            "mediaContentType": "MODEL_3D",
            "status": "READY"
          },
          {
            "alt": "",
            "mediaContentType": "IMAGE",
            "status": "READY"
          },
          {
            "alt": "",
            "mediaContentType": "IMAGE",
            "status": "READY"
          }
        ]
      }
    }
  }
}
```
