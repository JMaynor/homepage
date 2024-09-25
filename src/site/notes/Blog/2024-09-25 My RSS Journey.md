---
{"dg-publish":true,"permalink":"/blog/2024-09-25-my-rss-journey/","created":"2024-04-12","updated":"2024-09-25"}
---


I've become pretty tired of the general structure of the internet. The 5 big sites that consist entirely of screenshots from the other 4 sites. In particular I got mad when Reddit did its API nonsense and took away my favorite app. (RIF Is Fun Golden Platinum Is Dead, Long Live RIF IS Fun Golden Platinum). In the wake of that and my general disdain of what Reddit had become. The fun bits were drowned out with the memey bullshit. I could look at any post's headline and predict with 100% accuracy what the top replies were going to be. No good. So earlier this year I decided to take a step back and reevaluate the websites I was filling my time. And how I was interacting with them.

I had used RSS before. At some point in the old old days I had used Google Reader for a brief period of time. I didn't get very far into it though and had largely forgot about the concept (around the same time I had started regularly visiting Reddit...). But I had heard some rumblings on your Tildes and your Hackers News of people getting back into RSS. The idea seemed quite sound. I had this feeling that the web was too big. The things that I was being shown was veering closer and closer to a baseline. I wanted more originality, and more of a feeling of locality. I liked the idea of following individual (well-vetted) people. So RSS it was.

# Fraidycat

I didn't start with the system I've ended up using. Something I cam across, I believe on Hacker News, was [Fraidycat](https://github.com/kickscondor/fraidycat). I really like this software. It makes a lot of decisions that make sense to me. It treats the feeds you follow like people. And one of the primary aspects that you choose when following is how frequently you want to follow them. Sure, this is available in other RSS aggregators (how often you are checking the feed for updates) but something about putting that functionality front and center in the GUI clicked for me. Also I just think it has a really nice interface in general. It's friendly, but useful.

That being said, after using Fraidycat for a couple of weeks, slowly moving bookmarks, Twitter follows, news feeds etc over to it, I started to run into some pain points. Primarily was the lack of synchronization between computers. I could set up Fraidycat as an extension on my home computer and work computer, but it wasn't available on the phone. That caused me to immediately retreat to Reddit whenever I was in phone land, which felt like it was going against the idea of the whole thing. Also, the whole time I felt a bit nervous. Nothing was stopping me from backing up my feeds in an OPML file, but it just made me feel uneasy my subscriptions and settings and everything existing only in a specific browser on a specific computer. I wanted something more centralized.

Fraidycat is very good software, though. Highly recommend it as a possible option. Didn't seem to be getting much love in the dev department, last I checked. But like I said, worked fine as is.

# Choosing a System

So Fraidycat didn't last too long and I knew I needed something a bit more hardcore to meet my needs. Whatever I decided to pick, I knew it had to be some sort of self-hosted aggregation system. A core requirement was I wanted to be able to read feeds on my computer and my phone. And if I read something on one, I wanted it to be marked as read on the other. This eliminated any standalone desktop apps or phone apps. That's just not the sort of thing that I was going for.

Another thing I was concerned with was longevity. God bless the open source community, but I'll be honest, if I'm picking something to become the core of my internet browsing experience...I really do not want to have to pick something else in a year or two when the software stops being maintained, breaks. I mean I'm a programmer, but as of yet, I wasn't really interested in fully maintaining my *own* solution. Bit too big of a time commitment. A story for another time, perhaps.

Another aspect that I personally looked for was some level of extension. A bespoke extension system wasn't necessarily a requirement, but I could see such a thing being useful for tailoring the RSS system to my exact desires.

So I perused the RSS scene. There were a couple standouts to me. I ended up choosing [FreshRSS](https://github.com/FreshRSS/FreshRSS), but I will mention that [Miniflux](https://github.com/miniflux/v2) called to me. It's as simple as can be and I do appreciate software that is opinionated. That's one thing I really liked about Fraidycat. I like when my software was clearly made by a human being and doesn't feel like an amorphous gray goo that was excreted by a committee. The simple interface also reminded me a lot of old.reddit.com (real reddit) and hacker news.  There were a couple features of FreshRSS that won me over. Again, I liked that it had extensions. The knowledge that if it did something that I didn't like, I could potentially change that thing more easily is a definite draw.

# Initial Setup

In terms of deployment method, we're going with current hottie on the block, Docker. It's what most of my little self-hosted apps are done with. Don't disagree at all at the issues that come about when you have so many layers of abstraction and virtualization, but you gotta admit...It's easy to set up.

My initial compose file consisted of the FreshRSS image and nothing else. I'd go back to it and add on some other containers  but at first we just had something along the lines of what they've got in their [documentation](https://github.com/FreshRSS/FreshRSS/blob/edge/Docker/README.md). Didn't run into any immediate issues with the setup, though I'd end up redoing it after running into some database issues.

# Picking Sources

Now we get to the fun part. Who'm I actually following? Well, I've got most of the people people listed out in my [[Tech/Website/Blogroll\|Blogroll]] if you'd like to see. In addition, I was still freshly off Reddit. And though I was unhappy with it on the whole, there were still some subreddits (not communities... eghh) that I had a soft spot for. Thankfully, subreddits, at least as of this writing have some nice RSS feeds built in. I did NOT want to get a bunch of subreddit feeds that were just the Hot page for each.

Example: You just add on .rss to the end of the subreddit URL.  `https://www.reddit.com/r/IThinkYouShouldLeave/.rss`

We're trying to ween ourselves of that site, here. You can however, get the Top posts for a particular period with the following modification `https://www.reddit.com/r/IThinkYouShouldLeave/top.rss?t=year`

Much better, now we're just getting the best stuff of the year. Unlikely to update often so we're not getting spammed with garbage. So I went through and exported all my subreddits that I gave a shit about. I made the modification to only get the best posts of the year to the URLs. Then I added them as sources in FreshRSS. There are some [extra bells and whistles](https://www.reddit.com/r/pathogendavid/comments/tv8m9/pathogendavids_guide_to_rss_and_reddit/) you can play around with with this feature. But the year time period was more than sufficient enough for me.

# Postgres

I soon ran into issues, however. I started getting a lot of error logs about the sqlite backend being locked. It started massively struggling to add new feeds or even just refresh feeds. To this day, I am unsure what the actual issue was. I don't think it was sqlite actually struggling with the workload. And I don't think it was FreshRSS's implementation. My best guess is some weird idiosyncrasy of my Docker setup. Something with the volumes or the host machine. On a lark, I decided to try using Postgres as the DB backend, which FreshRSS has as a supported option. Immediately, DB issues ceased and the interface was significantly snappier. So if you run into similar issues, try Postgres.

# Extensions

Now that we've got the basics under control, I let a week or two go by and then figured out what all extensions I wanted to add. Not too many it turns out. Most of what I want out of an RSS software comes in the box with FreshRSS.

Something I discovered quickly with RSS feeds is bastards don't include their whole article in their feed! No good, I ain't always got the time to be prancing around on your website, ok? We got things we gotta do, places to go and people to see. Gotta fix that right quick. And thankfully, there's a lovely little extension that does just so. It makes use of [Mozilla's Readability library](https://github.com/mozilla/readability) to extract the full article content from the post URL and replaces the extract with the full article. Specifically [this docker image](https://hub.docker.com/r/phpdockerio/readability-js-server) that packages it up into a nice little service that FreshRSS can call for each new post. I mostly just use this on actual news news feeds. Yeah yeah, whatever. Support your news and all that. We haven't had a fourth estate in decades, so let's not pretend this is a new thing. Most of the people I follow have the whole article in their RSS feeds. Like proper good folks. The sorta neighbors you enjoy having.

The only other extensions I'm really using would be smaller visual changes. Here's the exact list. All, I believe, are available by default in the interface.

- Clickable Links
- Colorful List
- Custom CSS
- FlareSolverr
- ReadingTime

More substantially, I've tried making use of [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge) to get feeds from websites that don't support it (like demons). But I've had nothing but trouble with it. Again, could probably just be a case of me not understanding something. Although another issue is that the big site I'm wanting feeds from is Twitter and we don't even need to talk about all that. Looking into [RSSHub](https://github.com/DIYgod/RSSHub), may try that at some point.

# Conclusions

Overall, I've been happy with FreshRSS. It does everything I need it to and it feels stable. Two of the biggest things that I could ask for. Below is my compose file for my installation.

```yaml
name: freshrss

services:

  freshrss:
    image: freshrss/freshrss:edge
    container_name: freshrss
    environment:
      PUID: 100
      PGID: 100
      TZ: timezone_here
      CRON_MIN: '3,33'
    volumes:
      - /dockerfolder/freshrss/data:/var/www/FreshRSS/data
      - /dockerfolder/freshrss/extensions:/var/www/FreshRSS/extensions
    ports:
      - 80:80
    restart: unless-stopped

  database:
    image: postgres:latest
    container_name: freshrss_db
    ports:
      - 5432:5432
    environment:
      PUID: 100
      PGID: 100
      POSTGRES_USER: username_here
      POSTGRES_PASSWORD: password_here
      POSTGRES_DB: default_database
      PGDATA: /data/postgres
    volumes:
      - /dockerfolder/postgres:/data/postgres
    restart: unless-stopped

  rssbridge:
    image: rssbridge/rss-bridge:latest
    container_name: rssbridge
    ports:
      - 10080:80
    environment:
      PUID: 100
      PGID: 100
    volumes:
      - /dockerfolder/rssbridge/config.ini.php:/app/config.ini.php
    restart: unless-stopped

  readability:
    image: phpdockerio/readability-js-server:latest
    container_name: readability
    ports:
      - 3000:3000
    environment:
      PUID: 100
      PGID: 100
    restart: unless-stopped

  flare:
    image: flaresolverr/flaresolverr:latest
    container_name: flaresolverr_rss
    ports:
      - 8191:8191
    environment:
      PUID: 100
      PGID: 100
    volumes:
      - /dockerfolder/flaresolverr_rss:/config
    restart: unless-stopped
```
