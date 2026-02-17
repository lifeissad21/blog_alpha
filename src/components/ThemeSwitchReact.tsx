import * as React from "react";
import { Switch } from "@/components/ui/switch";

export function ThemeSwitchReact() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // Get initial theme
    const getInitialTheme = () => {
      const localStorageTheme = localStorage?.getItem("theme") ?? '';
      if (['dark', 'light'].includes(localStorageTheme)) {
        return localStorageTheme === 'dark';
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
      }
      return false;
    };

    const initialIsDark = getInitialTheme();
    setIsDark(initialIsDark);

    // Apply theme to document
    if (initialIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', initialIsDark ? 'dark' : 'light');
  }, []);

  const handleToggle = (checked: boolean) => {
    setIsDark(checked);
    
    if (checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Switch
      checked={isDark}
      onCheckedChange={handleToggle}
      className="data-[state=checked]:bg-amber-600"
      aria-label="Toggle dark mode"
    />
  );
}
