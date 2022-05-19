import fs from "fs";
import { colors } from "./theme.js";

const settings = {
  "workbench.colorCustomizations": {
    ...colors,
  },
};

const filename = "./.vscode/settings.json";

fs.writeFileSync(filename, JSON.stringify(settings, null, 2));

console.log(`Updated ${filename} at ${new Date()}`);
