import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    setTheme(nextTheme)
  }

  const themeLabel = theme === "system" ? "System theme" : theme === "dark" ? "Dark theme" : "Light theme"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="relative h-10 w-10 rounded-xl"
      aria-label={themeLabel}
      title={themeLabel}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 data-[theme=system]:scale-0" data-theme={theme} />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 data-[theme=system]:scale-0" data-theme={theme} />
      <Monitor className="absolute h-5 w-5 scale-0 transition-all data-[theme=system]:scale-100" data-theme={theme} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
