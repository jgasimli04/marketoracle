---
title: BackupRegionUpdatePayload - GraphQL Admin
description: Return type for `backupRegionUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BackupRegionUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/BackupRegionUpdatePayload.md
---

# Backup​Region​Update​Payload

payload

Return type for `backupRegionUpdate` mutation.

## Fields

* backup​Region

  [Market​Region](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)

  Returns the updated backup region.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [backup​Region​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/backupRegionUpdate)

  mutation

  Update the backup region that is used when we have no better signal of what region a buyer is in.

  * region

    [Backup​Region​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BackupRegionUpdateInput)

    ### Arguments

    Optional input representing the region to be updated. If not provided, the existing regions remain unchanged.

  ***

***

## Map

### Mutations with this payload

* [backup​Region​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/backupRegionUpdate)
