import { alpha, light } from './utils.js'
import { bp } from './blueprint.js'

const primitives = {
  unset: '#FF01FF',
  transparent: '#00000000',

  accent: bp.blue2,

  intent: bp.intent,
}

export const vars = {
  bp,
  ...primitives,

  // main real estate with editable content
  editor: {
    fg: bp.black,
    bg: bp.white,

    link: {
      fg: bp.blue2,
    },

    current_line: {
      bg: alpha(bp.orange5, 0.1),
    },
    whitespace: {
      fg: bp.light_gray3,
    },

    selection: {
      bg: bp.alias.selection,
    },

    guides: {
      active: { fg: bp.gray5 },
      inactive: { fg: bp.light_gray2 },
    },

    gutter: {
      line_number: { fg: bp.gray3 },
    },

    highlights: {
      text: { bg: alpha(bp.gray4, 0.2) },
      symbol_read: { bg: alpha(bp.green5, 0.2) }, // like map key string (???)
      symbol_write: { bg: alpha(bp.blue5, 0.2) }, // like map key symbol (???)
      search_others: { bg: alpha(bp.gold5, 0.2) }, // highlights all found results
      search_current: { bg: alpha(bp.green5, 0.2) }, // highlights current search result
      search_range: { bg: alpha(bp.green5, 0.1) }, // highlights current search result line
    },
  },

  // supportive interface, mostly non-editable
  ui: {
    fg: bp.black,
    bg: bp.light_gray5,
    border: bp.alias.border,

    disabled: bp.alias.control.disabled,

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
      fg: bp.alias.control.icon.fg,
      bg: '#383A42',
    },
    control: {
      border: '#C4C4C4',
    },
    shadow: {
      bg: '#D4D4D488',
    },
  },

  git: {
    labels: {
      modified: bp.blue2,
      deleted: bp.red2,
      untracked: bp.orange3,
      ignored: bp.gray4,
      conflict: bp.red2,
    },
    ruler: {
      modified: bp.blue4,
      added: bp.green4,
      deleted: bp.red4,
    },
    gutter: {
      modified: alpha(bp.blue4),
      added: alpha(bp.green4),
      deleted: alpha(bp.red4),
      comment: alpha(bp.light_gray1),
    },
  },

  code: {
    default: {
      fg: bp.black,
    },
    known: {
      fg: bp.gray2,
    },
    comment: {
      fg: bp.gray4,
    },
    string: {
      fg: bp.green3,
    },
    number: {
      fg: bp.violet2,
    },
    keyword: {
      fg: bp.blue2,
    },
    function: {
      fg: bp.indigo2,
    },
    invalid: {
      fg: bp.intent.danger.fg,
    },
  },
}

/**
 * Given more descriptive names
 */
export const aliases = {
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
