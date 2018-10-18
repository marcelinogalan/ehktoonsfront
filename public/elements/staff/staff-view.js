(function (document) {
  'use strict';


  class StaffView extends Polymer.Element {
    static get is() {
      return 'staff-view';
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
        }
      };
    }

    _selectLevel() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      //this.dispatchEvent(new Event('select-level', {composed: true, bubbles: true}));
      //this.dispatchEvent(new CustomEvent('comic-request-ok', {detail: {kicked: true}}));
      //window.top.disciplines = this.disciplines;
      this.dispatchEvent(new CustomEvent('select-level',
        {
          detail:
            {
              disciplines: this.disciplines
            }
        }));
    }

    loadPage() {

    }


    _demoEvent(e) {
      var me = this;
      console.log('demo event');
      console.log(e);
      var disciplineObj = e.detail;
      var idDiscipline = disciplineObj.id;
      console.log(idDiscipline);
      this.disciplines.push(disciplineObj);
      console.log('Añado disciplina');

      var indexToModify = 0;
      this.items.map(function (item, index) {
        if (idDiscipline === item.id) {
          console.log(item);
          console.log(index);
          indexToModify = index;
        }

      });
      //this.items[2].disabled = true;
      console.log(this.items);

      var disciplinesList = this.items.slice(0);
      disciplinesList[indexToModify].disabled = true;

      var myJsonString = JSON.stringify(disciplinesList);
      console.log(myJsonString);

      var json = myJsonString;
      var obj = JSON.parse(json);

      this.items = obj;

    }

    ready() {
      super.ready();
      var initItems = [
        {
          "label": "Agile",
          "id": "Agile",
          "icon": "coronita:return",
          "disabled": false,
          "class": "custom"
        }, {
          "label": "PaaS",
          "id": "PaaS",
          "icon": "coronita:international",
          "disabled": false
        }, {
          "label": "COMMaaS",
          "id": "COMMaaS",
          "icon": "coronita:communication",
          "disabled": false
        }, {
          "label": "SEMaaS",
          "id": "SEMaaS",
          "icon": "coronita:insurance",
          "disabled": false
        }, {
          "label": "Data",
          "id": "Data",
          "icon": "coronita:document",
          "disabled": false
        }, {
          "label": "Security",
          "id": "Security",
          "icon": "coronita:security",
          "disabled": false
        }, {
          "label": "Processes",
          "id": "Processes",
          "icon": "coronita:stairs",
          "disabled": false
        }, {
          "label": "Channes - Branches",
          "id": "Branches",
          "icon": "coronita:bank",
          "disabled": false
        }, {
          "label": "Channels - Web",
          "id": "Web",
          "icon": "coronita:desktop",
          "disabled": false
        }, {
          "label": "Channels - Mobile",
          "id": "Mobile",
          "icon": "coronita:mobile",
          "disabled": false
        }
      ];
      this.items = [].concat(initItems);
    }

  }

  customElements.define(StaffView.is, StaffView);

}(document));

