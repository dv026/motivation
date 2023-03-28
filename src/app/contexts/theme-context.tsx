import {
  createContext,
  FC,
  useState,
  PropsWithChildren,
  useContext,
} from "react"

export enum ETheme {
  Light = "light",
  Dark = "dark",
}

interface ThemeContextProps {
  theme: ETheme
  setTheme: (theme: ETheme) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: ETheme.Light,
  setTheme: () => null,
})

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ETheme>(
    (localStorage.getItem("theme") as ETheme) || ETheme.Light
  )

  const changeTheme = (theme: ETheme) => {
    localStorage.setItem("theme", theme)
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
