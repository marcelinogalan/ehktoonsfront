(function(document) {
  'use strict';


  class ButtonPlay extends Polymer.Element {
    static get is() {
      return 'button-play';
    }

    static get properties() {
      return {
        disabledPrevious: {
          type: Boolean,
          value: false,
          notify: true
        },
        disabledNext: {
          type: Boolean,
          value: false,
          notify: true
        },
        number: Number,
        title: String
      };
    }

    disableNext() {
      this.disabledNext = true;
    }

    enableNext() {
      this.disabledNext = false;
    }

    disablePrevious() {
      this.disabledPrevious = true;
    }

    enablePrevious() {
      this.disabledPrevious = false;
    }

    enableButtons() {
      this.enableNext();
      this.enablePrevious();
    }

    setNum(data) {
      const {num, title} = data;

      this.number = num;
      this.title = title;
    }

    _transcriptionClicked() {
      const detail = {number: this.number, title: this._normalizeUriString(this.title)};

      this.dispatchEvent(new CustomEvent('transcription-clicked', {composed: true, bubbles: true, detail}));
    }

    _previousClicked() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new Event('previous-clicked', {composed: true, bubbles: true}));
    }

    _randomClicked() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new Event('random-clicked', {composed: true, bubbles: true}));
    }

    _todayClicked() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new Event('today-clicked', {composed: true, bubbles: true}));
    }

    _nextClicked() {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new Event('next-clicked', {composed: true, bubbles: true}));
    }

    _normalizeUriString(string) {
      return string.replace(/\s+/g, '-').toLowerCase();
    }
  }

  customElements.define(ButtonPlay.is, ButtonPlay);

}(document));

