# banking-icons

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html) ![Polymer 2.x](https://img.shields.io/badge/Polymer-2.x-green.svg)

`banking-icons` is a utility import that includes the definition for the `cells-atom-icon` element, `iron-iconset-svg` element, as well as an import for the default icon set.

The `banking-icons` directory also includes imports for additional icon sets that can be loaded into your project.

Example loading icon set:

```html
<link rel="import" href="../banking-icons/banking-icons.html">
```

To use an icon from one of these sets, first prefix your `cells-atom-icon` with the icon set name, followed by a colon, ":", and then the icon id.

Example using the A01 icon from the buzz icon set:

```html
<cells-atom-icon icon="banking:A01"></cells-atom-icon>
```

See [cells-atom-icon](#cells-atom-icon) for more information about working with banking-icons.

