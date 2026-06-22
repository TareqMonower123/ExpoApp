import { useFonts } from "expo-font";

const FONT_PRIMARY = "ChaleLondon";
const FONT_SECONDARY = "ChaletNewYork";

export function useAppFonts() {
  const [fontsLoaded, fontError] = useFonts({
    [FONT_PRIMARY]: require("./ChaleLondonNineteenSixtyRegular.otf"),
    [FONT_SECONDARY]: require("./ChaletNewYorkNineteenSixtyRegular.otf"),
  });

  return { fontsLoaded, fontError };
}
