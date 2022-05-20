import fs from 'fs'
import { colors, textMateRules, tokenRootRules } from './theme.js'

const settings = {
  'workbench.colorCustomizations': {
    ...colors,
  },
  'editor.tokenColorCustomizations': {
    ...tokenRootRules,
    textMateRules,
  },
}

const filename = './.vscode/settings.json'

fs.writeFileSync(filename, JSON.stringify(settings, null, 2))

console.log(`Updated ${filename} at ${new Date()}`)
