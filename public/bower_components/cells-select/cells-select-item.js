(function() {

  'use strict';

  Polymer({

    is: 'cells-select-item',

    extends: 'li',

    hostAttributes: {
      tabindex: -1,
      role: 'option',
      'aria-selected': false
    },

    behaviors: [
      Polymer.IronA11yKeysBehavior
    ],

    keyBindings: {
      'esc': '_closeDropdown',
      'space': '_selectItem',
      'enter': '_selectItem',
      'down': '_arrowNavigate',
      'up': '_arrowNavigate'
    },

    properties: {
      /**
       * Selected status of item
       */
      selected: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * Data of item
       */
      data: {
        type: Object,
        notify: true
      },

      _isNumber: {
        type: Boolean,
        computed: '_computedIsNumber(data)'
      },

      /**
       * Inherited property from IronA11yKeysBehavior
       */
      stopKeyboardEventPropagation: {
        type: Boolean,
        value: true
      }
    },

    listeners: {
      'click': '_selectItem'
    },

    _computedIsNumber: function(data) {
      if (data && typeof data.description === 'number') {
        if (!data.currencyCode) {
          data.currencyCode = 'EUR';
        }
        return true;
      }
      return false;
    },

    _selectItem: function() {
      this.domHost._selectHandler(this);
    },

    _arrowNavigate: function(e) {
      var ev = Polymer.dom(e.detail.keyboardEvent);
      e.preventDefault();

      /* istanbul ignore if */
      if (ev.event.keyCode === 40) {
        ev.localTarget.nextElementSibling.nextElementSibling.focus();
      } else if (ev.event.keyCode === 38) {
        /* istanbul ignore if */
        if (ev.localTarget.previousElementSibling.previousElementSibling !== null) {
          ev.localTarget.previousElementSibling.previousElementSibling.focus();
        }
      }
    },

    _closeDropdown: function() {
      this.domHost.close();
    }

  });

}());
