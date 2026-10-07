# taimatsu

> ▲ 独立开发者实验室官网 —— 黑底极客风格，基于 [Astro](https://astro.build) 构建。

介绍以下项目：

| 项目 | 说明 | 状态 |
| --- | --- | --- |
| [novon.im](https://novon.im) | 博客托管服务：写下 Markdown 即刻发布，托管/加速/HTTPS 全托管 | 🚧 敬请期待 |
| serverless.im | 基于 Serverless 的实用 API 聚合平台 | 🚧 敬请期待 |
| infrastructure.im | 云基础资源管理，一键部署服务/应用/游戏服务器 | 🚧 敬请期待 |
| containers.im | 一站式容器管理工具（类似 Coolify） | 🚧 敬请期待 |

## 技术栈

- [Astro 7](https://astro.build) —— 静态站点生成（内置 i18n 路由：英文默认 `/`，中文 `/zh`）
- [Tailwind CSS 4](https://tailwindcss.com) —— 样式（`@tailwindcss/vite`）
- Astro Content Collections —— Blog（Markdown，按语言分目录）
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) —— 站点地图

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
```

## 构建与预览

```bash
npm run build    # 输出到 dist/
npm run preview
```

## 目录结构

```
src/
├── components/       # Nav / Footer / ProjectCard / pages（双语共享页面组件）
├── content/blog/     # 博客文章（zh/ 中文，en/ 英文）
├── content.config.ts
├── data/projects.ts  # 项目数据（双语）
├── i18n/utils.ts     # 语言配置、UI 文案字典、路由辅助
├── layouts/          # Base / Legal 布局
├── pages/            # 英文页面（根路径）+ zh/ 中文页面
└── styles/global.css
```

## 多语言

- 英文为默认语言（路径无前缀），中文位于 `/zh` 前缀下；导航栏右侧可一键切换，首次访问会根据浏览器语言自动跳转中文版。
- UI 文案集中在 `src/i18n/utils.ts` 的 `ui` 字典中。
- 写博客：在 `src/content/blog/zh/` 与 `src/content/blog/en/` 分别新增同名 `.md` 文件，带 frontmatter（`title` / `description` / `pubDate` / `tags`）。

## License

MIT
