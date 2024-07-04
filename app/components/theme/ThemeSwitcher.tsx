// "use client";
// import {Switch} from "@nextui-org/react";
// import { SunIcon } from "@/components/theme/SunIcon";
// import { MoonIcon } from "@/components/theme/MoonIcon";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// const ThemeSwitcher=() => {

//   const [ mounted, setMounted ] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   },[])
//   if(!mounted) return null

//   return (
//     <>
//     <Switch
//       defaultSelected
//       size="sm"
//       color="warning"
//       startContent={<SunIcon onClick={()=> setTheme("light")} />}
//       endContent={<MoonIcon onClick={() => setTheme("dark")}/>}
//       />
//     </>
//   );
// }
// export default ThemeSwitcher;
