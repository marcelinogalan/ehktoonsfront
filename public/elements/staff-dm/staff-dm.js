(function (document) {
  'use strict';

  // Define the element's API using an ES2015 class
  class StaffDM extends Polymer.Element {
    static get is() {
      return 'staff-dm';
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


    doNinjaRequest() {
      const path = '';
      this._doRequest(path);
    }


    _onRequestOk(evt) {
      const data = evt.detail;
      //console.log(evt);
      //console.log(data);

      this.dispatchEvent(new CustomEvent('ninjas-view',
        {
          detail:
            {
              userNinjas: data
            }
        }));
    }

    _doRequest(e) {

      this.AWSHost = this.getBehaviors().getHost();
      //this.$.loginDP.body = {username: userId , password: password};
      this.$.staffDP.generateRequest();
    }


  }

  // Register the custom element with the browser
  customElements.define(StaffDM.is, StaffDM);

}(document));
