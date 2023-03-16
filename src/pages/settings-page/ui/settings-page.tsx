import { ETheme, useTheme } from "@/app/contexts/theme-context/theme-context"

const SettingsPage = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = (p: any) => {
    setTheme(p)
  }

  return (
    <div>
      <h1>Settings Page</h1>
      <div>
        {theme}
        <button onClick={() => changeTheme(ETheme.Light)}>
          set light theme
        </button>
        <button onClick={() => changeTheme(ETheme.Dark)}>set dark theme</button>
      </div>
    </div>
  )
}

export default SettingsPage
