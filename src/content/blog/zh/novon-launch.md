---
title: 'novon.im 上线：用 GitHub 仓库写博客'
description: '我们的第一个项目 novon.im 正式上线 —— 导入 GitHub 仓库，几秒钟拥有你自己的博客。'
pubDate: 2025-01-20
tags: ['novon', 'release']
---

## 一句话介绍

**novon.im** 是一个基于 GitHub 的博客平台：导入你的 GitHub 仓库，即可部署一个博客。写文章就是写 Markdown，发布就是 `git push`。

## 为什么做这个

市面上的博客方案要么太重（自己维护一套 CMS），要么太散（平台锁定、迁移困难）。我们想要的很简单：

1. 内容是纯 Markdown 文件，永远属于你自己；
2. 版本管理交给 Git，天然带历史与回滚；
3. 部署这件事，最好不存在。

novon 就是答案。仓库即内容，推送即发布。

## 快速开始

```bash
# 1. 准备一个放 Markdown 的 GitHub 仓库
git init my-blog && cd my-blog
echo "# Hello novon" > posts/hello.md

# 2. 在 novon.im 导入该仓库
# 3. 完成。之后的每一次 push 都会自动更新博客
git push origin main
```

## 接下来

自定义主题、更多集成、更好的阅读体验都在路线图上。去 [novon.im](https://novon.im) 试试，把想法写下来。
