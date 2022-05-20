import { alpha, light } from './utils.js'
import { bp } from './blueprint.js'

/**
 * Basic primitives to expose
 */
const primitives = {
  unset: '#FF01FF',
  transparent: '#00000000',
  accent: bp.blue2,
  intent: bp.intent,
}

/**
 * Main real estate with editable content
 */
const editor = {
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

  folded: {
    bg: alpha(bp.light_gray1, 0.2),
  },

  // used in both editor and ruler (right side scrollbar)
  highlights: {
    text: { bg: alpha(bp.gray4, 0.2) },
    symbol_read: { bg: alpha(bp.green5, 0.2) }, // like map key string (???)
    symbol_write: { bg: alpha(bp.blue5, 0.2) }, // like map key symbol (???)
    search_others: { bg: alpha(bp.gold5, 0.2) }, // highlights all found results
    search_current: { bg: alpha(bp.green5, 0.2) }, // highlights current search result
    search_range: { bg: alpha(bp.green5, 0.1) }, // highlights current search result line
  },
}

/**
 * Supportive interface, mostly non-editable
 */
const ui = {
  fg: bp.dark_gray2,
  bg: bp.light_gray5,
  border: bp.alias.border,

  disabled: bp.alias.control.disabled,
  hover: { bg: bp.light_gray2 },
  icon: { fg: bp.alias.control.icon.fg },

  // shadow for menu elements
  shadow: bp.gray4,

  // active tab, toolbar tab, status bar item
  active: {
    bg: bp.white,
    fg: bp.black,
  },

  // like text inputs
  control: {
    bg: editor.bg,
    fg: editor.fg,
    border: bp.alias.border,
  },
  // (?) drag-n-drop feedback
  drop: { bg: bp.gray4 },
}

/**
 * Lists are somewhat between editor and ui
 * Some lists, like explorer or structure hold "editable" content
 * While some lists like quick search are essentially UI
 */
const list = {
  normal: {
    fg: editor.fg,
    bg: editor.bg,
  },
  // don't distinguish between active and inactive
  // it had a focus border anyway
  selected: {
    fg: editor.fg,
    bg: bp.alias.menu.active.bg,
  },
  focus: {
    fg: editor.fg,
    bg: editor.current_line.bg,
  },
  hover: {
    fg: editor.fg,
    bg: bp.alias.menu.hover.bg,
  },
}

/**
 * For the sake of consistency of colors, git vars are kept together
 */
const git = {
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
    added: alpha(bp.green4, 0.4),
    deleted: alpha(bp.red4),
    comment: alpha(bp.light_gray1),
  },
}

/**
 * Code style is also base on blueprint
 * Mostly work in progress
 */
const code = {
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
}

export const vars = {
  ...primitives,
  editor,
  ui,
  bp,
  list,
  git,
  code,
}
