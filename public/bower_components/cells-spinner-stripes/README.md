# cells-spinner-stripes

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-spinner-stripes)

Spinner with animation stripes. If 'paused' property is set to true, component
will not be animating.

Example:
```html
<cells-spinner-stripes></cells-spinner-stripes>
<cells-spinner-stripes paused></cells-spinner-stripes>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-spinner-stripes  | Mixin applied to :host     | {}  |
| --cells-spinner-stripes-svg-height| SVG height| 3em/48px |
| --cells-spinner-stripes-svg-width| SVG height| 2.5em/40px|
| --cells-spinner-stripes-svg  | Empty mixin| {}|
| --cells-spinner-stripes-stripe-duration| .stripe animation-duration | 2.8s|
| --cells-spinner-stripes-stripe-timing-function| .stripe animation-timing-function| linear|
| --cells-spinner-stripes-stripe-animation-iteration-count| .stripe animation-iteration-count | infinite|
| --cells-spinner-stripes-stripe  | Empty mixin| {}|
| --cells-spinner-stripes-stripe-item-1-bg| .stripe--item-1 background | #2a86ca |
| --cells-spinner-stripes-stripe-item-1  | Empty mixin| {}|
| --cells-spinner-stripes-stripe-item-2  | Empty mixin| {}|
| --cells-spinner-stripes-stripe-item-3-bg| .stripe--item-3 background | #004481 |
| --cells-spinner-stripes-stripe-item-3  | Empty mixin| {}|
| --cells-spinner-stripes-stripe-item-4  | Empty mixin| {}|
| --cells-spinner-stripes-stripe-item-5-bg| .stripe--item-5 background | #2dcccd |
| --cells-spinner-stripes-stripe-item-5  | Empty mixin| {}|
