---
{"dg-publish":true,"permalink":"/people/k-m-neuhold/","created":"2024-06-11","updated":"2026-11-08","dg-note-properties":{"aliases":[],"date created":"2024-06-11","date modified":"2026-11-08","tags":[]}}
---


# Bibliography

```base
filters:
  and:
    - file.folder == "Books"
    - author == link(this.file.name)
views:
  - type: table
    name: Table
    order:
      - file.name
      - series
      - index
      - aliases
      - date started
      - date finished
    sort:
      - column: note.series
        direction: ASC
      - column: note.index
        direction: ASC
      - column: note.aliases
        direction: ASC
```
