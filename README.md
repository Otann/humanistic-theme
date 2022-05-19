# README

I am migrating from intellij-based products to VS Code,
so I am trying to make it much more easy on the eyes and visually organised.

## Thoughts and goals

- There is no evidence that dark theme is easier on the eyes
- Reduce UX invasiveness
  - Decrease contrast between UI elements, like toolbars, dropdowns, etc
  - Reduce hovering interactions, so UI don't blink like christmas tree

## Extra tools

Also customised some elements, that are not accessible via standard config.
Used [Customize UI](https://marketplace.visualstudio.com/items?itemName=iocave.customize-ui) extension.

Add the following to your `settings.json`

```json
{
  "customizeUI.stylesheet": {
    "div.composite.title": "background-color: #F2F2F2; border-bottom: 1px solid #D4D4D4;",
    "div.quick-input-widget": "border: 1px solid #D4D4D4;",
    ".monaco-editor .margin-view-overlays > div:hover > .comment-range-glyph.comment-diff-added:before, .monaco-editor .margin-view-overlays .comment-range-glyph.comment-diff-added.line-hover:before, .monaco-editor .margin-view-overlays .comment-range-glyph.comment-diff-added.multiline-add:before, .monaco-editor .comment-range-glyph.comment-thread:before": "color: #999999"
  }
}
```

## TODO:

- [ ] Publish the theme
