(function (document) {
  'use strict';


  class LoginView extends Polymer.Element {
    static get is() {
      return 'login-view';
    }

    static get properties() {
      return {
        name: String
      };
    }

    _randomClicked() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new Event('random-clicked', {composed: true, bubbles: true}));
      //this.dispatchEvent(new CustomEvent('comic-request-ok', {detail: {kicked: true}}));
    }

    _doLogin(e) {
      var userId = e.detail.userId;
      var password = e.detail.password;
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new CustomEvent('request-login',
        {
          detail:
            {
              userId: userId,
              password: userId
            }
        }));
    }

  }

  customElements.define(LoginView.is, LoginView);

}(document));

