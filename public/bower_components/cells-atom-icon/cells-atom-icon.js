/**
* @summary is an element that wraps iron-icon and adds sizing classes to set the icon width and height.
* @customElement
* @polymer
* @extends {Polymer.Element}
*/

class CellsAtomIcon extends Polymer.Element {
  static get is() {
    return 'cells-atom-icon';
  }
  static get properties() {
    return {
      /**
       * The name of the icon to use. The name should be of the form:
       * `iconset_name:icon_name`.
       */
      icon: {
        type: String
      },

      /**
       * If using iron-icon without an iconset, you can set the src to be
       * the URL of an individual icon image file. Note that this will take
       * precedence over a given icon attribute.
       */
      src: {
        type: String
      }
    };
  }
}
window.customElements.define(CellsAtomIcon.is, CellsAtomIcon);
