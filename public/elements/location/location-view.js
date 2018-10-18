(function (document) {
  'use strict';


  class LocationView extends Polymer.Element {
    static get is() {
      return 'location-view';
    }

    static get properties() {
      return {
        name: String,
        AWSHost: {
          type: String,
          value: ''
        },
        items: {
          type: Array,
          value: [],
          notify: true
        },
        disciplines: {
          type: Array,
          value: []
        },
        optionsCombo: {
          type: Array,
          value: [
            {
              title: 'España',
              description: '',
            },
            {
              title: 'Colombia',
              description: '',
            },
            {
              title: 'Francia',
              description: '',
            },
            {
              title: 'Portugal',
              description: '',
            },
            {
              title: 'Dinamarca',
              description: '',
            },
            {
              title: 'Suecia',
              description: '',
            },
            {
              title: 'Italia',
              description: '',
            }
          ],
          notify: true
        }
      };
    }


    _doRequest(e) {

      this.AWSHost = this.getBehaviors().getHost();
      //this.$.loginDP.body = {username: userId , password: password};
      this.$.staffDM.generateRequest();
    }

    _searchNinjas() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-USf/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new CustomEvent('search-ninjas',
        {
          detail:
            {
              disciplines: this.disciplines
            }
        }));
    }

    getDisciplines(obj) {
      console.log('param');
      console.log(obj);
      this.items = obj.disciplines;

    }


  }

  customElements.define(LocationView.is, LocationView);

}(document));

