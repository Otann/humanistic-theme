import Mustache from "mustache";
import fs from "fs";
import { vars, colors } from "./theme.js";

const settings = {
  name: "Humanistic Theme",
  colors: {
    ...colors,
  },
};

const filename = "./themes/Humanistic Theme-color-theme.json";

fs.writeFileSync(filename, JSON.stringify(settings, null, 2));

console.log(`Updated ${filename}`);

fs.writeFileSync("./themes/Humanistic Theme-color-theme.json", result);
