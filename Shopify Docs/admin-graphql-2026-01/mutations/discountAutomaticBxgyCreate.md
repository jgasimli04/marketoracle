---
title: discountAutomaticBxgyCreate - GraphQL Admin
description: >-
  Creates a

  [buy X get Y discount
  (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)

  that's automatically applied on a cart and at checkout.


  > Note:

  > To create code discounts, use the

  [`discountCodeBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)

  mutation.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate.md
---

# discount​Automatic​Bxgy​Create

mutation

Requires Apps must have `write_discounts` access scope.

Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

***

Note

To create code discounts, use the [`discountCodeBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate) mutation.

***

## Arguments

* automatic​Bxgy​Discount

  [Discount​Automatic​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

  required

  The input data used to create the automatic BXGY discount.

***

## Discount​Automatic​Bxgy​Create​Payload returns

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic discount that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create an automatic BXGY discount for a customer segment

  #### Description

  Create an automatic \[BXGY discount]\(https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that gives customers a free product when they buy a different product. This mutation creates a cross-product promotion that only applies to a customer segment

  #### Query

  ```graphql
  mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
            context {
              ... on DiscountCustomerSegments {
                segments {
                  id
                }
              }
            }
          }
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
    "automaticBxgyDiscount": {
      "title": "Buy first product, get second product free",
      "startsAt": "2025-01-01T00:00:00Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/20995642"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1
            }
          }
        }
      },
      "usesPerOrderLimit": "1"
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
  "query": "mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBxgy { title startsAt endsAt context { ... on DiscountCustomerSegments { segments { id } } } } } } userErrors { field message } } }",
   "variables": {
      "automaticBxgyDiscount": {
        "title": "Buy first product, get second product free",
        "startsAt": "2025-01-01T00:00:00Z",
        "customerBuys": {
          "items": {
            "products": {
              "productsToAdd": [
                "gid://shopify/Product/108828309"
              ]
            }
          },
          "value": {
            "quantity": "1"
          }
        },
        "context": {
          "customerSegments": {
            "add": [
              "gid://shopify/Segment/210588551"
            ]
          }
        },
        "customerGets": {
          "items": {
            "products": {
              "productsToAdd": [
                "gid://shopify/Product/20995642"
              ]
            }
          },
          "value": {
            "discountOnQuantity": {
              "quantity": "1",
              "effect": {
                "percentage": 1
              }
            }
          }
        },
        "usesPerOrderLimit": "1"
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
    mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
            }
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
          "automaticBxgyDiscount": {
              "title": "Buy first product, get second product free",
              "startsAt": "2025-01-01T00:00:00Z",
              "customerBuys": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/108828309"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "1"
                  }
              },
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
                  }
              },
              "customerGets": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/20995642"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "quantity": "1",
                          "effect": {
                              "percentage": 1
                          }
                      }
                  }
              },
              "usesPerOrderLimit": "1"
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
    mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
            }
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
    "automaticBxgyDiscount": {
      "title": "Buy first product, get second product free",
      "startsAt": "2025-01-01T00:00:00Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/20995642"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1
            }
          }
        }
      },
      "usesPerOrderLimit": "1"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
        discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
          automaticDiscountNode {
            id
            automaticDiscount {
              ... on DiscountAutomaticBxgy {
                title
                startsAt
                endsAt
                context {
                  ... on DiscountCustomerSegments {
                    segments {
                      id
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "automaticBxgyDiscount": {
              "title": "Buy first product, get second product free",
              "startsAt": "2025-01-01T00:00:00Z",
              "customerBuys": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/108828309"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "1"
                  }
              },
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
                  }
              },
              "customerGets": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/20995642"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "quantity": "1",
                          "effect": {
                              "percentage": 1
                          }
                      }
                  }
              },
              "usesPerOrderLimit": "1"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountAutomaticBxgyCreate": {
      "automaticDiscountNode": {
        "id": "gid://shopify/DiscountAutomaticNode/1057856666",
        "automaticDiscount": {
          "title": "Buy first product, get second product free",
          "startsAt": "2025-01-01T00:00:00Z",
          "endsAt": null,
          "context": {
            "segments": [
              {
                "id": "gid://shopify/Segment/210588551"
              }
            ]
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Create an automatic BXGY discount for different products

  #### Description

  Create an automatic \[BXGY discount]\(https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that gives customers a free product when they buy a different product. This mutation creates a cross-product promotion where buying one product gets you a different product for free. For example, buy a snowboard and get a free helmet.

  #### Query

  ```graphql
  mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
          }
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
    "automaticBxgyDiscount": {
      "title": "Buy first product, get second product free",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/20995642"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1
            }
          }
        }
      },
      "usesPerOrderLimit": "1"
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
  "query": "mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBxgy { title startsAt endsAt } } } userErrors { field message } } }",
   "variables": {
      "automaticBxgyDiscount": {
        "title": "Buy first product, get second product free",
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": "2025-12-31T23:59:59Z",
        "customerBuys": {
          "items": {
            "products": {
              "productsToAdd": [
                "gid://shopify/Product/108828309"
              ]
            }
          },
          "value": {
            "quantity": "1"
          }
        },
        "customerGets": {
          "items": {
            "products": {
              "productsToAdd": [
                "gid://shopify/Product/20995642"
              ]
            }
          },
          "value": {
            "discountOnQuantity": {
              "quantity": "1",
              "effect": {
                "percentage": 1
              }
            }
          }
        },
        "usesPerOrderLimit": "1"
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
    mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
            }
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
          "automaticBxgyDiscount": {
              "title": "Buy first product, get second product free",
              "startsAt": "2025-01-01T00:00:00Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "customerBuys": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/108828309"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "1"
                  }
              },
              "customerGets": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/20995642"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "quantity": "1",
                          "effect": {
                              "percentage": 1
                          }
                      }
                  }
              },
              "usesPerOrderLimit": "1"
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
    mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
            }
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
    "automaticBxgyDiscount": {
      "title": "Buy first product, get second product free",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/20995642"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1
            }
          }
        }
      },
      "usesPerOrderLimit": "1"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
        discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
          automaticDiscountNode {
            id
            automaticDiscount {
              ... on DiscountAutomaticBxgy {
                title
                startsAt
                endsAt
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "automaticBxgyDiscount": {
              "title": "Buy first product, get second product free",
              "startsAt": "2025-01-01T00:00:00Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "customerBuys": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/108828309"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "1"
                  }
              },
              "customerGets": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/20995642"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "quantity": "1",
                          "effect": {
                              "percentage": 1
                          }
                      }
                  }
              },
              "usesPerOrderLimit": "1"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountAutomaticBxgyCreate": {
      "automaticDiscountNode": {
        "id": "gid://shopify/DiscountAutomaticNode/1057856668",
        "automaticDiscount": {
          "title": "Buy first product, get second product free",
          "startsAt": "2025-01-01T00:00:00Z",
          "endsAt": "2025-12-31T23:59:59Z"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Create an automatic BXGY discount for the same product

  #### Description

  Create an automatic \[BXGY discount]\(https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that gives customers a free duplicate of the product they purchase. This mutation creates a "Buy One, Get One Free" discount.

  #### Query

  ```graphql
  mutation CreateAutomaticBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
          }
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
    "automaticBxgyDiscount": {
      "title": "Buy one, get one free",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "effect": {
              "percentage": 1
            },
            "quantity": "1"
          }
        }
      },
      "usesPerOrderLimit": "1"
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
  "query": "mutation CreateAutomaticBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBxgy { title startsAt endsAt } } } userErrors { field message } } }",
   "variables": {
      "automaticBxgyDiscount": {
        "title": "Buy one, get one free",
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": "2025-12-31T23:59:59Z",
        "customerBuys": {
          "items": {
            "products": {
              "productsToAdd": [
                "gid://shopify/Product/108828309"
              ]
            }
          },
          "value": {
            "quantity": "1"
          }
        },
        "customerGets": {
          "items": {
            "products": {
              "productsToAdd": [
                "gid://shopify/Product/108828309"
              ]
            }
          },
          "value": {
            "discountOnQuantity": {
              "effect": {
                "percentage": 1
              },
              "quantity": "1"
            }
          }
        },
        "usesPerOrderLimit": "1"
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
    mutation CreateAutomaticBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
            }
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
          "automaticBxgyDiscount": {
              "title": "Buy one, get one free",
              "startsAt": "2025-01-01T00:00:00Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "customerBuys": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/108828309"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "1"
                  }
              },
              "customerGets": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/108828309"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "effect": {
                              "percentage": 1
                          },
                          "quantity": "1"
                      }
                  }
              },
              "usesPerOrderLimit": "1"
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
    mutation CreateAutomaticBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
            }
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
    "automaticBxgyDiscount": {
      "title": "Buy one, get one free",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "effect": {
              "percentage": 1
            },
            "quantity": "1"
          }
        }
      },
      "usesPerOrderLimit": "1"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CreateAutomaticBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
        discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
          automaticDiscountNode {
            id
            automaticDiscount {
              ... on DiscountAutomaticBxgy {
                title
                startsAt
                endsAt
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "automaticBxgyDiscount": {
              "title": "Buy one, get one free",
              "startsAt": "2025-01-01T00:00:00Z",
              "endsAt": "2025-12-31T23:59:59Z",
              "customerBuys": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/108828309"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "1"
                  }
              },
              "customerGets": {
                  "items": {
                      "products": {
                          "productsToAdd": [
                              "gid://shopify/Product/108828309"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "effect": {
                              "percentage": 1
                          },
                          "quantity": "1"
                      }
                  }
              },
              "usesPerOrderLimit": "1"
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountAutomaticBxgyCreate": {
      "automaticDiscountNode": {
        "id": "gid://shopify/DiscountAutomaticNode/1057856667",
        "automaticDiscount": {
          "title": "Buy one, get one free",
          "startsAt": "2025-01-01T00:00:00Z",
          "endsAt": "2025-12-31T23:59:59Z"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### discountAutomaticBxgyCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateBxgyDiscount\(%24automaticBxgyDiscount%3A%20DiscountAutomaticBxgyInput!\)%20%7B%0A%20%20discountAutomaticBxgyCreate\(automaticBxgyDiscount%3A%20%24automaticBxgyDiscount\)%20%7B%0A%20%20%20%20automaticDiscountNode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20automaticDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountAutomaticBxgy%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20%20%20%20%20context%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountCustomerSegments%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20segments%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22automaticBxgyDiscount%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22Buy%20first%20product%2C%20get%20second%20product%20free%22%2C%0A%20%20%20%20%22startsAt%22%3A%20%222025-01-01T00%3A00%3A00Z%22%2C%0A%20%20%20%20%22customerBuys%22%3A%20%7B%0A%20%20%20%20%20%20%22items%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22products%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22productsToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FProduct%2F108828309%22%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%20%221%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22context%22%3A%20%7B%0A%20%20%20%20%20%20%22customerSegments%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22add%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FSegment%2F210588551%22%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22customerGets%22%3A%20%7B%0A%20%20%20%20%20%20%22items%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22products%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22productsToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22discountOnQuantity%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22quantity%22%3A%20%221%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22effect%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22percentage%22%3A%201%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22usesPerOrderLimit%22%3A%20%221%22%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
  discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          startsAt
          endsAt
          context {
            ... on DiscountCustomerSegments {
              segments {
                id
              }
            }
          }
        }
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
"query": "mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBxgy { title startsAt endsAt context { ... on DiscountCustomerSegments { segments { id } } } } } } userErrors { field message } } }",
 "variables": {
    "automaticBxgyDiscount": {
      "title": "Buy first product, get second product free",
      "startsAt": "2025-01-01T00:00:00Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/20995642"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1
            }
          }
        }
      },
      "usesPerOrderLimit": "1"
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
  mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
            context {
              ... on DiscountCustomerSegments {
                segments {
                  id
                }
              }
            }
          }
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
        "automaticBxgyDiscount": {
            "title": "Buy first product, get second product free",
            "startsAt": "2025-01-01T00:00:00Z",
            "customerBuys": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "quantity": "1"
                }
            },
            "context": {
                "customerSegments": {
                    "add": [
                        "gid://shopify/Segment/210588551"
                    ]
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/20995642"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "quantity": "1",
                        "effect": {
                            "percentage": 1
                        }
                    }
                }
            },
            "usesPerOrderLimit": "1"
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
    "query": `mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "automaticBxgyDiscount": {
            "title": "Buy first product, get second product free",
            "startsAt": "2025-01-01T00:00:00Z",
            "customerBuys": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "quantity": "1"
                }
            },
            "context": {
                "customerSegments": {
                    "add": [
                        "gid://shopify/Segment/210588551"
                    ]
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/20995642"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "quantity": "1",
                        "effect": {
                            "percentage": 1
                        }
                    }
                }
            },
            "usesPerOrderLimit": "1"
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
  mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
            context {
              ... on DiscountCustomerSegments {
                segments {
                  id
                }
              }
            }
          }
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
  "automaticBxgyDiscount": {
    "title": "Buy first product, get second product free",
    "startsAt": "2025-01-01T00:00:00Z",
    "customerBuys": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "quantity": "1"
      }
    },
    "context": {
      "customerSegments": {
        "add": [
          "gid://shopify/Segment/210588551"
        ]
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/20995642"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "quantity": "1",
          "effect": {
            "percentage": 1
          }
        }
      }
    },
    "usesPerOrderLimit": "1"
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "automaticBxgyDiscount": {
    "title": "Buy first product, get second product free",
    "startsAt": "2025-01-01T00:00:00Z",
    "customerBuys": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "quantity": "1"
      }
    },
    "context": {
      "customerSegments": {
        "add": [
          "gid://shopify/Segment/210588551"
        ]
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/20995642"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "quantity": "1",
          "effect": {
            "percentage": 1
          }
        }
      }
    },
    "usesPerOrderLimit": "1"
  }
}
```

## Response

JSON

```json
{
  "discountAutomaticBxgyCreate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/1057856666",
      "automaticDiscount": {
        "title": "Buy first product, get second product free",
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": null,
        "context": {
          "segments": [
            {
              "id": "gid://shopify/Segment/210588551"
            }
          ]
        }
      }
    },
    "userErrors": []
  }
}
```
