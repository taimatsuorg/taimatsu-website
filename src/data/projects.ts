import type { Lang } from '../i18n/utils';

export type ProjectStatus = 'live' | 'soon';

export interface Project {
  name: string;
  domain: string;
  url: string;
  status: ProjectStatus;
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
  features: Record<Lang, string[]>;
  tags: string[];
  cmd: string;
}

export const projects: Project[] = [
  {
    name: 'novon',
    domain: 'novon.im',
    url: 'https://novon.im',
    status: 'soon',
    tagline: {
      zh: '写下 Markdown，博客即刻上线。',
      en: 'Write Markdown, get a blog. That\'s it.',
    },
    description: {
      zh: '为写作者打造的现代化博客托管服务。把 Markdown 丢进来，剩下的交给我们：发布、托管、全球加速、HTTPS 全部自动完成，无需服务器、无需运维。秒开的阅读体验、干净的排版，让你专注于唯一重要的事——写作。',
      en: 'A modern blog hosting service for writers. Drop in your Markdown and we handle the rest — publishing, hosting, global delivery and HTTPS, all automatic. No servers, no ops. Instant load times and clean typography let you focus on the only thing that matters: writing.',
    },
    features: {
      zh: [
        '写下 Markdown 即刻发布，零配置零运维',
        '极速托管：全球 CDN 分发，秒开阅读体验',
        '自定义域名与自动 HTTPS 证书',
        'RSS、SEO 与全文搜索开箱即用',
      ],
      en: [
        'Write Markdown, publish instantly — zero config, zero ops',
        'Blazing-fast hosting on a global CDN',
        'Custom domains with automatic HTTPS',
        'RSS, SEO and full-text search out of the box',
      ],
    },
    tags: ['blog', 'markdown', 'hosting', 'publishing'],
    cmd: 'novon publish ./posts',
  },
  {
    name: 'serverless',
    domain: 'serverless.im',
    url: 'https://serverless.im',
    status: 'soon',
    tagline: {
      zh: '一行调用，百种能力。',
      en: 'One call. A hundred capabilities.',
    },
    description: {
      zh: '企业级 Serverless API 聚合平台。将图片处理、数据校验、短链接、二维码、IP 地理信息等高频开发能力封装为标准化 RESTful API，统一鉴权、统一账单、按量付费，让开发者彻底告别重复造轮子。',
      en: 'An enterprise-grade serverless API hub. High-frequency development capabilities — image processing, data validation, short links, QR codes, IP geolocation and more — packaged as standardized RESTful APIs with unified auth, unified billing and pay-as-you-go pricing.',
    },
    features: {
      zh: [
        '统一 API 网关：一个密钥调用全部能力',
        '按量计费：用多少付多少，免费额度起步',
        '全球边缘节点：毫秒级延迟，99.9% 可用性承诺',
        '完整 OpenAPI 文档与多语言 SDK',
      ],
      en: [
        'Unified gateway: one API key for every capability',
        'Pay-as-you-go pricing with a generous free tier',
        'Global edge network: millisecond latency, 99.9% SLA',
        'Full OpenAPI docs and multi-language SDKs',
      ],
    },
    tags: ['serverless', 'api', 'edge', 'pay-as-you-go'],
    cmd: 'curl -s api.serverless.im/v1/<tool>',
  },
  {
    name: 'infrastructure',
    domain: 'infrastructure.im',
    url: 'https://infrastructure.im',
    status: 'soon',
    tagline: {
      zh: '从裸机到上线，只需一次点击。',
      en: 'From bare metal to production, in one click.',
    },
    description: {
      zh: '面向开发者与中小团队的多云基础设施管理平台。通过统一控制台纳管主流云厂商资源，提供覆盖 Web 服务、数据库、SaaS 应用与游戏服务器的一键部署模板市场，自动完成域名、证书、备份与监控配置，让基础设施运维成本趋近于零。',
      en: 'A multi-cloud infrastructure management platform for developers and growing teams. Manage resources across major cloud providers from a single console, deploy web services, databases, SaaS apps and game servers from a one-click template marketplace — domains, TLS, backups and monitoring configured automatically.',
    },
    features: {
      zh: [
        '多云统一管理：主流云厂商一个控制台',
        '一键部署市场：Web 应用 / 数据库 / 游戏服务器',
        '自动化运维：域名、SSL、备份、监控开箱即用',
        '成本可视化：资源用量与费用实时掌控',
      ],
      en: [
        'Multi-cloud unified: every major provider, one console',
        'One-click marketplace: web apps, databases, game servers',
        'Automated ops: domains, TLS, backups, monitoring built in',
        'Cost visibility: usage and spend tracked in real time',
      ],
    },
    tags: ['multi-cloud', 'one-click', 'marketplace', 'game-server'],
    cmd: 'infra up --stack minecraft --region auto',
  },
  {
    name: 'containers',
    domain: 'containers.im',
    url: 'https://containers.im',
    status: 'soon',
    tagline: {
      zh: '自托管的一切，尽在掌握。',
      en: 'Everything self-hosted, under your control.',
    },
    description: {
      zh: '开源的一站式容器管理与自托管 PaaS 平台。支持 Git 仓库、容器镜像与 Docker Compose 等多种部署方式，内置反向代理、自动 HTTPS、日志监控与一键回滚，可跨多台服务器统一编排，为团队提供媲美 Vercel 的私有化部署体验。',
      en: 'An open-source, all-in-one container management and self-hosted PaaS. Deploy from Git repos, container images or Docker Compose, with built-in reverse proxy, automatic HTTPS, logs, monitoring and one-click rollbacks. Orchestrate across multiple servers — a Vercel-like experience on your own hardware.',
    },
    features: {
      zh: [
        '多源部署：Git 仓库 / 镜像 / Docker Compose',
        '多服务器统一编排与集中管理',
        '自动 HTTPS、日志、监控与一键回滚',
        '团队协作与细粒度权限控制',
      ],
      en: [
        'Deploy from Git, images or Docker Compose',
        'Unified orchestration across multiple servers',
        'Auto HTTPS, logs, monitoring, one-click rollbacks',
        'Team collaboration with granular RBAC',
      ],
    },
    tags: ['docker', 'self-hosted', 'paas', 'open-source'],
    cmd: 'docker ps --watch | containers.im',
  },
];
