import fs from 'fs'
import { colors } from './theme.js'

const settings = {
  name: 'Humanistic Theme',
  colors: {
    ...colors,
  },
}

const filename = './themes/Humanistic Theme-color-theme.json'

fs.writeFileSync(filename, JSON.stringify(settings, null, 2))

console.log(`Generated ${filename}`)
