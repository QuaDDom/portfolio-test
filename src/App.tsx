import "./App.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "react-creative-cursor/dist/styles.css";
import PageContainer from "./components/PageContainer";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#121212",
      primaryLight: "#fff",
      primaryLightHover: "#fff",
      primaryLightActive: "#fff",
      primaryLightContrast: "#fff",
      primary: "#ffffff",
      primaryBorder: "#fff",
      primaryBorderHover: "#fff",
      primarySolidHover: "#ccc",
      primarySolidContrast: "$white",
      primaryShadow: "$blue500",
      link: "#ccc",
      linkHover: "#fff",
      text: "#fff",
      myDarkColor: "#ff4ecd",
      grey: "#2a333e",
    },
    space: {},
    fonts: {},
  },
});

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      background: "#FFF",
      text: "#000",
      primaryColor: "#ff4ecd",
      grey: "#97b2c8",
    }, // optional
  },
});

function App() {
  return (
    <NextThemesProvider
      defaultTheme={darkTheme}
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <PageContainer />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default App;
