import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { useColorScheme } from "react-native"

export type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useColorScheme()
  const [theme, setTheme] = useState<Theme>(systemScheme === "light" ? "light" : "dark")
  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "light" ? "dark" : "light"))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
