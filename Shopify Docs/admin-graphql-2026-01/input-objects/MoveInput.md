---
title: MoveInput - GraphQL Admin
description: >-
  The input for moving a single object to a specific position in a set.


  Provide this input only for objects whose position actually changed; do not
  send inputs for the entire set.


  - id: The ID (GID) of the object to move.

  - newPosition: The zero-based index of the object's position within the set at
  the time this move is applied.


  Moves are applied sequentially, so `newPosition` for each move is evaluated
  after all prior moves in the same list.

  If `newPosition` is greater than or equal to the number of objects, the object
  is moved to the end of the set.

  Values do not have to be unique. Objects not included in the move list keep
  their relative order, aside from any displacement caused by the moves.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput.md'
---

# Move​Input

input\_object

The input for moving a single object to a specific position in a set.

Provide this input only for objects whose position actually changed; do not send inputs for the entire set.

* id: The ID (GID) of the object to move.
* newPosition: The zero-based index of the object's position within the set at the time this move is applied.

Moves are applied sequentially, so `newPosition` for each move is evaluated after all prior moves in the same list. If `newPosition` is greater than or equal to the number of objects, the object is moved to the end of the set. Values do not have to be unique. Objects not included in the move list keep their relative order, aside from any displacement caused by the moves.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the object to be moved.

* new​Position

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  Zero-based index of the object's position at the time this move is applied. If the value is >= the number of objects, the object is placed at the end.

***

## Map

No referencing types
