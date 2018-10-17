
<!---

This README is automatically generated from the comments in these files:
cells-app-scroll.html

Edit those files, and our readme bot will duplicate them over here!
Edit this file, and the bot will squash your changes :)

The bot does some handling of markdown. Please file a bug if it does the wrong
thing! https://github.com/PolymerLabs/tedium/issues

-->

[![Build status](https://travis-ci.org/PolymerElements/cells-app-scroll.svg?branch=master)](https://travis-ci.org/PolymerElements/cells-app-scroll)

_[Demo and API docs](https://elements.polymer-project.org/elements/cells-app-scroll)_


##&lt;cells-app-scroll&gt;

Material design: [Scrolling techniques](https://www.google.com/design/spec/patterns/scrolling-techniques.html)

`cells-app-scroll` contains a header section and a content section.  The
header is initially on the top part of the view but it scrolls away with the
rest of the scrollable content.  Upon scrolling slightly up at any point, the
header scrolls back into view.  This saves screen space and allows users to
access important controls by easily moving them back to the view.

__Important:__ The `cells-app-scroll` will not display if its parent does not have a height.

Using [layout classes](https://www.polymer-project.org/1.0/docs/migration.html#layout-attributes) or custom properties, you can easily make the `cells-app-scroll` fill the screen

```html
<body class="fullbleed layout vertical">
  <cells-app-scroll class="flex">
    <paper-toolbar>
      <div>Hello World!</div>
    </paper-toolbar>
  </cells-app-scroll>
</body>
```

or, if you would prefer to do it in CSS, just give `html`, `body`, and `cells-app-scroll` a height of 100%:

```css
html, body {
  height: 100%;
  margin: 0;
}
cells-app-scroll {
  height: 100%;
}
```

`cells-app-scroll` works well with `paper-toolbar` but can use any element
that represents a header by adding a `paper-header` class to it.

Note: If the class `paper-header` is used, the header must be positioned relative or absolute. e.g.

```css
.paper-header {
  position: relative;
}
```

```html
<cells-app-scroll>
  <div class="paper-header">Header</div>
  <div>Content goes here...</div>
</cells-app-scroll>
```

### Styling

=======

The following custom properties and mixins are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| --cells-app-scroll-full-header | To change background for toolbar when it is at its full size | {} |
| --cells-app-scroll-condensed-header | To change the background for toolbar when it is condensed | {} |
| --cells-app-scroll-container | To override or add container styles | {} |
| --cells-app-scroll-header-container | To override or add header styles | {} |


