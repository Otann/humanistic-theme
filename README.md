# README

Coming to VS Code from light-themed IntelliJ products, I am missing the
cleanness and calm serenity of the UI.

So I am taking the feel of the WebStorm and with help of BlueprintJS colors
making a pleasant experience out of the editor's workbench.

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
    "div.composite.title": "background-color: #F6F7F9; border-bottom: 1px solid rgba(17, 20, 24, 0.15);",
    "div.quick-input-widget": "border: 1px solid rgba(17, 20, 24, 0.15);",
    ".monaco-editor .margin-view-overlays > div:hover > .comment-range-glyph.comment-diff-added:before, .monaco-editor .margin-view-overlays .comment-range-glyph.comment-diff-added.line-hover:before, .monaco-editor .margin-view-overlays .comment-range-glyph.comment-diff-added.multiline-add:before, .monaco-editor .comment-range-glyph.comment-thread:before": "color: #999999"
  }
}
```

## TODO:

- [ ] Publish the theme
