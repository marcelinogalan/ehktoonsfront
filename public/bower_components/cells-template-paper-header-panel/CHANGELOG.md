# CHANGELOG

## v10.x
### Breaking changes
- Content hooks use `slot` attribute instead of `data-select` attribute.

**Before:**
```html
<cells-template-paper-header-panel>
  <header data-select="app__header"></header>
  <div data-select="app__main"></div> 
  <div data-select="app__footer"></div> 
  <div data-select="app__overlay"></div> 
</cells-template-paper-header-panel>
```

**After:**
```html
<cells-template-paper-header-panel>
  <header slot="app__header"></header>
  <div slot="app__main"></div> 
  <div slot="app__footer"></div> 
  <div slot="app__overlay"></div> 
</cells-template-paper-header-panel>
```

If you are using the component in hybrid mode (can be used with Polymer 1.x and 2.x), you can use the two attributes for compatibility.

Example:

```html
<cells-template-paper-header-panel>
  <header slot="app__header" data-select="app__header"></header>
  <div slot="app__main" data-select="app__main"></div> 
  <div slot="app__footer" data-select="app__footer"></div> 
  <div slot="app__overlay" data-select="app__overlay"></div> 
</cells-template-paper-header-panel>
```
