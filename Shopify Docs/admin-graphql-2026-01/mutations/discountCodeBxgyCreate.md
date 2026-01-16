---
title: discountCodeBxgyCreate - GraphQL Admin
description: >-
  Creates a

  [buy X get Y discount
  (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)

  that's applied on a cart and at checkout when a customer enters a code.


  > Note:

  > To create discounts that are automatically applied on a cart and at
  checkout, use the

  [`discountAutomaticBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)

  mutation.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate.md
---

# discount​Code​Bxgy​Create

mutation

Requires Apps must have `write_discounts` access scope.

Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

***

Note

To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate) mutation.

***

## Arguments

* bxgy​Code​Discount

  [Discount​Code​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

  required

  The input data used to create the BXGY code discount.

***

## Discount​Code​Bxgy​Create​Payload returns

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The code discount that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a BXGY discount with a customer segment

  #### Description

  Create a \[BXGY discount]\(https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied when customers enter a code. This example shows how to create a code discount that offers a 20% discount on up to two featured snowboards to a specific customer segment when they buy three featured snowboards.

  #### Query

  ```graphql
  mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
    discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBxgy {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            startsAt
            endsAt
            customerBuys {
              items {
                ...collectionsFragment
              }
              value {
                ... on DiscountQuantity {
                  quantity
                }
              }
            }
            customerGets {
              value {
                ... on DiscountOnQuantity {
                  effect {
                    ... on DiscountPercentage {
                      percentage
                    }
                  }
                  quantity {
                    quantity
                  }
                }
              }
              items {
                ...collectionsFragment
              }
            }
            context {
              ... on DiscountCustomerSegments {
                segments {
                  id
                }
              }
            }
            appliesOncePerCustomer
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }

  fragment collectionsFragment on DiscountCollections {
    collections(first: 10) {
      nodes {
        id
        title
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "bxgyCodeDiscount": {
      "code": "SUMMERSALE",
      "title": "SUMMERSALE",
      "customerBuys": {
        "items": {
          "collections": {
            "add": [
              "gid://shopify/Collection/1007901140"
            ]
          }
        },
        "value": {
          "quantity": "3"
        }
      },
      "customerGets": {
        "items": {
          "collections": {
            "add": [
              "gid://shopify/Collection/1007901140"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "effect": {
              "percentage": 0.2
            },
            "quantity": "2"
          }
        }
      },
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      },
      "endsAt": "2025-07-29T16:17:05-04:00",
      "startsAt": "2025-07-24T16:17:05-04:00",
      "usesPerOrderLimit": 3
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
  "query": "mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) { discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) { codeDiscountNode { codeDiscount { ... on DiscountCodeBxgy { title codes(first: 10) { nodes { code } } startsAt endsAt customerBuys { items { ...collectionsFragment } value { ... on DiscountQuantity { quantity } } } customerGets { value { ... on DiscountOnQuantity { effect { ... on DiscountPercentage { percentage } } quantity { quantity } } } items { ...collectionsFragment } } context { ... on DiscountCustomerSegments { segments { id } } } appliesOncePerCustomer } } } userErrors { field code message } } } fragment collectionsFragment on DiscountCollections { collections(first: 10) { nodes { id title } } }",
   "variables": {
      "bxgyCodeDiscount": {
        "code": "SUMMERSALE",
        "title": "SUMMERSALE",
        "customerBuys": {
          "items": {
            "collections": {
              "add": [
                "gid://shopify/Collection/1007901140"
              ]
            }
          },
          "value": {
            "quantity": "3"
          }
        },
        "customerGets": {
          "items": {
            "collections": {
              "add": [
                "gid://shopify/Collection/1007901140"
              ]
            }
          },
          "value": {
            "discountOnQuantity": {
              "effect": {
                "percentage": 0.2
              },
              "quantity": "2"
            }
          }
        },
        "context": {
          "customerSegments": {
            "add": [
              "gid://shopify/Segment/210588551"
            ]
          }
        },
        "endsAt": "2025-07-29T16:17:05-04:00",
        "startsAt": "2025-07-24T16:17:05-04:00",
        "usesPerOrderLimit": 3
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
    mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
      discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBxgy {
              title
              codes(first: 10) {
                nodes {
                  code
                }
              }
              startsAt
              endsAt
              customerBuys {
                items {
                  ...collectionsFragment
                }
                value {
                  ... on DiscountQuantity {
                    quantity
                  }
                }
              }
              customerGets {
                value {
                  ... on DiscountOnQuantity {
                    effect {
                      ... on DiscountPercentage {
                        percentage
                      }
                    }
                    quantity {
                      quantity
                    }
                  }
                }
                items {
                  ...collectionsFragment
                }
              }
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
              appliesOncePerCustomer
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }
    
    fragment collectionsFragment on DiscountCollections {
      collections(first: 10) {
        nodes {
          id
          title
        }
      }
    }`,
    {
      variables: {
          "bxgyCodeDiscount": {
              "code": "SUMMERSALE",
              "title": "SUMMERSALE",
              "customerBuys": {
                  "items": {
                      "collections": {
                          "add": [
                              "gid://shopify/Collection/1007901140"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "3"
                  }
              },
              "customerGets": {
                  "items": {
                      "collections": {
                          "add": [
                              "gid://shopify/Collection/1007901140"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "effect": {
                              "percentage": 0.2
                          },
                          "quantity": "2"
                      }
                  }
              },
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
                  }
              },
              "endsAt": "2025-07-29T16:17:05-04:00",
              "startsAt": "2025-07-24T16:17:05-04:00",
              "usesPerOrderLimit": 3
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
    mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
      discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBxgy {
              title
              codes(first: 10) {
                nodes {
                  code
                }
              }
              startsAt
              endsAt
              customerBuys {
                items {
                  ...collectionsFragment
                }
                value {
                  ... on DiscountQuantity {
                    quantity
                  }
                }
              }
              customerGets {
                value {
                  ... on DiscountOnQuantity {
                    effect {
                      ... on DiscountPercentage {
                        percentage
                      }
                    }
                    quantity {
                      quantity
                    }
                  }
                }
                items {
                  ...collectionsFragment
                }
              }
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
              appliesOncePerCustomer
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }
    
    fragment collectionsFragment on DiscountCollections {
      collections(first: 10) {
        nodes {
          id
          title
        }
      }
    }
  QUERY

  variables = {
    "bxgyCodeDiscount": {
      "code": "SUMMERSALE",
      "title": "SUMMERSALE",
      "customerBuys": {
        "items": {
          "collections": {
            "add": [
              "gid://shopify/Collection/1007901140"
            ]
          }
        },
        "value": {
          "quantity": "3"
        }
      },
      "customerGets": {
        "items": {
          "collections": {
            "add": [
              "gid://shopify/Collection/1007901140"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "effect": {
              "percentage": 0.2
            },
            "quantity": "2"
          }
        }
      },
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      },
      "endsAt": "2025-07-29T16:17:05-04:00",
      "startsAt": "2025-07-24T16:17:05-04:00",
      "usesPerOrderLimit": 3
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
        discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
          codeDiscountNode {
            codeDiscount {
              ... on DiscountCodeBxgy {
                title
                codes(first: 10) {
                  nodes {
                    code
                  }
                }
                startsAt
                endsAt
                customerBuys {
                  items {
                    ...collectionsFragment
                  }
                  value {
                    ... on DiscountQuantity {
                      quantity
                    }
                  }
                }
                customerGets {
                  value {
                    ... on DiscountOnQuantity {
                      effect {
                        ... on DiscountPercentage {
                          percentage
                        }
                      }
                      quantity {
                        quantity
                      }
                    }
                  }
                  items {
                    ...collectionsFragment
                  }
                }
                context {
                  ... on DiscountCustomerSegments {
                    segments {
                      id
                    }
                  }
                }
                appliesOncePerCustomer
              }
            }
          }
          userErrors {
            field
            code
            message
          }
        }
      }
      
      fragment collectionsFragment on DiscountCollections {
        collections(first: 10) {
          nodes {
            id
            title
          }
        }
      }`,
      "variables": {
          "bxgyCodeDiscount": {
              "code": "SUMMERSALE",
              "title": "SUMMERSALE",
              "customerBuys": {
                  "items": {
                      "collections": {
                          "add": [
                              "gid://shopify/Collection/1007901140"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "3"
                  }
              },
              "customerGets": {
                  "items": {
                      "collections": {
                          "add": [
                              "gid://shopify/Collection/1007901140"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "effect": {
                              "percentage": 0.2
                          },
                          "quantity": "2"
                      }
                  }
              },
              "context": {
                  "customerSegments": {
                      "add": [
                          "gid://shopify/Segment/210588551"
                      ]
                  }
              },
              "endsAt": "2025-07-29T16:17:05-04:00",
              "startsAt": "2025-07-24T16:17:05-04:00",
              "usesPerOrderLimit": 3
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountCodeBxgyCreate": {
      "codeDiscountNode": {
        "codeDiscount": {
          "title": "SUMMERSALE",
          "codes": {
            "nodes": [
              {
                "code": "SUMMERSALE"
              }
            ]
          },
          "startsAt": "2025-07-24T20:17:05Z",
          "endsAt": "2025-07-29T20:17:05Z",
          "customerBuys": {
            "items": {
              "collections": {
                "nodes": [
                  {
                    "id": "gid://shopify/Collection/1007901140",
                    "title": "Featured items"
                  }
                ]
              }
            },
            "value": {
              "quantity": "3"
            }
          },
          "customerGets": {
            "value": {
              "effect": {
                "percentage": 0.2
              },
              "quantity": {
                "quantity": "2"
              }
            },
            "items": {
              "collections": {
                "nodes": [
                  {
                    "id": "gid://shopify/Collection/1007901140",
                    "title": "Featured items"
                  }
                ]
              }
            }
          },
          "context": {
            "segments": [
              {
                "id": "gid://shopify/Segment/210588551"
              }
            ]
          },
          "appliesOncePerCustomer": false
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Create a basic BXGY discount

  #### Description

  Create a \[BXGY discount]\(https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied when customers enter a code. This example shows how to create a discount that offers a 20% discount on up to two snowboards that are on sale to all customers when they buy three featured snowboards. The code discount is valid during the summer months and can be used a maximum of three times per order.

  #### Query

  ```graphql
  mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
    discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBxgy {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            startsAt
            endsAt
            customerBuys {
              items {
                ...collectionsFragment
              }
              value {
                ... on DiscountQuantity {
                  quantity
                }
              }
            }
            customerGets {
              appliesOnOneTimePurchase
              appliesOnSubscription
              value {
                ... on DiscountOnQuantity {
                  effect {
                    ... on DiscountPercentage {
                      percentage
                    }
                  }
                  quantity {
                    quantity
                  }
                }
              }
              items {
                ...collectionsFragment
              }
            }
            customerSelection {
              ... on DiscountCustomerAll {
                allCustomers
              }
            }
            appliesOncePerCustomer
            usesPerOrderLimit
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }

  fragment collectionsFragment on DiscountCollections {
    collections(first: 10) {
      nodes {
        id
        title
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "bxgyCodeDiscount": {
      "code": "SUMMERSALE",
      "customerBuys": {
        "items": {
          "collections": {
            "add": [
              "gid://shopify/Collection/1007901140"
            ]
          }
        },
        "value": {
          "quantity": "3"
        }
      },
      "customerGets": {
        "items": {
          "collections": {
            "add": [
              "gid://shopify/Collection/711838235"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "effect": {
              "percentage": 0.2
            },
            "quantity": "2"
          }
        }
      },
      "customerSelection": {
        "all": true
      },
      "endsAt": "2025-07-29T16:17:12-04:00",
      "startsAt": "2025-07-24T16:17:12-04:00",
      "title": "20% off up to two snowboards that are on sale for every three featured snowboards you buy.",
      "usesPerOrderLimit": 3
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
  "query": "mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) { discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) { codeDiscountNode { codeDiscount { ... on DiscountCodeBxgy { title codes(first: 10) { nodes { code } } startsAt endsAt customerBuys { items { ...collectionsFragment } value { ... on DiscountQuantity { quantity } } } customerGets { appliesOnOneTimePurchase appliesOnSubscription value { ... on DiscountOnQuantity { effect { ... on DiscountPercentage { percentage } } quantity { quantity } } } items { ...collectionsFragment } } customerSelection { ... on DiscountCustomerAll { allCustomers } } appliesOncePerCustomer usesPerOrderLimit } } } userErrors { field code message } } } fragment collectionsFragment on DiscountCollections { collections(first: 10) { nodes { id title } } }",
   "variables": {
      "bxgyCodeDiscount": {
        "code": "SUMMERSALE",
        "customerBuys": {
          "items": {
            "collections": {
              "add": [
                "gid://shopify/Collection/1007901140"
              ]
            }
          },
          "value": {
            "quantity": "3"
          }
        },
        "customerGets": {
          "items": {
            "collections": {
              "add": [
                "gid://shopify/Collection/711838235"
              ]
            }
          },
          "value": {
            "discountOnQuantity": {
              "effect": {
                "percentage": 0.2
              },
              "quantity": "2"
            }
          }
        },
        "customerSelection": {
          "all": true
        },
        "endsAt": "2025-07-29T16:17:12-04:00",
        "startsAt": "2025-07-24T16:17:12-04:00",
        "title": "20% off up to two snowboards that are on sale for every three featured snowboards you buy.",
        "usesPerOrderLimit": 3
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
    mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
      discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBxgy {
              title
              codes(first: 10) {
                nodes {
                  code
                }
              }
              startsAt
              endsAt
              customerBuys {
                items {
                  ...collectionsFragment
                }
                value {
                  ... on DiscountQuantity {
                    quantity
                  }
                }
              }
              customerGets {
                appliesOnOneTimePurchase
                appliesOnSubscription
                value {
                  ... on DiscountOnQuantity {
                    effect {
                      ... on DiscountPercentage {
                        percentage
                      }
                    }
                    quantity {
                      quantity
                    }
                  }
                }
                items {
                  ...collectionsFragment
                }
              }
              customerSelection {
                ... on DiscountCustomerAll {
                  allCustomers
                }
              }
              appliesOncePerCustomer
              usesPerOrderLimit
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }
    
    fragment collectionsFragment on DiscountCollections {
      collections(first: 10) {
        nodes {
          id
          title
        }
      }
    }`,
    {
      variables: {
          "bxgyCodeDiscount": {
              "code": "SUMMERSALE",
              "customerBuys": {
                  "items": {
                      "collections": {
                          "add": [
                              "gid://shopify/Collection/1007901140"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "3"
                  }
              },
              "customerGets": {
                  "items": {
                      "collections": {
                          "add": [
                              "gid://shopify/Collection/711838235"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "effect": {
                              "percentage": 0.2
                          },
                          "quantity": "2"
                      }
                  }
              },
              "customerSelection": {
                  "all": true
              },
              "endsAt": "2025-07-29T16:17:12-04:00",
              "startsAt": "2025-07-24T16:17:12-04:00",
              "title": "20% off up to two snowboards that are on sale for every three featured snowboards you buy.",
              "usesPerOrderLimit": 3
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
    mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
      discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBxgy {
              title
              codes(first: 10) {
                nodes {
                  code
                }
              }
              startsAt
              endsAt
              customerBuys {
                items {
                  ...collectionsFragment
                }
                value {
                  ... on DiscountQuantity {
                    quantity
                  }
                }
              }
              customerGets {
                appliesOnOneTimePurchase
                appliesOnSubscription
                value {
                  ... on DiscountOnQuantity {
                    effect {
                      ... on DiscountPercentage {
                        percentage
                      }
                    }
                    quantity {
                      quantity
                    }
                  }
                }
                items {
                  ...collectionsFragment
                }
              }
              customerSelection {
                ... on DiscountCustomerAll {
                  allCustomers
                }
              }
              appliesOncePerCustomer
              usesPerOrderLimit
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }
    
    fragment collectionsFragment on DiscountCollections {
      collections(first: 10) {
        nodes {
          id
          title
        }
      }
    }
  QUERY

  variables = {
    "bxgyCodeDiscount": {
      "code": "SUMMERSALE",
      "customerBuys": {
        "items": {
          "collections": {
            "add": [
              "gid://shopify/Collection/1007901140"
            ]
          }
        },
        "value": {
          "quantity": "3"
        }
      },
      "customerGets": {
        "items": {
          "collections": {
            "add": [
              "gid://shopify/Collection/711838235"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "effect": {
              "percentage": 0.2
            },
            "quantity": "2"
          }
        }
      },
      "customerSelection": {
        "all": true
      },
      "endsAt": "2025-07-29T16:17:12-04:00",
      "startsAt": "2025-07-24T16:17:12-04:00",
      "title": "20% off up to two snowboards that are on sale for every three featured snowboards you buy.",
      "usesPerOrderLimit": 3
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
        discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
          codeDiscountNode {
            codeDiscount {
              ... on DiscountCodeBxgy {
                title
                codes(first: 10) {
                  nodes {
                    code
                  }
                }
                startsAt
                endsAt
                customerBuys {
                  items {
                    ...collectionsFragment
                  }
                  value {
                    ... on DiscountQuantity {
                      quantity
                    }
                  }
                }
                customerGets {
                  appliesOnOneTimePurchase
                  appliesOnSubscription
                  value {
                    ... on DiscountOnQuantity {
                      effect {
                        ... on DiscountPercentage {
                          percentage
                        }
                      }
                      quantity {
                        quantity
                      }
                    }
                  }
                  items {
                    ...collectionsFragment
                  }
                }
                customerSelection {
                  ... on DiscountCustomerAll {
                    allCustomers
                  }
                }
                appliesOncePerCustomer
                usesPerOrderLimit
              }
            }
          }
          userErrors {
            field
            code
            message
          }
        }
      }
      
      fragment collectionsFragment on DiscountCollections {
        collections(first: 10) {
          nodes {
            id
            title
          }
        }
      }`,
      "variables": {
          "bxgyCodeDiscount": {
              "code": "SUMMERSALE",
              "customerBuys": {
                  "items": {
                      "collections": {
                          "add": [
                              "gid://shopify/Collection/1007901140"
                          ]
                      }
                  },
                  "value": {
                      "quantity": "3"
                  }
              },
              "customerGets": {
                  "items": {
                      "collections": {
                          "add": [
                              "gid://shopify/Collection/711838235"
                          ]
                      }
                  },
                  "value": {
                      "discountOnQuantity": {
                          "effect": {
                              "percentage": 0.2
                          },
                          "quantity": "2"
                      }
                  }
              },
              "customerSelection": {
                  "all": true
              },
              "endsAt": "2025-07-29T16:17:12-04:00",
              "startsAt": "2025-07-24T16:17:12-04:00",
              "title": "20% off up to two snowboards that are on sale for every three featured snowboards you buy.",
              "usesPerOrderLimit": 3
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "discountCodeBxgyCreate": {
      "codeDiscountNode": {
        "codeDiscount": {
          "title": "20% off up to two snowboards that are on sale for every three featured snowboards you buy.",
          "codes": {
            "nodes": [
              {
                "code": "SUMMERSALE"
              }
            ]
          },
          "startsAt": "2025-07-24T20:17:12Z",
          "endsAt": "2025-07-29T20:17:12Z",
          "customerBuys": {
            "items": {
              "collections": {
                "nodes": [
                  {
                    "id": "gid://shopify/Collection/1007901140",
                    "title": "Featured items"
                  }
                ]
              }
            },
            "value": {
              "quantity": "3"
            }
          },
          "customerGets": {
            "appliesOnOneTimePurchase": true,
            "appliesOnSubscription": false,
            "value": {
              "effect": {
                "percentage": 0.2
              },
              "quantity": {
                "quantity": "2"
              }
            },
            "items": {
              "collections": {
                "nodes": [
                  {
                    "id": "gid://shopify/Collection/711838235",
                    "title": "On Sale!"
                  }
                ]
              }
            }
          },
          "customerSelection": {
            "allCustomers": true
          },
          "appliesOncePerCustomer": false,
          "usesPerOrderLimit": 3
        }
      },
      "userErrors": []
    }
  }
  ```

* ### discountCodeBxgyCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountCodeBxgyCreate\(%24bxgyCodeDiscount%3A%20DiscountCodeBxgyInput!\)%20%7B%0A%20%20discountCodeBxgyCreate\(bxgyCodeDiscount%3A%20%24bxgyCodeDiscount\)%20%7B%0A%20%20%20%20codeDiscountNode%20%7B%0A%20%20%20%20%20%20codeDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountCodeBxgy%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20codes\(first%3A%2010\)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20%20%20%20%20customerBuys%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...collectionsFragment%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20value%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountQuantity%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20customerGets%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountOnQuantity%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20effect%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountPercentage%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20percentage%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20quantity%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...collectionsFragment%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20context%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountCustomerSegments%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20segments%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20appliesOncePerCustomer%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20collectionsFragment%20on%20DiscountCollections%20%7B%0A%20%20collections\(first%3A%2010\)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22bxgyCodeDiscount%22%3A%20%7B%0A%20%20%20%20%22code%22%3A%20%22SUMMERSALE%22%2C%0A%20%20%20%20%22title%22%3A%20%22SUMMERSALE%22%2C%0A%20%20%20%20%22customerBuys%22%3A%20%7B%0A%20%20%20%20%20%20%22items%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22collections%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22add%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FCollection%2F1007901140%22%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%20%223%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22customerGets%22%3A%20%7B%0A%20%20%20%20%20%20%22items%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22collections%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22add%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FCollection%2F1007901140%22%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22discountOnQuantity%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22effect%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22percentage%22%3A%200.2%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%22quantity%22%3A%20%222%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22context%22%3A%20%7B%0A%20%20%20%20%20%20%22customerSegments%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22add%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FSegment%2F210588551%22%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22endsAt%22%3A%20%222025-07-29T16%3A17%3A05-04%3A00%22%2C%0A%20%20%20%20%22startsAt%22%3A%20%222025-07-24T16%3A17%3A05-04%3A00%22%2C%0A%20%20%20%20%22usesPerOrderLimit%22%3A%203%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
  discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
    codeDiscountNode {
      codeDiscount {
        ... on DiscountCodeBxgy {
          title
          codes(first: 10) {
            nodes {
              code
            }
          }
          startsAt
          endsAt
          customerBuys {
            items {
              ...collectionsFragment
            }
            value {
              ... on DiscountQuantity {
                quantity
              }
            }
          }
          customerGets {
            value {
              ... on DiscountOnQuantity {
                effect {
                  ... on DiscountPercentage {
                    percentage
                  }
                }
                quantity {
                  quantity
                }
              }
            }
            items {
              ...collectionsFragment
            }
          }
          context {
            ... on DiscountCustomerSegments {
              segments {
                id
              }
            }
          }
          appliesOncePerCustomer
        }
      }
    }
    userErrors {
      field
      code
      message
    }
  }
}

fragment collectionsFragment on DiscountCollections {
  collections(first: 10) {
    nodes {
      id
      title
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
"query": "mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) { discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) { codeDiscountNode { codeDiscount { ... on DiscountCodeBxgy { title codes(first: 10) { nodes { code } } startsAt endsAt customerBuys { items { ...collectionsFragment } value { ... on DiscountQuantity { quantity } } } customerGets { value { ... on DiscountOnQuantity { effect { ... on DiscountPercentage { percentage } } quantity { quantity } } } items { ...collectionsFragment } } context { ... on DiscountCustomerSegments { segments { id } } } appliesOncePerCustomer } } } userErrors { field code message } } } fragment collectionsFragment on DiscountCollections { collections(first: 10) { nodes { id title } } }",
 "variables": {
    "bxgyCodeDiscount": {
      "code": "SUMMERSALE",
      "title": "SUMMERSALE",
      "customerBuys": {
        "items": {
          "collections": {
            "add": [
              "gid://shopify/Collection/1007901140"
            ]
          }
        },
        "value": {
          "quantity": "3"
        }
      },
      "customerGets": {
        "items": {
          "collections": {
            "add": [
              "gid://shopify/Collection/1007901140"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "effect": {
              "percentage": 0.2
            },
            "quantity": "2"
          }
        }
      },
      "context": {
        "customerSegments": {
          "add": [
            "gid://shopify/Segment/210588551"
          ]
        }
      },
      "endsAt": "2025-07-29T16:17:05-04:00",
      "startsAt": "2025-07-24T16:17:05-04:00",
      "usesPerOrderLimit": 3
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
  mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
    discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBxgy {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            startsAt
            endsAt
            customerBuys {
              items {
                ...collectionsFragment
              }
              value {
                ... on DiscountQuantity {
                  quantity
                }
              }
            }
            customerGets {
              value {
                ... on DiscountOnQuantity {
                  effect {
                    ... on DiscountPercentage {
                      percentage
                    }
                  }
                  quantity {
                    quantity
                  }
                }
              }
              items {
                ...collectionsFragment
              }
            }
            context {
              ... on DiscountCustomerSegments {
                segments {
                  id
                }
              }
            }
            appliesOncePerCustomer
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
  
  fragment collectionsFragment on DiscountCollections {
    collections(first: 10) {
      nodes {
        id
        title
      }
    }
  }`,
  {
    variables: {
        "bxgyCodeDiscount": {
            "code": "SUMMERSALE",
            "title": "SUMMERSALE",
            "customerBuys": {
                "items": {
                    "collections": {
                        "add": [
                            "gid://shopify/Collection/1007901140"
                        ]
                    }
                },
                "value": {
                    "quantity": "3"
                }
            },
            "customerGets": {
                "items": {
                    "collections": {
                        "add": [
                            "gid://shopify/Collection/1007901140"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "effect": {
                            "percentage": 0.2
                        },
                        "quantity": "2"
                    }
                }
            },
            "context": {
                "customerSegments": {
                    "add": [
                        "gid://shopify/Segment/210588551"
                    ]
                }
            },
            "endsAt": "2025-07-29T16:17:05-04:00",
            "startsAt": "2025-07-24T16:17:05-04:00",
            "usesPerOrderLimit": 3
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
    "query": `mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
      discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBxgy {
              title
              codes(first: 10) {
                nodes {
                  code
                }
              }
              startsAt
              endsAt
              customerBuys {
                items {
                  ...collectionsFragment
                }
                value {
                  ... on DiscountQuantity {
                    quantity
                  }
                }
              }
              customerGets {
                value {
                  ... on DiscountOnQuantity {
                    effect {
                      ... on DiscountPercentage {
                        percentage
                      }
                    }
                    quantity {
                      quantity
                    }
                  }
                }
                items {
                  ...collectionsFragment
                }
              }
              context {
                ... on DiscountCustomerSegments {
                  segments {
                    id
                  }
                }
              }
              appliesOncePerCustomer
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }
    
    fragment collectionsFragment on DiscountCollections {
      collections(first: 10) {
        nodes {
          id
          title
        }
      }
    }`,
    "variables": {
        "bxgyCodeDiscount": {
            "code": "SUMMERSALE",
            "title": "SUMMERSALE",
            "customerBuys": {
                "items": {
                    "collections": {
                        "add": [
                            "gid://shopify/Collection/1007901140"
                        ]
                    }
                },
                "value": {
                    "quantity": "3"
                }
            },
            "customerGets": {
                "items": {
                    "collections": {
                        "add": [
                            "gid://shopify/Collection/1007901140"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "effect": {
                            "percentage": 0.2
                        },
                        "quantity": "2"
                    }
                }
            },
            "context": {
                "customerSegments": {
                    "add": [
                        "gid://shopify/Segment/210588551"
                    ]
                }
            },
            "endsAt": "2025-07-29T16:17:05-04:00",
            "startsAt": "2025-07-24T16:17:05-04:00",
            "usesPerOrderLimit": 3
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
  mutation discountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
    discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBxgy {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            startsAt
            endsAt
            customerBuys {
              items {
                ...collectionsFragment
              }
              value {
                ... on DiscountQuantity {
                  quantity
                }
              }
            }
            customerGets {
              value {
                ... on DiscountOnQuantity {
                  effect {
                    ... on DiscountPercentage {
                      percentage
                    }
                  }
                  quantity {
                    quantity
                  }
                }
              }
              items {
                ...collectionsFragment
              }
            }
            context {
              ... on DiscountCustomerSegments {
                segments {
                  id
                }
              }
            }
            appliesOncePerCustomer
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
  
  fragment collectionsFragment on DiscountCollections {
    collections(first: 10) {
      nodes {
        id
        title
      }
    }
  }
QUERY

variables = {
  "bxgyCodeDiscount": {
    "code": "SUMMERSALE",
    "title": "SUMMERSALE",
    "customerBuys": {
      "items": {
        "collections": {
          "add": [
            "gid://shopify/Collection/1007901140"
          ]
        }
      },
      "value": {
        "quantity": "3"
      }
    },
    "customerGets": {
      "items": {
        "collections": {
          "add": [
            "gid://shopify/Collection/1007901140"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "effect": {
            "percentage": 0.2
          },
          "quantity": "2"
        }
      }
    },
    "context": {
      "customerSegments": {
        "add": [
          "gid://shopify/Segment/210588551"
        ]
      }
    },
    "endsAt": "2025-07-29T16:17:05-04:00",
    "startsAt": "2025-07-24T16:17:05-04:00",
    "usesPerOrderLimit": 3
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "bxgyCodeDiscount": {
    "code": "SUMMERSALE",
    "title": "SUMMERSALE",
    "customerBuys": {
      "items": {
        "collections": {
          "add": [
            "gid://shopify/Collection/1007901140"
          ]
        }
      },
      "value": {
        "quantity": "3"
      }
    },
    "customerGets": {
      "items": {
        "collections": {
          "add": [
            "gid://shopify/Collection/1007901140"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "effect": {
            "percentage": 0.2
          },
          "quantity": "2"
        }
      }
    },
    "context": {
      "customerSegments": {
        "add": [
          "gid://shopify/Segment/210588551"
        ]
      }
    },
    "endsAt": "2025-07-29T16:17:05-04:00",
    "startsAt": "2025-07-24T16:17:05-04:00",
    "usesPerOrderLimit": 3
  }
}
```

## Response

JSON

```json
{
  "discountCodeBxgyCreate": {
    "codeDiscountNode": {
      "codeDiscount": {
        "title": "SUMMERSALE",
        "codes": {
          "nodes": [
            {
              "code": "SUMMERSALE"
            }
          ]
        },
        "startsAt": "2025-07-24T20:17:05Z",
        "endsAt": "2025-07-29T20:17:05Z",
        "customerBuys": {
          "items": {
            "collections": {
              "nodes": [
                {
                  "id": "gid://shopify/Collection/1007901140",
                  "title": "Featured items"
                }
              ]
            }
          },
          "value": {
            "quantity": "3"
          }
        },
        "customerGets": {
          "value": {
            "effect": {
              "percentage": 0.2
            },
            "quantity": {
              "quantity": "2"
            }
          },
          "items": {
            "collections": {
              "nodes": [
                {
                  "id": "gid://shopify/Collection/1007901140",
                  "title": "Featured items"
                }
              ]
            }
          }
        },
        "context": {
          "segments": [
            {
              "id": "gid://shopify/Segment/210588551"
            }
          ]
        },
        "appliesOncePerCustomer": false
      }
    },
    "userErrors": []
  }
}
```
