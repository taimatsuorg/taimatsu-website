import { LocaleProvider } from "@/components/ui/locale-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { CommandCopy } from "@/components/ui/command-copy"

type Lang = "en" | "zh"
const tag = (lang: Lang) => (lang === "zh" ? "zh-CN" : "en")

export function SiteThemeToggle({ lang }: { lang: Lang }) {
  return (
    <LocaleProvider locale={tag(lang)}>
      <ThemeToggle variant="ghost" />
    </LocaleProvider>
  )
}

export function SiteCommand({ lang, command, className }: { lang: Lang; command: string; className?: string }) {
  return (
    <LocaleProvider locale={tag(lang)}>
      <CommandCopy command={command} className={className} />
    </LocaleProvider>
  )
}
