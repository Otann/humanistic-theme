import { vars } from './colors.js'
import { alpha } from '../utils.js'

/**
 * Coming from TextMate naming conventions
 * @see https://macromates.com/manual/en/language_grammars#naming-conventions
 */
const roots = {
  comment: {
    line: {},
    block: {},
  },
  constant: {
    numeric: {},
    character: {
      escape: {},
    },
    language: {},
    other: {},
  },
  entity: {
    name: {
      function: {},
      type: {},
      tag: {},
      section: {},
    },
    other: {
      'inherited-class': {},
      'attribute-name': {},
    },
  },
  invalid: {
    illegal: {},
    deprecated: {},
  },
  // keywords (when these do not fall into the other groups).
  keyword: {
    // mainly related to flow control like continue, while, return, etc.
    control: {},
    // operators can either be textual (e.g. or) or be characters.
    operator: {},
    other: {},
  },
  markup: {
    underline: {
      // this is for links, as a convenience this is derived from markup.underline so that if there is no theme rule which specifically targets markup.underline.link then it will inherit the underline style.
      link: {},
    },
    bold: {},
    heading: {},
    italic: {},
    list: {
      numbered: {},
      unnumbered: {},
    },
    quote: {},
    raw: {},
    other: {},
  },
  // the meta scope is generally used to markup larger parts of the document.
  // For example the entire line which declares a function would be meta.function and
  // the subsets would be storage.type, entity.name.function, variable.parameter etc.
  // and only the latter would be styled.
  meta: {},
  storage: {
    // the type of something, class, function, int, var, etc.
    type: {},
    // a storage modifier like static, final, abstract, etc.
    modifier: {},
  },
  string: {},
  // things provided by a framework or library should be below support.
  support: {
    // functions provided by the framework/library. For example NSLog in Objective-C is support.function.
    function: {},
    class: {},
    type: {},
    constant: {},
    variable: {},
    other: {},
  },
  // variables. Not all languages allow easy identification (and thus markup) of these.
  variable: {
    // when the variable is declared as the parameter.
    parameter: {},
    // reserved language variables like this, super, self, etc.
    language: {},
    // other variables, like $some_variables.
    other: {},
  },
}

const known_scopes = [
  'comment',
  'constant.language',
  'constant.numeric',
  'constant.other.color.rgb-value',
  'constant.other.rgb-value',
  'constant.regexp',
  'constant.sha.git-rebase',
  'emphasis',
  'entity.name.function.preprocessor',
  'entity.name.selector',
  'entity.name.tag',
  'entity.other.attribute-name',
  'entity.other.attribute-name.class.css',
  'entity.other.attribute-name.class.mixin.css',
  'entity.other.attribute-name.id.css',
  'entity.other.attribute-name.parent-selector.css',
  'entity.other.attribute-name.pseudo-class.css',
  'entity.other.attribute-name.pseudo-element.css',
  'entity.other.attribute-name.scss',
  'invalid',
  'keyword',
  'keyword.control',
  'keyword.operator',
  'keyword.operator.alignas',
  'keyword.operator.alignof',
  'keyword.operator.cast',
  'keyword.operator.expression',
  'keyword.operator.instanceof',
  'keyword.operator.logical.python',
  'keyword.operator.minus.exponent',
  'keyword.operator.new',
  'keyword.operator.noexcept',
  'keyword.operator.plus.exponent',
  'keyword.operator.sizeof',
  'keyword.operator.typeid',
  'keyword.operator.wordlike',
  'keyword.other.unit',
  'markup.bold',
  'markup.changed',
  'markup.deleted',
  'markup.heading',
  'markup.inline.raw',
  'markup.inserted',
  'markup.italic',
  'markup.strikethrough',
  'markup.underline',
  'meta.diff.header',
  'meta.embedded',
  'meta.embedded.assembly',
  'meta.preprocessor',
  'meta.preprocessor.numeric',
  'meta.preprocessor.string',
  'meta.structure.dictionary.key.python',
  'meta.template.expression',
  'punctuation.definition.list.begin.markdown',
  'punctuation.definition.quote.begin.markdown',
  'punctuation.definition.tag',
  'punctuation.definition.template-expression.begin',
  'punctuation.definition.template-expression.end',
  'punctuation.section.embedded',
  'punctuation.section.embedded.begin.php',
  'punctuation.section.embedded.end.php',
  'source.coffee.embedded',
  'source.css.less entity.other.attribute-name.id',
  'source.groovy.embedded',
  'storage',
  'storage.modifier',
  'storage.modifier.import.java',
  'storage.modifier.package.java',
  'storage.type',
  'string',
  'string.comment.buffered.block.pug',
  'string.interpolated.pug',
  'string.quoted.double.handlebars',
  'string.quoted.double.html',
  'string.quoted.double.xml',
  'string.quoted.pug',
  'string.quoted.single.handlebars',
  'string.quoted.single.html',
  'string.quoted.single.xml',
  'string.quoted.single.yaml',
  'string.regexp',
  'string.unquoted.block.yaml',
  'string.unquoted.cdata.xml',
  'string.unquoted.html',
  'string.unquoted.plain.in.yaml',
  'string.unquoted.plain.out.yaml',
  'strong',
  'support.constant.color',
  'support.constant.font-name',
  'support.constant.media',
  'support.constant.media-type',
  'support.constant.property-value',
  'support.function.git-rebase',
  'support.type.property-name',
  'support.type.property-name.json',
  'support.type.vendored.property-name',
  'variable.css',
  'variable.language',
  'variable.language.wildcard.java',
  'variable.other.enummember',
  'variable.other.less',
  'variable.scss',
]

/**
 * Describes syntax highlighting.
 * Backgrounds are not supported unfortunately.
 *
 * Works in layers. Starts at the most background and then build up
 * and highlights things that need focus and attention.
 */
export const textMateRules = [
  {
    name: 'Dim a bit known ceremonies of the code',
    scope: [
      'keyword',
      'punctuation',
      'storage.type.function',
      'meta.brace',
      'storage.type',
      'keyword.control',
      'keyword.operator',
      'keyword.control.import',
      'keyword.control.at-rule',
      'keyword.control',
      'keyword.control.conditional',
      'keyword.operator.new',
      'keyword.operator.expression',
      'keyword.begin.blade',
      'keyword.end.blade',
      'keyword.blade',
      'keyword.type-alias',
      'keyword.type',
      'keyword.operator.assignment.cs',
      'keyword.control.export',
      'keyword.other.await',
      'support.class.console',
      'support.type.object.module',
      'storage.type.class.jsdoc',
      'storage.modifier',
    ],
    settings: {
      foreground: vars.code.reserved,
    },
  },
  {
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      foreground: vars.code.comment,
    },
  },
  {
    name: 'String are special and there are many, make them important, but not intrusive',
    scope: ['string', 'meta.jsx.children'],
    settings: {
      foreground: vars.code.string,
    },
  },
  {
    name: 'Calmly highlight main entities from black',
    scope: ['variable'],
    settings: {
      foreground: vars.code.keyword,
    },
  },
  {
    name: 'Highlight more important ones than others',
    scope: ['variable.parameter'],
    settings: {
      foreground: vars.code.highlight,
    },
  },
  {
    name: 'Functions are slightly more noticeable and emphasized than main body of code',
    scope: ['entity.name.function'],
    settings: {
      foreground: vars.code.function,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Things that relate to type-system are strong, but not too different color',
    // interfaces, classes are all inside - entity.name.type
    scope: ['entity.name.type', 'support.type.primitive'],
    settings: {
      foreground: vars.code.type_system,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Generic group for constants, make them strong as classes',
    scope: ['constant', 'constant.numeric'],
    settings: {
      foreground: vars.code.constant,
      fontStyle: 'bold',
    },
  },
]

// const all_scopes = []
// rules.map((rule) => {
//   if (Array.isArray(rule.scope)) {
//     rule.scope.map((scope) => all_scopes.push(scope))
//   } else if (!!rule.scope) {
//     all_scopes.push(rule.scope)
//   }
// })
// all_scopes.sort()
// all_scopes.map((scope) => console.log(`'${scope}',`))

/**
 * Configuration for Semantic syntax highlighting
 * @see https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#standard-token-types-and-modifiers
 */
const semantic = {}
