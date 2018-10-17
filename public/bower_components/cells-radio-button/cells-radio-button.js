(function() {

  'use strict';

  Polymer({

    is: 'cells-radio-button',

    properties: {
    /**
     * tabindex property of the radio button
     */
      tabindex: {
        type: Number,
        value: 0,
        reflectToAttribute: true
      },
    /**
     * Checked status of the radio button
     */
      checked: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_checked'
      },
    /**
     * Icon for the radio button when it's unchecked
     */
      icon: {
        type: String,
        reflectToAttribute: true
      },
    /**
     * Icon for the radio button when it's checked
     */
      iconCheck: {
        type: String,
        reflectToAttribute: true
      },
    /**
     * Disabled status of the radio button
     */
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_disabled'
      },
    /**
     * Defines if the radio button can be unchecked or not
     */
      notEmpty: {
        type: Boolean,
        value: false
      }
    },
    hostAttributes: {
      'role': 'radio',
      'aria-checked': 'false'
    },
    listeners: {
      'keydown': '_handleKeyDown',
      'tap': 'toggleCheck'
    },
    /**
     * Updates aria-checked attribute and fires checked/unchecked events
     */
    _checked: function(newValue) {
      this.setAttribute('aria-checked', this.checked);
      if (newValue) {
        this.dispatchEvent(new CustomEvent('cells-radio-button-checked', {
          bubbles: true,
          composed: true
        }));
      } else {
        this.dispatchEvent(new CustomEvent('cells-radio-button-unchecked', {
          bubbles: true,
          composed: true
        }));
      }
    },
    /**
     * Updates aria-disabled attribute and fires disabled/enabled events
     */
    _disabled: function(newValue) {
      this.setAttribute('aria-disabled', this.disabled);
      if (newValue) {
        this.dispatchEvent(new CustomEvent('cells-radio-button-disabled', {
          bubbles: true,
          composed: true
        }));
      } else {
        this.dispatchEvent(new CustomEvent('cells-radio-button-enabled', {
          bubbles: true,
          composed: true
        }));
      }
    },
    /**
     * Checks the radio button
     */
    check: function(nofocus) {
      if (!this.checked) {
        this.checked = !this.checked;
      }
    },
    /**
     * Unchecks the radio button
     */
    uncheck: function() {
      if (this.checked) {
        this.checked = !this.checked;
      }
    },
    /**
     * Toggles the radio button checked state
     */
    toggleCheck: function() {
      if (!this.disabled) {
        if (!this.notEmpty || (this.notEmpty && !this.checked)) {
          this.checked = !this.checked;
          this.dispatchEvent(new CustomEvent('cells-radio-button-toggled', {
            bubbles: true,
            composed: true,
            detail: this.checked
          }));
        }
      }
    },
    /**
     * Enables the radio button
     */
    enable: function() {
      if (this.disabled) {
        this.disabled = !this.disabled;
      }
    },
    /**
     * Disables the radio button
     */
    disable: function() {
      if (!this.disabled) {
        this.disabled = !this.disabled;
      }
    },
    /**
     * Toggles the radio when spacebar is pressed
     */
    _handleKeyDown: function(e) {
      if (e.keyCode === 32) {
        e.preventDefault();
        this.toggleCheck();
      }
    }

    /**
     * Fired when radio is toggled
     * @event cells-radio-button-toggled
     */
    /**
     * Fired when radio gets checked
     * @event cells-radio-button-checked
     */
    /**
     * Fired when radio gets unchecked
     * @event cells-radio-button-unchecked
     */
    /**
     * Fired when radio gets disabled
     * @event cells-radio-button-disabled
     */
    /**
     * Fired when radio gets enabled
     * @event cells-radio-button-enabled
     */
  });
}());
