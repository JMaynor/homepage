---
{"dg-publish":true,"permalink":"/readme/","tags":["gardenEntry"],"created":"2023-07-05","updated":"2026-05-25","dg-note-properties":{"aliases":[],"date created":"2023-07-05","date modified":"2026-05-25","tags":["gardenEntry"]}}
---


> [!NOTE] 🕴 About
>
> Hello and welcome to my homepage! My name's Jordan and I'm a programmer from Southern Illinois. In my free time I do let's plays on YouTube and I stream on Twitch with a group of friends on the Alderoth Circle.  I keep a more general blog for open-ended thoughts as well as canonical pages on games I play, movies I watch, etc. On those, I like to review them or post any notable thoughts I had.

> [!NOTE]  🔗Links
> [YouTube](https://youtube.com/@jordan_maynor) / [Twitch](https://www.twitch.tv/TheAlderothCircle) / [Bluesky](https://bsky.app/profile/jtm.li) / [Github](https://github.com/JMaynor)
> [[Tech/Website/Blogroll\|Blogroll]] / [[Tech/Website/Colophon\|Colophon]] / [All Posts Feed](https://jtm.li/feed.xml) / [Blog Posts Feed](https://jtm.li/blogfeed.xml)

# Blog Posts

```base
filters:
  and:
    - file.folder == "Blog"
    - note["dg-publish"] == true
properties:
  file.name:
    displayName: Post
  note.summary:
    displayName: Summary
views:
  - type: table
    name: Table
    order:
      - file.name
      - summary
    sort:
      - property: file.name
        direction: DESC
```

# Let's Plays

A big thing I do in my free time is make let's plays. Below is a list of games that I've played (or are in the process of playing).

```base
filters:
  and:
    - file.folder == "Games"
    - note["dg-publish"] == true
    - file.tags.contains("LP")
properties:
  file.name:
    displayName: Game
views:
  - type: table
    name: Table
    order:
      - file.name

```

# Streams

A list of games that I've streamed at one point or another on Twitch with TAC. There's a number of other games I've been involved with on the channel, but these are the ones that I myself streamed or at least was strongly involved with in some way. No super-specific criteria, just games I have an opinion on that we've covered. Start and end dates generally only relate to games with a clear endpoint that were definitively finished. Rather than evergreen games that we come back to. Or if I have some idea of when I first played something.

```base
filters:
  and:
    - file.folder == "Games"
    - note["dg-publish"] == true
    - file.tags.contains("streamed")
properties:  
  file.name:  
    displayName: Game
views:
  - type: table
    name: Table
    order:
      - file.name

```
