// theme/colors.ts
// AUTO-MIRRORED FROM global.css — keep in sync manually.
// Used for native-only props (tabBarStyle, headerStyle, icon color, StatusBar, SVG, etc.)
// where NativeWind's CSS variable runtime isn't hydrated yet during initial render.

// ── @theme block colors ──
export const colors = {
  // Essentials
  bg: "#0d1212",
  card: "rgba(255, 255, 255, 0.08)",
  text: "#ffffff",
  textSecondary: "rgba(255, 255, 255, 0.7)",
  textMuted: "rgba(255, 255, 255, 0.5)",
  accent: "#fac9b2",
  border: "rgba(255, 255, 255, 0.15)",
  input: "rgba(255, 255, 255, 0.08)",
  tabActive: "#ffffff",
  tabInactive: "#868f8e",

  // ── Neutral ──
  neutralWhite: "#ffffff",
  neutralBlack: "#000000",

  // ── Brand ──
  brand100: "#fffaf7",
  brand200: "#fdeee7",
  brand300: "#fde6dc",
  brand400: "#fcdbcb",
  brand500: "#fbd4c1",
  brand600: "#fac9b2",
  brand700: "#e4b7a2",
  brand800: "#bf998a",
  brand900: "#937e77",
  brand950: "#69544b",
  brand1000: "#69544b",

  // ── White Alpha ──
  whiteAlpha4: "rgba(255, 255, 255, 0.04)",
  whiteAlpha8: "rgba(255, 255, 255, 0.08)",
  whiteAlpha15: "rgba(255, 255, 255, 0.15)",
  whiteAlpha20: "rgba(255, 255, 255, 0.2)",
  whiteAlpha30: "rgba(255, 255, 255, 0.3)",
  whiteAlpha50: "rgba(255, 255, 255, 0.5)",
  whiteAlpha70: "rgba(255, 255, 255, 0.7)",

  // ── Black Alpha ──
  blackAlpha4: "rgba(2, 13, 13, 0.04)",
  blackAlpha8: "rgba(2, 13, 13, 0.08)",
  blackAlpha15: "rgba(2, 13, 13, 0.15)",
  blackAlpha20: "rgba(2, 13, 13, 0.2)",
  blackAlpha30: "rgba(2, 13, 13, 0.3)",
  blackAlpha50: "rgba(2, 13, 13, 0.5)",
  blackAlpha70: "rgba(2, 13, 13, 0.7)",

  // ── Gray ──
  gray50: "#e6e9e9",
  gray100: "#b2bab9",
  gray200: "#9ca4a4",
  gray300: "#868f8e",
  gray400: "#717a7a",
  gray500: "#5a6463",
  gray600: "#454f4e",
  gray700: "#2e3938",
  gray800: "#192323",
  gray900: "#0d1212",
  gray950: "#020d0d",
  gray1000: "#010707",

  // ── Error ──
  error100: "#fef4ef",
  error200: "#fcdbcc",
  error300: "#facab4",
  error400: "#f8b292",
  error500: "#f7a37d",
  error600: "#f58c5c",
  error700: "#df7f54",
  error800: "#ae6341",
  error900: "#874d33",
  error1000: "#673b27",

  // ── Warning ──
  warning100: "#fff8ee",
  warning200: "#feebcb",
  warning300: "#fde1b1",
  warning400: "#fcd38e",
  warning500: "#fcca78",
  warning600: "#fbbd56",
  warning700: "#e4ac4e",
  warning800: "#b2863d",
  warning900: "#8a682f",
  warning1000: "#694f24",

  // ── Success ──
  success100: "#f6f9f3",
  success200: "#e2ebd9",
  success300: "#d4e2c6",
  success400: "#c0d5ad",
  success500: "#b4cd9d",
  success600: "#a1c084",
  success700: "#93af78",
  success800: "#869b6f",
  success900: "#5a664a",
  success1000: "#445137",

  // ── Data ──
  data100: "#fefdfd",
  data200: "#fbf9f9",
  data300: "#f9f6f6",
  data400: "#f6f2f2",
  data500: "#f5f0ef",
  data600: "#f2eceb",
  data700: "#dcd7d6",
  data800: "#aca8a7",
  data900: "#858281",
  data1000: "#666363",

  // ── Misc ──
  misc400: "#3f86f7",
  misc500: "#1a75e3",
  misc600: "#0561c2",
  misc700: "#064e9e",
  misc800: "#0b3c7a",
  misc900: "#052b5b",
  misc950: "#021b3d",
} as const

export type ColorToken = keyof typeof colors
