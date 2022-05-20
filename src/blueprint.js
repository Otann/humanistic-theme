import { alpha, desaturate, light } from './utils.js'

/**
 * Constants for Blueprint core colors
 * https://blueprintjs.com/docs/#core/colors.core-colors
 */
const primary = {
  blue1: '#184A90',
  blue2: '#215DB0',
  blue3: '#2D72D2',
  blue4: '#4C90F0',
  blue5: '#8ABBFF',
}

const success = {
  green1: '#165A36',
  green2: '#1C6E42',
  green3: '#238551',
  green4: '#32A467',
  green5: '#72CA9B',
}

const warning = {
  orange1: '#77450D',
  orange2: '#935610',
  orange3: '#C87619',
  orange4: '#EC9A3C',
  orange5: '#FBB360',
}

const danger = {
  red1: '#8E292C',
  red2: '#AC2F33',
  red3: '#CD4246',
  red4: '#E76A6E',
  red5: '#FA999C',
}

const gray = {
  gray1: '#5F6B7C',
  gray2: '#738091',
  gray3: '#8F99A8',
  gray4: '#ABB3BF',
  gray5: '#C5CBD3',
}

const light_gray = {
  light_gray1: '#D3D8DE',
  light_gray2: '#DCE0E5',
  light_gray3: '#E5E8EB',
  light_gray4: '#EDEFF2',
  light_gray5: '#F6F7F9',
}

const dark_gray = {
  dark_gray1: '#1C2127',
  dark_gray2: '#252A31',
  dark_gray3: '#2F343C',
  dark_gray4: '#383E47',
  dark_gray5: '#404854',
}

const black = '#111418'
const white = '#FFFFFF'

export const core = {
  black,
  white,
  ...gray,
  ...light_gray,
  ...dark_gray,
  ...primary,
  ...success,
  ...warning,
  ...danger,
}

/**
 * Those are collected from callout colors
 * fg - icon color
 * bg - background color of the callout
 */
const intent = {
  neutral: {
    fg: core.gray1,
    bg: alpha(core.gray3, 0.15),
  },
  primary: {
    fg: core.blue2,
    bg: alpha(core.blue3, 0.1),
  },
  success: {
    fg: core.green2,
    bg: alpha(core.green3, 0.1),
  },
  warning: {
    fg: core.orange2,
    bg: alpha(core.orange3, 0.1),
  },
  danger: {
    fg: core.red2,
    bg: alpha(core.red3, 0.1),
  },
}

export const alias = {
  // rgba(125,188,255,.6)
  selection: alpha('#7dbcff', 0.6),

  // rgba(17, 20, 24, 0.15)
  border: alpha('#111418', 0.15),

  muted: core.gray1,

  control: {
    icon: { fg: core.gray1 },
    label: { fg: core.dark_gray1 },
    primary: { fg: core.blue3 },
    normal: { fg: alpha(core.gray3, 0.3) },
    // taken from button
    disabled: {
      fg: alpha(core.gray1, 0.6),
      bg: alpha(core.light_gray1, 0.5),
    },
  },

  menu: {
    hover: {
      bg: alpha(core.gray3, 0.15),
    },
    active: {
      fg: core.blue2,
      bg: alpha(core.blue3, 0.1),
    },
  },
}

const vermillion = {
  vermillion1: '#96290D',
  vermillion2: '#B83211',
  vermillion3: '#D33D17',
  vermillion4: '#EB6847',
  vermillion5: '#FF9980',
}

const rose = {
  rose1: '#A82255',
  rose2: '#C22762',
  rose3: '#DB2C6F',
  rose4: '#F5498B',
  rose5: '#FF66A1',
}

const violet = {
  violet1: '#5C255C',
  violet2: '#7C327C',
  violet3: '#9D3F9D',
  violet4: '#BD6BBD',
  violet5: '#D69FD6',
}

const indigo = {
  indigo1: '#5642A6',
  indigo2: '#634DBF',
  indigo3: '#7961DB',
  indigo4: '#9881F3',
  indigo5: '#BDADFF',
}

const cerulean = {
  cerulean1: '#0C5174',
  cerulean2: '#0F6894',
  cerulean3: '#147EB3',
  cerulean4: '#3FA6DA',
  cerulean5: '#68C1EE',
}

const turquoise = {
  turquoise1: '#004D46',
  turquoise2: '#007067',
  turquoise3: '#00A396',
  turquoise4: '#13C9BA',
  turquoise5: '#7AE1D8',
}

const forest = {
  forest1: '#1D7324',
  forest2: '#238C2C',
  forest3: '#29A634',
  forest4: '#43BF4D',
  forest5: '#62D96B',
}

const lime = {
  lime1: '#43501B',
  lime2: '#5A701A',
  lime3: '#8EB125',
  lime4: '#B6D94C',
  lime5: '#D4F17E',
}

const gold = {
  gold1: '#5C4405',
  gold2: '#866103',
  gold3: '#D1980B',
  gold4: '#F0B726',
  gold5: '#FBD065',
}

const sepia = {
  sepia1: '#5E4123',
  sepia2: '#7A542E',
  sepia3: '#946638',
  sepia4: '#AF855A',
  sepia5: '#D0B090',
}

export const extended = {
  ...vermillion,
  ...rose,
  ...violet,
  ...indigo,
  ...cerulean,
  ...turquoise,
  ...forest,
  ...lime,
  ...gold,
  ...sepia,
}

export const bp = {
  ...core,
  ...extended,
  alias,
  intent,
}
