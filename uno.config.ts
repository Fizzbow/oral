import { defineConfig, presetUno, presetAttributify } from "unocss";
import presetMini from "@unocss/preset-mini";
import presetWind from "@unocss/preset-wind";
import extractorPug from "@unocss/extractor-pug";

export default defineConfig({
  rules: [],
  theme: {
    colors: {
      home: { primary: "#02F7BC", second: "#2D60FD" },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetMini(),
    presetWind(),
    extractorPug(),
  ],
});

// font-family: 'Poppins', sans-serif;
