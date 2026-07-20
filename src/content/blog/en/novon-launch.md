---
title: 'novon.im is live: blog with a GitHub repo'
description: 'Our first project novon.im is officially online — import a GitHub repo and own your blog in seconds.'
pubDate: 2025-01-20
tags: ['novon', 'release']
---

## In one sentence

**novon.im** is a GitHub-based blogging platform: import your GitHub repo and deploy a blog. Writing is just Markdown; publishing is just `git push`.

## Why we built it

Most blogging solutions are either too heavy (maintaining a whole CMS) or too scattered (platform lock-in, painful migration). What we wanted is simple:

1. Content as plain Markdown files, owned by you forever;
2. Versioning handled by Git — history and rollbacks for free;
3. Deployment that ideally doesn't exist.

novon is the answer. The repo is the content; a push is a publish.

## Quick start

```bash
# 1. Prepare a GitHub repo for your Markdown
git init my-blog && cd my-blog
echo "# Hello novon" > posts/hello.md

# 2. Import the repo on novon.im
# 3. Done. Every push updates your blog automatically
git push origin main
```

## What's next

Custom themes, more integrations, and a better reading experience are all on the roadmap. Try [novon.im](https://novon.im) and write your ideas down.
