(function (document) {
  'use strict';


  class NinjasBucketView extends Polymer.Element {
    static get is() {
      return 'ninjas-bucket-view';
    }

    static get properties() {
      return {
        name: String,
        items: {
          type: Array,
          value: [],
          notify: true
        },
        disciplines: {
          type: Array,
          value: []
        },
        ninjas: {
          type: Array,
          value: [],
          notify: true
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

    _selectLevel() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events

    }

    getNinjas(obj) {
      console.log('param');
      console.log(obj);
      this.ninjas = obj.userNinjas.users;
      console.log(this.ninjas);
    }

    getSwitchChanged(evt) {
      console.log(evt);
    }

    getIronChanged(evt) {
      console.log('ironchan');
      console.log(evt);
    }

    getCheckedChanged(evt) {
      console.log('getCheckedChanged');
      console.log(evt);
    }

    _bookTeam(){
      this.dispatchEvent(new CustomEvent('booked-team',
        {
          detail:
            {
              disciplines: ''
            }
        }));
    }

  }

  customElements.define(NinjasBucketView.is, NinjasBucketView);

}(document));

