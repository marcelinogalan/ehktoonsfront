# cells-molecule-card-cover

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-molecule-card-cover)

An image with an optional overlay and icon to cover it.

Expects one mandatory attribute:
- **image-src**: Url of the cover image.

You can also use the attribute `default-image` to set a default/fallback image in case the one set with `image-src` fails to load.

Use the `alt` attribute to set the alt text of the image.

```html
<cells-molecule-card-cover image-src="path/to/image.png" alt="Image alt text"></cells-molecule-card-cover>
```

```html
<cells-molecule-card-cover image-src="path/to/image.png" alt="Image alt text" default-image="path/to/fallback-image.png"></cells-molecule-card-cover>
```

## Custom size

Use the `width` and `height` attributes to define a custom size for the image. Setting just one of them will preserve the aspect ratio of the image.

```html
<cells-molecule-card-cover 
  image-src="path/to/image.png" 
  alt="Image alt text"
  width="200">
</cells-molecule-card-cover>
```

```html
<cells-molecule-card-cover 
  image-src="path/to/image.png" 
  alt="Image alt text"
  height="120">
</cells-molecule-card-cover>
```

## Overlay and icon

Using the `show-overlay`, `icon` and `text` attributes, you can show a layer over the image with an icon and/or text centered on it. The icon size can be changed with the `icon-size` attribute.

```html
<cells-molecule-card-cover 
  image-src="path/to/image.png" 
  alt="Image alt text"
  width="200"
  height="150"
  show-overlay>
</cells-molecule-card-cover>
```

```html
<cells-molecule-card-cover 
  image-src="path/to/image.png" 
  alt="Image alt text"
  width="200"
  height="150"
  show-overlay
  icon="coronita:block"
  icon-size="36"
  text="Lorem ipsum">
</cells-molecule-card-cover>
```

## Preload, placeholder and fade

As in `iron-image`, you can use `preload` attribute to show a placeholder image or placeholder styles (using the mixin `cells-molecule-card-cover-iron-image-placeholder`) while the image is still loading. Use `placeholder` attribute to set the path to the placeholder image, and the `fade` attribute if you want a fade-in effect when the image loads.

```html
<cells-molecule-card-cover 
  image-src="path/to/image.png" 
  alt="Image alt text"
  width="200"
  height="150"
  preload
  fade
  placeholder="path/to/placeholder-image.png">
</cells-molecule-card-cover>
```

## Status

Use the `status` attribute to set one of predefined status to the card. Default available status are `locked`, `activate` and `off`. Using a status will automatically show the overlay on the card.

```html
<cells-molecule-card-cover 
  status="locked"
  icon="coronita:block"
  text="Locked"
  image-src="path/to/image.png" 
  width="200"
  height="150"
  alt="Image alt text">
</cells-molecule-card-cover>
```

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                             | Description                                         | Default     |
|:-----------------------------------------------------------:|:---------------------------------------------------:|:-----------:|
| --cells-molecule-card-cover                                 | Empty mixin for component                           | {}          |
| --cells-molecule-card-cover-img-fluid                       | Empty mixin applied to iron-image in :host([fluid]) | {}          |
| --cells-molecule-card-cover-iron-image-width                | Image width                                         | 100%        |
| --cells-molecule-card-cover-iron-image-placeholder          | Empty mixin for image style placeholder             | {}          |
| --cells-molecule-card-cover-img                             | Empty mixin for image                               | {}          |
| --cells-molecule-card-cover-icon-color                      | Color for overlay icon                              | #fff        |
| --cells-molecule-card-cover-icon-background-color           | Background color for overlay icon                   | #DA3851     |
| --cells-molecule-card-cover-icon                            | Empty mixin for overlay icon                        | {}          |
| --cells-molecule-card-cover-color                           | Color for overlay layer icon                        | #DA3851     |
| --cells-molecule-card-cover-background-color                | Background color for overlay layer                  | rgba(255,255,255,.8) |
| --cells-molecule-card-cover-text                            | Empty mixin for overlay text                        | {}          |
| --cells-molecule-card-cover-icon-text-container             | Empty mixin for overlay layer                       | {}          |
| --cells-molecule-card-cover-color-locked                    | Color for locked status overlay layer icon          | #fff        |
| --cells-molecule-card-cover-background-color-locked         | Background color for locked status overlay layer    | #f35e61     |
| --cells-molecule-card-cover-icon-background-color-locked    | Background color for locked status overlay icon     | #DA3851     |
| --cells-molecule-card-cover-icon-color-locked               | Color for locked status overlay icon                | inherit     |
| --cells-molecule-card-cover-icon-locked                     | Empty mixin for locked status overlay icon          | {}          |
| --cells-molecule-card-cover-locked                          | Empty mixin for locked status overlay layer         | {}          |
| --cells-molecule-card-cover-color-activate                  | Color for activate status overlay layer icon        | #fff        |
| --cells-molecule-card-cover-background-color-activate       | Background color for activate status overlay layer  | #1464A5     |
| --cells-molecule-card-cover-icon-background-color-activate  | Background color for activate status overlay icon   | #004481     |
| --cells-molecule-card-cover-icon-color-activate             | Color for activate status overlay icon              | inherit     |
| --cells-molecule-card-cover-icon-activate                   | Empty mixin for activate status overlay icon        | {}          |
| --cells-molecule-card-cover-activate                        | Empty mixin for activate status overlay layer       | {}          |
| --cells-molecule-card-cover-color-off                       | Color for off status overlay layer icon             | #121212     |
| --cells-molecule-card-cover-background-color-off            | Background color for off status overlay layer       | rgba(255,255,255,.8) |
| --cells-molecule-card-cover-icon-color-off                  | Color for off status overlay icon                   | #121212     |
| --cells-molecule-card-cover-icon-off                        | Empty mixin for off status overlay icon             | {}          |
| --cells-molecule-card-cover-off                             | Empty mixin for off status overlay layer            | {}          |
