import { defineConfig, presetUno, presetAttributify } from "unocss";
import presetMini from "@unocss/preset-mini";
import presetWind from "@unocss/preset-wind";
import extractorPug from "@unocss/extractor-pug";

export default defineConfig({
  rules: [
    ["max-w-100", { "max-width": "100%" }],
    ["w-100", { width: "100%" }],
    [/^h-([\.\d]+)$/, ([_, num]) => ({ height: `${num}rem` })],
  ],
  theme: {
    colors: {
      netural: { 1: "#fff", 2: "#29666C" },
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
