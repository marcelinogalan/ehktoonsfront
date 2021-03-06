# cells-radio-button

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`cells-radio-button` generates a custom radio button, aimed to be used inside a `cells-radio-group` component.

The radio can have the checked or unchecked state, and also be disabled or enabled. You can pass icons to it for its checked and unchecked status.

Full accessibility features are provided when using it inside a `cells-radio-group`.

Examples:
```html
<cells-radio-button>Label for the radio button</cells-radio-button>
```

```html
<cells-radio-button checked>Label for the radio button</cells-radio-button>
```

```html
<cells-radio-button disabled>Label for the radio button</cells-radio-button>
```

```html
<cells-radio-button icon="coronita:creditcard" icon-check="coronita:checkmark">Example Radio button</cells-radio-button>
```


## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

| Custom property 											| Description     						| Default	|
|:----------------------------------------------------------|:--------------------------------------|:---------:|
| --cells-radio-button 										| Empty mixin 							| {} 		|
| --cells-radio-button-radio-size 							| Radio width & height 					| rem(30px) |
| --cells-radio-button-radio-background-color 				| Radio background color 				| #f2f2f2 	|
| --cells-radio-button-radio-border-radius 					| Radio border radius 					| rem(15px) |
| --cells-radio-button-radio 								| Empty mixin 							| {} 		|
| --cells-radio-button-label-text-size 						| Radio label font size 				| rem(13px) |
| --cells-radio-button-label-color 							| Radio label text color 				| #121212 	|
| --cells-radio-button-label 								| Empty mixin 							| {} 		|
| --cells-radio-button-radio-check-size 					| Radio inner check width & height 		| rem(10px) |
| --cells-radio-button-radio-check-background-color 		| Radio inner check background color 	| #2a86ca 	|
| --cells-radio-button-radio-check-border-radius 			| Radio inner check border radius 		| rem(5px) 	|
| --cells-radio-button-radio-checked 						| Empty mixin 							| {} 		|
| --cells-radio-button-checked 								| Empty mixin 							| {} 		|
| --cells-radio-button-icon-radio-size 						| Icon radio width & height 			| rem(60px) |
| --cells-radio-button-icon-radio-border-radius 			| Icon radio border radius 				| rem(30px) |
| --cells-radio-button-icon-radio-background-color 			| Icon radio background color 			| #f4f4f4 	|
| --cells-radio-button-icon-radio 							| Empty mixin 							| {} 		|
| --cells-radio-button-icon-icon-size 						| Icon radio inner icon width & height 	| rem(26px) |
| --cells-radio-button-icon-icon-color 						| Icon radio inner icon color 			| #666 		|
| --cells-radio-button-icon-icon 							| Empty mixin 							| {} 		|
| --cells-radio-button-icon-icon_checked 					| Empty mixin 							| {} 		|
| --cells-radio-button-icon-icon_unchecked 					| Empty mixin 							| {} 		|
| --cells-radio-button-icon-label-color 					| Icon radio label text color 			| #666 		|
| --cells-radio-button-icon-label 							| Empty mixin 							| {} 		|
| --cells-radio-button-icon 								| Empty mixin 							| {} 		|
| --cells-radio-button-icon-radio-check-background-color 	| Icon radio checked background color 	| #004481 	|
| --cells-radio-button-icon-radio-checked 					| Empty mixin 							| {} 		|
| --cells-radio-button-icon-check-icon-color 				| Icon radio checked inner icon color 	| #fff 		|
| --cells-radio-button-icon-icon-checked 					| Empty mixin 							| {} 		|
| --cells-radio-button-icon-icon_checked-checked 			| Empty mixin 							| {} 		|
| --cells-radio-button-icon-icon_unchecked-checked 			| Empty mixin 							| {} 		|
| --cells-radio-button-icon-check-label-color 				| Icon radio checked label text color 	| #004481 	|
| --cells-radio-button-icon-label-checked 					| Empty mixin 							| {} 		|
| --cells-radio-button-icon-checked 						| Empty mixin 							| {} 		|
| --cells-radio-button-disabled-opacity 					| Disabled radio opacity 				| 0.3 		|
| --cells-radio-button-disabled-radio-background-color 		| Disabled radio background color 		| #e9e9e9 	|
| --cells-radio-button-disabled-radio 						| Empty mixin 							| {} 		|
| --cells-radio-button-disabled 							| Empty mixin 							| {} 		|