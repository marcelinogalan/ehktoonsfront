![cells-selector-list-accordion screenshot](cells-selector-list-accordion.png)

# cells-selector-list-accordion

![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)

[Demo of component in Cells Catalog](https://bbva-ether-cellscatalogs.appspot.com/?view=demo#/component/cells-selector-list-accordion)


__cells-selector-list-accordion__ displays a list where each item can contain another accordion list. The items of the second list are buttons whose action is to modify a component property and to fire an event. It uses the `iron-accordions` and `atom-icon` component.

Examples:

```html
<cells-selector-list-accordion></cells-selector-list-accordion>
```

```html
<cells-selector-list-accordion data="[[dataJSON]]" selected-data="{{selectedData}}"></cells-selector-list-accordion>
```
The __data__ property contains the data to generate the list. When an item is selected, the __selectedData__ property is modified.


```html
<cells-selector-list-accordion data="[[dataJSON]]" selected-data="{{selectedData}}" counter></cells-selector-list-accordion>
```

When the __counter__ property is used, the number of items in each list is displayed.

```html
<cells-selector-list-accordion data="[[dataJSON]]" selected-data="{{selectedData}}" counter arrow-icon="F12"></cells-selector-list-accordion>
```
The __arrowIcon__ property is used to modify the arrow icons that appear in the component.

## Data model

This component has been created to return the identifier or group of identifiers when one of the options sub-lists (using the demo) is pressed.
An example of input data (__data__ property) is the [dm-download-center-projects](https://globaldevtools.bbva.com/bitbucket/projects/BBVACELLSAPI/repos/dm-download-center-projects/browse) DataManager.

Data model example:
```
[
	{
	    "id": "parent item id",
	    "name": "parent item name",
	    "items": [
	      	{
	        	"id": "item id",
	        	"name": "item name"
	      	},
	      	...
	    ]
	},
	...
]
```
These would be the properties that the component needs to display information.

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-selector-list-accordion-scope      | scope description | default value  |
| --cells-selector-list-accordion | empty mixin | {} |
| --cells-selector-list-accordion-color | :host text color | --cells-blue-primary |
| --cells-selector-list-accordion-font-family | :host font family | --cells-fontDefaultNormal |
| --cells-selector-list-accordion-font-size | :host font size | --cells-text-size-m |
| --cells-selector-list-accordion-header-background | .header background | --cells-white |
| --cells-selector-list-accordion-header-border-color | .header border color | --cells-blue-light |
| --cells-selector-list-accordion-header-border-color-hover | .header border color hover | --cells-blue-primary |
| --cells-selector-list-accordion-header-box-shadow | .header box shadow | --cells-ellipsis-box-shadow-primary |
| --cells-selector-list-accordion-header-border-radius | .header border radius | --cells-bdrs-all |
| --cells-selector-list-accordion-header | .header empty mixin | {} |
| --cells-selector-list-accordion-img-header | .img-header empty mixin | {} |
| --cells-selector-list-accordion-title-list | .title-list empty mixin | {} |
| --cells-selector-list-accordion-counter-list-color | .counter-list text color | --cells-grey-light |
| --cells-selector-list-accordion-counter-list-border-color | .counter-list border color | --cells-blue-light |
| --cells-selector-list-accordion-counter-list-border-radius | .counter-list border radius | --cells-bdrs-all |
| --cells-selector-list-accordion-counter-list | .counter-list empty mixin | {} |
| --cells-selector-list-accordion-list-box-shadow | .list box shadow |--cells-ellipsis-box-shadow-primary |
| --cells-selector-list-accordion-list-background | .list background | --cells-white |
| --cells-selector-list-accordion-list-border-color| .list border color | --cells-blue-primary |
| --cells-selector-list-accordion-list-border-radius | .list border radius | --cells-bdrs-all |
| --cells-selector-list-accordion-list | .list empty mixin | {} |
| --cells-selector-list-accordion-item-list-first-border-radius | .item-list:first-of-type border radius | --cells-bdrs-left-top-right |
| --cells-selector-list-accordion-item-list-last-border-radius | .item-list:last-of-type border radius | --cells-bdrs-left-bottom-right |
| --cells-selector-list-accordion-item-list-background-hover | .item-list background hover | -cells-grey-transparent |
| --cells-selector-list-accordion-item-list-color-hover | .item-list text color hover | --cells-violet-primary |
| --cells-selector-list-accordion-item-list | .item-list empty mixin | {} |
| --cells-selector-list-accordion-data-item | .data-item empty mixin | {} |
| --cells-selector-list-accordion-img-item-color | .img-item text color | --cells-blue-primary |
| --cells-selector-list-accordion-img-item | .img-item empty mixin | {} |
| --cells-selector-list-accordion-border-color-opened | :host [opened] .header border color opened | --cells-blue-primary |
