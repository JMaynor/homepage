---
{"dg-publish":true,"permalink":"/people/david-lynch/","tags":["character"],"created":"2023-03-27","updated":"2025-06-22","dg-note-properties":{"aliases":[],"date created":"2023-03-27","date modified":"2025-06-22","tags":["character"]}}
---


Director of many wonderful films. Co-creator of Twin Peaks with [[People/Mark Frost\|Mark Frost]]. Adores [[People/Laura Dern\|Laura Dern]]. Thinks Star Wars is stupid bullshit.

Article breaking down David Lynch commercial for Dior Lady Blue Shanghai. https://www.kosmorama.org/kosmorama/artikler/blue-rose-case-david-lynchs-lady-blue-shanghai-dior

# Filmography

```base
filters:
  and:
    - file.folder == "Movies"
    - director.contains(link(this.file.name))
views:
  - type: table
    name: Table
    order:
      - file.name
      - aliases
      - date finished
    sort:
      - column: note.aliases
        direction: ASC
```

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

# Quotes

Below is a quote from an interview Lynch was giving on season 3 of Twin Peaks.

> Interviewer: Throughout the third season, we are caught between despair and enlightenment. Is what you wanted to trigger in the hearts and minds of the viewers?

> Lynch: Thinking about the viewers when you create is not a good thing in my opinion. You only need to think about what turns you on. If an idea pops up and it doesn't thrill you, you don't use it. If it's an idea that makes you shudder, then you try to convey it in the most exact way. But the world is changing so fast these days that if you think about the audience in 2012, what you do for them won't be worth anything in 2017 because it's a different world. You have to make yourself happy, and hope for the best.

Fictional, but true in my mind

> Don't you understand my fucking vision?!
