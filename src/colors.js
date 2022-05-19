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
    bg: '#F2F2F2',
    // borders of interface areas
    border: '#D4D4D4',
    hover: {
      fg: '#00000',
      bg: '#DADADA',
    },
    active: {
      bg: '#BEBEBE',
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
      fg: '#8C8C8C',
    },
    folded: {
      bg: 'E9F5E6',
      fg: '414D41',
    },
    deleted: {
      bg: 'F0F0F0',
      fg: 'C3C3C3',
    },
    string: {
      fg: '#067D17',
    },
    number: {
      fg: '#067D17',
    },
    keyword: {
      fg: '#067D17',
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
}
