export const languages = {
  zh: '中文',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  zh: {
    // nav
    'nav.home': '~/home',
    'nav.projects': '~/projects',
    'nav.blog': '~/blog',
    // footer
    'footer.tagline': '开发者基础设施工作室。',
    'footer.motto': 'build. deploy. ship. repeat.',
    'footer.sitemap': '// SITEMAP',
    'footer.legal': '// LEGAL',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.rights': 'taimatsu. All rights reserved.',
    'footer.made': 'made with caffeine & astro',
    // home
    'home.whoami': '~/taimatsu — whoami',
    'home.intro':
      'taimatsu 是一家专注于开发者基础设施的独立软件工作室。我们以 Serverless、容器与 Git 工作流为基石，构建覆盖 API 服务、云资源管理、容器运维与内容发布的产品矩阵，帮助独立开发者与中小团队以更低的成本、更高的效率，完成从开发到上线的全链路交付。',
    'home.terminal.dir': 'taimatsu@void: ~/projects',
    'home.projects.title': '产品矩阵',
    'home.projects.count': 'total: 4 // live: 0',
    'home.why.title': '为什么选择 taimatsu',
    'home.why.1.title': '成本可控',
    'home.why.1.desc': '按量计费与慷慨的免费额度，让每一分预算都花在业务本身，而不是闲置的服务器上。',
    'home.why.2.title': '极速交付',
    'home.why.2.desc': '从代码到生产环境的分钟级交付。部署、证书、监控全部自动化，发布时间压缩到一次推送。',
    'home.why.3.title': '开放自主',
    'home.why.3.desc': '基于开放标准与 Git 工作流构建，拒绝厂商锁定。你的代码、内容与数据，永远只属于你。',
    'home.manifesto.label': '// MANIFESTO',
    'home.manifesto.p1': '工具应该像管道一样朴素，像终端一样诚实。我们把复杂的基础设施藏在背后，把',
    'home.manifesto.cmd1': '一条命令',
    'home.manifesto.p2': '、',
    'home.manifesto.cmd2': '一次点击',
    'home.manifesto.p3': '、',
    'home.manifesto.cmd3': '一个仓库',
    'home.manifesto.p4': '交到你手上。剩下的时间，去创造点什么吧。',
    'home.motd': 'stay hungry, stay shipping.',
    // project card
    'project.live': 'LIVE',
    'project.soon': 'COMING\u00a0SOON',
    'project.visit': '访问',
    'project.stayTuned': '敬请期待 // stay tuned',
    // blog
    'blog.title': '构建日志',
    'blog.subtitle': '构建笔记、发布记录与碎碎念。全部以 Markdown 书写，就像我们的博客平台 novon 一样。',
    'blog.empty': 'ls ~/blog —— 暂无文章，先喝杯咖啡。',
    'blog.readMore': 'read more →',
    'blog.back': '← cd ~/blog',
    'blog.eof': 'EOF —— 感谢阅读。更多内容请回到',
    // legal
    'legal.updated': '最后更新：',
    // 404
    '404.title': '页面不存在，或者它已经被',
    '404.home': 'cd ~/home',
  },
  en: {
    // nav
    'nav.home': '~/home',
    'nav.projects': '~/projects',
    'nav.blog': '~/blog',
    // footer
    'footer.tagline': 'A developer infrastructure studio.',
    'footer.motto': 'build. deploy. ship. repeat.',
    'footer.sitemap': '// SITEMAP',
    'footer.legal': '// LEGAL',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'taimatsu. All rights reserved.',
    'footer.made': 'made with caffeine & astro',
    // home
    'home.whoami': '~/taimatsu — whoami',
    'home.intro':
      'taimatsu is an independent software studio focused on developer infrastructure. Built on serverless, containers and Git workflows, our product suite spans API services, cloud resource management, container operations and content publishing — helping indie developers and growing teams ship from code to production faster, at a fraction of the cost.',
    'home.terminal.dir': 'taimatsu@void: ~/projects',
    'home.projects.title': 'The Product Suite',
    'home.projects.count': 'total: 4 // live: 0',
    'home.why.title': 'Why taimatsu',
    'home.why.1.title': 'Cost-efficient',
    'home.why.1.desc': 'Pay-as-you-go pricing and generous free tiers — every cent of your budget goes to your business, not idle servers.',
    'home.why.2.title': 'Ship fast',
    'home.why.2.desc': 'Code-to-production in minutes. Deployment, certificates and monitoring fully automated — release time compressed into a single push.',
    'home.why.3.title': 'Open & owned',
    'home.why.3.desc': 'Built on open standards and Git workflows. No vendor lock-in — your code, content and data belong to you, always.',
    'home.manifesto.label': '// MANIFESTO',
    'home.manifesto.p1': 'Tools should be as plain as pipes and as honest as a terminal. We hide the heavy infrastructure behind',
    'home.manifesto.cmd1': 'one command',
    'home.manifesto.p2': ', ',
    'home.manifesto.cmd3': 'one repo',
    'home.manifesto.cmd2': 'one click',
    'home.manifesto.p3': ' and ',
    'home.manifesto.p4': ' — then hand them to you. Spend the rest of your time creating something.',
    'home.motd': 'stay hungry, stay shipping.',
    // project card
    'project.live': 'LIVE',
    'project.soon': 'COMING\u00a0SOON',
    'project.visit': 'Visit',
    'project.stayTuned': 'coming soon // stay tuned',
    // blog
    'blog.title': 'Build Log',
    'blog.subtitle': 'Build notes, release logs and random rants. All written in Markdown — just like novon, our own blogging platform.',
    'blog.empty': 'ls ~/blog —— no posts yet, grab a coffee.',
    'blog.readMore': 'read more →',
    'blog.back': '← cd ~/blog',
    'blog.eof': 'EOF —— thanks for reading. More at',
    // legal
    'legal.updated': 'Last updated: ',
    // 404
    '404.title': 'This page does not exist, or it was',
    '404.home': 'cd ~/home',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Build a locale-aware path. Default locale has no prefix. */
export function localePath(lang: Lang, path: string): string {
  const clean = path === '/' ? '/' : path.replace(/\/$/, '');
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}

/** Given the current pathname, return the path for the *other* locale. */
export function alternateLocalePath(pathname: string, target: Lang): string {
  const stripped = pathname.replace(/^\/zh(?=\/|$)/, '') || '/';
  return localePath(target, stripped);
}

export function getLangFromUrl(pathname: string): Lang {
  return pathname.startsWith('/zh/') || pathname === '/zh' ? 'zh' : 'en';
}
