(function (document) {
  'use strict';


  class LevelsView extends Polymer.Element {
    static get is() {
      return 'levels-view';
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
        selectorData: {
          type: Array,
          value: [],
          notify: true
        },
        levelDiscipline: {
          type: Array,
          value: [],
          notify: true
        },
        disciplineKeys: {
          type: Array,
          value: [],
          notify: true
        }
      };
    }

    _selectLevel() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new CustomEvent('select-location',
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

      var levelItemList = [];
      var auxDisciplines = [];

      obj.disciplines.map(function (item, index) {
        var levelItem = {
          'id': item.id,
          'name': item.label,
          'items': [
            {
              'id': 'blanco',
              'url': 'cells/mobile_apps/cells-native/labs/',
              'name': 'Centurión Blanco'
            },
            {
              'id': 'amarillo',
              'url': 'cells/mobile_apps/cells-native/labs/',
              'name': 'Centurión Amarillo'
            },
            {
              'id': 'naranja',
              'url': 'cells/mobile_apps/cells-native/labs/',
              'name': 'Centurión Naranja'
            },
            {
              'id': 'verde',
              'url': 'cells/mobile_apps/cells-native/labs/',
              'name': 'Centurión Verde'
            },
            {
              'id': 'azul',
              'url': 'cells/mobile_apps/cells-native/labs/',
              'name': 'Centurión Azul'
            },
            {
              'id': 'marron',
              'url': 'cells/mobile_apps/cells-native/poc/',
              'name': 'Centurión Marrón'
            },
            {
              'id': 'negro',
              'url': 'cells/mobile_apps/cells-native/poc/',
              'name': 'Centurión Negro'
            }]
        };
        levelItemList.push(levelItem);
        item.disabled = false;
        auxDisciplines.push(item);
      });

      this.items = auxDisciplines;
      this.selectorData = levelItemList;
      this.disciplines = obj.disciplines;
    }


    getOnTap(levelItem) {
      console.log('onTap');
      console.log(levelItem);

      var keyExist = this.disciplineKeys.includes(levelItem.parentId);
      console.log(levelItem.parentId);
      console.log(keyExist);
      if (!keyExist) {
        this.disciplineKeys.push(levelItem.parentId);
        this.levelDiscipline.push(levelItem);
      }


      console.log(this.levelDiscipline);
      this._changeIconColor(levelItem);

    }


    _changeIconColor(levelItem) {
      //Cambiar icono de la disciplina
      var indexToModify = 0;
      this.items.map(function (item, index) {
        console.log(levelItem.parentId);
        if (levelItem.parentId === item.id) {
          console.log(item);
          console.log(index);
          indexToModify = index;
        }

      });

      var disciplinesList = this.items.slice(0);
      disciplinesList[indexToModify].icon = 'ninja:cinto-' + levelItem.selectedId;

      this.items = JSON.parse(JSON.stringify(disciplinesList));
      this.disciplines = this.items;

      //FIN CAMBIAR ICONO

    }


  }

  customElements.define(LevelsView.is, LevelsView);

}(document));

