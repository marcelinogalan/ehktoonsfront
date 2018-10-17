(function() {

  'use strict';

  Polymer({
    is: 'cells-product-item-list',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {

      /**
       * Items to display
       */
      items: {
        type: Array,
        observer: '_itemsChanged'
      },

      /**
       * Header of the list
       */
      header: {
        type: String,
        value: 'cells-product-item-list-header'
      },

      /**
       * aria-level for the header
       */
      headingLevel: {
        type: Number,
        value: 2
      },

      _listItemHeadingLevel: {
        type: Number,
        computed: '_computeListItemHeadingLevel(headingLevel)'
      },

      /**
       * Balance displayed in the header
       */
      balance: {
        type: Object
      },

      /**
       * Chars to leave visible in product number
       */
      visibleChars: {
        type: Number,
        value: 4
      },

      /**
       * Local currency code of the amounts
       */
      localCurrency: {
        type: String,
        value: 'EUR'
      },

      /**
       * Show overlays over images in products
       */
      showImgOverlay: {
        type: Boolean,
        value: false
      },

      /**
       * Indicates if component has no data
       */
      loading: {
        type: Boolean,
        value: false,
        notify: true
      },

      /**
       * Indicates if component has error data
       */
      error: {
        type: Boolean,
        value: false,
        notify: true
      },

      /**
       * Icon to displayed for error case
       */
      errorIcon: {
        type: String
      },

      /**
       * Message to display in case of error. May be an translation string
       */
      errorMessage: {
        type: String,
        value: 'cells-product-item-list-error-message'
      },

      /**
       * ID of the tapped product in the list.
       * Changes whenever a product is tapped
       */
      productId: {
        type: String,
        notify: true
      }
    },

    /**
     * Initializes component back to default state
     */
    reset: function() {
      this.items = null;
      this.balance = null;
      this.loading = true;
      this.error = false;
    },

    /**
     * Component's data is loaded
     */
    onData: function() {
      this.loading = false;
      this.error = false;
    },

     /**
     * Component's data is not completed
     */
    onError: function(data) {
      this.loading = false;
      this.error = true;
    },

    /**
     * Fired when an item list is pressed
     * @event product-item-tap
     * @param {Object} detail { productId: event.model.item.id }
     */
    _onItemTap: function(e) {
      this.productId = e.model.item.id;
      this.dispatchEvent(new CustomEvent('product-item-tap',
        { detail: { productId: this.productId }, bubbles: true, composed: true }
      ));
    },

    _computeListItemHeadingLevel: function(headingLevel) {
      return headingLevel > 0 ? headingLevel + 1 : headingLevel;
    },

    _itemsChanged: function(items) {
      if (items && items.length) {
        this.loading = false;
      }
      /**
       * TODO: Think what to do it there are no items
       */
    }

  });

}());
