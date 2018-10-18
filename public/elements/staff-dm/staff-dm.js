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


    doNinjaRequest(evt) {
      var levelDiscipline = evt.levels;
      var country = evt.country;
      console.log('Datos seleccionados para la consulta: ');
      console.log(levelDiscipline);
      console.log(country);
      this._doRequest(levelDiscipline, country);
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

    _doRequest(levelDiscipline, country) {

      var disciplineItem = {
        disciplinesEnum: '',
        puntuacion: ''
      };

      var paramDisciplineList = [];
      levelDiscipline.map(function (item, index) {

        disciplineItem = {
          disciplinesEnum: item.parentId,
          puntuacion: item.selectedId
        };

        paramDisciplineList.push(disciplineItem);
      });

      this.AWSHost = this.getBehaviors().getHost();

      this.$.staffDP.body = {
        disciplines: paramDisciplineList,
        countryEnum: country
      };
      this.$.staffDP.generateRequest();
    }


  }

  // Register the custom element with the browser
  customElements.define(StaffDM.is, StaffDM);

}(document));
