(function (document) {
  'use strict';


  class HomeView extends Polymer.Element {
    static get is() {
      return 'home-view';
    }

    static get properties() {
      return {};
    }

    _goNinja() {
      this.dispatchEvent(new CustomEvent('event-staff-home',
        {
          detail:
            {
              disciplines: ''
            }
        }));
    }

    goHome(){

    }

    _goAssess() {
      this.dispatchEvent(new CustomEvent('event-assess-home',
        {
          detail:
            {
              disciplines: ''
            }
        }));
    }

    bookTeam() {
      alert('Equipo reservado');
    }

  }

  customElements.define(HomeView.is, HomeView);

}(document));

