(function (document) {
  'use strict';

  // Define the element's API using an ES2015 class
  class LoginDM extends Polymer.Element {
    static get is() {
      return 'login-dm';
    }

    // Declare properties for the element's public API
    static get properties() {
      return {
        number: {
          type: Number,
          notify: true
        },
        AWSHost: {
          type: String,
          value: ''
        }
      };
    }

    ready() {
      super.ready();
    }

    doLogin(e) {
      var dataLogin = e;
      console.log('doLogin');
      console.log(e);
    }

    getBehaviors() {
      return CellsBehaviors.MyRoutesBehavior;
    }


    getTest() {
      const path = '';
      this._doRequest(path);
    }


    _onRequestOk(evt) {
      const data = evt.detail;
      //console.log(evt);
      //console.log(data);
    }

    _doRequest(e) {

      this.AWSHost = this.getBehaviors().getHost();
      //this.$.loginDP.body = {username: userId , password: password};
      this.$.loginDP.generateRequest();
    }


  }

  // Register the custom element with the browser
  customElements.define(LoginDM.is, LoginDM);

}(document));
