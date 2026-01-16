---
title: menuCreate - GraphQL Admin
description: >-
  Creates a navigation
  [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for
  the online store. Menus organize links that help customers navigate to
  [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection),
  [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product),
  [pages](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page),
  [blogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog), and
  custom URLs.


  Each menu requires a unique handle for identification and can contain multiple
  [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem)
  objects with nested sub-items up to three levels deep.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuCreate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuCreate.md'
---

# menu​Create

mutation

Requires `write_online_store_navigation` access scope.

Creates a navigation [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for the online store. Menus organize links that help customers navigate to [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [pages](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page), [blogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog), and custom URLs.

Each menu requires a unique handle for identification and can contain multiple [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects with nested sub-items up to three levels deep.

## Arguments

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The menu's handle.

* items

  [\[Menu​Item​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput)

  required

  List of the menu's items.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  required

  The menu's title.

***

## Menu​Create​Payload returns

* menu

  [Menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu)

  The created menu.

* user​Errors

  [\[Menu​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a menu

  #### Description

  Create a menu with sub items

  #### Query

  ```graphql
  mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
    menuCreate(title: $title, handle: $handle, items: $items) {
      menu {
        id
        handle
        items {
          id
          title
          items {
            id
            title
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "title": "Sidebar",
    "handle": "sidebar",
    "items": [
      {
        "title": "Collections",
        "type": "COLLECTION",
        "url": "/collection",
        "items": [
          {
            "title": "Bestsellers",
            "type": "COLLECTION",
            "resourceId": "gid://shopify/Collection/1007901140",
            "url": "/collection/bestsellers/new",
            "tags": [
              "new"
            ],
            "items": []
          }
        ]
      },
      {
        "title": "Products",
        "type": "CATALOG",
        "url": "/collections/all",
        "items": []
      },
      {
        "title": "About us",
        "type": "PAGE",
        "resourceId": "gid://shopify/Page/905192165",
        "url": "/pages/about-us",
        "items": []
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
  "query": "mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) { menuCreate(title: $title, handle: $handle, items: $items) { menu { id handle items { id title items { id title } } } } }",
   "variables": {
      "title": "Sidebar",
      "handle": "sidebar",
      "items": [
        {
          "title": "Collections",
          "type": "COLLECTION",
          "url": "/collection",
          "items": [
            {
              "title": "Bestsellers",
              "type": "COLLECTION",
              "resourceId": "gid://shopify/Collection/1007901140",
              "url": "/collection/bestsellers/new",
              "tags": [
                "new"
              ],
              "items": []
            }
          ]
        },
        {
          "title": "Products",
          "type": "CATALOG",
          "url": "/collections/all",
          "items": []
        },
        {
          "title": "About us",
          "type": "PAGE",
          "resourceId": "gid://shopify/Page/905192165",
          "url": "/pages/about-us",
          "items": []
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
    mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
      menuCreate(title: $title, handle: $handle, items: $items) {
        menu {
          id
          handle
          items {
            id
            title
            items {
              id
              title
            }
          }
        }
      }
    }`,
    {
      variables: {
          "title": "Sidebar",
          "handle": "sidebar",
          "items": [
              {
                  "title": "Collections",
                  "type": "COLLECTION",
                  "url": "/collection",
                  "items": [
                      {
                          "title": "Bestsellers",
                          "type": "COLLECTION",
                          "resourceId": "gid://shopify/Collection/1007901140",
                          "url": "/collection/bestsellers/new",
                          "tags": [
                              "new"
                          ],
                          "items": []
                      }
                  ]
              },
              {
                  "title": "Products",
                  "type": "CATALOG",
                  "url": "/collections/all",
                  "items": []
              },
              {
                  "title": "About us",
                  "type": "PAGE",
                  "resourceId": "gid://shopify/Page/905192165",
                  "url": "/pages/about-us",
                  "items": []
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
    mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
      menuCreate(title: $title, handle: $handle, items: $items) {
        menu {
          id
          handle
          items {
            id
            title
            items {
              id
              title
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "title": "Sidebar",
    "handle": "sidebar",
    "items": [
      {
        "title": "Collections",
        "type": "COLLECTION",
        "url": "/collection",
        "items": [
          {
            "title": "Bestsellers",
            "type": "COLLECTION",
            "resourceId": "gid://shopify/Collection/1007901140",
            "url": "/collection/bestsellers/new",
            "tags": [
              "new"
            ],
            "items": []
          }
        ]
      },
      {
        "title": "Products",
        "type": "CATALOG",
        "url": "/collections/all",
        "items": []
      },
      {
        "title": "About us",
        "type": "PAGE",
        "resourceId": "gid://shopify/Page/905192165",
        "url": "/pages/about-us",
        "items": []
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
      "query": `mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
        menuCreate(title: $title, handle: $handle, items: $items) {
          menu {
            id
            handle
            items {
              id
              title
              items {
                id
                title
              }
            }
          }
        }
      }`,
      "variables": {
          "title": "Sidebar",
          "handle": "sidebar",
          "items": [
              {
                  "title": "Collections",
                  "type": "COLLECTION",
                  "url": "/collection",
                  "items": [
                      {
                          "title": "Bestsellers",
                          "type": "COLLECTION",
                          "resourceId": "gid://shopify/Collection/1007901140",
                          "url": "/collection/bestsellers/new",
                          "tags": [
                              "new"
                          ],
                          "items": []
                      }
                  ]
              },
              {
                  "title": "Products",
                  "type": "CATALOG",
                  "url": "/collections/all",
                  "items": []
              },
              {
                  "title": "About us",
                  "type": "PAGE",
                  "resourceId": "gid://shopify/Page/905192165",
                  "url": "/pages/about-us",
                  "items": []
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "menuCreate": {
      "menu": null
    }
  }
  ```

* ### menuCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateMenu\(%24title%3A%20String!%2C%20%24handle%3A%20String!%2C%20%24items%3A%20%5BMenuItemCreateInput!%5D!\)%20%7B%0A%20%20menuCreate\(title%3A%20%24title%2C%20handle%3A%20%24handle%2C%20items%3A%20%24items\)%20%7B%0A%20%20%20%20menu%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22title%22%3A%20%22Sidebar%22%2C%0A%20%20%22handle%22%3A%20%22sidebar%22%2C%0A%20%20%22items%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22title%22%3A%20%22Collections%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollection%22%2C%0A%20%20%20%20%20%20%22items%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Bestsellers%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F1007901140%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollection%2Fbestsellers%2Fnew%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22tags%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22new%22%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22title%22%3A%20%22Products%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22CATALOG%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fall%22%2C%0A%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22title%22%3A%20%22About%20us%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22PAGE%22%2C%0A%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FPage%2F905192165%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22%2Fpages%2Fabout-us%22%2C%0A%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
  menuCreate(title: $title, handle: $handle, items: $items) {
    menu {
      id
      handle
      items {
        id
        title
        items {
          id
          title
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
"query": "mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) { menuCreate(title: $title, handle: $handle, items: $items) { menu { id handle items { id title items { id title } } } } }",
 "variables": {
    "title": "Sidebar",
    "handle": "sidebar",
    "items": [
      {
        "title": "Collections",
        "type": "COLLECTION",
        "url": "/collection",
        "items": [
          {
            "title": "Bestsellers",
            "type": "COLLECTION",
            "resourceId": "gid://shopify/Collection/1007901140",
            "url": "/collection/bestsellers/new",
            "tags": [
              "new"
            ],
            "items": []
          }
        ]
      },
      {
        "title": "Products",
        "type": "CATALOG",
        "url": "/collections/all",
        "items": []
      },
      {
        "title": "About us",
        "type": "PAGE",
        "resourceId": "gid://shopify/Page/905192165",
        "url": "/pages/about-us",
        "items": []
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
  mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
    menuCreate(title: $title, handle: $handle, items: $items) {
      menu {
        id
        handle
        items {
          id
          title
          items {
            id
            title
          }
        }
      }
    }
  }`,
  {
    variables: {
        "title": "Sidebar",
        "handle": "sidebar",
        "items": [
            {
                "title": "Collections",
                "type": "COLLECTION",
                "url": "/collection",
                "items": [
                    {
                        "title": "Bestsellers",
                        "type": "COLLECTION",
                        "resourceId": "gid://shopify/Collection/1007901140",
                        "url": "/collection/bestsellers/new",
                        "tags": [
                            "new"
                        ],
                        "items": []
                    }
                ]
            },
            {
                "title": "Products",
                "type": "CATALOG",
                "url": "/collections/all",
                "items": []
            },
            {
                "title": "About us",
                "type": "PAGE",
                "resourceId": "gid://shopify/Page/905192165",
                "url": "/pages/about-us",
                "items": []
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
    "query": `mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
      menuCreate(title: $title, handle: $handle, items: $items) {
        menu {
          id
          handle
          items {
            id
            title
            items {
              id
              title
            }
          }
        }
      }
    }`,
    "variables": {
        "title": "Sidebar",
        "handle": "sidebar",
        "items": [
            {
                "title": "Collections",
                "type": "COLLECTION",
                "url": "/collection",
                "items": [
                    {
                        "title": "Bestsellers",
                        "type": "COLLECTION",
                        "resourceId": "gid://shopify/Collection/1007901140",
                        "url": "/collection/bestsellers/new",
                        "tags": [
                            "new"
                        ],
                        "items": []
                    }
                ]
            },
            {
                "title": "Products",
                "type": "CATALOG",
                "url": "/collections/all",
                "items": []
            },
            {
                "title": "About us",
                "type": "PAGE",
                "resourceId": "gid://shopify/Page/905192165",
                "url": "/pages/about-us",
                "items": []
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
  mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
    menuCreate(title: $title, handle: $handle, items: $items) {
      menu {
        id
        handle
        items {
          id
          title
          items {
            id
            title
          }
        }
      }
    }
  }
QUERY

variables = {
  "title": "Sidebar",
  "handle": "sidebar",
  "items": [
    {
      "title": "Collections",
      "type": "COLLECTION",
      "url": "/collection",
      "items": [
        {
          "title": "Bestsellers",
          "type": "COLLECTION",
          "resourceId": "gid://shopify/Collection/1007901140",
          "url": "/collection/bestsellers/new",
          "tags": [
            "new"
          ],
          "items": []
        }
      ]
    },
    {
      "title": "Products",
      "type": "CATALOG",
      "url": "/collections/all",
      "items": []
    },
    {
      "title": "About us",
      "type": "PAGE",
      "resourceId": "gid://shopify/Page/905192165",
      "url": "/pages/about-us",
      "items": []
    }
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "title": "Sidebar",
  "handle": "sidebar",
  "items": [
    {
      "title": "Collections",
      "type": "COLLECTION",
      "url": "/collection",
      "items": [
        {
          "title": "Bestsellers",
          "type": "COLLECTION",
          "resourceId": "gid://shopify/Collection/1007901140",
          "url": "/collection/bestsellers/new",
          "tags": [
            "new"
          ],
          "items": []
        }
      ]
    },
    {
      "title": "Products",
      "type": "CATALOG",
      "url": "/collections/all",
      "items": []
    },
    {
      "title": "About us",
      "type": "PAGE",
      "resourceId": "gid://shopify/Page/905192165",
      "url": "/pages/about-us",
      "items": []
    }
  ]
}
```

## Response

JSON

```json
{
  "menuCreate": {
    "menu": null
  }
}
```
