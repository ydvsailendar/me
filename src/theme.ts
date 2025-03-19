import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'JetBrains Mono', 'Fira Code', monospace",
    body: "'Inter', 'Roboto', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  colors: {
    brand: {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
    },
    secondary: {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
    },
    accent: {
      50: "#fff8e1",
      100: "#ffecb3",
      200: "#ffe082",
      300: "#ffd54f",
      400: "#ffca28",
      500: "#ffc107",
      600: "#ffb300",
      700: "#ffa000",
      800: "#ff8f00",
      900: "#ff6f00",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
        lineHeight: 1.7,
      },
      "h1, h2, h3, h4": {
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: "600",
      },
      ".code-text": {
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "-0.02em",
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: "7xl",
        px: { base: 4, md: 8 },
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: "-0.03em",
        fontWeight: "600",
      },
      variants: {
        terminal: {
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: "500",
          letterSpacing: "-0.05em",
          color: "brand.700",
          position: "relative",
          _before: {
            content: '">"',
            color: "brand.500",
            marginRight: "8px",
            opacity: 0.8,
          },
        },
        code: {
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: "500",
          bg: "gray.100",
          px: 2,
          py: 1,
          borderRadius: "md",
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "500",
        rounded: "lg",
        _hover: {
          transform: "translateY(-2px)",
          transition: "all 0.2s",
          boxShadow: "md",
        },
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
            _disabled: { bg: "brand.500" },
          },
        },
        glass: {
          bg: "whiteAlpha.300",
          backdropFilter: "blur(8px)",
          borderWidth: "1px",
          borderColor: "whiteAlpha.400",
          color: "gray.800",
          _hover: {
            bg: "whiteAlpha.400",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
          _active: {
            bg: "whiteAlpha.500",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.50",
          },
        },
        ghost: {
          color: "brand.500",
          _hover: {
            bg: "brand.50",
          },
        },
        secondary: {
          bg: "secondary.500",
          color: "white",
          _hover: {
            bg: "secondary.600",
            _disabled: { bg: "secondary.500" },
          },
        },
        accent: {
          bg: "accent.500",
          color: "gray.800",
          _hover: {
            bg: "accent.600",
            _disabled: { bg: "accent.500" },
          },
        },
        terminal: {
          bg: "gray.800",
          color: "green.300",
          fontFamily: "'JetBrains Mono', monospace",
          _hover: {
            bg: "gray.900",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: "whiteAlpha.300",
          backdropFilter: "blur(8px)",
          borderWidth: "1px",
          borderColor: "whiteAlpha.400",
          borderRadius: "xl",
          boxShadow: "lg",
          overflow: "hidden",
          transition: "all 0.3s",
          _hover: {
            transform: "translateY(-4px)",
            boxShadow: "xl",
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: "brand.500",
        _hover: {
          textDecoration: "none",
          color: "brand.600",
        },
      },
    },
    Badge: {
      variants: {
        glass: {
          bg: "whiteAlpha.300",
          backdropFilter: "blur(8px)",
          borderWidth: "1px",
          borderColor: "whiteAlpha.400",
          color: "gray.800",
        },
        subtle: {
          bg: "brand.50",
          color: "brand.700",
        },
        secondary: {
          bg: "secondary.50",
          color: "secondary.700",
        },
        accent: {
          bg: "accent.50",
          color: "accent.700",
        },
        code: {
          bg: "gray.100",
          color: "gray.800",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: "500",
          fontSize: "sm",
        },
        terminal: {
          bg: "gray.800",
          color: "green.300",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: "normal",
        },
      },
    },
  },
  layerStyles: {
    glass: {
      bg: "whiteAlpha.300",
      backdropFilter: "blur(8px)",
      borderWidth: "1px",
      borderColor: "whiteAlpha.400",
      borderRadius: "xl",
      boxShadow: "lg",
    },
    gradientBg: {
      bgGradient: "linear(to-r, brand.50, blue.50, purple.50)",
      position: "relative",
      _after: {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "whiteAlpha.700",
        backdropFilter: "blur(8px)",
      },
    },
    terminal: {
      bg: "gray.800",
      color: "green.300",
      fontFamily: "'JetBrains Mono', monospace",
      p: 4,
      borderRadius: "md",
      boxShadow: "md",
    },
  },
  textStyles: {
    subtitle: {
      color: "gray.600",
      fontSize: ["lg", "xl"],
      fontWeight: "normal",
      lineHeight: "tall",
    },
    caption: {
      color: "gray.500",
      fontSize: "sm",
    },
    code: {
      fontFamily: "'JetBrains Mono', monospace",
      bg: "gray.100",
      px: 2,
      py: 0.5,
      borderRadius: "md",
      fontSize: "0.9em",
    },
    terminal: {
      fontFamily: "'JetBrains Mono', monospace",
      color: "green.400",
      bg: "gray.800",
      px: 3,
      py: 1,
      borderRadius: "md",
      letterSpacing: "-0.02em",
    },
  },
});

export default theme;
