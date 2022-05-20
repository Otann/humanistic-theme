import fs from 'fs'
import { colors } from '../theme/workbench.js'
import { textMateRules } from '../theme/syntax.js'

const settings = {
  $schema: 'vscode://schemas/color-theme',
  name: 'Humanistic Theme',
  colors,
  tokenColors: [...textMateRules],
}

const filename = './themes/humanistic-color-theme.json'

fs.writeFileSync(filename, JSON.stringify(settings, null, 2))

console.log(`Generated ${filename}`)
