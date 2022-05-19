import { desaturate, light } from './utils.js'

const primitives = {
  unset: '#FF01FF',
  transparent: '#00000000',

  accent: '#3982CC',

  info: {
    fg: '#3982cc',
    bg: '#BCDAF7',
  },
  success: {
    fg: '#067D17',
    bg: '#edfced',
  },
  warning: {
    fg: '#EBC700',
    bg: '#f5eac1',
  },
  danger: {
    bg: '#ffcccc',
    fg: '#f50000',
  },
  hint: {
    bg: '#f7faff',
    fg: '#c3c3c3',
  },
}

export const vars = {
  ...primitives,

  // main real estate with editable content
  editor: {
    fg: '#000000',
    bg: '#FFFFFF',

    current_line: {
      bg: '#fcfaee',
    },
    whitespace: {
      fg: '#d5d5d5',
    },

    selection: {
      bg: '#B5D7FD',
    },
    inactive: {
      fg: '#8C8C8C',
    },
    guides: {
      active: { fg: '#d8d8d8' },
      inactive: { fg: '#e6e6e6' },
    },
    highlights: {
      text: { bg: '#b5d7fd' },
      symbol_read: { bg: '#edebfc' },
      symbol_write: { bg: '#fce8f4' },
      search_current: { bg: '#ccccff' },
      search_others: { bg: '#ffe959' },
    },
  },

  // supportive interface, mostly non-editable
  ui: {
    fg: '#6e6e6e',
    bg: '#F2F2F2',
    // borders of interface areas
    border: '#D4D4D4',
    hover: {
      fg: '#000000',
      bg: '#DADADA',
    },
    // active tab
    active: {
      bg: '#BEBEBE',
    },
    // selected element
    selected: {
      bg: '#D5D5D5',
    },
    icon: {
      fg: '#6e6e6e',
      bg: '#383A42',
    },
    control: {
      border: '#C4C4C4',
    },
    shadow: {
      bg: '#D4D4D488',
    },
  },

  symbols: {
    default: {
      fg: '#080808',
    },
    comment: {
      fg: light(desaturate(primitives.success.fg, 80), 40),
      bg: '#EDEDED',
    },
    string: {
      fg: primitives.success.fg,
    },
    number: {
      fg: '#1750EB',
    },
    keyword: {
      fg: '#0033B3',
    },
    function: {
      fg: '#00627A',
    },
    invalid: {
      fg: primitives.danger.fg,
    },
  },
}

/**
 * Given more descriptive names
 */
export const aliases = {
  added: vars.success,
  deleted: vars.warning,
  modified: vars.info,

  list: {
    normal: {
      bg: vars.editor.bg,
      fg: vars.editor.fg,
    },
    focus: {
      bg: light(primitives.accent, 40),
      fg: vars.editor.fg,
    },
    hover: {
      bg: vars.transparent,
      fg: vars.editor.fg,
    },
    selected: {
      bg: vars.ui.bg,
      fg: vars.editor.fg,
    },
  },
}
