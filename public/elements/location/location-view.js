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
        levelDiscipline: {
          type: Array,
          value: [],
          notify: true
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
              id: 'ESP'
            },
            {
              title: 'Argentina',
              description: '',
              id: 'ARG'
            },
            {
              title: 'CIB',
              description: '',
              id: 'CIB'
            },
            {
              title: 'Holding',
              description: '',
              id: 'HLD'
            },
            {
              title: 'México',
              description: '',
              id: 'MEX'
            },
            {
              title: 'Perú',
              description: '',
              id: 'PER'
            },
            {
              title: 'Uruguay',
              description: '',
              id: 'URU'
            },
            {
              title: 'Estados Unidos',
              description: '',
              id: 'USA'
            },
            {
              title: 'Paraguay',
              description: '',
              id: 'PAR'
            },
            {
              title: 'Otros',
              description: '',
              id: 'URUGUAY_OTH'
            }
          ],
          notify: true
        },
        country: String
      };
    }


    _searchNinjas() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-USf/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new CustomEvent('search-ninjas',
        {
          detail:
            {
              disciplines: this.disciplines,
              levels: this.levelDiscipline,
              country: this.country
            }
        }));
    }

    getDisciplines(obj) {
      console.log('param disciplines');
      console.log(obj);
      this.items = obj.disciplines;
      this.levelDiscipline = obj.levels;

    }

    selectLocation(evt) {
      this.country = evt.id;
      console.log(this.country);
    }


  }

  customElements.define(LocationView.is, LocationView);

}(document));

