(function() {

  'use strict';

  Polymer({

    is: 'cells-selector-list-accordion',

    properties: {
      /**
      * It contains data that create the list
      * @type {Array}
      */
      data: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /**
      * True if we want to show the counter items
      * @type {Boolean}
      */
      counter: {
        type: Boolean,
        value: false
      },

      /**
      * Arrow icon to use into the items. By default uses an icon of cells-icons file (component atom-icon).
      * @type {String}
      */
      arrowIcon: {
        type: String,
        value: 'B39'
      },

      /**
      * It contains the id of the selected item and the id of the parent item
      * @type {Object}
      */
      selectedData: {
        type: Object,
        value: function() {
          return {};
        },
        notify: true
      }

    },


    /**
    * It modifies the selectedData property with the identifiers of the selected option and fires an 'option-selected' event.
    * @param {Event} e Data of event
    * @public
    */

    /*eslint complexity: ["error", 15]*/
    onTap: function(e) {
      var data = {};

      // data.parentId
      if (e.target && e.target.dataset && e.target.dataset.parentId) {
        data.parentId = e.target.dataset.parentId;
      } else if (e.path && e.path[2].dataset && e.path[2].dataset.parentId) {
        data.parentId = e.path[2].dataset.parentId;
      } else {
        data.parentId = '';
      }

      // data.selectedId
      if (e.target && e.target.dataset && e.target.dataset.id) {
        data.selectedId = e.target.dataset.id;
      } else if (e.path && e.path[2].dataset && e.path[2].dataset.id) {
        data.selectedId = e.path[2].dataset.id;
      } else {
        data.selectedId = '';
      }

      if (data.parentId || data.selectedId) {

        this.set('selectedData', data);
        /**
        * Fired when a valid date is selected.
        * @event list-accordion-option-selected
        * @param {{selectedData: (Object)}} Object with parentId and selectedId.
        */
        this.dispatchEvent(new CustomEvent('list-accordion-option-selected', {
          bubbles: true,
          composed: true,
          detail: this.selectedData
        }));
      }
    }
  });

}());
