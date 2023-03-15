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

export interface ThemeContextProps {
  theme: ETheme
  setTheme: (theme: ETheme) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: ETheme.Light,
  setTheme: () => null,
})

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ETheme>(ETheme.Light)
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
