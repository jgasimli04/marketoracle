---
title: marketWebPresenceUpdate - GraphQL Admin
description: Updates a market web presence.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceUpdate.md
---

# market​Web​Presence​Update

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Deprecated. Use [webPresenceUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate) instead.

Updates a market web presence.

## Arguments

* web​Presence

  [Market​Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceUpdateInput)

  required

  The web\_presence fields used to update the market's web presence.

* web​Presence​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the web presence to update.

***

## Market​Web​Presence​Update​Payload returns

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market object.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### marketWebPresenceUpdate reference

## Mutation Reference

```graphql
mutation marketWebPresenceUpdate($webPresenceId: ID!, $webPresence: MarketWebPresenceUpdateInput!) {
  marketWebPresenceUpdate(webPresenceId: $webPresenceId, webPresence: $webPresence) {
    market {
      # Market fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "webPresenceId": "gid://shopify/<objectName>/10079785100",
  "webPresence": {
    "domainId": "gid://shopify/<objectName>/10079785100",
    "defaultLocale": "<your-defaultLocale>",
    "alternateLocales": [
      "<your-alternateLocales>"
    ],
    "subfolderSuffix": "<your-subfolderSuffix>"
  }
}
```

##### Schema

```graphql
input MarketWebPresenceUpdateInput {
  domainId: ID
  defaultLocale: String
  alternateLocales: [String!]
  subfolderSuffix: String
}
```
