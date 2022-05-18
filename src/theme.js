export const vars = {
  accent: "#3982CC",
  border: "#D4D4D4",
  main: {
    fg: "#000000",
    bg: "#FFFFFF",
    selection: {
      bg: "B5D7FD",
    },
    inactive: {
      fg: "#8C8C8C",
    },
  },
  panel: {
    bg: "#F2F2F2",
    dimmed: {
      fg: "#383A42",
    },
  },
};

export const colors = {
  /// Base colors
  focusBorder: `${vars.accent}`,
  foreground: `${vars.main.fg}`,
  disabledForeground: `${vars.main.inactive.fg}`,
  "widget.shadow": `${vars.border}50`,
  "selection.background": `${vars.main.selection.bg}`,
  descriptionForeground: `${vars.main.inactive.fg}`,
  errorForeground: `#FFCCCC`,
  "icon.foreground": `${vars.panel.dimmed.fg}`,
  "sash.hoverBorder": `${vars.accent.bg}`,

  // better integration with OSX
  "titleBar.activeBackground": `${vars.panel.bg}`,
  "titleBar.border": `${vars.border}`,

  // make sidebar look more like intellij panels
  "sideBar.background": `${vars.main.bg}`,
  "sideBar.foreground": `${vars.panel.dimmed.fg}`,
  "sideBar.border": `${vars.border}`,
  "sideBarTitle.foreground": `${vars.panel.dimmed.fg}`,
  "sideBarSectionHeader.background": `${vars.panel.bg}`,
  "sideBarSectionHeader.border": `${vars.border}`,

  /// "Panels are shown below the editor area and contain views
  ///  like Output and Integrated Terminal."
  "panel.background": `${vars.panel.bg}`,
  "panelTitle.activeBorder": `${vars.accent}`,
  "panelSectionHeader.background": `${vars.panel.bg}`,
  "panelSectionHeader.border": `${vars.border}`,

  // bottom thin bar
  "activityBar.background": `${vars.panel.bg}`,
  "activityBar.border": `${vars.border}`,

  // editor & groups, top to bottom
  "editorGroup.border": `${vars.border}`,

  "editorGroupHeader.tabsBackground": `${vars.panel.bg}`,
  "editorGroupHeader.tabsBorder": `${vars.border}`,
  "editorGroupHeader.border": `${vars.border}`,

  "tab.border": `${vars.panel.bg}`,
  "tab.inactiveBackground": `${vars.panel.bg}`,
  "tab.activeBackground": `${vars.main.bg}`,
  "tab.activeBorder": "#3982CC",

  "breadcrumb.background": `${vars.panel.bg}`,
  "breadcrumbPicker.background": `${vars.main.bg}`,

  // Editor
  "editor.background": `${vars.main.bg}`,
  "editor.foreground": `${vars.main.fg}`,
  "editor.lineHighlightBackground": "#FCFAEE",
  "editorGutter.background": `${vars.panel.bg}`,
  "editorLineNumber.foreground": "#AEAEAE",
  "editorLineNumber.activeForeground": "#AEAEAE",

  "editorBracketMatch.border": "#E6E6E6",
  "editorBracketMatch.background": "#E6E6E6",
  "editorIndentGuide.background": "#E6E6E6",
  "editorIndentGuide.activeBackground": "#AEAEAE",
  "editorBracketPairGuide.activeBackground1": "#AEAEAE",

  // highlights the line with the folded code
  // "editor.foldBackground": `${data.panel.bg}`,

  /// "The Editor widget is shown in front of the editor content.
  ///  Examples are the Find/Replace dialog, the suggestion widget,
  ///  and the editor hover."
  // suggestions box similar to autocomplete
  "editorSuggestWidget.background": "#F7F7F7",
  "editorSuggestWidget.foreground": "#030303",
  "editorSuggestWidget.selectedForeground": "#000000",
  "editorSuggestWidget.selectedBackground": "#DFDFDF",
  "editorSuggestWidget.highlightForeground": "#3C71B1",
  "editorSuggestWidget.focusHighlightForeground": "#3C71B1",

  /// "Peek views are used to show references and declarations as a view inside the editor."
  "peekView.border": `${vars.border}`,
  "peekViewTitle.background": `${vars.panel.bg}`,

  // Lists similar to intellij panels
  "list.hoverBackground": "#D5D5D5",
  "list.inactiveSelectionBackground": "#EFFAE6",
  "list.inactiveSelectionForeground": "#383A42",
  "list.activeSelectionBackground": "#1974C2",
  "list.activeSelectionForeground": "#FFFFFF",

  // aothough terminal has it's own section
  "terminal.background": "#FFFFFF",
  "terminal.border": `${vars.border}`,
};
