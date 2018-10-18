# cells-coronita-base-theme

![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)

[Demo of component in Cells Catalog](https://bbva-ether-cellscatalogs.appspot.com/?view=demo#/component/cells-coronita-base-theme)

`cells-coronita-base-theme` contains Coronita color vars and font-family (Benton Sans) definitions, and sets cells-fontDefault CSS variable to Benton Sans.

The main file (cells-coronita-base-theme.html) imports colors, font-face and font-family variable. If you don't need any of these files because you are using a different font-face or color vars, you can import only the file that you need instead of the main file.

Themes are _application level_ dependencies and __MUST NOT BE IMPORTED DIRECTLY BY COMPONENTS__.

You should only import them in the component's demo and they must be installed as a devDependency.

## Updating colors
__cells-coronita-base-theme-color.html__ is a generated file and __must not be edited__.

To change or add new colors, __edit colors.json__ instead and generate the .html file by running `npm run build` or `node tasks/generate-colors`. 

You must install npm dependencies first (`npm install`).

Keeping the colors in a json file allows to keep the component's demo in sync with the colors file without the need to update the demo whenever the colors are updated.

## FAQ

### Why all those font-face declarations have the same name?

This allows elements with a default font-weight (`<b>`, `<strong>`) or font-style (`<em>`, `<i>`) to use the proper style without the need to set a different font-family name for them.

__Antipattern example:__

`strong, b { font-family: benton-sans-bold; }`

More information: 

- [Using Webfonts - A List Apart](https://alistapart.com/article/using-webfonts#section1)
- [@font-face tip: define font-weight and font-style to keep your CSS simple - 456 Berea Street](http://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/)

### Why the font files are loaded from remote URLs?

`<style>` in an HTML Import will no longer apply to the main document in Chrome 65+ (March 2018).

Since Polymer 1.10.1 and 2.1.1 any `<style is="custom-style">` or `<custom-style></custom-style>` is moved to the main document to continue having the expected behavior in the future. 

As a consecuence, relative paths used in components are no longer working, so the fonts need to be loaded from an absolute path to prevent 404 errors.

More information:

- [Deprecation of HTML Imports styling the main document](https://github.com/TakayoshiKochi/deprecate-style-in-html-imports)
- [Related Polymer issue](https://github.com/Polymer/polymer/issues/4679)


