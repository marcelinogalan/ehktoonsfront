# cells-component-app-header
[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-component-app-header)

`<cells-component-app-header>` is a header with three buttons and a title, both are configurables. This component has one button in the left side, and one or two buttons in the right side.

Each of the icons can have one of the available values or types for the predefined icons or a custom icon ID if the available values don't fit your needs.
When using any of the available default values, the translation for the corresponding icon is automatically set. That translation can be overriden by setting `iconLeftLabel`, `iconRightLabel` or `iconRightSecondaryLabel`.

The available icon types are: menu, back, close, help and search.

If you don't set the value for the icons, the icon and it's button won't be shown.

### Example using available values for each icon

```html
<cells-component-app-header
  text="Hello Jhon"
  icon-left="back"
  icon-right-secondary="help"
  icon-right="menu">
</cells-component-app-header>
```

### Example with custom icons (not Coronita)

The icons and their meaning are the same but the iconset changes.
In this case, we only need to set the icon ID for each of the available icon types.
This way we don't need to set the translation for each icon.

```html
<cells-component-app-header
  text="Global Position"
  icon-back="banking:B37"
  icon-menu="banking:B34"
  icon-help="banking:D04"
  icon-left="back"
  icon-right="menu"
  icon-right-secondary="help">
</cells-component-app-header>
```

### Example with custom icons and translations

When we need to use an icon that is not available in the default values, we need to set the icon ID and the translation.

```html
<cells-component-app-header
  text="My profile"
  icon-left="coronita:settings"
  icon-left-label="Settings"
  icon-right="coronita:on"
  icon-right-label="Logout">
</cells-component-app-header>
```

### Example using a slot for the text instead of the `text` attribute

```html
<cells-component-app-header>
  <span slot="title">I'm the component header</span>
</cells-component-app-header>
```

### Example with secondary class

The component has white background and blue text color when it has the "secondary" class.
The default styles applied to the "secondary" class are customizable via mixins, CSS vars or shared styles.

```html
<cells-component-app-header class="secondary" text="title"></cells-component-app-header>
```

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                  | Description                                         | Default                        |
|:-------------------------------------------------|:----------------------------------------------------| :-----------------------------:|
| --cells-component-app-header                     | empty mixin for :host                               | {}                             |
| --cells-component-app-header-after               | empty mixin for :host:after                         | {}                             |
| --cells-component-app-header-bg-color            | background color for :host                          | var(--bbva-navy, #072146)      |
| --cells-component-app-header-height              | height for :host                                    | rem(60px)                      |
| --cells-component-app-header-color               | color for :host                                     | #fff                           |
| --cells-component-app-header-title               | empty mixin for title                               | {}                             |
| --cells-component-app-header-btn                 | Empty mixin for buttons                             | {}                             |
| --cells-component-app-header-btn-with-label      | Empty mixin for buttons with label                  | {}                             |
| --cells-component-app-header-btn-size            | Button size (same value for width and height)       | rem(50px)                      |
| --cells-component-app-header-btn-color           | text color for buttons                              | #fff                           |
| --cells-component-app-header-btn-right-secondary-width   | width for first button of the right side  (iconRightSecondary)  | rem(25px)  |
| --cells-component-app-header-secondary           | Empty mixin for secondary class                     | {}                             |
| --cells-component-app-header-secondary-after     | Empty mixin for secondary :host:after               | {}                             |
| --cells-component-app-header-secondary-bg-color  | background color for secondary class                | #fff                           |
| --cells-component-app-header-secondary-height    | height for secondary class                          | rem(60px)                      |
| --cells-component-app-header-secondary-color     | color for secondary class                           | var(--bbva-navy, #072146)      |
| --cells-component-app-header-secondary-title     | Empty mixin for title in :host(.secondary) class    | {}                             |
| --cells-component-app-header-secondary-btn       | Empty mixin for secondary :host(.secondary:after)   | {}                             |
| --cells-component-app-header-secondary-btn-color | color for for buttons in :host(.secondary)          | var(--bbva-navy, #072146)      |
| --cells-component-app-header-nav                 | Empty mixin for button wrappers                     | {}                             |
| --cells-component-app-header-navleft             | Empty mixin for left button wrapper                 | {}                             |
| --cells-component-app-header-navright            | Empty mixin for right button wrapper                | {}                             |
| --cells-component-app-header-left-icon           | Empty mixin for left icon                           | {}                             |
| --cells-component-app-header-right-secondary-icon   | Empty mixin for the first icon of the right side (iconRightSecondary)     | {}    |
| --cells-component-app-header-right-icon          | Empty mixin for right icon                          | {}                             |
| --cells-component-app-header-crumb-attribute-before | Empty mixin for crumb attribute before           | {}                             |
| --cells-component-app-header-crumb               | Empty mixin for crumb                               | {}                             |
| --cells-component-app-header-crumb-color         | Color for crumb                                     | #fff                           |
| --cells-component-app-header-bread-color         | Color for bread                                     | #fff                           |
| --cells-component-app-header-bread               | Empty mixin for bread                               | {}                             |
| --cells-component-app-header-label-right-color   | Color for label right                               | #fff                           |
| --cells-component-app-header-label-right         | Empty mixin for label right                         | {}                             |
| --cells-component-app-header-label-right-empty   | Empty mixin for label right-empty                   | {}                             |

