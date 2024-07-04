"use client";
import { useTheme } from "next-app-theme/use-theme";
import { SunIcon } from "@/components/theme/SunIcon";
import { MoonIcon } from "@/components/theme/MoonIcon";
import { Switch } from "@nextui-org/react";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === "dark" ? <SunIcon /> : <MoonIcon />;

  return (
    <>
      <Switch defaultSelected size="sm" color="warning" onClick={toggleTheme} />
      {icon}
    </>
  );
}
