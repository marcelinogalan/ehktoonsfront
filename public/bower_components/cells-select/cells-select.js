(function() {

  'use strict';

  Polymer({

    is: 'cells-select',

    hostAttributes: {
      tabindex: 0,
      role: 'combobox',
      'aria-haspopup': 'true'
    },

    behaviors: [
      Polymer.IronA11yKeysBehavior,
      window.CellsBehaviors.i18nBehavior
    ],

    keyBindings: {
      'space': '_onSpaceSelect',
      'down': '_onSpaceSelect'
    },

    properties: {
      /**
       * Label of dropdown
       */
      label: {
        type: String,
        observer: '_labelChanged'
      },

      /**
       * Selected option's data
       */
      selectedOption: {
        type: Object,
        notify: true
      },

      /**
       * Value of placeholder of dropdown
       */
      placeholder: {
        type: String,
        value: ''
      },

      /**
       * Right icon ID
       */
      rightIcon: String,

      /**
      * Value of placeholder at DOM
      */
      _placeholder: {
        type: Boolean,
        value: false
      },

      /**
       * Options available in dropdown
       */
      options: {
        type: Array,
        notify: true
      },

      /**
       * State of dropdown (opened or closed)
       */
      opened: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false
      },

      /**
      * Disabled flag for the dropdown
      * if true the dropdown won't open
      */
      disabled: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Disable the first option to be selected by default
       * when resetSelection() is called
       */
      disabledFirstSelectedByDefault: {
        type: Boolean,
        value: false
      },
      /**
       * Set focus when it´s true
       */
      focusOnClose: {
        type: Boolean,
        value: false
      }
    },

    attached: function() {
      this._placeholder = this.placeholder ? true : false;
      this.listen(window, 'click', '_clickWindow');
    },

    /**
     * Toggle dropdown
     */
    toggle: function() {
      if (!this.disabled) {
        this.opened = !this.opened;
        this.$.select_options.setAttribute('aria-expanded', this.opened.toString());
      }
    },

    /**
     * Close dropdown
     */
    close: function() {
      this.opened = false;
      if (this.focusOnClose) {
        this.focus();
      }
    },

    /**
     * Select the option indicates by param idx.
     * @param {Number} Index of option to select.
     * @return {Object} Data of option selected.
     */
    selectOption: function(idx) {
      var option = this._getDropdownOptions()[idx];
      if (option) {
        this._selectOption(option);
        return option.data;
      }
    },

    /**
     * Reset selection by selecting the first option.
     * @return {Object} Data of first option.
     */
    resetSelection: function() {
      Polymer.dom.flush();
      var options = this._getDropdownOptions();
      for (var i = 0, ii = options.length; i < ii; i++) {
        options[i].selected = false;
      }

      if (!this.disabledFirstSelectedByDefault) {
        this._placeholder = true;
        this.selectedOption = undefined;
      } else {
        return this.selectOption(0);
      }
    },

    _clickWindow: function(e) {
      var ev = Polymer.dom(e);
      if (ev.path.indexOf(this) === -1) {
        this.close();
      }
    },

    _onSpaceSelect: function(e) {
      e.preventDefault();
      var ev = Polymer.dom(e);
      this.opened = !this.opened;
      this.$.select_options.querySelectorAll(Polymer.Element ? 'cells-select-item' : 'li')[0].focus();
    },

    _selectOption: function(option) {
      option.selected = true;
      option.setAttribute('aria-selected', 'true');
      option.setAttribute('tabindex', '0');
      this.set('selectedOption', option.data);
      this._placeholder = false;
      /**
       * Fired when user selects an option.
       *
       * @event select-item-selected
       * @param {{object}} detail Contains data of selected option.
       */
      this.dispatchEvent(new CustomEvent('select-item-selected', {
        bubbles: true,
        composed: true,
        detail: this.selectedOption
      }));
    },

    _selectHandler: function(option) {
      if (!option.getAttribute('selected') && option.id !== 'selectHeaderItem') {
        var selectedElement = this.$.select_options.querySelector(Polymer.Element ? 'cells-select-item[selected]' : 'li[selected]');
        if (selectedElement) {
          selectedElement.selected = false;
          selectedElement.setAttribute('tabindex', '-1');
          selectedElement.setAttribute('aria-selected', 'false');
        }
        this._selectOption(option);
      }
      this.close();
    },

    _getDropdownOptions: function() {
      return this.$.select_options.querySelectorAll(Polymer.Element ? 'cells-select-item' : 'li');
    },

    _labelChanged: function(newVal, oldVal) {
      this.setAttribute('aria-labelledby', newVal);
    },
    _isPolymerElement: function() {
      return Polymer.Element ? true : false;
    }
  });
}());
