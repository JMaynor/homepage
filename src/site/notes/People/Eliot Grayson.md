---
{"dg-publish":true,"permalink":"/people/eliot-grayson/","created":"2024-06-11","updated":"2025-06-22","dg-note-properties":{"aliases":[],"date created":"2024-06-11","date modified":"2025-06-22","tags":[]}}
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
```
