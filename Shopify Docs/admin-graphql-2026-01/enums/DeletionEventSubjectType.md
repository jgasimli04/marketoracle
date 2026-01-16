---
title: DeletionEventSubjectType - GraphQL Admin
description: The supported subject types of deletion events.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSubjectType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSubjectType.md
---

# Deletion​Event​Subject​Type

enum

The supported subject types of deletion events.

## Valid values

* COLLECTION
* PRODUCT

***

## Fields

* [Deletion​Event.subjectType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEvent#field-DeletionEvent.fields.subjectType)

  OBJECT

  Deletion events chronicle the destruction of resources (e.g. products and collections). Once deleted, the deletion event is the only trace of the original's existence, as the resource itself has been removed and can no longer be accessed.

* [Query​Root.deletionEvents(subjectTypes)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.deletionEvents.arguments.subjectTypes)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [deletion​Events.subjectTypes](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionEvents#arguments-subjectTypes)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Deletion​Event.subjectType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEvent#field-DeletionEvent.fields.subjectType)

### Arguments with this enum

* <-|[Query​Root.deletionEvents(subjectTypes)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.deletionEvents.arguments.subjectTypes)
* <-|[deletion​Events.subjectTypes](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionEvents#arguments-subjectTypes)
