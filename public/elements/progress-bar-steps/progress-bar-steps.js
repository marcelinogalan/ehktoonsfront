(function (document) {
  'use strict';

  // Define the element's API using an ES2015 class
  class ProgressBarSteps extends Polymer.Element {
    static get is() {
      return 'progress-bar-steps';
    }

    // Declare properties for the element's public API
    static get properties() {
      return {
      };
    }



  }

  // Register the custom element with the browser
  customElements.define(ProgressBarSteps.is, ProgressBarSteps);

}(document));
