// "use client";
// import { Switch } from "@nextui-org/react";
// import { useTheme } from "next-themes";
// import { useState, useEffect } from "react";


// export default function ThemeCheck() {
  
//   const [isDark, setIsDark] = useState<any | null>(null);
//   const { theme, resolvedTheme, setTheme } = useTheme();
//   useEffect(() => {
//     resolvedTheme  === "light" ? setIsDark(false) : setIsDark(true);
//     return () => {}
//   },[resolvedTheme])
//   return (
//     <>
//     The current theme now is: {theme}
//     <Switch
//       defaultChecked
//       color="primary"
//       key={isDark}
//       checked={isDark}
//       onChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}    
//       />
//       </>
//   )
// }

