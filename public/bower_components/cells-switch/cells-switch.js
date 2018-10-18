/**
 * @customElement
 * @summary An element that toggles between two states
 * @demo demo/index.html
 * @polymer
 * @extends {Polymer.Element}
 */
class cellsSwitch extends Polymer.mixinBehaviors([Polymer.IronCheckedElementBehavior, Polymer.IronA11yKeysBehavior], Polymer.Element) {
  static get is() {
    return 'cells-switch';
  }

  static get properties() {
    return {
      /**
       * ID of icon to display in the button that toggles.
       */
      iconOn: {
        type: String,
        value: ''
      },

      /**
       * ID of icon to display in the button that toggles.
       */
      iconOff: {
        type: String,
        value: ''
      },

      /**
       * Determines the size of the toggle icon.
       */
      iconSize: {
        type: Number,
        value: 16
      },

      /**
       * Set to true, when you are using icons
       */
      withIcons: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Set to true, when you are using a dark background style
       */
      darkBg: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable the switch
       */
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_disabled'
      },

      _icon: {
        type: String,
        computed: '_computeIcon(checked, withIcons)'
      },

      _target: {
        type: Object,
        value: function() {
          return this;
        }
      }
    };
  }

  get keyBindings() {
    return {
      'space': '_onSpaceKeydown'
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._ensureAttribute('tabindex', 0);
    this._ensureAttribute('role', 'switch');
    this.addEventListener('click', this.toggle);
  }

  _computeIcon(checked) {
    return (checked) ? this.iconOn : this.iconOff;
  }

  _computeClass(checked) {
    return (checked) ? 'on' : '';
  }

  _disabled(disabled) {
    this.setAttribute('aria-disabled', String(disabled));
    var tabindex = disabled ? -1 : 0;
    this.setAttribute('tabindex', tabindex);
  }

  _onSpaceKeydown(e) {
    if (e.detail.keyboardEvent.keyCode === 32) {
      e.preventDefault();
    }
    if (!this.disabled) {
      this.toggle();
    }
  }
  /**
   * Toggles button state position and `checked` property
   * true if component is checked and false if is unchecked
   */
  toggle() {
    this.checked = !this.checked;
  }
  /**
   * Overriding 'checked' observer from Polymer.IronCheckedElementBehavior;
   * on change, it toggles `.on` class of `#handler` node
   * @param {Boolean} checked value
   */
  _checkedChanged(value) {
    this.active = value;
    this.dispatchEvent(new CustomEvent('iron-change', {
      bubbles: true,
      composed: true
    }));

    this.setAttribute('aria-label', this.getEffectiveTextContent());
    this.setAttribute('aria-checked', value);
    /**
     * Fired when `checked` value is changed,
     * with current status as payload
     *
     * @event cells-switch-changed
     */
    this.dispatchEvent(new CustomEvent('cells-switch-changed', {
      bubbles: true,
      composed: true,
      detail: value
    }));
  }
}

customElements.define(cellsSwitch.is, cellsSwitch);
