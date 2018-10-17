(function() {

  'use strict';

  const iconLabelMap = {
    'search': 'cells-component-app-header-search-label',
    'menu': 'cells-component-app-header-menu-label',
    'help': 'cells-component-app-header-help-label',
    'back': 'cells-component-app-header-back-label',
    'close': 'cells-component-app-header-close-label'
  };

  Polymer({
    /**
     * Right button is pressed
     * @event right-button-pressed
     */

    /**
     * Right secondary button is pressed
     * @event right-secondary-button-pressed
     */

    /**
     * Left button is pressed
     * @event left-button-pressed
     */

    is: 'cells-component-app-header',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Header text.
       */
      text: {
        type: String
      },

      /**
       * Available icon names to be used for each icon.
       */
      icons: {
        type: Object,
        readOnly: true,
        value: function() {
          return {
            'menu': 'iconMenu',
            'back': 'iconBack',
            'close': 'iconClose',
            'help': 'iconHelp',
            'search': 'iconSearch'
          };
        }
      },

      /**
       * Icon to be used for the left icon.
       * Available values are menu, back, close, help, search or a custom icon ID.
       */
      iconLeft: {
        type: String
      },

      /**
       * Icon to be used for the icon of the right side.
       * Available values are menu, back, close, help, search or a custom icon ID.
       */
      iconRight: {
        type: String
      },

      /**
       * Icon to be used for the secondary icon of the right side (placed at the left of the right icon).
       * Available values are menu, back, close, help, search or a custom icon ID.
       */
      iconRightSecondary: {
        type: String
      },

      /**
       * Help icon code.
       */
      iconHelp: {
        type: String,
        value: 'coronita:help'
      },

      /**
       * Menu icon code.
       */
      iconMenu: {
        type: String,
        value: 'coronita:menu'
      },

      /**
       * Back icon code.
       */
      iconBack: {
        type: String,
        value: 'coronita:return-12'
      },

      /**
       * Search icon code.
       */
      iconSearch: {
        type: String,
        value: 'coronita:search'
      },

      /**
       * Close icon code.
       */
      iconClose: {
        type: String,
        value: 'coronita:close'
      },

      /**
       * Icon size.
       */
      iconSize: {
        type: Number,
        value: 18
      },

      /**
       * Aria level for the heading.
       */
      headingLevel: {
        type: Number,
        value: 1
      },

      _iconStyle: {
        type: String,
        computed: '_computeIconStyle(iconSize)'
      },

      /**
       * String or translation key for the left icon.
       */
      iconLeftLabel: {
        type: String,
        value: ''
      },

      /**
       * String or translation key for the right icon.
       */
      iconRightLabel: {
        type: String,
        value: ''
      },

      /**
       * String or translation key for the secondary right icon.
       */
      iconRightSecondaryLabel: {
        type: String,
        value: ''
      },

      /**
       * Computed icon IDs.
       */
      _iconLeft: {
        type: String,
        value: '',
        computed: '_computeIconID(iconLeft, icons)'
      },

      _iconRight: {
        type: String,
        value: '',
        computed: '_computeIconID(iconRight, icons)'
      },

      _iconRightSecondary: {
        type: String,
        value: '',
        computed: '_computeIconID(iconRightSecondary, icons)'
      },

      /**
       * Computed translation keys.
       */
      _iconLeftLabel: {
        type: String,
        computed: '_computeIconLabel(iconLeft, iconLeftLabel)'
      },

      _iconRightLabel: {
        type: String,
        computed: '_computeIconLabel(iconRight, iconRightLabel)'
      },

      _iconRightSecondaryLabel: {
        type: String,
        computed: '_computeIconLabel(iconRightSecondary, iconRightSecondaryLabel)'
      },

      /**
       * Bread crumbs bread
       */
      bread: {
        type: String,
        value: ''
      },

      /**
       * Bread crumbs crumb
       */
      crumb: {
        type: String,
        value: ''
      },

      /**
      *  Label for the nav right
      */
      labelRight: {
        type: String,
        value: ''
      }
    },

    _onButtonClick: function(e) {
      const evName = e.currentTarget.dataset.event;

      this.dispatchEvent(new CustomEvent(`${evName}-pressed`, {
        bubbles: true,
        composed: true
      }));
    },

    _computeIconStyle: function(iconSize) {
      return `width: ${iconSize}px; height: ${iconSize}px;`;
    },

    _computeIconID: function(iconKey, icons) {
      if (Object.keys(icons).indexOf(iconKey) > -1) {
        return this[icons[iconKey]];
      } else {
        return iconKey;
      }
    },

    _computeIconLabel: function(iconKey, iconLabel) {
      return iconLabel ? iconLabel : (iconLabelMap[iconKey] ? iconLabelMap[iconKey] : false);
    },

    _computeBtnLabel: function(btnLabel) {
      return btnLabel ? 'btn-with-label' : '';
    }

  });
}());
