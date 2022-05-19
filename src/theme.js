import { vars, aliases } from './colors.js'
import { alpha } from './utils.js'

/**
 * The contrast colors are typically only set for high contrast themes.
 * If set, they add an additional border around items across the UI to increase the contrast.
 * @see https://code.visualstudio.com/api/references/theme-color#contrast-colors
 */
const contrast_colors = {
  // An extra border around active elements to separate them from others for greater contrast.
  // contrastActiveBorder: `${vars.unset}`,
  // An extra border around elements to separate them from others for greater contrast.
  // contrastBorder: `${vars.unset}`,
}

/**
 * Base Colors
 * @see https://code.visualstudio.com/api/references/theme-color#base-colors
 */
const base_colors = {
  // Overall border color for focused elements. This color is only used if not overridden by a component.
  focusBorder: `${vars.accent}`,
  // Overall foreground color. This color is only used if not overridden by a component.
  foreground: `${vars.editor.fg}`,
  // Overall foreground for disabled elements. This color is only used if not overridden by a component.
  disabledForeground: `${vars.editor.inactive.fg}`,
  // Shadow color of widgets such as Find/Replace inside the editor.
  'widget.shadow': `${vars.ui.border}50`,
  // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
  'selection.background': `${vars.editor.selection.bg}`,
  // Foreground color for description text providing additional information, for example for a label.
  descriptionForeground: `${vars.editor.inactive.fg}`,
  // Overall foreground color for error messages (this color is only used if not overridden by a component).
  errorForeground: `#FFCCCC`,
  // The default color for icons in the workbench.
  'icon.foreground': `${vars.ui.icon.fg}`,
  // The hover border color for draggable sashes.
  'sash.hoverBorder': `${vars.accent}`,
}

/**
 * The theme colors for VS Code window border.
 * @see https://code.visualstudio.com/api/references/theme-color#window-border
 */
const window_border = {
  // make border transparent
  // Border color for the active (focused) window.
  // "window.activeBorder": `#FFFFFF00`,
  // Border color for the inactive (unfocused) windows.
  // "window.inactiveBorder": `#FFFFFF00`,
}

/**
 * Colors inside a text document, such as the welcome page.
 * @see https://code.visualstudio.com/api/references/theme-color#text-colors
 */
const text_colors = {
  // // Background color for block quotes in text.
  // "textBlockQuote.background": `${vars.unset}`,
  // // Border color for block quotes in text.
  // "textBlockQuote.border": `${vars.unset}`,
  // // Background color for code blocks in text.
  // "textCodeBlock.background": `${vars.unset}`,
  // // Foreground color for active links in text.
  // "textLink.activeForeground": `${vars.unset}`,
  // // Foreground color for links in text.
  // "textLink.foreground": `${vars.unset}`,
  // // Foreground color for preformatted text segments.
  // "textPreformat.foreground": `${vars.unset}`,
  // // Color for text separators.
  // "textSeparator.foreground": `${vars.unset}`,
}

/**
 * Action colors
 * A set of colors to control the interactions with actions across the workbench.
 * @see https://code.visualstudio.com/api/references/theme-color#action-colors
 */
const action_colors = {
  // Toolbar background when hovering over actions using the mouse
  'toolbar.hoverBackground': `${vars.ui.hover.bg}`,
  // Toolbar outline when hovering over actions using the mouse
  'toolbar.hoverOutline': `${vars.transparent}`,
  // Toolbar background when holding the mouse over actions
  'toolbar.activeBackground': `${vars.ui.active.bg}`,
}

/**
 * Button control
 * A set of colors for button widgets such as Open Folder button in the Explorer of a new window.
 * @see https://code.visualstudio.com/api/references/theme-color#button-control
 */
const button_control = {
  // Button background color.
  'button.background': `${vars.accent}`,
  // Button foreground color.
  'button.foreground': `${vars.editor.bg}`,
  // Button background color when hovering.
  'button.hoverBackground': `${vars.accent}`,
}

/**
 * A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the Dropdown control is not used on macOS currently.
 * @see https://code.visualstudio.com/api/references/theme-color#dropdown-control
 */
const dropdown_control = {
  // Dropdown background.
  'dropdown.background': `${vars.editor.bg}`,
  // Dropdown list background
  'dropdown.listBackground': `${vars.editor.bg}`,
  // Dropdown border
  'dropdown.border': `${vars.ui.control.border}`,
  // Dropdown foreground
  'dropdown.foreground': `${vars.editor.fg}`,
}

/**
 * Colors for input controls such as in the Search view or the Find/Replace dialog.
 * @see https://code.visualstudio.com/api/references/theme-color#input-control
 */
const input_control = {
  // Input box background.
  'input.background': `${vars.editor.bg}`,
  // Input box border.
  'input.border': `${vars.ui.control.border}`,
  // Input box foreground.
  'input.foreground': `${vars.editor.fg}`,
  // Input box foreground color for placeholder text.
  'input.placeholderForeground': `${vars.editor.inactive.fg}`,
  // Border color of activated options in input fields.
  'inputOption.activeBorder': `${vars.accent}`,
  // Input validation background color for error severity.
  'inputValidation.errorBackground': `${vars.danger.bg}`,
  // Input validation border color for error severity.
  'inputValidation.errorBorder': `${vars.transparent}`,
  // Input validation background color for information severity.
  'inputValidation.infoBackground': `${vars.info.bg}`,
  // Input validation border color for information severity.
  'inputValidation.infoBorder': `${vars.transparent}`,
  // Input validation background color for information warning.
  'inputValidation.warningBackground': `${vars.warning.bg}`,
  // Input validation border color for warning severity.
  'inputValidation.warningBorder': `${vars.transparent}`,
}

/**
 * Scroll Bar Control
 * @see
 */
const scrollbar_control = {
  // Scroll Bar shadow to indicate that the view is scrolled.
  'scrollbar.shadow': `${vars.ui.border}`,
  // Slider background color when active.
  'scrollbarSlider.activeBackground': `${vars.accent}88`,
  // Slider background color.
  'scrollbarSlider.background': `${vars.ui.hover.bg}88`,
  // Slider background color when hovering.
  'scrollbarSlider.hoverBackground': `${vars.ui.hover.bg}88`,
}

/**
 * Badges are small information labels, for example, search results count.
 * @see https://code.visualstudio.com/api/references/theme-color#badge
 */
const badge = {
  // Badge foreground color.
  'badge.foreground': `${vars.editor.bg}`,
  // Badge background color.
  'badge.background': `${vars.accent}`,
}

/**
 * @see https://code.visualstudio.com/api/references/theme-color#progress-bar
 */
const progress_bar = {
  // Background color of the progress bar shown for long running operations.
  'progressBar.background': `${vars.accent}`,
}

/**
 * Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
 * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
 */
const lists_and_trees = {
  // // List/Tree background color for the selected item when the list/tree is active.
  // "list.activeSelectionBackground": `${vars.unset}`,
  // // List/Tree foreground color for the selected item when the list/tree is active.
  // "list.activeSelectionForeground": `${vars.unset}`,
  // // List/Tree background color for the focused item when the list/tree is active.
  // "list.focusBackground": `${vars.unset}`,
  // // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
  // "list.focusForeground": `${vars.unset}`,
  // // List/Tree background when hovering over items using the mouse.
  // "list.hoverBackground": `${vars.unset}`,
  // // List/Tree foreground when hovering over items using the mouse.
  // "list.hoverForeground": `${vars.unset}`,
  // // List/Tree background color for the selected item when the list/tree is inactive.
  // "list.inactiveSelectionBackground": `${vars.unset}`,
  // // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
  // "list.inactiveSelectionForeground": `${vars.unset}`,
  // // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
  // "list.inactiveFocusBackground": `${vars.unset}`,
  // // List/Tree foreground color for invalid items, for example an unresolved root in explorer.
  // "list.invalidItemForeground": `${vars.unset}`,
  // // List/Tree foreground color of the match highlights when searching inside the list/tree.
  // "list.highlightForeground": `${vars.unset}`,
  // // List/Tree drag and drop background when moving items around using the mouse.
  // "list.dropBackground": `${vars.unset}`,
}

/**
 * The Activity Bar is displayed either on the far left or right of the workbench and
 * allows fast switching between views of the Side Bar.
 * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
 */
const activity_bar = {
  // Activity Bar background color.
  'activityBar.background': `${vars.ui.bg}`,
  // Drag and drop feedback color for the Activity Bar items.
  //???// "activityBar.dropBackground": `${vars.unset}`,
  // Activity bar foreground color (for example used for the icons).
  'activityBar.foreground': `${vars.editor.fg}`,
  // Activity Bar border color with the Side Bar.
  'activityBar.border': `${vars.ui.border}`,
  // Activity notification badge background color.
  'activityBarBadge.background': badge['badge.background'],
  // Activity notification badge foreground color.
  'activityBarBadge.foreground': badge['badge.foreground'],
}

/**
 * The Side Bar contains views like the Explorer and Search.
 *
 * There is an extension that helps to fill side bar header:
 * @see https://marketplace.visualstudio.com/items?itemName=iocave.customize-ui
 * After installing, put following in your settings:
 * "customizeUI.stylesheet": {
 *   "div.composite.title": "background-color: #F2F2F2; border-bottom: 1px solid #D4D4D4;",
 *   "div.quick-input-widget": "border: 1px solid #D4D4D4;"
 * }
 *
 * @see https://code.visualstudio.com/api/references/theme-color#side-bar
 */
const side_bar = {
  // Side Bar background color.
  'sideBar.background': `${vars.editor.bg}`,
  // Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
  'sideBar.foreground': `${vars.editor.fg}`,
  // Side Bar border color on the side separating the editor.
  'sideBar.border': `${vars.ui.border}`,
  // Drag and drop feedback color for the side bar sections.
  // The color should have transparency so that the side bar sections can still shine through.
  // The side bar is the container for views like explorer and search.
  'sideBar.dropBackground': `${vars.ui.shadow.bg}`,
  // Side Bar title foreground color.
  'sideBarTitle.foreground': `${vars.editor.fg}`,
  // Side Bar section header background color.
  'sideBarSectionHeader.background': `${vars.ui.bg}`,
  // Side Bar section header foreground color.
  'sideBarSectionHeader.foreground': `${vars.editor.fg}`,
}

//TODO: minimap
/**
 * @see https://code.visualstudio.com/api/references/theme-color#minimap
 */
const minimap = {}

/**
 * Editor Groups are the containers of editors.
 * There can be many editor groups.
 * A Tab is the container of an editor.
 * Multiple Tabs can be opened in one editor group.
 * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
 */
const editor_groups_and_tabs = {
  // Color to separate multiple editor groups from each other.
  'editorGroup.border': `${vars.ui.border}`,
  // Background color when dragging editors around.
  'editorGroup.dropBackground': `${vars.ui.shadow.bg}`,

  // Background color of the editor group title header when Tabs are disabled (set "workbench.editor.showTabs": false).
  'editorGroupHeader.noTabsBackground': `${vars.ui.bg}`,
  // Background color of the Tabs container.
  'editorGroupHeader.tabsBackground': `${vars.ui.bg}`,
  // Border color of the editor group title header when tabs are enabled.
  'editorGroupHeader.tabsBorder': `${vars.ui.border}`,

  // Active Tab background color.
  'tab.activeBackground': `${vars.editor.bg}`,
  // Active Tab foreground color in an active group.
  'tab.activeForeground': `${vars.editor.fg}`,
  // Bottom border for the active tab.
  'tab.activeBorder': `${vars.accent}`,

  // Border to separate Tabs from each other.
  'tab.border': `${vars.transparent}`,
  // Bottom border for the active tab in an inactive editor group.
  'tab.unfocusedActiveBorder': `${vars.ui.border}`,
  // Inactive Tab background color.
  'tab.inactiveBackground': `${vars.transparent}`,
  // Inactive Tab foreground color in an active group.
  'tab.inactiveForeground': `${vars.editor.fg}`,
  // Active tab foreground color in an inactive editor group.
  'tab.unfocusedActiveForeground': `${vars.editor.fg}`,
  // Inactive tab foreground color in an inactive editor group.
  'tab.unfocusedInactiveForeground': `${vars.editor.fg}`,
  // Tab background color when hovering
  'tab.hoverBackground': `${vars.ui.hover.bg}`,
  // Tab background color in an unfocused group when hovering
  'tab.unfocusedHoverBackground': `${vars.ui.hover.bg}`,
  // Border to highlight tabs when hovering
  'tab.hoverBorder': `${vars.transparent}`,
  // Border to highlight tabs in an unfocused group when hovering
  'tab.unfocusedHoverBorder': `${vars.transparent}`,
}

/**
 * Breadcrumbs colors
 * The theme colors for breadcrumbs navigation
 */
const breadcrumbs = {
  // Color of breadcrumb items.
  'breadcrumb.foreground': `${vars.ui.icon.fg}`,
  // Background color of breadcrumb items.
  'breadcrumb.background': `${vars.ui.bg}`,
  // Color of focused breadcrumb items.
  'breadcrumb.focusForeground': `${vars.editor.fg}`,
  // Color of selected breadcrumb items.
  'breadcrumb.activeSelectionForeground': `${vars.ui.active.bg}`,
  // Background color of breadcrumb item picker.
  'breadcrumbPicker.background': `${vars.ui.bg}`,
}

/**
 * The most prominent editor colors are the token colors used for syntax highlighting and are based
 * on the language grammar installed. These colors are defined by the Color Theme but
 * can also be customized with the editor.tokenColorCustomizations setting.
 * See Customizing a Color Theme for details on updating a Color Theme and the available token types.
 * @see https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme
 * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
 */
const editor_colors = {
  // Editor background color.
  'editor.background': `${vars.editor.bg}`,
  // Editor default foreground color.
  'editor.foreground': `${vars.editor.fg}`,
  // Color of editor line numbers.
  'editorLineNumber.foreground': `${vars.editor.inactive.fg}`,
  // Color of the active editor line number.
  'editorLineNumber.activeForeground': `${vars.editor.inactive.fg}`,
  // The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
  'editorCursor.background': `${vars.accent}`,
  // Color of the editor cursor.
  'editorCursor.foreground': `${vars.accent}`,

  /**
   * Selection colors are visible when selecting one or more characters.
   * In addition to the selection also all regions with the same content are highlighted.
   */
  // Color of the editor selection.
  'editor.selectionBackground': `${alpha(vars.editor.selection.bg, 0.5)}`,
  // Color of the selected text for high contrast.
  'editor.selectionForeground': `${vars.editor.fg}`,
  // Color of the selection in an inactive editor.
  // The color must not be opaque to not hide underlying decorations.
  'editor.inactiveSelectionBackground': `${alpha(vars.editor.selection.bg, 0.3)}`,
  // Color for regions with the same content as the selection.
  // The color must not be opaque to not hide underlying decorations.
  'editor.selectionHighlightBackground': `${alpha(vars.editor.selection.bg, 0.3)}`,
  // Border color for regions with the same content as the selection.
  'editor.selectionHighlightBorder': `${vars.transparent}`,

  /**
   * Word highlight colors are visible when the cursor is inside a symbol or a word.
   * Depending on the language support available for the file type, all matching references
   * and declarations are highlighted and read and write accesses get different colors.
   * If document symbol language support is not available, this falls back to word highlighting.
   */
  // Background color of a symbol during read-access, for example when reading a variable.
  // The color must not be opaque to not hide underlying decorations.
  'editor.wordHighlightBackground': `${vars.editor.highlights.symbol_read.bg}`,
  // Border color of a symbol during read-access, for example when reading a variable.
  'editor.wordHighlightBorder': `${vars.transparent}`,
  // Background color of a symbol during write-access, for example when writing to a variable.
  // The color must not be opaque to not hide underlying decorations.
  'editor.wordHighlightStrongBackground': `${vars.editor.highlights.symbol_write.bg}`,
  // Border color of a symbol during write-access, for example when writing to a variable.
  'editor.wordHighlightStrongBorder': `${vars.transparent}`,

  /**
   * Find colors depend on the current find string in the Find/Replace dialog.
   */
  // Color of the current search match.
  'editor.findMatchBackground': `${vars.editor.highlights.search_current.bg}`,
  // Color of the other search matches.
  // The color must not be opaque to not hide underlying decorations.
  'editor.findMatchHighlightBackground': `${alpha(vars.editor.highlights.search_others.bg)}`,
  // Color the range limiting the search (Enable 'Find in Selection' in the find widget).
  // The color must not be opaque to not hide underlying decorations.
  'editor.findRangeHighlightBackground': `${alpha(vars.editor.highlights.search_others.bg)}`,
  // Border color of the current search match.
  'editor.findMatchBorder': `${vars.transparent}`,
  // Border color of the other search matches.
  'editor.findMatchHighlightBorder': `${vars.transparent}`,
  // Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
  'editor.findRangeHighlightBorder': `${vars.transparent}`,

  /**
   * Search Editor colors highlight results in a Search Editor.
   * This can be configured separately from other find matches in order to better differentiate
   * between different classes of match in the same editor.
   */
  // Color of the editor's results.
  'searchEditor.findMatchBackground': `${vars.editor.highlights.search_current.bg}`,
  // Border color of the editor's results.
  'searchEditor.findMatchBorder': `${vars.transparent}`,
  // Search editor text input box border.
  'searchEditor.textInputBorder': `${vars.transparent}`,

  // Highlight below the word for which a hover is shown. The color must not be opaque to not hide underlying decorations.
  'editor.hoverHighlightBackground': `${vars.transparent}`,

  /**
   * The current line is typically shown as either background highlight or a border (not both).
   */
  // Background color for the highlight of line at the cursor position.
  'editor.lineHighlightBackground': `${vars.editor.current_line.bg}`,
  // Background color for the border around the line at the cursor position.
  'editor.lineHighlightBorder': `${vars.transparent}`,

  /**
   * The link color is visible when clicking on a link.
   */
  // Color of active links.
  'editorLink.activeForeground': `${vars.accent}`,

  // Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features.
  // Highlights line background when moving between find/replace results
  // The color must not be opaque to not hide underlying decorations.
  'editor.rangeHighlightBackground': `${alpha(vars.editor.highlights.search_others.bg, 0.2)}`,
  // Background color of the border around highlighted ranges.
  'editor.rangeHighlightBorder': `${vars.transparent}`,

  /**
   * To see the editor white spaces, enable Toggle *Render Whitespace*.
   */
  // Color of whitespace characters in the editor.
  'editorWhitespace.foreground': `${vars.editor.whitespace.fg}`,

  /**
   * To see the editor indent guides, set
   * "editor.guides.indentation": true,
   * "editor.guides.highlightActiveIndentation": true
   */
  // Color of the editor indentation guides.
  'editorIndentGuide.background': `${vars.editor.guides.inactive.fg}`,
  'editorIndentGuide.activeBackground': `${vars.editor.guides.active.fg}`,

  /**
   * To see the editor inline hints, set "editor.inlineSuggest.enabled": true.
   */
  // Background color of inline hints.
  'editorInlayHint.background': `${vars.unset}`,
  // // Foreground color of inline hints.
  // "editorInlayHint.foreground": `${vars.unset}`,
  // // Foreground color of inline hints for types
  // "editorInlayHint.typeForeground": `${vars.unset}`,
  // // Background color of inline hints for types
  // "editorInlayHint.typeBackground": `${vars.unset}`,
  // // Foreground color of inline hints for parameters
  // "editorInlayHint.parameterForeground": `${vars.unset}`,
  // // Background color of inline hints for parameters
  // "editorInlayHint.parameterBackground": `${vars.unset}`,

  // Color of the editor rulers.
  'editorRuler.foreground': `${vars.editor.guides.inactive.fg}`,

  /**
   * Appears as an insert between code lines with extra metadata
   */
  // Foreground color of an editor CodeLens.
  'editorCodeLens.foreground': `${vars.symbols.comment.fg}`,

  /**
   * Lightbulb
   */
  // The color used for the lightbulb actions icon.
  'editorLightBulb.foreground': `${vars.info.fg}`,

  // The color used for the lightbulb auto fix actions icon.
  'editorLightBulbAutoFix.foreground': `${vars.success.fg}`,

  // Background color behind matching brackets.
  'editorBracketMatch.background': `${vars.editor.guides.active.fg}`,
  // Color for matching brackets boxes.
  'editorBracketMatch.border': `${vars.transparent}`,

  //TODO: Bracket pair colorization:
  //TODO: Bracket pair guides:

  // Background color for folded ranges.
  // The color must not be opaque so as not to hide underlying decorations.
  // NOTE: this overlaps with the gutter border
  'editor.foldBackground': `${vars.symbols.comment.fg}11`,

  // /**
  //  * This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.
  //  */
  // // Color of the overview ruler border.
  // "editorOverviewRuler.border": `${vars.ui.border}`,

  // Overview ruler marker color for find matches.
  // The color must not be opaque to not hide underlying decorations.
  'editorOverviewRuler.findMatchForeground': `${vars.editor.highlights.search_others.bg}`,

  // Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features.
  // The color must not be opaque to not hide underlying decorations.
  'editorOverviewRuler.rangeHighlightForeground': `${vars.editor.highlights.search_others.bg}`,

  // Overview ruler marker color for selection highlights.
  // The color must not be opaque to not hide underlying decorations.
  'editorOverviewRuler.selectionHighlightForeground': `${vars.editor.highlights.text.bg}`,

  // Overview ruler marker color for symbol highlights.
  // The color must not be opaque to not hide underlying decorations.
  // TODO: this is too dim
  'editorOverviewRuler.wordHighlightForeground': `${vars.editor.highlights.symbol_read.bg}`,

  // Overview ruler marker color for write-access symbol highlights.
  // The color must not be opaque to not hide underlying decorations.
  // TODO: this is too dim
  'editorOverviewRuler.wordHighlightStrongForeground': `${vars.editor.highlights.symbol_write.bg}`,

  // Overview ruler marker color for modified content.
  'editorOverviewRuler.modifiedForeground': `${aliases.modified.bg}`,
  // Overview ruler marker color for added content.
  'editorOverviewRuler.addedForeground': `${aliases.added.bg}`,
  // Overview ruler marker color for deleted content.
  'editorOverviewRuler.deletedForeground': `${aliases.deleted.bg}`,

  // Overview ruler marker color for errors.
  'editorOverviewRuler.errorForeground': `${vars.danger.fg}`,
  // Overview ruler marker color for warnings.
  'editorOverviewRuler.warningForeground': `${vars.warning.fg}`,
  // Overview ruler marker color for infos.
  'editorOverviewRuler.infoForeground': `${vars.info.fg}`,

  // Overview ruler marker color for matching brackets.
  'editorOverviewRuler.bracketMatchForeground': `${vars.editor.guides.active.fg}`,

  /**
   * Seems like enabling either border or background disables the squiggles
   */
  // Foreground color of error squiggles in the editor.
  'editorError.foreground': `${vars.danger.fg}88`,
  // Border color of error squiggles in the editor.
  // "editorError.border": `${vars.danger.fg}`,
  // Background color of error text in the editor.
  // The color must not be opaque so as not to hide underlying decorations.
  'editorError.background': `${vars.danger.bg}55`,
  // ---
  // Foreground color of warning squiggles in the editor.
  'editorWarning.foreground': `${vars.warning.fg}88`,
  // Border color of warning squiggles in the editor.
  // "editorWarning.border": `${vars.warning.bg}`,
  // ---
  // Foreground color of info squiggles in the editor.
  'editorInfo.foreground': `${vars.info.fg}88`,
  // Border color of info squiggles in the editor.
  // "editorInfo.border": `${vars.info.bg}`,
  // ---
  // Foreground color of hints in the editor.
  'editorHint.foreground': `${vars.hint.fg}88`,
  // Border color of hints in the editor.
  // "editorHint.border": `${vars.hint.fg}`,

  // Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
  'editorGutter.background': `${vars.ui.bg}`,
  // Editor gutter background color for lines that are modified.
  'editorGutter.modifiedBackground': `${aliases.modified.fg}`,
  // Editor gutter background color for lines that are added.
  'editorGutter.addedBackground': `${aliases.added.fg}`,
  // Editor gutter background color for lines that are deleted.
  'editorGutter.deletedBackground': `${aliases.deleted.fg}`,
}

/**
 * Follows everything from Theme Color guide
 * @see https://code.visualstudio.com/api/references/theme-color
 * @see https://gist.github.com/AndreasBackx/ab5c7df0ef214a798cfa8fdeaf59197f
 */
export const colors = {
  ...contrast_colors,
  ...base_colors,
  ...window_border,
  ...text_colors,
  ...action_colors,
  ...button_control,
  ...dropdown_control,
  ...input_control,
  ...scrollbar_control,
  ...badge,
  ...progress_bar,
  ...lists_and_trees,
  ...activity_bar,
  ...side_bar,
  ...editor_groups_and_tabs,
  ...breadcrumbs,
  ...editor_colors,

  // //
  // // Diff Editor Colors
  // //
  // // Background color for text that got inserted. The color must not be opaque to not hide underlying decorations.
  // "diffEditor.insertedTextBackground": `${vars.unset}`,
  // // Outline color for the text that got inserted.
  // "diffEditor.insertedTextBorder": `${vars.unset}`,
  // // Background color for text that got removed. The color must not be opaque to not hide underlying decorations.
  // "diffEditor.removedTextBackground": `${vars.unset}`,
  // // Outline color for text that got removed.
  // "diffEditor.removedTextBorder": `${vars.unset}`,

  // //
  // // Editor Widget Colors
  // //
  // // Background color of editor widgets, such as Find/Replace.
  // "editorWidget.background": `${vars.unset}`,
  // // Border color of the editor widget unless the widget does not contain a border or defines its own border color.
  // "editorWidget.border": `${vars.unset}`,
  // // Background color of the suggestion widget.
  // "editorSuggestWidget.background": `${vars.unset}`,
  // // Border color of the suggestion widget.
  // "editorSuggestWidget.border": `${vars.unset}`,
  // // Foreground color of the suggestion widget.
  // "editorSuggestWidget.foreground": `${vars.unset}`,
  // // Color of the match highlights in the suggestion widget.
  // "editorSuggestWidget.highlightForeground": `${vars.unset}`,
  // // Background color of the selected entry in the suggestion widget.
  // "editorSuggestWidget.selectedBackground": `${vars.unset}`,
  // // Background color of the editor hover.
  // "editorHoverWidget.background": `${vars.unset}`,
  // // Border color of the editor hover.
  // "editorHoverWidget.border": `${vars.unset}`,
  // //
  // // Exception widget background color.
  // "debugExceptionWidget.background": `${vars.unset}`,
  // // Exception widget border color.
  // "debugExceptionWidget.border": `${vars.unset}`,
  // //
  // // Editor marker navigation widget background.
  // "editorMarkerNavigation.background": `${vars.unset}`,
  // // Editor marker navigation widget error color.
  // "editorMarkerNavigationError.background": `${vars.unset}`,
  // // Editor marker navigation widget warning color.
  // "editorMarkerNavigationWarning.background": `${vars.unset}`,
  // // Editor marker navigation widget info color.
  // "editorMarkerNavigationInfo.background": `${vars.unset}`,

  // //
  // // Peek View Colors
  // //
  // // Color of the peek view borders and arrow.
  // "peekView.border": `${vars.unset}`,
  // // Background color of the peek view editor.
  // "peekViewEditor.background": `${vars.unset}`,
  // // Background color of the gutter in the peek view editor.
  // "peekViewEditorGutter.background": `${vars.unset}`,
  // // Match highlight color in the peek view editor.
  // "peekViewEditor.matchHighlightBackground": `${vars.unset}`,
  // // Background color of the peek view result list.
  // "peekViewResult.background": `${vars.unset}`,
  // // Foreground color for file nodes in the peek view result list.
  // "peekViewResult.fileForeground": `${vars.unset}`,
  // // Foreground color for line nodes in the peek view result list.
  // "peekViewResult.lineForeground": `${vars.unset}`,
  // // Match highlight color in the peek view result list.
  // "peekViewResult.matchHighlightBackground": `${vars.unset}`,
  // // Background color of the selected entry in the peek view result list.
  // "peekViewResult.selectionBackground": `${vars.unset}`,
  // // Foreground color of the selected entry in the peek view result list.
  // "peekViewResult.selectionForeground": `${vars.unset}`,
  // // Background color of the peek view title area.
  // "peekViewTitle.background": `${vars.unset}`,
  // // Color of the peek view title info.
  // "peekViewTitleDescription.foreground": `${vars.unset}`,
  // // Color of the peek view title.
  // "peekViewTitleLabel.foreground": `${vars.unset}`,

  // //
  // // Merge Conflicts
  // //
  // // Current header background in inline merge conflicts. The color must not be opaque to not hide underlying decorations.
  // "merge.currentHeaderBackground": `${vars.unset}`,
  // // Current content background in inline merge conflicts. The color must not be opaque to not hide underlying decorations.
  // "merge.currentContentBackground": `${vars.unset}`,
  // // Incoming header background in inline merge conflicts. The color must not be opaque to not hide underlying decorations.
  // "merge.incomingHeaderBackground": `${vars.unset}`,
  // // Incoming content background in inline merge conflicts. The color must not be opaque to not hide underlying decorations.
  // "merge.incomingContentBackground": `${vars.unset}`,
  // // Border color on headers and the splitter in inline merge conflicts.
  // "merge.border": `${vars.unset}`,
  // // Common ancestor content background in inline merge-conflicts. The color must not be opaque to not hide underlying decorations.
  // "merge.commonContentBackground": `${vars.unset}`,
  // // Common ancestor header background in inline merge-conflicts. The color must not be opaque to not hide underlying decorations.
  // "merge.commonHeaderBackground": `${vars.unset}`,
  // // Current overview ruler foreground for inline merge conflicts.
  // "editorOverviewRuler.currentContentForeground": `${vars.unset}`,
  // // Incoming overview ruler foreground for inline merge conflicts.
  // "editorOverviewRuler.incomingContentForeground": `${vars.unset}`,
  // // Common ancestor overview ruler foreground for inline merge conflicts.
  // "editorOverviewRuler.commonContentForeground": `${vars.unset}`,

  // //
  // // Panel Colors
  // //
  // // Panel background color.
  'panel.background': `${vars.editor.bg}`,
  // // Panel border color to separate the panel from the editor.
  'panel.border': `${vars.ui.border}`,
  // // Drag and drop feedback color for the panel title items. The color should have transparency so that the panel entries can still shine through.
  'panel.dropBackground': `${vars.ui.shadow.bg}`,
  // // Border color for the active panel title.
  // "panelTitle.activeBorder": `${vars.unset}`,
  // // Title color for the active panel.
  // 'panelTitle.activeForeground': `${vars.unset}`,
  // // Title color for the inactive panel.
  // 'panelTitle.inactiveForeground': `${vars.unset}`,

  // //
  // // Status Bar Colors
  // //
  // // Standard Status Bar background color.
  // "statusBar.background": `${vars.unset}`,
  // // Status Bar foreground color.
  // "statusBar.foreground": `${vars.unset}`,
  // // Status Bar border color separating the Status Bar and editor.
  // "statusBar.border": `${vars.unset}`,
  // // Status Bar background color when a program is being debugged.
  // "statusBar.debuggingBackground": `${vars.unset}`,
  // // Status Bar foreground color when a program is being debugged.
  // "statusBar.debuggingForeground": `${vars.unset}`,
  // // Status Bar border color separating the Status Bar and editor when a program is being debugged.
  // "statusBar.debuggingBorder": `${vars.unset}`,
  // // Status Bar foreground color when no folder is opened.
  // "statusBar.noFolderForeground": `${vars.unset}`,
  // // Status Bar background color when no folder is opened.
  // "statusBar.noFolderBackground": `${vars.unset}`,
  // // Status Bar border color separating the Status Bar and editor when no folder is opened.
  // "statusBar.noFolderBorder": `${vars.unset}`,
  // // Status Bar item background color when clicking.
  // "statusBarItem.activeBackground": `${vars.unset}`,
  // // Status Bar item background color when hovering.
  // "statusBarItem.hoverBackground": `${vars.unset}`,
  // // Status Bar prominent items background color. Prominent items stand out from other Status Bar entries to indicate importance. Change mode Toggle Tab Key Moves Focus from command palette to see an example.
  // "statusBarItem.prominentBackground": `${vars.unset}`,
  // // Status Bar prominent items background color when hovering. Prominent items stand out from other Status Bar entries to indicate importance. Change mode Toggle Tab Key Moves Focus from command palette to see an example.
  // "statusBarItem.prominentHoverBackground": `${vars.unset}`,

  // //
  // // Title Bar Colors (macOS)
  // //
  // // Title Bar background when the window is active.
  // "titleBar.activeBackground": `${vars.unset}`,
  // // Title Bar foreground when the window is active.
  // "titleBar.activeForeground": `${vars.unset}`,
  // // Title Bar background when the window is inactive.
  // "titleBar.inactiveBackground": `${vars.unset}`,
  // // Title Bar foreground when the window is inactive.
  // "titleBar.inactiveForeground": `${vars.unset}`,
  // // Title bar border color.
  // "titleBar.border": `${vars.unset}`,

  // //
  // // Notification Colors
  // //
  // // Notification Center border color.
  // "notificationCenter.border": `${vars.unset}`,
  // // Notification Center header foreground color.
  // "notificationCenterHeader.foreground": `${vars.unset}`,
  // // Notification Center header background color.
  // "notificationCenterHeader.background": `${vars.unset}`,
  // // Notification toast border color.
  // "notificationToast.border": `${vars.unset}`,
  // // Notification foreground color.
  // "notifications.foreground": `${vars.unset}`,
  // // Notification background color.
  // "notifications.background": `${vars.unset}`,
  // // Notification border color separating from other notifications in the Notification Center.
  // "notifications.border": `${vars.unset}`,
  // // Notification links foreground color.
  // "notificationLink.foreground": `${vars.unset}`,

  // //
  // // Extensions
  // //
  // // Extension view button foreground color (for example Install button).
  // "extensionButton.prominentForeground": `${vars.unset}`,
  // // Extension view button background color.
  // "extensionButton.prominentBackground": `${vars.unset}`,
  // // Extension view button background hover color.
  // "extensionButton.prominentHoverBackground": `${vars.unset}`,

  // //
  // // Quick Picker
  // //
  // // Quick picker (Quick Open) color for grouping borders.
  // "pickerGroup.border": `${vars.unset}`,
  // // Quick picker (Quick Open) color for grouping labels.
  // "pickerGroup.foreground": `${vars.unset}`,

  // //
  // // Integrated Terminal Colors
  // //
  // // The background of the Integrated Terminal's viewport.
  // "terminal.background": `${vars.unset}`,
  // // The default foreground color of the Integrated Terminal.
  // "terminal.foreground": `${vars.unset}`,
  // // 'Black' ANSI color in the terminal.
  // "terminal.ansiBlack": `${vars.unset}`,
  // // 'Blue' ANSI color in the terminal.
  // "terminal.ansiBlue": `${vars.unset}`,
  // // 'BrightBlack' ANSI color in the terminal.
  // "terminal.ansiBrightBlack": `${vars.unset}`,
  // // 'BrightBlue' ANSI color in the terminal.
  // "terminal.ansiBrightBlue": `${vars.unset}`,
  // // 'BrightCyan' ANSI color in the terminal.
  // "terminal.ansiBrightCyan": `${vars.unset}`,
  // // 'BrightGreen' ANSI color in the terminal.
  // "terminal.ansiBrightGreen": `${vars.unset}`,
  // // 'BrightMagenta' ANSI color in the terminal.
  // "terminal.ansiBrightMagenta": `${vars.unset}`,
  // // 'BrightRed' ANSI color in the terminal.
  // "terminal.ansiBrightRed": `${vars.unset}`,
  // // 'BrightWhite' ANSI color in the terminal.
  // "terminal.ansiBrightWhite": `${vars.unset}`,
  // // 'BrightYellow' ANSI color in the terminal.
  // "terminal.ansiBrightYellow": `${vars.unset}`,
  // // 'Cyan' ANSI color in the terminal.
  // "terminal.ansiCyan": `${vars.unset}`,
  // // 'Green' ANSI color in the terminal.
  // "terminal.ansiGreen": `${vars.unset}`,
  // // 'Magenta' ANSI color in the terminal.
  // "terminal.ansiMagenta": `${vars.unset}`,
  // // 'Red' ANSI color in the terminal.
  // "terminal.ansiRed": `${vars.unset}`,
  // // 'White' ANSI color in the terminal.
  // "terminal.ansiWhite": `${vars.unset}`,
  // // 'Yellow' ANSI color in the terminal.
  // "terminal.ansiYellow": `${vars.unset}`,
  // // The selection background color of the terminal.
  // "terminal.selectionBackground": `${vars.unset}`,
  // // The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
  // "terminalCursor.background": `${vars.unset}`,
  // // The foreground color of the terminal cursor.
  // "terminalCursor.foreground": `${vars.unset}`,

  // //
  // // Debug
  // //
  // // Debug toolbar background color.
  // "debugToolBar.background": `${vars.unset}`,

  // //
  // // Welcome Page
  // //
  // // Background color for the buttons on the Welcome page.
  // "welcomePage.buttonBackground": `${vars.unset}`,
  // // Hover background color for the buttons on the Welcome page.
  // "welcomePage.buttonHoverBackground": `${vars.unset}`,
  // // Background color for the embedded editors on the Interactive Playground.
  // "walkThrough.embeddedEditorBackground": `${vars.unset}`,

  // //
  // // Git Colors
  // //
  // // Color for modified git resources. Used file labels and the SCM viewlet.
  // "gitDecoration.modifiedResourceForeground": `${vars.unset}`,
  // // Color for deleted git resources. Used file labels and the SCM viewlet.
  // "gitDecoration.deletedResourceForeground": `${vars.unset}`,
  // // Color for untracked git resources. Used file labels and the SCM viewlet.
  // "gitDecoration.untrackedResourceForeground": `${vars.unset}`,
  // // Color for ignored git resources. Used file labels and the SCM viewlet.
  // "gitDecoration.ignoredResourceForeground": `${vars.unset}`,
  // // Color for conflicting git resources. Used file labels and the SCM viewlet.
  // "gitDecoration.conflictingResourceForeground": `${vars.unset}`,
}
