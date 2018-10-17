(function(document) {
  'use strict';
  // Define the element's API using an ES2015 class
  class ComicDM extends Polymer.Element {
    static get is() {
      return 'comic-dm';
    }

    // Declare properties for the element's public API
    static get properties() {
      return {
        number: {
          type: Number,
          notify: true
        },
        image: {
          type: String,
          notify: true
        },
        title: {
          type: String,
          notify: true
        },
        date: {
          type: Object,
          notify: true
        },
        alt: {
          type: String,
          notify: true
        },
        transcript: {
          type: String,
          notify: true
        },
        label: {
          type: String,
          notify: true,
          computed: '_computeLabel(title, date)'
        },
        initialLoadHandled: {
          type: Boolean,
          value: false
        }
      };
    }

    ready() {
      super.ready();

      this.todayNumber = undefined;
    }

    _computeLabel(title, date) {
      if (!(title && date)) {
        return '';
      }

      return `${title}. Published in ${date.day}/${date.month}/${date.year}`;
    }

    getCurrent() {
      if (!this.initialLoadHandled) {
        this._doRequest();
      }
    }

    getDetail() {
      const path = `${this.number}`;

      this._doRequest(path);
    }

    getPrevious() {
      const path = `${this.number - 1}`;

      this._doRequest(path);
    }

    getRandom() {
      const randomNumber = Math.trunc(Math.random() * this.todayNumber);
      const path = `${randomNumber}`;

      this._doRequest(path);
    }

    getNext() {
      const path = `${this.number + 1}`;

      this._doRequest(path);
    }

    _onRequestOk(evt) {
      const data = evt.detail;
      const { num: number, img: image, alt, transcript, title, year, month, day } = data;
      const date = { year, month, day };

      this.setProperties({
        number,
        image,
        alt,
        transcript,
        title,
        date
      });

      if (!this.todayNumber) {
        this.todayNumber = data.num;
      }

      if (!this.initialLoadHandled) {
        this.initialLoadHandled = true;
      }

      if (data.num === this.todayNumber) {
        // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
        // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
        this.dispatchEvent(new Event('comic-last-reached'));
      } else if (data.num === 1) {
        // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
        // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
        this.dispatchEvent(new Event('comic-first-reached'));
      } else {
        // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
        // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
        this.dispatchEvent(new Event('comic-more-left'));
      }

      // Payload being sent. We need to use a 'CustomEvent' instead of 'Event'.
      this.dispatchEvent(new CustomEvent('comic-request-ok', {detail: data}));
    }

    _onRequestError(err) {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new Event('comic-request-error'));
    }

    _doRequest(path, type = 'comic-request-start') {
      const _path = (path ? `${path}/` : '') + 'info.0.json';
      const url = `http://xkcd.com/${_path}`;

      this.$.comicDP.path = url;
      this.$.comicDP.generateRequest();

      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new Event(type));
    }
  }

  // Register the custom element with the browser
  customElements.define(ComicDM.is, ComicDM);

}(document));
