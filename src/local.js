import Mustache from "mustache";
import fs from "fs";
import { vars, colors } from "./theme.js";

// Apply mustache template to every value in colors
// const colorsRendered = Object.fromEntries(
//   Object.entries(colors).map(([key, value]) => [
//     key,
//     Mustache.render(value, data),
//   ])
// );

const settings = {
  "workbench.colorCustomizations": {
    "[Atom One Light]": {
      ...colors,
    },
  },
};

const filename = "./.vscode/settings.json";

fs.writeFileSync(filename, JSON.stringify(settings, null, 2));

console.log(`Updated ${filename}`);
