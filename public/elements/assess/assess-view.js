(function (document) {
  'use strict';


  class AssessView extends Polymer.Element {
    static get is() {
      return 'assess-view';
    }

    static get properties() {
      return {
        name: String,
        pisOptionsArray : {
          type: Object,
          value: [
                {'title':'Q32019', 'id': 'Q32019'},
                {'title':'Q22019', 'id': 'Q22019'},
                {'title':'Q12019', 'id': 'Q12019'}
          ]
        },
        ninjaOptionsArray : {
          type: Object,
          value: [
                {'title':'andrestomas.arroyo@bbva.com', 'id': 'andrestomas.arroyo@bbva.com'},
                {'title':'ruben.rot@bbva.com', 'id': 'ruben.rot@bbva.com'},
                {'title':'marcelino.galan@bbva.com', 'id': 'marcelino.galan@bbva.com'},
                {'title':'ivan.perez.lago@bbva.com', 'id': 'ivan.perez.lago@bbva.com'}
          ]
        },
        proyectoOptionsArray : {
          type: Object,
          value: [
                {'title':'SDATOOL-22095 - PoC Dunforce', 'id': '22095'},
                {'title':'SDATOOL-17588 - Ether app for Clients', 'id': '17588'},
                {'title':'SDATOOL-20534 - BBVA Agent', 'id': '20534'}
          ]
        },
        skillsOptionsArray : {
          type: Object,
          value: [
                {'title':'Agile', 'id': 'Agile'},
                {'title':'Data', 'id': 'Data'},
                {'title':'PaaS', 'id': 'PaaS'},
                {'title':'COMMaaS', 'id': 'COMMaaS'},
                {'title':'SEMaaS', 'id': 'SEMaaS'},
                {'title':'Security', 'id': 'Security'},
                {'title':'Processes', 'id': 'Processes'},
                {'title':'Branches', 'id': 'Branches'},
                {'title':'Web', 'id': 'Web'},
                {'title':'Mobile', 'id': 'Mobile'}
          ]
        },
        cinturonOptionsArray : {
          type: Object,
          value: [
                {'title':'Blanco', 'id': 1},
                {'title':'Amarillo', 'id': 2},
                {'title':'Naranja', 'id': 3},
                {'title':'Verde', 'id': 4},
                {'title':'Azul', 'id': 5},
                {'title':'Marrón', 'id': 6},
                {'title':'Negro', 'id': 7}
          ]
        },
        assessmentOptionsArray : {
          type: Array,
          value: [
          ],
          notify: true
        },
        assessmentNote: {
          type: String,
          notify: true
        }
      };
    }

    _selectLevel() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      //this.dispatchEvent(new Event('select-level', {composed: true, bubbles: true}));
      //this.dispatchEvent(new CustomEvent('comic-request-ok', {detail: {kicked: true}}));
      //window.top.disciplines = this.disciplines;
      var newItem = {
          "pi": this.$.piSelect.selectedOption.title,
          "ninja": this.$.ninjaSelect.selectedOption.title,
          "proyecto": this.$.proyectoSelect.selectedOption.title,
          "skill": this.$.skillSelect.selectedOption.title,
          "cinturon": this.$.cinturonSelect.selectedOption.title,
          "nota": this.assessmentNote
        };

        //this.assessmentOptionsArray = [];
        var lista = this.assessmentOptionsArray.slice(0);
        lista.push(newItem);

        var myJsonString = JSON.stringify(lista);
        console.log(myJsonString);

        var json = myJsonString;
        var obj = JSON.parse(json);

        this.assessmentOptionsArray = obj;

        this.$.piSelect.resetSelection();
        this.$.ninjaSelect.resetSelection();
        this.$.proyectoSelect.resetSelection();
        this.$.skillSelect.resetSelection();
        this.$.cinturonSelect.resetSelection();
        this.assessmentNote = "";
    }

    ready(){
      super.ready();

    }

  }

  customElements.define(AssessView.is, AssessView);

}(document));

