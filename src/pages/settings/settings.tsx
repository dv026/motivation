import { ETheme, useTheme } from "../../contexts/theme-context"

export const SettingsPage = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <h1>Settings Page</h1>
      <div>
        {theme}
        <button onClick={() => setTheme(ETheme.Light)}>set light theme</button>
        <button onClick={() => setTheme(ETheme.Dark)}>set dark theme</button>
      </div>
    </div>
  )
}

export default SettingsPage
