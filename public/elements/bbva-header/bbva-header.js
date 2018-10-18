(function (document) {
  'use strict';

  // Define the element's API using an ES2015 class
  class BbvaHeader extends Polymer.Element {
    static get is() {
      return 'bbva-header';
    }

    // Declare properties for the element's public API
    static get properties() {
      return {
        title: String
      };
    }

    _goHome() {
      this.dispatchEvent(new CustomEvent('go-home',
        {
          detail:
            {
              disciplines: ''
            }
        }));
    }


  }

  // Register the custom element with the browser
  customElements.define(BbvaHeader.is, BbvaHeader);

}(document));
