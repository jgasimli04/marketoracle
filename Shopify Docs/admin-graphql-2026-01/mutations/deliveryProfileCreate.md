---
title: deliveryProfileCreate - GraphQL Admin
description: >-
  Creates a
  [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)
  that defines shipping rates for specific products and locations.


  A delivery profile groups products with their shipping zones and rates. You
  can associate profiles with
  [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)
  objects to customize shipping for subscriptions and pre-orders. Each profile
  contains
  [`DeliveryProfileLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup)
  objects that specify which
  [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)
  objects ship to which
  [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone)
  objects with specific
  [`DeliveryMethodDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition)
  objects and rates.


  Learn more about [building delivery
  profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate.md
---

# delivery​Profile​Create

mutation

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

Creates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) that defines shipping rates for specific products and locations.

A delivery profile groups products with their shipping zones and rates. You can associate profiles with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to customize shipping for subscriptions and pre-orders. Each profile contains [`DeliveryProfileLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup) objects that specify which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects ship to which [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects with specific [`DeliveryMethodDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition) objects and rates.

Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

## Arguments

* profile

  [Delivery​Profile​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

  required

  Specifies the input fields for a delivery profile.

***

## Delivery​Profile​Create​Payload returns

* profile

  [Delivery​Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

  The delivery profile that was created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create delivery profile

  #### Description

  Create delivery profile with two location groups, one for shipping from Canada and another one for the United States. \*\*Note:\*\* due to the potential complexity of the nested data, it is recommended to start with no more than 5 groups. More groups can be added later via the profile update mutation.

  #### Query

  ```graphql
  mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
    deliveryProfileCreate(profile: $profile) {
      profile {
        id
        name
        profileLocationGroups {
          locationGroup {
            id
            locations(first: 5) {
              nodes {
                name
                address {
                  country
                }
              }
            }
          }
          locationGroupZones(first: 2) {
            edges {
              node {
                zone {
                  id
                  name
                  countries {
                    code {
                      countryCode
                    }
                    provinces {
                      code
                    }
                  }
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
    "profile": {
      "name": "Sample Delivery Profile",
      "locationGroupsToCreate": [
        {
          "locationsToAdd": [
            "gid://shopify/Location/750123840",
            "gid://shopify/Location/884687543"
          ],
          "zonesToCreate": [
            {
              "name": "Canada Zone",
              "countries": [
                {
                  "code": "CA",
                  "provinces": [
                    {
                      "code": "ON"
                    }
                  ]
                }
              ],
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  },
                  "weightConditionsToCreate": [
                    {
                      "operator": "GREATER_THAN_OR_EQUAL_TO",
                      "criteria": {
                        "value": 0,
                        "unit": "KILOGRAMS"
                      }
                    },
                    {
                      "operator": "LESS_THAN_OR_EQUAL_TO",
                      "criteria": {
                        "value": 15,
                        "unit": "KILOGRAMS"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "locationsToAdd": [
            "gid://shopify/Location/415211365"
          ],
          "zonesToCreate": [
            {
              "name": "USA Zone",
              "countries": {
                "code": "US",
                "provinces": [
                  {
                    "code": "CO"
                  }
                ]
              },
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  }
                }
              ]
            },
            {
              "name": "Mexico Zone",
              "countries": {
                "code": "MX",
                "provinces": [
                  {
                    "code": "MOR"
                  }
                ]
              },
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  }
                }
              ]
            }
          ]
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
  "query": "mutation createDeliveryProfile($profile: DeliveryProfileInput!) { deliveryProfileCreate(profile: $profile) { profile { id name profileLocationGroups { locationGroup { id locations(first: 5) { nodes { name address { country } } } } locationGroupZones(first: 2) { edges { node { zone { id name countries { code { countryCode } provinces { code } } } } } } } } userErrors { field message } } }",
   "variables": {
      "profile": {
        "name": "Sample Delivery Profile",
        "locationGroupsToCreate": [
          {
            "locationsToAdd": [
              "gid://shopify/Location/750123840",
              "gid://shopify/Location/884687543"
            ],
            "zonesToCreate": [
              {
                "name": "Canada Zone",
                "countries": [
                  {
                    "code": "CA",
                    "provinces": [
                      {
                        "code": "ON"
                      }
                    ]
                  }
                ],
                "methodDefinitionsToCreate": [
                  {
                    "name": "Standard",
                    "rateDefinition": {
                      "price": {
                        "amount": 1,
                        "currencyCode": "USD"
                      }
                    },
                    "weightConditionsToCreate": [
                      {
                        "operator": "GREATER_THAN_OR_EQUAL_TO",
                        "criteria": {
                          "value": 0,
                          "unit": "KILOGRAMS"
                        }
                      },
                      {
                        "operator": "LESS_THAN_OR_EQUAL_TO",
                        "criteria": {
                          "value": 15,
                          "unit": "KILOGRAMS"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "locationsToAdd": [
              "gid://shopify/Location/415211365"
            ],
            "zonesToCreate": [
              {
                "name": "USA Zone",
                "countries": {
                  "code": "US",
                  "provinces": [
                    {
                      "code": "CO"
                    }
                  ]
                },
                "methodDefinitionsToCreate": [
                  {
                    "name": "Standard",
                    "rateDefinition": {
                      "price": {
                        "amount": 1,
                        "currencyCode": "USD"
                      }
                    }
                  }
                ]
              },
              {
                "name": "Mexico Zone",
                "countries": {
                  "code": "MX",
                  "provinces": [
                    {
                      "code": "MOR"
                    }
                  ]
                },
                "methodDefinitionsToCreate": [
                  {
                    "name": "Standard",
                    "rateDefinition": {
                      "price": {
                        "amount": 1,
                        "currencyCode": "USD"
                      }
                    }
                  }
                ]
              }
            ]
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
    mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
      deliveryProfileCreate(profile: $profile) {
        profile {
          id
          name
          profileLocationGroups {
            locationGroup {
              id
              locations(first: 5) {
                nodes {
                  name
                  address {
                    country
                  }
                }
              }
            }
            locationGroupZones(first: 2) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                      }
                      provinces {
                        code
                      }
                    }
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
          "profile": {
              "name": "Sample Delivery Profile",
              "locationGroupsToCreate": [
                  {
                      "locationsToAdd": [
                          "gid://shopify/Location/750123840",
                          "gid://shopify/Location/884687543"
                      ],
                      "zonesToCreate": [
                          {
                              "name": "Canada Zone",
                              "countries": [
                                  {
                                      "code": "CA",
                                      "provinces": [
                                          {
                                              "code": "ON"
                                          }
                                      ]
                                  }
                              ],
                              "methodDefinitionsToCreate": [
                                  {
                                      "name": "Standard",
                                      "rateDefinition": {
                                          "price": {
                                              "amount": 1,
                                              "currencyCode": "USD"
                                          }
                                      },
                                      "weightConditionsToCreate": [
                                          {
                                              "operator": "GREATER_THAN_OR_EQUAL_TO",
                                              "criteria": {
                                                  "value": 0,
                                                  "unit": "KILOGRAMS"
                                              }
                                          },
                                          {
                                              "operator": "LESS_THAN_OR_EQUAL_TO",
                                              "criteria": {
                                                  "value": 15,
                                                  "unit": "KILOGRAMS"
                                              }
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "locationsToAdd": [
                          "gid://shopify/Location/415211365"
                      ],
                      "zonesToCreate": [
                          {
                              "name": "USA Zone",
                              "countries": {
                                  "code": "US",
                                  "provinces": [
                                      {
                                          "code": "CO"
                                      }
                                  ]
                              },
                              "methodDefinitionsToCreate": [
                                  {
                                      "name": "Standard",
                                      "rateDefinition": {
                                          "price": {
                                              "amount": 1,
                                              "currencyCode": "USD"
                                          }
                                      }
                                  }
                              ]
                          },
                          {
                              "name": "Mexico Zone",
                              "countries": {
                                  "code": "MX",
                                  "provinces": [
                                      {
                                          "code": "MOR"
                                      }
                                  ]
                              },
                              "methodDefinitionsToCreate": [
                                  {
                                      "name": "Standard",
                                      "rateDefinition": {
                                          "price": {
                                              "amount": 1,
                                              "currencyCode": "USD"
                                          }
                                      }
                                  }
                              ]
                          }
                      ]
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
    mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
      deliveryProfileCreate(profile: $profile) {
        profile {
          id
          name
          profileLocationGroups {
            locationGroup {
              id
              locations(first: 5) {
                nodes {
                  name
                  address {
                    country
                  }
                }
              }
            }
            locationGroupZones(first: 2) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                      }
                      provinces {
                        code
                      }
                    }
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
    "profile": {
      "name": "Sample Delivery Profile",
      "locationGroupsToCreate": [
        {
          "locationsToAdd": [
            "gid://shopify/Location/750123840",
            "gid://shopify/Location/884687543"
          ],
          "zonesToCreate": [
            {
              "name": "Canada Zone",
              "countries": [
                {
                  "code": "CA",
                  "provinces": [
                    {
                      "code": "ON"
                    }
                  ]
                }
              ],
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  },
                  "weightConditionsToCreate": [
                    {
                      "operator": "GREATER_THAN_OR_EQUAL_TO",
                      "criteria": {
                        "value": 0,
                        "unit": "KILOGRAMS"
                      }
                    },
                    {
                      "operator": "LESS_THAN_OR_EQUAL_TO",
                      "criteria": {
                        "value": 15,
                        "unit": "KILOGRAMS"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "locationsToAdd": [
            "gid://shopify/Location/415211365"
          ],
          "zonesToCreate": [
            {
              "name": "USA Zone",
              "countries": {
                "code": "US",
                "provinces": [
                  {
                    "code": "CO"
                  }
                ]
              },
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  }
                }
              ]
            },
            {
              "name": "Mexico Zone",
              "countries": {
                "code": "MX",
                "provinces": [
                  {
                    "code": "MOR"
                  }
                ]
              },
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  }
                }
              ]
            }
          ]
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
      "query": `mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
        deliveryProfileCreate(profile: $profile) {
          profile {
            id
            name
            profileLocationGroups {
              locationGroup {
                id
                locations(first: 5) {
                  nodes {
                    name
                    address {
                      country
                    }
                  }
                }
              }
              locationGroupZones(first: 2) {
                edges {
                  node {
                    zone {
                      id
                      name
                      countries {
                        code {
                          countryCode
                        }
                        provinces {
                          code
                        }
                      }
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
          "profile": {
              "name": "Sample Delivery Profile",
              "locationGroupsToCreate": [
                  {
                      "locationsToAdd": [
                          "gid://shopify/Location/750123840",
                          "gid://shopify/Location/884687543"
                      ],
                      "zonesToCreate": [
                          {
                              "name": "Canada Zone",
                              "countries": [
                                  {
                                      "code": "CA",
                                      "provinces": [
                                          {
                                              "code": "ON"
                                          }
                                      ]
                                  }
                              ],
                              "methodDefinitionsToCreate": [
                                  {
                                      "name": "Standard",
                                      "rateDefinition": {
                                          "price": {
                                              "amount": 1,
                                              "currencyCode": "USD"
                                          }
                                      },
                                      "weightConditionsToCreate": [
                                          {
                                              "operator": "GREATER_THAN_OR_EQUAL_TO",
                                              "criteria": {
                                                  "value": 0,
                                                  "unit": "KILOGRAMS"
                                              }
                                          },
                                          {
                                              "operator": "LESS_THAN_OR_EQUAL_TO",
                                              "criteria": {
                                                  "value": 15,
                                                  "unit": "KILOGRAMS"
                                              }
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "locationsToAdd": [
                          "gid://shopify/Location/415211365"
                      ],
                      "zonesToCreate": [
                          {
                              "name": "USA Zone",
                              "countries": {
                                  "code": "US",
                                  "provinces": [
                                      {
                                          "code": "CO"
                                      }
                                  ]
                              },
                              "methodDefinitionsToCreate": [
                                  {
                                      "name": "Standard",
                                      "rateDefinition": {
                                          "price": {
                                              "amount": 1,
                                              "currencyCode": "USD"
                                          }
                                      }
                                  }
                              ]
                          },
                          {
                              "name": "Mexico Zone",
                              "countries": {
                                  "code": "MX",
                                  "provinces": [
                                      {
                                          "code": "MOR"
                                      }
                                  ]
                              },
                              "methodDefinitionsToCreate": [
                                  {
                                      "name": "Standard",
                                      "rateDefinition": {
                                          "price": {
                                              "amount": 1,
                                              "currencyCode": "USD"
                                          }
                                      }
                                  }
                              ]
                          }
                      ]
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
    "deliveryProfileCreate": {
      "profile": {
        "id": "gid://shopify/DeliveryProfile/933922679",
        "name": "Sample Delivery Profile",
        "profileLocationGroups": [
          {
            "locationGroup": {
              "id": "gid://shopify/DeliveryLocationGroup/982182448",
              "locations": {
                "nodes": [
                  {
                    "name": "Ottawa Warehouse",
                    "address": {
                      "country": "Canada"
                    }
                  },
                  {
                    "name": "Toronto Store",
                    "address": {
                      "country": "Canada"
                    }
                  }
                ]
              }
            },
            "locationGroupZones": {
              "edges": [
                {
                  "node": {
                    "zone": {
                      "id": "gid://shopify/DeliveryZone/1066475772",
                      "name": "Canada Zone",
                      "countries": [
                        {
                          "code": {
                            "countryCode": "CA"
                          },
                          "provinces": [
                            {
                              "code": "ON"
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "locationGroup": {
              "id": "gid://shopify/DeliveryLocationGroup/982182449",
              "locations": {
                "nodes": [
                  {
                    "name": "US Store",
                    "address": {
                      "country": "United States"
                    }
                  }
                ]
              }
            },
            "locationGroupZones": {
              "edges": [
                {
                  "node": {
                    "zone": {
                      "id": "gid://shopify/DeliveryZone/1066475774",
                      "name": "Mexico Zone",
                      "countries": [
                        {
                          "code": {
                            "countryCode": "MX"
                          },
                          "provinces": [
                            {
                              "code": "MOR"
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "node": {
                    "zone": {
                      "id": "gid://shopify/DeliveryZone/1066475773",
                      "name": "USA Zone",
                      "countries": [
                        {
                          "code": {
                            "countryCode": "US"
                          },
                          "provinces": [
                            {
                              "code": "CO"
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "userErrors": []
    }
  }
  ```

* ### deliveryProfileCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20createDeliveryProfile\(%24profile%3A%20DeliveryProfileInput!\)%20%7B%0A%20%20deliveryProfileCreate\(profile%3A%20%24profile\)%20%7B%0A%20%20%20%20profile%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20profileLocationGroups%20%7B%0A%20%20%20%20%20%20%20%20locationGroup%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20locations\(first%3A%205\)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20address%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20country%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20locationGroupZones\(first%3A%202\)%20%7B%0A%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20zone%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20countries%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20countryCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20provinces%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22profile%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Sample%20Delivery%20Profile%22%2C%0A%20%20%20%20%22locationGroupsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22locationsToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FLocation%2F750123840%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FLocation%2F884687543%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22zonesToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Canada%20Zone%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22countries%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22CA%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22provinces%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22ON%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22methodDefinitionsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Standard%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rateDefinition%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22price%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22weightConditionsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22operator%22%3A%20%22GREATER_THAN_OR_EQUAL_TO%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22criteria%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22unit%22%3A%20%22KILOGRAMS%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22operator%22%3A%20%22LESS_THAN_OR_EQUAL_TO%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22criteria%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2015%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22unit%22%3A%20%22KILOGRAMS%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22locationsToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FLocation%2F415211365%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22zonesToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22USA%20Zone%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22countries%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22US%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22provinces%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22CO%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22methodDefinitionsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Standard%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rateDefinition%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22price%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Mexico%20Zone%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22countries%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22MX%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22provinces%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22MOR%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22methodDefinitionsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Standard%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rateDefinition%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22price%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
  deliveryProfileCreate(profile: $profile) {
    profile {
      id
      name
      profileLocationGroups {
        locationGroup {
          id
          locations(first: 5) {
            nodes {
              name
              address {
                country
              }
            }
          }
        }
        locationGroupZones(first: 2) {
          edges {
            node {
              zone {
                id
                name
                countries {
                  code {
                    countryCode
                  }
                  provinces {
                    code
                  }
                }
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
"query": "mutation createDeliveryProfile($profile: DeliveryProfileInput!) { deliveryProfileCreate(profile: $profile) { profile { id name profileLocationGroups { locationGroup { id locations(first: 5) { nodes { name address { country } } } } locationGroupZones(first: 2) { edges { node { zone { id name countries { code { countryCode } provinces { code } } } } } } } } userErrors { field message } } }",
 "variables": {
    "profile": {
      "name": "Sample Delivery Profile",
      "locationGroupsToCreate": [
        {
          "locationsToAdd": [
            "gid://shopify/Location/750123840",
            "gid://shopify/Location/884687543"
          ],
          "zonesToCreate": [
            {
              "name": "Canada Zone",
              "countries": [
                {
                  "code": "CA",
                  "provinces": [
                    {
                      "code": "ON"
                    }
                  ]
                }
              ],
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  },
                  "weightConditionsToCreate": [
                    {
                      "operator": "GREATER_THAN_OR_EQUAL_TO",
                      "criteria": {
                        "value": 0,
                        "unit": "KILOGRAMS"
                      }
                    },
                    {
                      "operator": "LESS_THAN_OR_EQUAL_TO",
                      "criteria": {
                        "value": 15,
                        "unit": "KILOGRAMS"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "locationsToAdd": [
            "gid://shopify/Location/415211365"
          ],
          "zonesToCreate": [
            {
              "name": "USA Zone",
              "countries": {
                "code": "US",
                "provinces": [
                  {
                    "code": "CO"
                  }
                ]
              },
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  }
                }
              ]
            },
            {
              "name": "Mexico Zone",
              "countries": {
                "code": "MX",
                "provinces": [
                  {
                    "code": "MOR"
                  }
                ]
              },
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  }
                }
              ]
            }
          ]
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
  mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
    deliveryProfileCreate(profile: $profile) {
      profile {
        id
        name
        profileLocationGroups {
          locationGroup {
            id
            locations(first: 5) {
              nodes {
                name
                address {
                  country
                }
              }
            }
          }
          locationGroupZones(first: 2) {
            edges {
              node {
                zone {
                  id
                  name
                  countries {
                    code {
                      countryCode
                    }
                    provinces {
                      code
                    }
                  }
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
        "profile": {
            "name": "Sample Delivery Profile",
            "locationGroupsToCreate": [
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/750123840",
                        "gid://shopify/Location/884687543"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "Canada Zone",
                            "countries": [
                                {
                                    "code": "CA",
                                    "provinces": [
                                        {
                                            "code": "ON"
                                        }
                                    ]
                                }
                            ],
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    },
                                    "weightConditionsToCreate": [
                                        {
                                            "operator": "GREATER_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 0,
                                                "unit": "KILOGRAMS"
                                            }
                                        },
                                        {
                                            "operator": "LESS_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 15,
                                                "unit": "KILOGRAMS"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/415211365"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "USA Zone",
                            "countries": {
                                "code": "US",
                                "provinces": [
                                    {
                                        "code": "CO"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "name": "Mexico Zone",
                            "countries": {
                                "code": "MX",
                                "provinces": [
                                    {
                                        "code": "MOR"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
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
    "query": `mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
      deliveryProfileCreate(profile: $profile) {
        profile {
          id
          name
          profileLocationGroups {
            locationGroup {
              id
              locations(first: 5) {
                nodes {
                  name
                  address {
                    country
                  }
                }
              }
            }
            locationGroupZones(first: 2) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                      }
                      provinces {
                        code
                      }
                    }
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
        "profile": {
            "name": "Sample Delivery Profile",
            "locationGroupsToCreate": [
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/750123840",
                        "gid://shopify/Location/884687543"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "Canada Zone",
                            "countries": [
                                {
                                    "code": "CA",
                                    "provinces": [
                                        {
                                            "code": "ON"
                                        }
                                    ]
                                }
                            ],
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    },
                                    "weightConditionsToCreate": [
                                        {
                                            "operator": "GREATER_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 0,
                                                "unit": "KILOGRAMS"
                                            }
                                        },
                                        {
                                            "operator": "LESS_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 15,
                                                "unit": "KILOGRAMS"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/415211365"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "USA Zone",
                            "countries": {
                                "code": "US",
                                "provinces": [
                                    {
                                        "code": "CO"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "name": "Mexico Zone",
                            "countries": {
                                "code": "MX",
                                "provinces": [
                                    {
                                        "code": "MOR"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
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
  mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
    deliveryProfileCreate(profile: $profile) {
      profile {
        id
        name
        profileLocationGroups {
          locationGroup {
            id
            locations(first: 5) {
              nodes {
                name
                address {
                  country
                }
              }
            }
          }
          locationGroupZones(first: 2) {
            edges {
              node {
                zone {
                  id
                  name
                  countries {
                    code {
                      countryCode
                    }
                    provinces {
                      code
                    }
                  }
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
  "profile": {
    "name": "Sample Delivery Profile",
    "locationGroupsToCreate": [
      {
        "locationsToAdd": [
          "gid://shopify/Location/750123840",
          "gid://shopify/Location/884687543"
        ],
        "zonesToCreate": [
          {
            "name": "Canada Zone",
            "countries": [
              {
                "code": "CA",
                "provinces": [
                  {
                    "code": "ON"
                  }
                ]
              }
            ],
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                },
                "weightConditionsToCreate": [
                  {
                    "operator": "GREATER_THAN_OR_EQUAL_TO",
                    "criteria": {
                      "value": 0,
                      "unit": "KILOGRAMS"
                    }
                  },
                  {
                    "operator": "LESS_THAN_OR_EQUAL_TO",
                    "criteria": {
                      "value": 15,
                      "unit": "KILOGRAMS"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "locationsToAdd": [
          "gid://shopify/Location/415211365"
        ],
        "zonesToCreate": [
          {
            "name": "USA Zone",
            "countries": {
              "code": "US",
              "provinces": [
                {
                  "code": "CO"
                }
              ]
            },
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          },
          {
            "name": "Mexico Zone",
            "countries": {
              "code": "MX",
              "provinces": [
                {
                  "code": "MOR"
                }
              ]
            },
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          }
        ]
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
  "profile": {
    "name": "Sample Delivery Profile",
    "locationGroupsToCreate": [
      {
        "locationsToAdd": [
          "gid://shopify/Location/750123840",
          "gid://shopify/Location/884687543"
        ],
        "zonesToCreate": [
          {
            "name": "Canada Zone",
            "countries": [
              {
                "code": "CA",
                "provinces": [
                  {
                    "code": "ON"
                  }
                ]
              }
            ],
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                },
                "weightConditionsToCreate": [
                  {
                    "operator": "GREATER_THAN_OR_EQUAL_TO",
                    "criteria": {
                      "value": 0,
                      "unit": "KILOGRAMS"
                    }
                  },
                  {
                    "operator": "LESS_THAN_OR_EQUAL_TO",
                    "criteria": {
                      "value": 15,
                      "unit": "KILOGRAMS"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "locationsToAdd": [
          "gid://shopify/Location/415211365"
        ],
        "zonesToCreate": [
          {
            "name": "USA Zone",
            "countries": {
              "code": "US",
              "provinces": [
                {
                  "code": "CO"
                }
              ]
            },
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          },
          {
            "name": "Mexico Zone",
            "countries": {
              "code": "MX",
              "provinces": [
                {
                  "code": "MOR"
                }
              ]
            },
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Response

JSON

```json
{
  "deliveryProfileCreate": {
    "profile": {
      "id": "gid://shopify/DeliveryProfile/933922679",
      "name": "Sample Delivery Profile",
      "profileLocationGroups": [
        {
          "locationGroup": {
            "id": "gid://shopify/DeliveryLocationGroup/982182448",
            "locations": {
              "nodes": [
                {
                  "name": "Ottawa Warehouse",
                  "address": {
                    "country": "Canada"
                  }
                },
                {
                  "name": "Toronto Store",
                  "address": {
                    "country": "Canada"
                  }
                }
              ]
            }
          },
          "locationGroupZones": {
            "edges": [
              {
                "node": {
                  "zone": {
                    "id": "gid://shopify/DeliveryZone/1066475772",
                    "name": "Canada Zone",
                    "countries": [
                      {
                        "code": {
                          "countryCode": "CA"
                        },
                        "provinces": [
                          {
                            "code": "ON"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        {
          "locationGroup": {
            "id": "gid://shopify/DeliveryLocationGroup/982182449",
            "locations": {
              "nodes": [
                {
                  "name": "US Store",
                  "address": {
                    "country": "United States"
                  }
                }
              ]
            }
          },
          "locationGroupZones": {
            "edges": [
              {
                "node": {
                  "zone": {
                    "id": "gid://shopify/DeliveryZone/1066475774",
                    "name": "Mexico Zone",
                    "countries": [
                      {
                        "code": {
                          "countryCode": "MX"
                        },
                        "provinces": [
                          {
                            "code": "MOR"
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              {
                "node": {
                  "zone": {
                    "id": "gid://shopify/DeliveryZone/1066475773",
                    "name": "USA Zone",
                    "countries": [
                      {
                        "code": {
                          "countryCode": "US"
                        },
                        "provinces": [
                          {
                            "code": "CO"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ]
    },
    "userErrors": []
  }
}
```
