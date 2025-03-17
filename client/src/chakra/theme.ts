import { extendTheme } from "@chakra-ui/theme-utils";
// or
// import { extendTheme } from "@chakra-ui/styled-system";

// Define the config type
interface ThemeConfig {
  initialColorMode: "light" | "dark";
  useSystemColorMode: boolean;
}

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

// Define a custom color mode function
const customMode = (lightValue: string, darkValue: string) => {
  return (props: { colorMode: string }) => {
    return props.colorMode === "light" ? lightValue : darkValue;
  };
};

// Extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        backgroundColor: customMode("gray.500", "gray.800")(props),
      },
    }),
  },
});

export default theme;
