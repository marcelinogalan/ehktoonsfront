(function (document) {
  'use strict';

  // Define the element's API using an ES2015 class
  class CellsFooter extends Polymer.Element {
    static get is() {
      return 'cells-footer';
    }

    // Declare properties for the element's public API
    static get properties() {
      return {
      };
    }



  }

  // Register the custom element with the browser
  customElements.define(CellsFooter.is, CellsFooter);

}(document));
