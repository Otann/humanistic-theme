import fs from 'fs'
import { colors } from '../theme/workbench.js'
import { textMateRules } from '../theme/syntax.js'

const settings = {
  'workbench.colorCustomizations': {
    ...colors,
  },
  'editor.tokenColorCustomizations': {
    textMateRules,
  },
}

function writeSettings(filename) {
  fs.writeFileSync(filename, JSON.stringify(settings, null, 2))
  console.log(`Updated ${filename} at ${new Date()}`)
}

writeSettings('./.vscode/settings.json')
